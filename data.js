// ============================================================
// 英語メッセージ翻訳データ
// 追加方法: 以下の配列に同じ構造のオブジェクトを追記するだけ
// ============================================================

const messages = [
  // ---- バッチ 1: 30件 (2026-06-09 追加) ----

  {
    id: 1,
    english: "Permission denied",
    japanese: "権限がありません / アクセスが拒否されました",
    context: ["ターミナル", "Claude Code"],
    explanation: "ファイルやフォルダに対する読み書き・実行の権限がない場合に表示されます。sudo コマンドを使うか、ファイルのパーミッションを変更する必要があります。",
    vocabulary: ["permission", "denied"],
    learningTip: "「deny」は「断る・拒否する」という動詞。「be denied」で「〜を拒否される」という受動態になります。「no」より強い断り方です。"
  },
  {
    id: 2,
    english: "No such file or directory",
    japanese: "そのようなファイルまたはディレクトリは存在しません",
    context: ["ターミナル"],
    explanation: "指定したパスにファイルやフォルダが見つからない時に表示されます。スペルミスやパスの間違いが原因のことが多いです。",
    vocabulary: ["such", "directory"],
    learningTip: "「No such ~」は「そのような〜は存在しない」という定型表現。「No such luck!（そんな運はない！）」のように日常会話でも使います。"
  },
  {
    id: 3,
    english: "Command not found",
    japanese: "コマンドが見つかりません",
    context: ["ターミナル"],
    explanation: "入力したコマンドがシステムにインストールされていない、またはパスが通っていない場合に表示されます。",
    vocabulary: ["command", "found"],
    learningTip: "「not found」は「見つからない」という定型表現。Web の「404 Not Found」も同じ意味です。"
  },
  {
    id: 4,
    english: "Are you sure you want to delete this file? This action cannot be undone.",
    japanese: "このファイルを削除してよろしいですか？この操作は元に戻せません。",
    context: ["VS Code", "GitHub"],
    explanation: "ファイルや重要なデータを削除しようとした時の確認メッセージです。「Cannot be undone」は取り消し不可能であることを警告しています。",
    vocabulary: ["delete", "action", "undone"],
    learningTip: "「undo」は「元に戻す」という意味で、Ctrl+Z のことを英語で「undo」と言います。「cannot be undone」で「元に戻せない」という重要な警告表現。"
  },
  {
    id: 5,
    english: "Changes not staged for commit",
    japanese: "コミット用にステージングされていない変更があります",
    context: ["Git", "VS Code", "ターミナル"],
    explanation: "ファイルを編集したが、まだ git add していない状態です。git add でステージに乗せてから git commit する必要があります。",
    vocabulary: ["changes", "staged", "commit"],
    learningTip: "「stage」は舞台・段階という意味ですが、Git では「コミット前の準備エリアに乗せる」という技術用語として使います。"
  },
  {
    id: 6,
    english: "Nothing to commit, working tree clean",
    japanese: "コミットするものはありません。作業ツリーはきれいです。",
    context: ["Git", "ターミナル"],
    explanation: "現在の作業フォルダに変更がなく、すべてがコミット済みのきれいな状態であることを示します。問題ではなく、良い状態です。",
    vocabulary: ["working tree", "clean"],
    learningTip: "プログラミングの文脈で「clean」は「変更や問題がない整った状態」を意味します。「clean code（きれいなコード）」も同じ用法。"
  },
  {
    id: 7,
    english: "Merge conflict detected",
    japanese: "マージの競合が検出されました",
    context: ["Git", "GitHub", "VS Code"],
    explanation: "2つのブランチで同じファイルの同じ部分を編集した時に発生します。どちらの変更を残すか手動で解決する必要があります。",
    vocabulary: ["merge", "conflict", "detected"],
    learningTip: "「conflict」は「矛盾・対立・衝突」。日常英語では「スケジュールの conflict（ダブルブッキング）」のように使います。"
  },
  {
    id: 8,
    english: "Your branch is up to date with 'origin/main'",
    japanese: "あなたのブランチは 'origin/main' と最新の状態です",
    context: ["Git", "ターミナル"],
    explanation: "ローカルのブランチがリモートの main ブランチと同期していて、追加のプッシュやプルが不要な状態です。",
    vocabulary: ["branch", "up to date", "origin"],
    learningTip: "「up to date」は「最新の」という慣用表現。「keep up to date with the news（ニュースを最新の状態に保つ）」のように日常でも頻出。"
  },
  {
    id: 9,
    english: "Pull request merged successfully",
    japanese: "プルリクエストが正常にマージされました",
    context: ["GitHub"],
    explanation: "プルリクエストがレビューを通過して、ターゲットブランチに統合（マージ）が完了した時のメッセージです。",
    vocabulary: ["pull request", "merged", "successfully"],
    learningTip: "「successfully」は「successfully completed（正常に完了した）」のように使う副詞。成功を示す大事な一言。"
  },
  {
    id: 10,
    english: "Rate limit exceeded",
    japanese: "リクエスト数の上限を超えました",
    context: ["Claude Code", "ChatGPT", "GitHub"],
    explanation: "一定時間内の API 呼び出し回数や使用量が上限に達した場合に表示されます。しばらく待つか、プランのアップグレードが必要です。",
    vocabulary: ["rate limit", "exceeded"],
    learningTip: "「exceed」は「〜を超える・上回る」という動詞。「exceed expectations（期待を超える）」という表現でよく使われます。"
  },
  {
    id: 11,
    english: "Access token expired",
    japanese: "アクセストークンの有効期限が切れました",
    context: ["GitHub", "Claude Code", "ChatGPT"],
    explanation: "認証用のトークン（パスワードの代わりに使う文字列）の有効期限が切れた状態です。再ログインやトークンの再発行が必要です。",
    vocabulary: ["access token", "expired"],
    learningTip: "「expire」は「期限が切れる・失効する」という動詞。パスポートや会員証でよく使う「expiration date（有効期限）」も同じ語源。"
  },
  {
    id: 12,
    english: "Do you trust the authors of the files in this folder?",
    japanese: "このフォルダ内のファイルの作成者を信頼しますか？",
    context: ["VS Code"],
    explanation: "VS Code で新しいフォルダを開いた時に表示されます。信頼できないフォルダで拡張機能が自動実行されるのを防ぐためのセキュリティ機能です。",
    vocabulary: ["trust", "authors"],
    learningTip: "「trust」は名詞・動詞どちらにも使える便利な単語。「I trust you.（あなたを信頼します）」「trust issues（信頼の問題）」など。"
  },
  {
    id: 13,
    english: "Unsaved changes will be lost. Do you want to save before closing?",
    japanese: "保存されていない変更は失われます。閉じる前に保存しますか？",
    context: ["VS Code"],
    explanation: "ファイルを保存せずに閉じようとした時に表示されます。「Save」「Don't Save」「Cancel」の選択肢が出ることが多いです。",
    vocabulary: ["unsaved", "lost"],
    learningTip: "「lose」は「失う」という動詞で過去形が「lost」。「lost data（失われたデータ）」「lost in translation（翻訳で失われたもの）」など広く使います。"
  },
  {
    id: 14,
    english: "Syntax error: Unexpected token",
    japanese: "構文エラー：予期しないトークンがあります",
    context: ["ターミナル", "VS Code", "ブラウザ"],
    explanation: "プログラムの文法（構文）に誤りがある時に表示されます。カッコの閉じ忘れ、カンマの位置ミスなどが原因のことが多いです。",
    vocabulary: ["syntax", "unexpected", "token"],
    learningTip: "「syntax」は言語学では「文法」、プログラミングでは「コードの書き方のルール」を指します。英語の文法も「English syntax」と言います。"
  },
  {
    id: 15,
    english: "Cannot read properties of undefined (reading 'map')",
    japanese: "undefined のプロパティを読み取れません（'map' を読み取ろうとしています）",
    context: ["VS Code", "ターミナル", "ブラウザ"],
    explanation: "JavaScript で、存在しない（undefined）変数のプロパティにアクセスしようとした時のエラーです。データが取得できていない状態でアクセスしているケースが多いです。",
    vocabulary: ["properties", "undefined"],
    learningTip: "「undefined」は JavaScript の特殊な値で「何も入っていない変数」を意味します。英語の「undefined（定義されていない）」そのままの意味。"
  },
  {
    id: 16,
    english: "Extension not found or incompatible",
    japanese: "拡張機能が見つからないか、互換性がありません",
    context: ["VS Code"],
    explanation: "インストールしようとした拡張機能が存在しないか、現在の VS Code のバージョンと互換性がない場合に表示されます。",
    vocabulary: ["extension", "incompatible"],
    learningTip: "「compatible」は「互換性がある・相性が良い」という形容詞。「in-」が付いて反対の意味になります。カップルが「compatible（相性ぴったり）」という使い方も。"
  },
  {
    id: 17,
    english: "Update available: Restart to apply",
    japanese: "アップデートがあります：適用するには再起動してください",
    context: ["VS Code", "Claude Code"],
    explanation: "アプリケーションの新しいバージョンがダウンロード済みで、再起動することで適用できる状態です。",
    vocabulary: ["update", "available", "apply"],
    learningTip: "「available」は「使える状態にある」という意味。「Are you available?（都合はいいですか？）」「available options（利用可能な選択肢）」など幅広く使います。"
  },
  {
    id: 18,
    english: "Your session has expired. Please log in again.",
    japanese: "セッションの有効期限が切れました。再度ログインしてください。",
    context: ["ChatGPT", "GitHub", "Webアプリ"],
    explanation: "一定時間操作しなかったり、認証情報の有効期限が切れた時に表示されます。再ログインが必要です。",
    vocabulary: ["session", "expired"],
    learningTip: "「session」はラテン語の「座る」が語源で「一定時間のまとまり」を意味します。「recording session（レコーディングセッション）」でも同じ。"
  },
  {
    id: 19,
    english: "Invalid API key. Please check your credentials.",
    japanese: "API キーが無効です。認証情報を確認してください。",
    context: ["Claude Code", "ChatGPT", "GitHub"],
    explanation: "入力した API キーが間違っているか、無効になっている場合に表示されます。コピーミスや期限切れが原因のことが多いです。",
    vocabulary: ["invalid", "credentials"],
    learningTip: "「valid」は「有効な・正当な」で、「in-」をつけると反対の「invalid（無効な）」になります。「valid argument（正当な主張）」という使い方も。"
  },
  {
    id: 20,
    english: "Allow Claude to run this command?",
    japanese: "Claude にこのコマンドを実行させますか？",
    context: ["Claude Code"],
    explanation: "Claude Code がターミナルでコマンドを実行しようとする時に表示される確認メッセージです。内容を確認してから許可・拒否を選択します。",
    vocabulary: ["allow", "run"],
    learningTip: "「allow」と「permit」はどちらも「許可する」ですが、「allow」はよりカジュアル。「permit」はより公式・法的な文脈で使います。"
  },
  {
    id: 21,
    english: "No matching results found",
    japanese: "一致する結果が見つかりませんでした",
    context: ["VS Code", "GitHub", "ChatGPT"],
    explanation: "検索やフィルタリングで、条件に合う結果が一つも見つからなかった時に表示されます。",
    vocabulary: ["matching", "results"],
    learningTip: "「match」は「一致する・合う」という動詞で、「matching」は「一致している」という形容詞。スポーツの「マッチ」も同じ語源。"
  },
  {
    id: 22,
    english: "Connection timed out",
    japanese: "接続がタイムアウトしました",
    context: ["ターミナル", "Claude Code", "ChatGPT"],
    explanation: "サーバーへの接続が一定時間内に完了しなかった場合に表示されます。ネットワーク不具合やサーバー高負荷が原因のことが多いです。",
    vocabulary: ["connection", "timed out"],
    learningTip: "「time out」はスポーツの「タイムアウト」と同じ言葉。「timeout」と一語で書く場合は名詞です。"
  },
  {
    id: 23,
    english: "Untracked files: (use 'git add' to include in what will be committed)",
    japanese: "追跡されていないファイル：（コミットに含めるには 'git add' を使用してください）",
    context: ["Git", "ターミナル"],
    explanation: "Git がまだ管理していない新しいファイルがある状態です。git add をするまで Git はこのファイルの変更を記録しません。",
    vocabulary: ["untracked", "include"],
    learningTip: "「track」は「追跡する・記録する」という動詞。「un-」で反対の意味になります。「tracking number（追跡番号）」も同じ語源。"
  },
  {
    id: 24,
    english: "You are in 'detached HEAD' state",
    japanese: "「切り離された HEAD」状態になっています",
    context: ["Git", "ターミナル"],
    explanation: "Git でブランチの先頭ではなく、特定のコミットを直接チェックアウトしている状態。この状態でコミットしても、ブランチに反映されません。",
    vocabulary: ["detached", "HEAD", "state"],
    learningTip: "「detach」は「切り離す・分離する」という動詞。「attached file（添付ファイル）」の反対が「detached」。"
  },
  {
    id: 25,
    english: "This conversation will be permanently deleted.",
    japanese: "この会話は完全に削除されます。",
    context: ["ChatGPT", "Claude"],
    explanation: "会話履歴を削除しようとした時の警告メッセージ。「permanently」とあるので、削除後は復元できません。",
    vocabulary: ["conversation", "permanently", "deleted"],
    learningTip: "「permanent」は「永続的な・恒久的な」という形容詞。「permanent residence（永住権）」「permanent marker（消えないマーカー）」でも使います。"
  },
  {
    id: 26,
    english: "Token limit reached. Start a new conversation.",
    japanese: "トークンの上限に達しました。新しい会話を始めてください。",
    context: ["ChatGPT", "Claude Code"],
    explanation: "一回の会話で処理できる文字数の上限（コンテキストウィンドウ）に達した状態です。新しいチャットを開始する必要があります。",
    vocabulary: [
      { term: "token", meaning: "トークン（AI が処理するテキストの単位）" },
      "limit",
      "reached"
    ],
    learningTip: "「reach」は「届く・達する」という動詞。「reach your goal（目標を達成する）」「out of reach（手の届かない）」など日常でも頻出。"
  },
  {
    id: 27,
    english: "Failed to fetch. Check your internet connection.",
    japanese: "取得に失敗しました。インターネット接続を確認してください。",
    context: ["ChatGPT", "Claude Code", "Webアプリ"],
    explanation: "サーバーからデータを取得しようとしたが失敗した場合のエラーです。ネットワークの問題が原因のことが多いです。",
    vocabulary: ["fetch", "failed"],
    learningTip: "「fetch」はもともと「取ってくる」という動詞で、犬が物を取ってくる「Fetch!（取ってこい！）」と同じ言葉。Web API からデータを取得する操作にも使われます。"
  },
  {
    id: 28,
    english: "You don't have permission to push to this repository.",
    japanese: "このリポジトリにプッシュする権限がありません。",
    context: ["GitHub", "Git"],
    explanation: "リポジトリへの書き込み権限がない状態でプッシュしようとした時に表示されます。リポジトリのオーナーに権限を付与してもらう必要があります。",
    vocabulary: ["permission", "push", "repository"],
    learningTip: "「permission」は「許可」という名詞。動詞は「permit」。「without permission（無断で）」「ask for permission（許可を求める）」など日常でも使います。"
  },
  {
    id: 29,
    english: "Workspace contains uncommitted changes. Stash or commit them first.",
    japanese: "ワークスペースに未コミットの変更があります。まずスタッシュまたはコミットしてください。",
    context: ["VS Code", "Git"],
    explanation: "ブランチを切り替えようとしたが、現在の変更が保存されていない状態です。git stash（一時保存）か git commit をしてから操作する必要があります。",
    vocabulary: ["uncommitted", "stash"],
    learningTip: "「stash」は「隠す・しまう」という意味。Git の「stash」は「変更を引き出しにしまう」イメージ。日常英語では「a stash of money（隠してあるお金）」のように使います。"
  },
  {
    id: 30,
    english: "Are you sure? This will overwrite your existing file.",
    japanese: "よろしいですか？これにより既存のファイルが上書きされます。",
    context: ["ターミナル", "VS Code", "GitHub"],
    explanation: "既存のファイルを上書きしようとした時の確認メッセージ。上書きされると元のファイルは失われるので注意が必要です。",
    vocabulary: ["overwrite", "existing"],
    learningTip: "「overwrite」は「over（上に）+ write（書く）」= 「上書きする」という合成語。「overcome（克服する）」「overwork（働き過ぎる）」なども同じ「over-」の使い方。"
  }

  // ---- バッチ 2 以降はここに追記 ----
  // 例: { id: 31, english: "...", japanese: "...", context: [...], explanation: "...", vocabulary: [...], learningTip: "..." },
];
