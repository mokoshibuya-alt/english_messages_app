// =====================================================
// 音声読み上げ (Web Speech API)
// =====================================================
function speak(text, btn, rate) {
  if (!window.speechSynthesis) {
    alert("このブラウザは音声読み上げ（Web Speech API）に対応していません。\nChrome または Edge をお試しください。");
    return;
  }
  speechSynthesis.cancel();

  // 再生中インジケーターをリセット
  document.querySelectorAll(".speak-btn").forEach(b => b.classList.remove("speaking"));

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  utter.rate = rate || 0.85;

  if (btn) {
    btn.classList.add("speaking");
    utter.onend  = () => btn.classList.remove("speaking");
    utter.onerror = () => btn.classList.remove("speaking");
  }
  speechSynthesis.speak(utter);
}

function speakFull() {
  if (currentList.length === 0) return;
  speak(currentList[currentIndex].english, document.getElementById("speak-full"), 0.85);
}

function speakWord(index) {
  if (currentList.length === 0) return;
  const v = currentList[currentIndex].vocabulary[index];
  const word = typeof v === "string" ? v : v.term;
  speak(
    word,
    document.getElementById(`vocab-speak-${index}`),
    0.75
  );
}

const contextColors = {
  "ターミナル": "#e8f5e9",
  "Claude Code": "#f3e8fd",
  "VS Code": "#e8f0fe",
  "Git": "#fff3e0",
  "GitHub": "#fce4ec",
  "ChatGPT": "#e0f7fa",
  "Claude": "#f3e8fd",
  "ブラウザ": "#fafafa",
  "Webアプリ": "#e8eaf6"
};

const contextTextColors = {
  "ターミナル": "#2e7d32",
  "Claude Code": "#7b1fa2",
  "VS Code": "#1565c0",
  "Git": "#e65100",
  "GitHub": "#880e4f",
  "ChatGPT": "#00695c",
  "Claude": "#7b1fa2",
  "ブラウザ": "#424242",
  "Webアプリ": "#283593"
};

// =====================================================
// 学習状態の管理 (localStorage)
// =====================================================
const STORAGE_KEY = "english_messages_app_state_v1";
const MODES = ["study", "all", "new", "review", "ok"];
const STATUS_LABELS = { new: "新規", review: "復習", ok: "OK" };

function defaultState() {
  const statuses = {};
  messages.forEach(m => { statuses[m.id] = "new"; });
  return {
    statuses,
    mode: "study",
    lastIds: { study: null, all: null, new: null, review: null, ok: null },
    updatedAt: 0
  };
}

function loadState() {
  const def = defaultState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return def;
    const loaded = JSON.parse(raw);

    // 例文が増えても対応できるよう、未登録の id は「新規」として補完
    const statuses = loaded.statuses || {};
    messages.forEach(m => {
      if (!(m.id in statuses)) statuses[m.id] = "new";
    });

    return {
      statuses,
      mode: MODES.includes(loaded.mode) ? loaded.mode : def.mode,
      lastIds: Object.assign({}, def.lastIds, loaded.lastIds || {}),
      updatedAt: typeof loaded.updatedAt === "number" ? loaded.updatedAt : 0
    };
  } catch (e) {
    return def;
  }
}

function saveState() {
  state.updatedAt = Date.now();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  scheduleCloudSync();
}

function getStatus(id) {
  return state.statuses[id] || "new";
}

// =====================================================
// クラウド同期（Firebase Realtime Database）
// 端末をまたいで学習状態を自動的に同期する
// =====================================================
const firebaseConfig = {
  apiKey: "AIzaSyCxD61OVY8hL2cyQG9B5inBpzQlZkpQ4k",
  authDomain: "english-messages-app.firebaseapp.com",
  databaseURL: "https://english-messages-app-default-rtdb.firebaseio.com",
  projectId: "english-messages-app",
  storageBucket: "english-messages-app.firebasestorage.app",
  messagingSenderId: "659606921791",
  appId: "1:659606921791:web:e35aa616eeb1084b8c4e8a"
};

firebase.initializeApp(firebaseConfig);
const syncRef = firebase.database().ref("syncState");

let cloudSyncTimer = null;

// 短時間に連続して呼ばれてもまとめて1回だけ送信する
function scheduleCloudSync() {
  if (cloudSyncTimer) clearTimeout(cloudSyncTimer);
  cloudSyncTimer = setTimeout(() => {
    syncRef.set(state).catch(err => {
      console.warn("クラウドへの保存に失敗しました（オフラインの可能性があります）:", err);
    });
  }, 1000);
}

// 起動時にクラウド側の状態を確認し、より新しければ反映する
function syncFromCloud() {
  syncRef.once("value")
    .then(snapshot => {
      const cloud = snapshot.val();

      // クラウドにまだ何もない場合は、この端末の状態を初期データとして送る
      if (!cloud || typeof cloud.statuses !== "object") {
        syncRef.set(state).catch(err => {
          console.warn("クラウドへの初期保存に失敗しました（オフラインの可能性があります）:", err);
        });
        return;
      }

      if ((cloud.updatedAt || 0) <= (state.updatedAt || 0)) return;

      const mergedStatuses = {};
      messages.forEach(m => {
        const s = cloud.statuses[m.id];
        mergedStatuses[m.id] = (s === "new" || s === "review" || s === "ok") ? s : "new";
      });

      state.statuses = mergedStatuses;
      state.mode = MODES.includes(cloud.mode) ? cloud.mode : state.mode;
      state.lastIds = Object.assign(
        { study: null, all: null, new: null, review: null, ok: null },
        cloud.lastIds || {}
      );
      state.updatedAt = cloud.updatedAt;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

      rebuildList(state.lastIds[state.mode]);
      document.getElementById("mode-select").value = state.mode;
      updateStats();
      render();
    })
    .catch(err => {
      console.warn("クラウドからの読み込みに失敗しました（オフラインの可能性があります）:", err);
    });
}

// =====================================================
// 表示モードごとのリスト構築
// =====================================================

// 通常学習: 新規を優先しつつ、復習を10件に1件程度混ぜる。OKは表示しない。
function buildStudyQueue() {
  const newCards = messages.filter(m => getStatus(m.id) === "new");
  const reviewCards = messages.filter(m => getStatus(m.id) === "review");

  if (newCards.length === 0 && reviewCards.length === 0) {
    return []; // 学習対象なし（すべてOK）
  }
  if (newCards.length === 0) {
    return reviewCards.slice();
  }

  const queue = [];
  let reviewPtr = 0;
  newCards.forEach((card, i) => {
    queue.push(card);
    if ((i + 1) % 10 === 0 && reviewCards.length > 0) {
      queue.push(reviewCards[reviewPtr % reviewCards.length]);
      reviewPtr++;
    }
  });

  // 新規が10件未満で復習がまだ挿入されていない場合は末尾に追加
  if (reviewCards.length > 0 && reviewPtr === 0) {
    queue.push(...reviewCards);
  }

  return queue;
}

function buildList(mode) {
  switch (mode) {
    case "all":
      return messages.slice();
    case "new":
      return messages.filter(m => getStatus(m.id) === "new");
    case "review":
      return messages.filter(m => getStatus(m.id) === "review");
    case "ok":
      return messages.filter(m => getStatus(m.id) === "ok");
    case "study":
    default:
      return buildStudyQueue();
  }
}

// currentList を再構築し、可能なら preserveId のカードへ位置を合わせる
function rebuildList(preserveId) {
  currentList = buildList(state.mode);
  if (currentList.length === 0) {
    currentIndex = 0;
    return;
  }
  let idx = 0;
  if (preserveId != null) {
    const found = currentList.findIndex(m => m.id === preserveId);
    if (found >= 0) idx = found;
  }
  currentIndex = Math.min(idx, currentList.length - 1);
}

function persistPosition() {
  state.lastIds[state.mode] = currentList.length > 0 ? currentList[currentIndex].id : null;
  saveState();
}

// =====================================================
// モード切り替え・状態変更
// =====================================================
function onModeChange(newMode) {
  // 切り替え前の位置を保存（「通常学習」に戻った時に復元するため）
  persistPosition();

  state.mode = newMode;
  rebuildList(state.lastIds[newMode]);
  saveState();
  updateStats();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setCardStatus(newStatus) {
  if (currentList.length === 0) return;
  const card = currentList[currentIndex];
  state.statuses[card.id] = newStatus;

  // リストを再構築（OKになったカードが学習対象から外れる等に対応）
  // currentIndex はそのままにすることで、自動的に「次のカード」が表示される
  currentList = buildList(state.mode);
  if (currentList.length === 0) {
    currentIndex = 0;
  } else {
    currentIndex = Math.min(currentIndex, currentList.length - 1);
  }

  persistPosition();
  updateStats();
  render();
}

// =====================================================
// 学習データのエクスポート / インポート（端末間の引き継ぎ）
// =====================================================
function exportState() {
  const data = {
    exportedAt: new Date().toISOString(),
    statuses: state.statuses,
    mode: state.mode,
    lastIds: state.lastIds
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "learning-state.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function triggerImport() {
  document.getElementById("import-file-input").click();
}

function handleImportFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = e => {
    let data;
    try {
      data = JSON.parse(e.target.result);
    } catch (err) {
      alert("⚠️ ファイルの形式が正しくありません（JSONとして読み込めませんでした）。\nエクスポートした learning-state.json を選択してください。");
      event.target.value = "";
      return;
    }

    if (!data || typeof data !== "object" || typeof data.statuses !== "object" || data.statuses === null) {
      alert("⚠️ 学習データの内容が正しくありません。\nこのアプリからエクスポートした learning-state.json を選択してください。");
      event.target.value = "";
      return;
    }

    const ok = confirm(
      "現在この端末に保存されている学習状態（新規/復習/OKの記録、最後に見ていた位置）を、\n" +
      "読み込んだファイルの内容で上書きします。\n\n" +
      "この操作は取り消せません。よろしいですか？"
    );
    if (!ok) {
      event.target.value = "";
      return;
    }

    // 未登録/不正な値が含まれていても安全な状態に補正
    const newStatuses = {};
    messages.forEach(m => {
      const s = data.statuses[m.id];
      newStatuses[m.id] = (s === "new" || s === "review" || s === "ok") ? s : "new";
    });

    state.statuses = newStatuses;
    state.mode = MODES.includes(data.mode) ? data.mode : state.mode;
    state.lastIds = Object.assign(
      { study: null, all: null, new: null, review: null, ok: null },
      data.lastIds || {}
    );

    saveState();
    rebuildList(state.lastIds[state.mode]);
    document.getElementById("mode-select").value = state.mode;
    updateStats();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });

    alert("✅ 学習データを読み込みました。");
    event.target.value = "";
  };

  reader.onerror = () => {
    alert("⚠️ ファイルの読み込みに失敗しました。もう一度お試しください。");
    event.target.value = "";
  };

  reader.readAsText(file);
}

// =====================================================
// セクションの折りたたみ（重要単語・場面説明・英語学習メモ）
// =====================================================
const COLLAPSIBLE_SECTIONS = ["explanation", "vocab", "tip"];

function toggleSection(name) {
  const section = document.getElementById(`section-${name}`);
  const expanded = section.classList.toggle("expanded");
  section.querySelector(".collapsible-header").setAttribute("aria-expanded", expanded ? "true" : "false");
}

// カード切り替え時は折りたたみ状態に戻す
// PC・タブレット（769px以上）では「重要単語」のみ初期表示で展開しておく
function collapseAllSections() {
  const expandVocabByDefault = window.innerWidth > 768;

  COLLAPSIBLE_SECTIONS.forEach(name => {
    const section = document.getElementById(`section-${name}`);
    const expanded = expandVocabByDefault && name === "vocab";
    section.classList.toggle("expanded", expanded);
    section.querySelector(".collapsible-header").setAttribute("aria-expanded", expanded ? "true" : "false");
  });
}

// =====================================================
// 学習状況の表示
// =====================================================
function updateStats() {
  let newCount = 0, reviewCount = 0, okCount = 0;
  messages.forEach(m => {
    const s = getStatus(m.id);
    if (s === "new") newCount++;
    else if (s === "review") reviewCount++;
    else if (s === "ok") okCount++;
  });
  document.getElementById("stat-all").textContent = messages.length;
  document.getElementById("stat-new").textContent = newCount;
  document.getElementById("stat-review").textContent = reviewCount;
  document.getElementById("stat-ok").textContent = okCount;
}

// =====================================================
// レンダリング
// =====================================================
function render() {
  // ページ移動時に音声を止める
  if (window.speechSynthesis) {
    speechSynthesis.cancel();
    document.querySelectorAll(".speak-btn").forEach(b => b.classList.remove("speaking"));
  }

  const card = document.getElementById("card");
  const statusBar = document.getElementById("status-bar");
  const navWrap = document.getElementById("nav-wrap");
  const emptyState = document.getElementById("empty-state");

  // カードが0件の場合
  if (currentList.length === 0) {
    card.style.display = "none";
    statusBar.style.display = "none";
    navWrap.style.display = "none";
    emptyState.style.display = "block";
    emptyState.textContent = state.mode === "study"
      ? "🎉 学習対象のカードがありません（すべて「OK」になっています）"
      : "このモードに該当するカードがありません";
    document.getElementById("counter").textContent = "0 / 0";
    document.getElementById("progress-bar").style.width = "0%";
    return;
  }

  card.style.display = "";
  statusBar.style.display = "";
  navWrap.style.display = "";
  emptyState.style.display = "none";

  // 折りたたみセクションを初期状態（閉じた状態）に戻す
  collapseAllSections();

  const msg = currentList[currentIndex];

  document.getElementById("counter").textContent = `${currentIndex + 1} / ${currentList.length}`;
  document.getElementById("progress-bar").style.width = `${((currentIndex + 1) / currentList.length) * 100}%`;

  document.getElementById("english-text").textContent = msg.english;
  document.getElementById("japanese-text").textContent = msg.japanese;
  document.getElementById("explanation-text").textContent = msg.explanation;
  document.getElementById("learning-tip-text").textContent = msg.learningTip;

  // コンテキストバッジ
  const contextEl = document.getElementById("context-badges");
  contextEl.innerHTML = msg.context.map(c => {
    const bg = contextColors[c] || "#f5f5f5";
    const color = contextTextColors[c] || "#333";
    return `<span class="badge" style="background:${bg};color:${color}">${c}</span>`;
  }).join("");

  // 語彙（カタカナ + 読み上げボタン付き）
  const vocabEl = document.getElementById("vocab-list");
  vocabEl.innerHTML = msg.vocabulary.map((v, i) => {
    const word = typeof v === "string" ? v : v.term;
    const term = getTerm(word) || {};
    const meaning = (typeof v === "object" && v.meaning) ? v.meaning : (term.meaning || "");
    const kana = term.katakana || "";
    return `<div class="vocab-item">
      <button class="speak-btn speak-btn-sm" id="vocab-speak-${i}"
              onclick="speakWord(${i})" title="${word} を読み上げる">🔊</button>
      <div class="vocab-word-wrap">
        <span class="vocab-word">${word}</span>
        ${kana ? `<span class="vocab-katakana">${kana}</span>` : ""}
      </div>
      <span class="vocab-meaning">${meaning}</span>
    </div>`;
  }).join("");

  // 学習状態バッジ・ボタン
  const status = getStatus(msg.id);
  const badge = document.getElementById("current-status-badge");
  badge.textContent = STATUS_LABELS[status];
  badge.className = `status-badge status-${status}`;

  document.getElementById("btn-mark-review").classList.toggle("active", status === "review");
  document.getElementById("btn-mark-ok").classList.toggle("active", status === "ok");

  // ナビゲーションボタン
  document.getElementById("btn-prev").disabled = currentIndex === 0;
  document.getElementById("btn-next").disabled = currentIndex === currentList.length - 1;

  // カードアニメーション
  card.classList.remove("fade-in");
  void card.offsetWidth;
  card.classList.add("fade-in");
}

// =====================================================
// ナビゲーション
// =====================================================
function goNext() {
  if (currentIndex < currentList.length - 1) {
    currentIndex++;
    persistPosition();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function goPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    persistPosition();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function goRandom() {
  if (currentList.length <= 1) return;
  let next;
  do {
    next = Math.floor(Math.random() * currentList.length);
  } while (next === currentIndex);
  currentIndex = next;
  persistPosition();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goToCardInput() {
  const input = document.getElementById("card-jump-input");
  const n = parseInt(input.value, 10);

  if (currentList.length === 0) return;

  if (!Number.isInteger(n) || n < 1 || n > currentList.length) {
    alert(`カード番号は 1〜${currentList.length} の範囲で入力してください。`);
    return;
  }

  currentIndex = n - 1;
  persistPosition();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
  input.value = "";
}

// キーボード操作
document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
  if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
});

// =====================================================
// 初期化
// =====================================================
let state = loadState();
let currentList = [];
let currentIndex = 0;

rebuildList(state.lastIds[state.mode]);

document.getElementById("mode-select").value = state.mode;
updateStats();
render();

syncFromCloud();
