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
  },

  // ---- バッチ 2: エラーメッセージ編 18件 (2026-06-12 追加) ----

  {
    id: 31,
    english: "Module not found: Can't resolve './App'",
    japanese: "モジュールが見つかりません：'./App' を解決できません",
    context: ["VS Code", "ターミナル", "エラーメッセージ"],
    explanation: "importやrequireで指定したファイルのパスが間違っている、またはファイルが存在しない場合に表示されます。React や webpack を使ったプロジェクトでよく見るエラーです。",
    vocabulary: ["module", "resolve"],
    learningTip: "「module」はプログラムの「部品」を指す言葉。「resolve」は「解決する」ですが、ここでは「指定されたパスから実際のファイルを特定する」という意味で使われています。"
  },
  {
    id: 32,
    english: "ReferenceError: x is not defined",
    japanese: "参照エラー：x は定義されていません",
    context: ["VS Code", "ブラウザ", "エラーメッセージ"],
    explanation: "定義されていない変数を使おうとした時に発生する JavaScript のエラーです。変数名のタイプミスや、定義する前に使ってしまっていることが原因のことが多いです。",
    vocabulary: ["reference", "defined"],
    learningTip: "「refer to」は「〜を参照する」という動詞。「reference」はその名詞形で「参照」を意味します。「defined」は「定義された」で、否定形「not defined」がエラーの核心部分です。"
  },
  {
    id: 33,
    english: "fatal: not a git repository (or any of the parent directories): .git",
    japanese: "致命的エラー：Git リポジトリではありません（親ディレクトリにも見つかりません）：.git",
    context: ["Git", "ターミナル", "エラーメッセージ"],
    explanation: "git コマンドを、Git で管理されていないフォルダで実行した時に表示されます。git init でリポジトリを初期化するか、正しいフォルダに移動する必要があります。",
    vocabulary: ["fatal", "parent"],
    learningTip: "「fatal」は「致命的な」という意味で、Git のエラーでよく先頭に付きます。「parent directory」は「親フォルダ（一つ上の階層のフォルダ）」を指します。"
  },
  {
    id: 34,
    english: "error: failed to push some refs to 'origin'",
    japanese: "エラー：'origin' へのプッシュに失敗しました",
    context: ["Git", "GitHub", "ターミナル", "エラーメッセージ"],
    explanation: "リモートリポジトリに、ローカルにはない変更が含まれている時など、プッシュが拒否された場合に表示されます。先に git pull で最新の変更を取り込む必要があります。",
    vocabulary: ["failed", "push", "refs"],
    learningTip: "「refs」は「references（参照）」の略で、Git ではブランチやタグなどの参照先を指します。略語のまま使われることが多いです。"
  },
  {
    id: 35,
    english: "404 Page Not Found",
    japanese: "404 ページが見つかりません",
    context: ["ブラウザ", "Webアプリ", "エラーメッセージ"],
    explanation: "アクセスしようとしたURLに対応するページがサーバーに存在しない場合に表示される、最も有名なHTTPエラーです。リンク先のURLが変更・削除された場合に発生します。",
    vocabulary: ["found", "page"],
    learningTip: "「404」はHTTPステータスコードの番号です。「Page Not Found」は「ページが見つからない」という意味で、専用のデザインを用意した「404 page」もよく話題になります。"
  },
  {
    id: 36,
    english: "500 Internal Server Error",
    japanese: "500 内部サーバーエラー",
    context: ["ブラウザ", "Webアプリ", "エラーメッセージ"],
    explanation: "サーバー側のプログラムで予期しない問題が発生した時に表示されます。利用者側の操作には問題がなく、サーバー側の修正が必要なケースが多いです。",
    vocabulary: ["internal", "server"],
    learningTip: "「internal」は「内部の」という意味。「internal error」は「（こちら側ではなく）システム内部で起きたエラー」というニュアンスを持ちます。"
  },
  {
    id: 37,
    english: "403 Forbidden",
    japanese: "403 アクセスが禁止されています",
    context: ["ブラウザ", "Webアプリ", "エラーメッセージ"],
    explanation: "サーバーがリクエストの内容は理解したものの、アクセス権限がないために拒否した場合に表示されます。ログインしても解決しない点が「401 Unauthorized」との違いです。",
    vocabulary: ["forbidden"],
    learningTip: "「forbid」は「禁止する」という動詞で、「forbidden」はその過去分詞形「禁止された」。「Forbidden City（紫禁城）」のように、固有名詞にも使われる単語です。"
  },
  {
    id: 38,
    english: "Access is denied.",
    japanese: "アクセスが拒否されました。",
    context: ["Windows", "エラーメッセージ"],
    explanation: "Windows で、管理者権限が必要な操作を権限なしで実行しようとした時に表示されます。「管理者として実行」でアプリを起動し直す必要があることが多いです。",
    vocabulary: ["access", "denied"],
    learningTip: "「access」は名詞・動詞どちらでも使われ、「立ち入り・接続（する）」を意味します。「denied」は #1 の「Permission denied」と同じ単語で、Windows でも頻出します。"
  },
  {
    id: 39,
    english: "'npm' is not recognized as an internal or external command",
    japanese: "'npm' は内部コマンドまたは外部コマンドとして認識されていません",
    context: ["Windows", "PowerShell", "ターミナル", "エラーメッセージ"],
    explanation: "Windows で、コマンドへのパスが環境変数 PATH に正しく設定されていない時に表示されます。Node.js の再インストールや PATH の設定を確認する必要があります。",
    vocabulary: ["recognized", "external"],
    learningTip: "「recognize」は「認識する・見分ける」という動詞。「external」は「外部の」で、「internal」(#36)の反対語です。"
  },
  {
    id: 40,
    english: "The system cannot find the path specified.",
    japanese: "指定されたパスが見つかりません。",
    context: ["Windows", "ターミナル", "エラーメッセージ"],
    explanation: "存在しないファイルパスを指定した時に Windows が表示するエラーです。Mac/Linux の「No such file or directory」(#2) に相当します。",
    vocabulary: ["path", "specified"],
    learningTip: "「path」は「道」という意味から、コンピューターでは「ファイルやフォルダの場所を示す文字列」を指します。「specify」は「指定する」という動詞。"
  },
  {
    id: 41,
    english: "Error: listen EADDRINUSE: address already in use :::3000",
    japanese: "エラー：listen EADDRINUSE：アドレスは既に使用されています :::3000",
    context: ["ターミナル", "エラーメッセージ"],
    explanation: "サーバーを起動する際、指定したポート番号（この例では3000）が既に別のプロセスで使われている時に表示されます。別のポートを使うか、既存のプロセスを終了する必要があります。",
    vocabulary: ["address", "in use"],
    learningTip: "「address」はメールアドレスや住所だけでなく、コンピューター上の「場所を示す番号」全般に使われます。「in use」は「使用中」という定型表現。「EADDRINUSE」は「Error: Address In Use（アドレスは使用中というエラー）」の略です。"
  },
  {
    id: 42,
    english: "Cannot find module 'express'. Did you forget to install dependencies?",
    japanese: "モジュール 'express' が見つかりません。依存パッケージのインストールを忘れていませんか？",
    context: ["ターミナル", "エラーメッセージ"],
    explanation: "Node.js で require や import したパッケージがインストールされていない時に表示されます。npm install を実行してパッケージをインストールする必要があります。",
    vocabulary: ["module", "dependencies"],
    learningTip: "「depend on」は「〜に依存する」という動詞。「dependencies」はその名詞の複数形で、プログラムが動作するために必要な外部パッケージ群を指します。"
  },
  {
    id: 43,
    english: "SyntaxError: Unexpected end of input",
    japanese: "構文エラー：入力が予期せず終了しました",
    context: ["VS Code", "ターミナル", "ブラウザ", "エラーメッセージ"],
    explanation: "括弧やクオート、波カッコなどの閉じ忘れによって、コードが途中で終わってしまっている時に表示されます。対応する閉じ記号を確認する必要があります。",
    vocabulary: ["syntax", "input"],
    learningTip: "「input」は「入力」、その対になる言葉は「output（出力）」。「end of input」は「入力の終わり」、つまり「想定より早くコードが終わってしまった」ことを表します。"
  },
  {
    id: 44,
    english: "Maximum call stack size exceeded",
    japanese: "最大コールスタックサイズを超えました",
    context: ["VS Code", "ブラウザ", "エラーメッセージ"],
    explanation: "関数が自分自身を無限に呼び出すなど、関数呼び出しの深さが上限を超えた時に表示されます。再帰関数の終了条件を見直す必要があります。",
    vocabulary: ["maximum", "stack"],
    learningTip: "「stack」は「積み重ね」を意味し、関数の呼び出し履歴を積み重ねて管理する仕組みを「コールスタック」と呼びます。「maximum」は「最大」、反対語は「minimum」。"
  },
  {
    id: 45,
    english: "This site can't be reached",
    japanese: "このサイトにアクセスできません",
    context: ["ブラウザ", "エラーメッセージ"],
    explanation: "ブラウザが指定したサーバーに接続できない時に表示されます。URLのスペルミス、サーバーのダウン、インターネット接続の問題などが原因です。",
    vocabulary: ["site", "reached"],
    learningTip: "「site」は「場所」が原義で、「website」を短く「site」と呼ぶことが多いです。「reach」は #26 と同じ「届く・到達する」で、「be reached」は「到達される＝アクセスできる」という受動態。"
  },
  {
    id: 46,
    english: "Your connection is not private",
    japanese: "この接続は保護されていません",
    context: ["ブラウザ", "エラーメッセージ"],
    explanation: "SSL証明書が無効・期限切れ・自己署名などの場合に、ブラウザが安全でない可能性があると警告するメッセージです。",
    vocabulary: ["connection", "private"],
    learningTip: "「private」は「個人的な・非公開の」という意味で、「public（公開の）」の反対語。SNSの「鍵アカウント」も英語では「private account」と言います。"
  },
  {
    id: 47,
    english: "Out of memory",
    japanese: "メモリ不足です",
    context: ["ターミナル", "エラーメッセージ"],
    explanation: "プログラムが利用可能なメモリの上限を超えてリソースを要求した時に表示されます。大量データの処理や無限ループが原因になることが多いです。",
    vocabulary: ["memory", "out of"],
    learningTip: "「out of ~」は「〜が尽きた・〜が足りない」という定型表現。「out of stock（在庫切れ）」「out of time（時間切れ）」など日常英語でも頻出です。"
  },
  {
    id: 48,
    english: "Process finished with exit code 1",
    japanese: "プロセスは終了コード 1 で終了しました",
    context: ["ターミナル", "VS Code", "エラーメッセージ"],
    explanation: "プログラムが正常終了（コード0）ではなく、何らかのエラー（コード1以上）で終了したことを示します。エラーの詳細は、その上に表示されたログで確認します。",
    vocabulary: ["process", "exit code"],
    learningTip: "「process」は「実行中のプログラム」を指す技術用語。「exit code」は「終了コード」で、0が「正常」、それ以外は「何らかの問題があった」ことを示す慣習があります。"
  },

  // ---- バッチ 3: ファイル操作編 18件 (2026-06-12 追加) ----

  {
    id: 49,
    english: "File already exists. Do you want to replace it?",
    japanese: "ファイルは既に存在します。置き換えますか？",
    context: ["ファイル操作", "Windows", "VS Code"],
    explanation: "コピーや保存の際、同じ名前のファイルが既に存在する場合に表示される確認メッセージです。「置き換える」を選ぶと元のファイルは上書きされます。",
    vocabulary: ["already", "replace"],
    learningTip: "「already」は「既に・もう」という意味で、完了したことを強調する副詞。「replace A with B（AをBに置き換える）」という形でもよく使われます。"
  },
  {
    id: 50,
    english: "Copy to clipboard",
    japanese: "クリップボードにコピーする",
    context: ["ファイル操作", "ブラウザ", "VS Code"],
    explanation: "テキストやファイルパスなどを、後で貼り付け（ペースト）できるように一時的にコピーする操作です。コピーボタンを押すとよく表示されます。",
    vocabulary: ["copy", "clipboard"],
    learningTip: "「clipboard」は「クリップで留める板」が原義で、コピーした内容を一時的に保管する場所を指します。「copy and paste（コピー＆ペースト）」はセットで覚えると便利です。"
  },
  {
    id: 51,
    english: "Type a new name and press Enter to rename",
    japanese: "新しい名前を入力してEnterキーを押すと名前を変更できます",
    context: ["ファイル操作", "Windows", "VS Code"],
    explanation: "ファイルやフォルダの名前を変更（リネーム）する時に表示される操作ガイドです。",
    vocabulary: ["type", "rename"],
    learningTip: "「type」は「タイプする・入力する」という動詞としても使われます。「rename A to B（AをBに名前変更する）」という形も覚えておくと便利です。"
  },
  {
    id: 52,
    english: "Drag and drop files here to upload",
    japanese: "ファイルをここにドラッグ＆ドロップしてアップロードしてください",
    context: ["ファイル操作", "ブラウザ", "Webアプリ"],
    explanation: "マウスでファイルをつまんで（ドラッグ）、指定領域に持っていって離す（ドロップ）ことでファイルを選択・アップロードする操作です。Webサイトのファイル添付欄でよく見られます。",
    vocabulary: ["drag", "drop", "upload"],
    learningTip: "「drag」は「引っ張る」、「drop」は「落とす」。セットで「drag and drop（ドラッグ＆ドロップ）」という一つの操作名として使われます。"
  },
  {
    id: 53,
    english: "File size has exceeded the maximum limit",
    japanese: "ファイルサイズが上限を超えました",
    context: ["ファイル操作", "Webアプリ", "エラーメッセージ"],
    explanation: "アップロードしようとしたファイルが、サービスで決められた最大サイズを超えている時に表示されます。ファイルを圧縮するか、サイズの小さい別のファイルを使う必要があります。",
    vocabulary: ["size", "exceeded"],
    learningTip: "「size」は「大きさ・サイズ」。「exceed the limit（上限を超える）」は #10 の「Rate limit exceeded」と同じ単語の組み合わせで、いろいろな場面で再利用されます。"
  },
  {
    id: 54,
    english: "Unsupported file format",
    japanese: "サポートされていないファイル形式です",
    context: ["ファイル操作", "Webアプリ", "エラーメッセージ"],
    explanation: "アップロードしたファイルや開こうとしたファイルの拡張子・形式が、そのサービスやアプリで対応していない時に表示されます。",
    vocabulary: ["unsupported", "format"],
    learningTip: "「support」は「対応する・支える」という動詞。「un-」がついて「unsupported（対応していない）」になります。「format」は「形式」で、「file format」は拡張子で区別されるファイルの種類を指します。"
  },
  {
    id: 55,
    english: "Choose a location to save this file",
    japanese: "このファイルを保存する場所を選択してください",
    context: ["ファイル操作", "VS Code", "Windows"],
    explanation: "「名前を付けて保存」を選んだ時に表示される、保存先のフォルダを選ぶダイアログです。",
    vocabulary: ["choose", "location"],
    learningTip: "「choose」は「選ぶ」という基本動詞。「location」は「場所」で、GPSの「現在地（current location）」などでも使われます。"
  },
  {
    id: 56,
    english: "This file is read-only",
    japanese: "このファイルは読み取り専用です",
    context: ["ファイル操作", "VS Code", "Windows"],
    explanation: "ファイルの設定により、内容の編集・保存ができない状態です。プロパティから読み取り専用のチェックを外すか、管理者権限が必要な場合があります。",
    vocabulary: ["read-only"],
    learningTip: "「read-only」は「read（読む）」+「only（だけ）」で「読むだけ」＝「読み取り専用」。「read-only memory（ROM）」のように他の用語にも使われます。"
  },
  {
    id: 57,
    english: "Move to Recycle Bin",
    japanese: "ごみ箱に移動する",
    context: ["ファイル操作", "Windows"],
    explanation: "ファイルを完全に削除せず、一旦「ごみ箱」に移す操作です。後で元に戻す（復元する）ことができます。Macでは「Trash」と呼ばれます。",
    vocabulary: ["move", "recycle bin"],
    learningTip: "「move A to B（AをBに移動する）」という形でよく使われます。「recycle」は「再利用する・リサイクルする」という意味で、「bin」は「ごみ箱・容器」。"
  },
  {
    id: 58,
    english: "Compress to ZIP file",
    japanese: "ZIPファイルに圧縮する",
    context: ["ファイル操作", "Windows"],
    explanation: "複数のファイルやフォルダを1つのZIPファイルにまとめて圧縮する操作です。メール添付やファイル共有でサイズを小さくするために使われます。",
    vocabulary: ["compress"],
    learningTip: "「compress」は「press（押す）」に「com-（一緒に）」がついて「押し縮める」＝「圧縮する」という意味になります。"
  },
  {
    id: 59,
    english: "Extract files from this archive",
    japanese: "このアーカイブからファイルを展開する",
    context: ["ファイル操作", "Windows"],
    explanation: "ZIPなどの圧縮ファイル（アーカイブ）を解凍して、中のファイルを取り出す操作です。",
    vocabulary: ["extract", "archive"],
    learningTip: "「extract」は「ex-（外に）+ tract（引く）」で「引き出す・抽出する」という意味。「archive」は「記録保管庫」が原義で、圧縮されたファイルの集まりを指します。"
  },
  {
    id: 60,
    english: "The file is in use by another program",
    japanese: "このファイルは別のプログラムで使用中です",
    context: ["ファイル操作", "Windows", "エラーメッセージ"],
    explanation: "他のアプリがそのファイルを開いている間は、削除や名前変更ができないことを示すメッセージです。該当のアプリを閉じてから再試行します。",
    vocabulary: ["in use", "program"],
    learningTip: "「in use」は #41 の「address already in use」と同じ表現で「使用中」を意味します。「program」は「プログラム」で、ソフトウェアやアプリを指す基本語です。"
  },
  {
    id: 61,
    english: "Show hidden files",
    japanese: "隠しファイルを表示する",
    context: ["ファイル操作", "Windows", "ターミナル"],
    explanation: "通常は表示されない設定ファイルなど（隠しファイル）を表示する設定です。ファイル名が「.」（ドット）で始まるものが隠しファイルとして扱われることが多いです。",
    vocabulary: ["hidden"],
    learningTip: "「hide」は「隠す」という動詞で、「hidden」はその過去分詞形「隠された・隠れた」。「hide-and-seek（かくれんぼ）」という遊びの名前にも使われます。"
  },
  {
    id: 62,
    english: "The file path is too long",
    japanese: "ファイルパスが長すぎます",
    context: ["ファイル操作", "Windows", "エラーメッセージ"],
    explanation: "Windowsではファイルパスの文字数に上限があり、フォルダの階層が深すぎる・名前が長すぎるとこのエラーが表示されます。フォルダ構成を見直す必要があります。",
    vocabulary: ["path", "too long"],
    learningTip: "「too + 形容詞」で「〜すぎる」という意味になります。「too long（長すぎる）」「too many（多すぎる）」など、エラーメッセージで頻出するパターンです。"
  },
  {
    id: 63,
    english: "Download complete",
    japanese: "ダウンロードが完了しました",
    context: ["ファイル操作", "ブラウザ"],
    explanation: "ファイルのダウンロードが正常に終わったことを示す通知です。ブラウザの右上などに表示されることが多いです。",
    vocabulary: ["download", "complete"],
    learningTip: "「download」は「down（下に）+ load（積む）」でサーバーから自分のPCに「持ってくる」イメージ。反対は「upload（アップロード）」です。"
  },
  {
    id: 64,
    english: "Choose an app to open this file",
    japanese: "このファイルを開くアプリを選択してください",
    context: ["ファイル操作", "Windows"],
    explanation: "拡張子に対応するアプリが複数ある場合や、初めて開く形式のファイルの場合に表示される選択画面です。",
    vocabulary: ["choose", "open"],
    learningTip: "「open」は「開く」という基本動詞ですが、「open a file（ファイルを開く）」「open-minded（オープンマインドな）」のように幅広い場面で使われます。"
  },
  {
    id: 65,
    english: "Restore deleted files from Recycle Bin",
    japanese: "ごみ箱から削除したファイルを復元する",
    context: ["ファイル操作", "Windows"],
    explanation: "ごみ箱に移動したファイルを、元の場所に戻す操作です。「Empty Recycle Bin（ごみ箱を空にする）」をすると、これができなくなります。",
    vocabulary: ["restore", "recycle bin"],
    learningTip: "「restore」は「re-（再び）+ store（保管する）」で「元の状態に戻す・復元する」という意味。データの「バックアップから復元する」時にも使われる重要な単語です。"
  },
  {
    id: 66,
    english: "Are you sure you want to empty the Recycle Bin?",
    japanese: "ごみ箱を空にしてもよろしいですか？",
    context: ["ファイル操作", "Windows"],
    explanation: "ごみ箱内のすべてのファイルを完全に削除する前の確認メッセージです。空にすると元に戻せません。",
    vocabulary: ["empty", "recycle bin"],
    learningTip: "「empty」は形容詞で「空の」、動詞で「空にする」という両方の意味を持ちます。「an empty box（空の箱）」「empty the trash（ごみ箱を空にする）」のように使います。"
  },

  // ---- バッチ 4: Git/GitHub深掘り編 18件 (2026-06-12 追加) ----

  {
    id: 67,
    english: "Your branch is ahead of 'origin/main' by 2 commits",
    japanese: "あなたのブランチは 'origin/main' より2コミット進んでいます",
    context: ["Git", "ターミナル"],
    explanation: "ローカルでコミットしたが、まだリモートにpushしていない状態です。「ahead」は「進んでいる」という意味で、git pushでリモートに反映できます。",
    vocabulary: ["ahead", "commits"],
    learningTip: "「ahead of ~」は「〜より進んでいる・先にいる」という表現。「ahead of schedule（予定より早い）」のように日常英語でも使われます。"
  },
  {
    id: 68,
    english: "Your branch is behind 'origin/main' by 3 commits, and can be fast-forwarded",
    japanese: "あなたのブランチは 'origin/main' より3コミット遅れていますが、早送り（fast-forward）できます",
    context: ["Git", "ターミナル"],
    explanation: "リモートに新しい変更があるが、ローカルには競合する変更がない状態です。git pullで安全に最新の状態に更新できます。",
    vocabulary: ["behind", "fast-forward"],
    learningTip: "「behind」は「ahead」(#67)の反対で「遅れている・後ろにいる」。「fast-forward」は動画の「早送り」と同じ言葉で、Gitでは履歴を一直線に進めることを指します。"
  },
  {
    id: 69,
    english: "Please commit your changes or stash them before you switch branches",
    japanese: "ブランチを切り替える前に、変更をコミットまたはスタッシュしてください",
    context: ["Git", "ターミナル", "エラーメッセージ"],
    explanation: "未コミットの変更がある状態でブランチを切り替えようとした時のエラーです。変更を保存（コミット）するか、一時的に退避（スタッシュ）する必要があります。",
    vocabulary: ["switch", "branches"],
    learningTip: "「switch」は「切り替える」。「switch A or B」のように選択肢を示す時にも使えます。「branches」は #8 の「branch」の複数形です。"
  },
  {
    id: 70,
    english: "Already up to date.",
    japanese: "既に最新の状態です。",
    context: ["Git", "ターミナル"],
    explanation: "git pullを実行したが、リモートに新しい変更がなく、ローカルが既に最新であることを示します。",
    vocabulary: ["already", "up to date"],
    learningTip: "「already」(#49)＋「up to date」(#8)の組み合わせ。「Already up to date.」はGitで最もよく見る「変化なし」の報告です。"
  },
  {
    id: 71,
    english: "This branch is 5 commits ahead, 2 commits behind main.",
    japanese: "このブランチは main より5コミット進んでいて、2コミット遅れています。",
    context: ["GitHub", "Git"],
    explanation: "GitHubのPull Request画面などで、ブランチとmainブランチの差分（進んでいる数・遅れている数）を示す表示です。",
    vocabulary: ["ahead", "behind"],
    learningTip: "「X commits ahead, Y commits behind」は決まった言い回しです。「ahead」と「behind」(#67, #68)をセットで覚えると、GitHubの差分表示が読めるようになります。"
  },
  {
    id: 72,
    english: "This pull request has a conflict that must be resolved",
    japanese: "このプルリクエストには解決が必要な競合があります",
    context: ["GitHub"],
    explanation: "プルリクエストのマージ先と自分の変更が競合（コンフリクト）している状態です。「Resolve conflicts」ボタンなどから手動で解決します。",
    vocabulary: ["conflict"],
    learningTip: "「must be + 過去分詞」は「〜されなければならない」という受動態。「a conflict that must be resolved」は「解決されなければならない競合」という構造です。"
  },
  {
    id: 73,
    english: "Create a new repository",
    japanese: "新しいリポジトリを作成する",
    context: ["GitHub"],
    explanation: "GitHubで新しいリポジトリ（プロジェクトの保管場所）を作る時のボタン・ページタイトルです。",
    vocabulary: ["create", "repository"],
    learningTip: "「create」は「作成する・生み出す」という基本動詞。「create an account（アカウントを作成する）」のように様々な場面で使われます。"
  },
  {
    id: 74,
    english: "Fork this repository",
    japanese: "このリポジトリをフォークする",
    context: ["GitHub"],
    explanation: "他人のリポジトリを、自分のアカウントにコピーして独立したリポジトリを作る操作です。元のリポジトリに影響を与えずに自由に変更できます。",
    vocabulary: ["fork"],
    learningTip: "「fork」はもともと「フォーク（食器）・分岐」という意味。道が分かれることを「a fork in the road」と言うように、コードの流れが分岐するイメージです。"
  },
  {
    id: 75,
    english: "Star this repository",
    japanese: "このリポジトリにスターをつける",
    context: ["GitHub"],
    explanation: "気に入ったリポジトリに「スター」をつけてブックマークする機能です。リポジトリの人気度の指標にもなります。",
    vocabulary: ["star"],
    learningTip: "「star」は名詞「星」だけでなく、動詞「星をつける・評価する」としても使われます。レストランのレビューで「5つ星」と言うのと同じ感覚です。"
  },
  {
    id: 76,
    english: "Watch this repository to receive notifications",
    japanese: "このリポジトリをウォッチして通知を受け取る",
    context: ["GitHub"],
    explanation: "リポジトリの更新（issueやPRなど）があった時に通知を受け取る設定です。「Watch」「Star」「Fork」はGitHubの代表的な3つのアクションです。",
    vocabulary: ["watch", "notifications"],
    learningTip: "「watch」は「見る」よりも「注意して見守る・監視する」という意味合いが強い単語。「notification」は「通知」で、スマホの通知（プッシュ通知）もこの単語を使います。"
  },
  {
    id: 77,
    english: "Open a new issue",
    japanese: "新しいIssueを作成する",
    context: ["GitHub"],
    explanation: "バグ報告や機能要望などを「Issue」として登録する操作です。プロジェクトのタスク管理にも使われます。",
    vocabulary: ["open", "issue"],
    learningTip: "「open」は「開く」だけでなく「（新しく）作成する・開始する」という意味でも使われます。「issue」は「問題・課題」で、日常会話の「That's not an issue（それは問題ない）」でも使われます。"
  },
  {
    id: 78,
    english: "Assign this issue to yourself",
    japanese: "このIssueを自分にアサインする",
    context: ["GitHub"],
    explanation: "Issueの担当者を設定する操作です。「assign」は「割り当てる」という意味で、誰がそのタスクを担当するかを明確にします。",
    vocabulary: ["assign", "issue"],
    learningTip: "「assign A to B（AをBに割り当てる）」という形でよく使われます。「assignment（割り当て・課題）」は学校の「宿題」を指す単語としても使われます。"
  },
  {
    id: 79,
    english: "Leave a review comment on this pull request",
    japanese: "このプルリクエストにレビューコメントを残す",
    context: ["GitHub"],
    explanation: "プルリクエストの特定のコード行に対してフィードバックを書き込む操作です。コードレビューの基本的な機能です。",
    vocabulary: ["leave", "review"],
    learningTip: "「leave a comment（コメントを残す）」は定型表現です。「review」は「見直す・確認する」が原義で、「movie review（映画レビュー）」と同じ単語です。"
  },
  {
    id: 80,
    english: "Approve these changes",
    japanese: "この変更を承認する",
    context: ["GitHub"],
    explanation: "プルリクエストのレビューで、変更内容に問題がないと判断した時に行う操作です。承認されるとマージできるようになることが多いです。",
    vocabulary: ["approve", "changes"],
    learningTip: "「approve」は「承認する」。反対の意味は「reject（拒否する）」。ビジネス英語で「Approved!（承認済み！）」というスタンプもよく見かけます。"
  },
  {
    id: 81,
    english: "Request changes before this can be merged",
    japanese: "マージする前に変更を依頼する",
    context: ["GitHub"],
    explanation: "コードレビューで、修正が必要だと判断した時に選ぶアクションです。「Approve」「Request changes」「Comment」の3択がよく使われます。",
    vocabulary: ["request"],
    learningTip: "「request」は名詞・動詞どちらでも使われ「依頼・要求（する）」を意味します。「pull request」(#9)も「変更を取り込んでほしいという依頼」という成り立ちです。"
  },
  {
    id: 82,
    english: "This branch has been deleted",
    japanese: "このブランチは削除されました",
    context: ["GitHub", "Git"],
    explanation: "マージ後などにブランチが削除された状態を示します。GitHubではマージ後に自動でブランチを削除するオプションもあります。",
    vocabulary: ["branch", "deleted"],
    learningTip: "「has been + 過去分詞」は「〜された（そして今もその状態）」という現在完了形の受動態。「This branch has been deleted」は「削除済み」であることを示します。"
  },
  {
    id: 83,
    english: "Switch to a different branch or tag",
    japanese: "別のブランチまたはタグに切り替える",
    context: ["GitHub", "Git"],
    explanation: "GitHubのリポジトリ画面で、表示するブランチやタグを切り替えるドロップダウンのラベルです。",
    vocabulary: ["switch", "tag"],
    learningTip: "「different」は「異なる・別の」という形容詞。「tag」はGitでは特定のコミットに付ける目印で、バージョン番号（v1.0.0など）によく使われます。"
  },
  {
    id: 84,
    english: "Clone this repository",
    japanese: "このリポジトリをクローンする",
    context: ["GitHub", "Git", "ターミナル"],
    explanation: "リモートリポジトリの内容をそのまま自分のパソコンにコピーしてくる操作です。git clone コマンドでURLを指定して実行します。",
    vocabulary: ["clone", "repository"],
    learningTip: "「clone」は「クローン・複製」。生物学の「クローン」と同じ単語で、「元と全く同じものを作る」というイメージがそのまま当てはまります。"
  },

  // ---- バッチ 5: Windows/PowerShell編 18件 (2026-06-12 追加) ----

  {
    id: 85,
    english: "Windows is currently checking for updates",
    japanese: "Windowsが更新を確認しています",
    context: ["Windows"],
    explanation: "Windowsが新しい更新プログラムがあるかどうかを確認している最中の表示です。完了まで時間がかかることがあります。",
    vocabulary: ["currently", "checking"],
    learningTip: "「currently」は「現在・今のところ」という副詞。「check for ~（〜を確認する・探す）」は「check for updates（更新を確認する）」のように決まった形でよく使われます。"
  },
  {
    id: 86,
    english: "A restart is required to apply these changes",
    japanese: "これらの変更を適用するには再起動が必要です",
    context: ["Windows"],
    explanation: "設定変更やアップデートを完全に反映させるために、PCの再起動が必要なことを示すメッセージです。",
    vocabulary: ["restart", "required"],
    learningTip: "「require」は「必要とする」という動詞で、「required」はその過去分詞形「必要とされる・必須の」。フォームの「必須項目」も「required field」と表現します。"
  },
  {
    id: 87,
    english: "This app can't run on your PC",
    japanese: "このアプリはこのPCでは実行できません",
    context: ["Windows", "エラーメッセージ"],
    explanation: "インストールしようとしたアプリが、WindowsのバージョンやCPUの種類（32bit/64bitなど）に対応していない時に表示されます。",
    vocabulary: ["app", "run"],
    learningTip: "「app」は「application（アプリケーション）」の略語で、日常会話でもこちらの方が一般的です。「run」は #20 と同じ「実行する」という意味です。"
  },
  {
    id: 88,
    english: "Execution of scripts is disabled on this system",
    japanese: "このシステムではスクリプトの実行が無効になっています",
    context: ["PowerShell", "ターミナル", "エラーメッセージ"],
    explanation: "PowerShellのセキュリティ設定（実行ポリシー）により、スクリプト（.ps1ファイル）の実行が制限されている時のエラーです。Set-ExecutionPolicyコマンドで設定を変更できます。",
    vocabulary: ["execution", "disabled"],
    learningTip: "「execute」は「実行する」という動詞で、「execution」はその名詞形「実行」。「disabled」は「able（できる）」に否定の「dis-」がついた語で「無効化された」という意味です。"
  },
  {
    id: 89,
    english: "The term is not recognized as the name of a cmdlet, function, script file, or operable program",
    japanese: "この用語はコマンドレット、関数、スクリプトファイル、または実行可能なプログラムの名前として認識されていません",
    context: ["PowerShell", "ターミナル", "エラーメッセージ"],
    explanation: "PowerShellで、入力したコマンド名が間違っているか、インストールされていないモジュールのコマンドを実行しようとした時のエラーです。",
    vocabulary: ["term", "cmdlet"],
    learningTip: "「term」は「用語・単語」を指します。「cmdlet（コマンドレット）」はPowerShell独自の用語で、PowerShellで実行できる基本コマンドの単位を指します。全体としては「コマンドが見つかりません」という意味で、Macの「Command not found」(#3)のPowerShell版と考えるとわかりやすいです。"
  },
  {
    id: 90,
    english: "Press any key to continue...",
    japanese: "続行するには何かキーを押してください...",
    context: ["ターミナル", "Windows"],
    explanation: "バッチファイルやコマンドの実行後に、画面が閉じる前に表示される定番のメッセージです。",
    vocabulary: ["press", "continue"],
    learningTip: "「press」は「（ボタンやキーを）押す」という動詞。「continue」は「続ける・続行する」で、ゲームの「コンティニュー」と同じ言葉です。「any key（どれかのキー）」も覚えておくと便利な表現。"
  },
  {
    id: 91,
    english: "Access to the path is denied",
    japanese: "パスへのアクセスが拒否されました",
    context: ["PowerShell", "Windows", "エラーメッセージ"],
    explanation: "管理者権限が必要なフォルダやファイルに、権限のないユーザーがアクセスしようとした時に表示されます。PowerShellを管理者として実行する必要があります。",
    vocabulary: ["access", "path"],
    learningTip: "「Access to ~ is denied」は「〜へのアクセスは拒否される」という受動態の定型表現。「Permission denied」(#1)とほぼ同じ意味で、Windowsではこの言い方もよく使われます。"
  },
  {
    id: 92,
    english: "The requested operation requires elevation",
    japanese: "要求された操作には管理者権限への昇格が必要です",
    context: ["Windows", "PowerShell", "エラーメッセージ"],
    explanation: "管理者権限（elevated）が必要な操作を、通常の権限で実行しようとした時に表示されます。「Run as administrator」で実行し直す必要があります。",
    vocabulary: ["requested", "elevation"],
    learningTip: "「require」(#86)の過去分詞「requested」がここでは「要求された（操作）」という形容詞的に使われています。「elevation」は「上昇・昇格」で、エレベーター（elevator）と同じ語源です。"
  },
  {
    id: 93,
    english: "This application is not responding. Do you want to end it?",
    japanese: "このアプリケーションは応答していません。終了しますか？",
    context: ["Windows", "エラーメッセージ"],
    explanation: "アプリがフリーズして反応しなくなった時に表示される確認メッセージです。「End Task」でアプリを強制終了できます。",
    vocabulary: ["responding", "end"],
    learningTip: "「respond」は「応答する・返事する」という動詞。「end」は「終わる・終わらせる」で、名詞「the end（終わり）」としても使われる基本語です。"
  },
  {
    id: 94,
    english: "Safely Remove Hardware and Eject Media",
    japanese: "ハードウェアの安全な取り外しとメディアの取り出し",
    context: ["Windows"],
    explanation: "USBメモリなどの外部デバイスを、データ破損のリスクなく取り外すための機能です。取り外す前にこの操作をすることが推奨されます。",
    vocabulary: ["safely", "eject"],
    learningTip: "「safely」は「safe（安全な）」に「-ly」がついた副詞で「安全に」。「eject」はCDやUSBを「取り出す・排出する」という動詞で、「ejector seat（緊急脱出シート）」にも使われます。"
  },
  {
    id: 95,
    english: "Your PC ran into a problem and needs to restart",
    japanese: "PCに問題が発生したため、再起動が必要です",
    context: ["Windows", "エラーメッセージ"],
    explanation: "Windowsの「ブルースクリーン」（BSOD）で表示される代表的なメッセージです。深刻なシステムエラーが発生したことを示します。",
    vocabulary: ["ran into", "problem"],
    learningTip: "「run into ~」は「〜に偶然出会う・〜に遭遇する」という熟語で、過去形は「ran into」。「I ran into an old friend（昔の友人に偶然会った）」のように日常英語でも使われます。"
  },
  {
    id: 96,
    english: "Set the default app for this file type",
    japanese: "このファイル形式の既定のアプリを設定する",
    context: ["Windows", "設定画面"],
    explanation: "特定の拡張子のファイルをダブルクリックした時に、どのアプリで開くかを設定する画面です。「default」は「既定・デフォルト」を意味します。",
    vocabulary: ["default", "file type"],
    learningTip: "「default」は「何も指定しなかった時に選ばれる標準の設定」を指す重要な単語。「by default（デフォルトでは）」という形でもよく使われます。"
  },
  {
    id: 97,
    english: "Turn Windows features on or off",
    japanese: "Windowsの機能の有効化または無効化",
    context: ["Windows", "設定画面"],
    explanation: "WSL（Linux環境）や.NET Frameworkなど、Windowsに搭載されている追加機能を有効/無効にする設定画面です。",
    vocabulary: ["features", "on or off"],
    learningTip: "「feature」は「機能・特徴」。「turn ~ on/off（〜をオンにする/オフにする）」は家電のスイッチ操作などでも使う基本表現です。"
  },
  {
    id: 98,
    english: "Choose what happens when you plug in a device",
    japanese: "デバイスを接続した時の動作を選択する",
    context: ["Windows", "設定画面"],
    explanation: "USBメモリなどを接続した時に、自動再生やフォルダを開くなどの動作を設定する画面です。",
    vocabulary: ["choose", "plug in"],
    learningTip: "「plug in」は「コンセントやUSBポートに差し込む」という意味の熟語。「plug」自体は「プラグ（差し込み口の部品）」を指す名詞でもあります。"
  },
  {
    id: 99,
    english: "Restart now or schedule for later",
    japanese: "今すぐ再起動するか、後で予約する",
    context: ["Windows", "設定画面"],
    explanation: "Windows Updateの適用後に表示される選択肢です。作業中であれば「後で再起動」を選んで、後でPCを再起動できます。",
    vocabulary: ["restart", "schedule"],
    learningTip: "「schedule」は名詞では「予定・スケジュール」、動詞では「予定を入れる・予約する」という意味になります。「schedule a meeting（会議を予定する）」のようにビジネス英語でも頻出です。"
  },
  {
    id: 100,
    english: "Battery saver is on",
    japanese: "バッテリー節約機能がオンです",
    context: ["Windows", "設定画面"],
    explanation: "ノートPCのバッテリー残量が少なくなった時などに自動でオンになる省電力モードです。一部の機能やバックグラウンド動作が制限されます。",
    vocabulary: ["battery", "saver"],
    learningTip: "「saver」は「save（節約する・保存する）」に「-er」がついた語で「節約するもの」。「screen saver（スクリーンセーバー）」も同じ作りの単語です。"
  },
  {
    id: 101,
    english: "No internet connection",
    japanese: "インターネット接続がありません",
    context: ["Windows", "ブラウザ", "エラーメッセージ"],
    explanation: "Wi-Fiやイーサネットが切断されている、またはネットワーク機器の問題でインターネットに接続できない状態です。",
    vocabulary: ["internet", "connection"],
    learningTip: "「No ~」で始まる表現は「〜がない」という状態を簡潔に表します。「connection」は #22 の「Connection timed out」でも登場した単語です。"
  },
  {
    id: 102,
    english: "This PC doesn't meet the minimum system requirements",
    japanese: "このPCは最小システム要件を満たしていません",
    context: ["Windows", "エラーメッセージ"],
    explanation: "OSやソフトウェアのインストール時に、CPU・メモリ・空き容量などが必要条件を満たしていない場合に表示されます。",
    vocabulary: ["meet", "requirements"],
    learningTip: "「meet」は「会う」だけでなく「（基準・条件を）満たす」という意味でも使われます。「requirement」は「require」(#86)の名詞形で「必要条件・要件」を意味します。"
  },

  // ---- バッチ 6: HTML/CSS/JavaScript編 18件 (2026-06-12 追加) ----

  {
    id: 103,
    english: "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')",
    japanese: "未処理のTypeError：nullのプロパティを読み取れません（'addEventListener'を読み取ろうとしています）",
    context: ["JavaScript", "ブラウザ", "エラーメッセージ"],
    explanation: "存在しない（null）要素に対してイベントを設定しようとした時のエラーです。document.querySelectorなどで要素が見つかっていない場合によく発生します。",
    vocabulary: ["uncaught", "null"],
    learningTip: "「catch」は「捕まえる」で、「uncaught」は「捕まえられていない＝エラー処理（try-catch）がされていない」という意味。「null」は「何もない」を表す特別な値です。"
  },
  {
    id: 104,
    english: "Warning: Each child in a list should have a unique 'key' prop",
    japanese: "警告：リスト内の各子要素には一意の'key'プロパティが必要です",
    context: ["JavaScript", "ブラウザ", "エラーメッセージ"],
    explanation: "Reactで配列をmapして要素を表示する時、各要素に一意の`key`を指定していないと表示される警告です。パフォーマンスや表示の不整合を防ぐために必要です。",
    vocabulary: ["warning", "unique"],
    learningTip: "「warning」は「警告」で、エラー（error）より軽い注意レベルを示します。「unique」は「唯一の・一意の」で、「universe（宇宙）」と同じ語源を持ちます。"
  },
  {
    id: 105,
    english: "Failed to load resource: the server responded with a status of 404",
    japanese: "リソースの読み込みに失敗しました：サーバーがステータス404で応答しました",
    context: ["JavaScript", "ブラウザ", "エラーメッセージ"],
    explanation: "画像・CSS・JSファイルなどの読み込みに失敗した時に、ブラウザの開発者ツールのConsoleタブに表示されるエラーです。ファイルパスの間違いが原因のことが多いです。",
    vocabulary: ["resource", "responded"],
    learningTip: "「resource」は「資源・リソース」で、Webでは画像やスタイルシートなどの読み込み対象を指します。「respond with ~（〜で応答する）」という形も覚えておくと便利です。"
  },
  {
    id: 106,
    english: "Add a fallback font in case the custom font fails to load",
    japanese: "カスタムフォントが読み込めない場合に備えて、代替フォントを指定する",
    context: ["CSS", "VS Code"],
    explanation: "CSSのfont-familyでは、複数のフォントを指定できます。最初のフォントが使えない場合に備えて、代わりのフォント（フォールバック）を後ろに並べておくのが一般的です。",
    vocabulary: ["fallback", "font"],
    learningTip: "「fallback」は「fall back（後ろに下がる・後退する）」から来た語で、「うまくいかない時の代替手段」を指します。「in case ~（〜の場合に備えて）」もよく使う表現です。"
  },
  {
    id: 107,
    english: "Use 'let' or 'const' instead of 'var'",
    japanese: "'var'の代わりに'let'または'const'を使いましょう",
    context: ["JavaScript", "VS Code"],
    explanation: "現代のJavaScriptでは、変数のスコープがより安全な'let'や'const'を使うのが推奨されています。'var'は古い書き方で、意図しないバグの原因になることがあります。",
    vocabulary: ["instead"],
    learningTip: "「instead of ~」は「〜の代わりに」という頻出表現。「instead」だけでも「その代わりに」という副詞として文頭で使われることがあります。"
  },
  {
    id: 108,
    english: "This expression is not callable",
    japanese: "この式は呼び出すことができません",
    context: ["JavaScript", "VS Code", "エラーメッセージ"],
    explanation: "関数ではない値（数値や文字列など）を、関数のように()をつけて呼び出そうとした時のTypeScript/JavaScriptのエラーです。",
    vocabulary: ["expression", "callable"],
    learningTip: "「express（表現する）」の名詞形が「expression（式・表現）」。「-able」は「〜できる」という意味の接尾語で、「callable」は「呼び出すことができる」という意味になります。"
  },
  {
    id: 109,
    english: "This image is missing required alt text",
    japanese: "この画像には必要なalt属性のテキストがありません",
    context: ["HTML", "ブラウザ", "エラーメッセージ"],
    explanation: "アクセシビリティの観点から、画像には代替テキスト（alt属性）を指定することが推奨されます。画像が表示できない場合や、画面読み上げソフトのために使われます。",
    vocabulary: ["missing", "alt text"],
    learningTip: "「miss」は「逃す・見逃す」で、「missing」は「欠けている・見当たらない」という形容詞。「alt」は「alternative（代替の）」の略で、「alt text」は画像の代わりに表示・読み上げられるテキストです。"
  },
  {
    id: 110,
    english: "This button has no accessible name",
    japanese: "このボタンにはアクセス可能な名前がありません",
    context: ["HTML", "ブラウザ", "エラーメッセージ"],
    explanation: "ボタンにテキストやaria-labelがなく、画面読み上げソフトでは「ボタン」としか認識できない状態です。ユーザー全員が使いやすいデザイン（アクセシビリティ）のために重要です。",
    vocabulary: ["accessible", "name"],
    learningTip: "「access（アクセスする）」に「-ible（できる）」がついて「accessible（利用しやすい・アクセス可能な）」。「accessibility（アクセシビリティ）」はその名詞形で、Web開発の重要な概念です。"
  },
  {
    id: 111,
    english: "This element is not displayed because its parent has display: none",
    japanese: "親要素にdisplay: noneが指定されているため、この要素は表示されません",
    context: ["CSS", "ブラウザ", "VS Code"],
    explanation: "CSSの`display: none`は要素を完全に非表示にするプロパティです。子要素も含めて画面上から消え、レイアウトのスペースも確保されません。",
    vocabulary: ["displayed", "parent"],
    learningTip: "「display」は「表示する」という動詞・名詞。「displayed」はその過去分詞形「表示された」。「parent」は #33 の「parent directory」と同じ「親」で、HTML要素の階層構造でも使われます。"
  },
  {
    id: 112,
    english: "Specify a unit for this value, such as px or %",
    japanese: "この値にはpxや%のような単位を指定してください",
    context: ["CSS", "VS Code", "エラーメッセージ"],
    explanation: "CSSで数値を指定する時、単位（px, %, em など）を忘れるとスタイルが反映されないことがあります。0以外の数値には基本的に単位が必要です。",
    vocabulary: ["specify", "unit"],
    learningTip: "「specify」は「specific（特定の）」の動詞形で「具体的に指定する」という意味。「unit」は「単位」で、「unit test（単体テスト）」のように他の技術用語にも使われます。"
  },
  {
    id: 113,
    english: "This selector has low specificity and may be overridden",
    japanese: "このセレクタは詳細度が低く、上書きされる可能性があります",
    context: ["CSS", "エラーメッセージ"],
    explanation: "CSSでは、より詳細度（specificity）の高いセレクタのスタイルが優先されます。意図したスタイルが反映されない時は、詳細度を確認します。",
    vocabulary: ["selector", "overridden"],
    learningTip: "「select（選ぶ）」の名詞形「selector」はCSSで「スタイルを当てる対象を選ぶ記述」を指します。「override（上書きする）」の過去分詞「overridden」は不規則変化なので注意。"
  },
  {
    id: 114,
    english: "Add a viewport meta tag for responsive design",
    japanese: "レスポンシブデザインのためにviewportメタタグを追加する",
    context: ["HTML", "VS Code"],
    explanation: "スマートフォンなどで正しく表示されるよう、画面サイズに応じてレイアウトを調整する設定です。viewportメタタグはその基本設定として使われます。",
    vocabulary: ["responsive", "meta tag"],
    learningTip: "「respond（反応する）」の形容詞形「responsive」は「反応が良い・対応できる」という意味で、画面サイズに応じて変化するデザインを「responsive design」と呼びます。"
  },
  {
    id: 115,
    english: "This script is blocked by the browser's content security policy",
    japanese: "このスクリプトはブラウザのコンテンツセキュリティポリシーによってブロックされています",
    context: ["JavaScript", "ブラウザ", "エラーメッセージ"],
    explanation: "セキュリティ設定（CSP）によって、許可されていない外部スクリプトの実行がブロックされている状態です。設定を見直すか、許可リストに追加する必要があります。",
    vocabulary: ["blocked", "policy"],
    learningTip: "「block」は「ブロックする・妨げる」という動詞。「policy」は「方針・ポリシー」で、「privacy policy（プライバシーポリシー）」のように規約関連の用語によく使われます。"
  },
  {
    id: 116,
    english: "Mixed Content: This page was loaded over HTTPS, but requested an insecure resource",
    japanese: "混在コンテンツ：このページはHTTPSで読み込まれましたが、安全でないリソースをリクエストしました",
    context: ["JavaScript", "ブラウザ", "エラーメッセージ"],
    explanation: "HTTPSのページから、HTTP（暗号化されていない）のリソースを読み込もうとした時の警告です。セキュリティリスクがあるため、ブラウザにブロックされることがあります。",
    vocabulary: ["mixed", "insecure"],
    learningTip: "「mix（混ぜる）」の過去分詞「mixed」は「混在した」。「secure（安全な）」に「in-」がついた「insecure」は「安全でない」という意味で、「安心できない・不安な」という気持ちを表す時にも使われます。"
  },
  {
    id: 117,
    english: "Click 'Inspect' to open the developer tools",
    japanese: "開発者ツールを開くには「検証」をクリックしてください",
    context: ["ブラウザ", "VS Code"],
    explanation: "ブラウザの開発者ツール（DevTools）を開く操作です。HTML/CSS/JavaScriptの動作確認やデバッグに使います。",
    vocabulary: ["inspect", "developer tools"],
    learningTip: "「inspect」は「詳しく調べる・検査する」という動詞で、「inspector（検査官）」も同じ語源。ブラウザの「検証」メニューはこの単語が由来です。"
  },
  {
    id: 118,
    english: "This function is defined but never used",
    japanese: "この関数は定義されていますが、一度も使われていません",
    context: ["JavaScript", "VS Code", "エラーメッセージ"],
    explanation: "コードの中で定義した関数や変数が、どこからも呼び出されていない時にエディタが表示する警告です。不要なコードの削除に役立ちます。",
    vocabulary: ["defined", "never"],
    learningTip: "「defined」は #32 と同じ「定義された」。「never」は「一度も〜ない・決して〜ない」という強い否定で、「never used（一度も使われていない）」のように過去分詞と組み合わせてよく使われます。"
  },
  {
    id: 119,
    english: "Live reload is enabled. The page will refresh automatically when you save.",
    japanese: "ライブリロードが有効です。保存すると自動でページが更新されます。",
    context: ["VS Code", "ブラウザ"],
    explanation: "ファイルを保存すると自動でブラウザが再読み込みされる開発支援機能です。Live Server拡張機能などで使われます。",
    vocabulary: ["enabled", "refresh"],
    learningTip: "「enable（可能にする・有効にする）」の過去分詞「enabled」は「有効化された」。「refresh」は「リフレッシュする」のイメージ通り「（ページを）再読み込みする」という意味です。"
  },
  {
    id: 120,
    english: "This tag must be closed",
    japanese: "このタグは閉じる必要があります",
    context: ["HTML", "VS Code", "エラーメッセージ"],
    explanation: "開始タグ（<div>など）に対応する終了タグ（</div>）が抜けている時の警告です。HTMLの構文エラーの代表的な原因です。",
    vocabulary: [
      { term: "tag", meaning: "タグ（HTML要素を表すマークアップの単位）" },
      "closed"
    ],
    learningTip: "「tag」はGit（#83）では「目印」、HTMLでは「<>で囲まれた要素」を指します。同じ単語でも文脈で意味が変わる例です。「close」の過去分詞「closed」は「閉じられた」。"
  }

  // ---- バッチ 7 以降はここに追記 ----
];
