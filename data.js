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
  },

  // ---- バッチ7: AIツール編 (2026-06-13 追加) ----
  {
    id: 121,
    english: "Thinking...",
    japanese: "考え中...",
    context: ["Claude", "Claude Code"],
    explanation: "AIが回答を生成する前に、処理中であることを示すために表示されるメッセージです。",
    vocabulary: [
      "thinking"
    ],
    learningTip: "「think（考える）」の現在分詞「thinking」。「〜ing」の形は「今まさに〜している」という進行中の状態を表します。"
  },
  {
    id: 122,
    english: "Stop generating",
    japanese: "生成を停止",
    context: ["ChatGPT", "Claude"],
    explanation: "AIが回答を生成している途中で、それを止めたい時に押すボタンのラベルです。",
    vocabulary: [
      "stop",
      "generating"
    ],
    learningTip: "「generate（生成する）」の-ing形「generating」。「stop -ing」で「〜することを止める」という形になります。"
  },
  {
    id: 123,
    english: "Regenerate response",
    japanese: "回答を再生成",
    context: ["ChatGPT", "Claude"],
    explanation: "AIの回答が気に入らない時に、もう一度生成し直すためのボタンです。",
    vocabulary: [
      "regenerate",
      "response"
    ],
    learningTip: "「re-」は「再び」を意味する接頭語で、「regenerate」は「再生成する」。「response」は「答え・返答」を意味する名詞です。"
  },
  {
    id: 124,
    english: "You've reached your usage limit for this model.",
    japanese: "このモデルの利用上限に達しました。",
    context: ["ChatGPT", "Claude"],
    explanation: "一定時間内に使える回数や文字数の上限に達した時に表示されるメッセージです。プランによって上限が異なります。",
    vocabulary: [
      "usage",
      "model"
    ],
    learningTip: "「use（使う）」の名詞形「usage」は「使用量・利用」。「model」はここでは「AIの学習済みモデル」を指します。"
  },
  {
    id: 125,
    english: "This conversation is too long. Start a new chat to continue.",
    japanese: "この会話は長すぎます。続けるには新しいチャットを開始してください。",
    context: ["ChatGPT", "Claude"],
    explanation: "やり取りが長くなり、AIが一度に処理できる範囲（コンテキスト長）を超えた時に表示されます。",
    vocabulary: [
      "chat",
      "continue"
    ],
    learningTip: "「chat」は「おしゃべり・チャット」。「continue」は「続ける」で、「to continue」のように「〜するために」という意味でも使われます。"
  },
  {
    id: 126,
    english: "Copy code",
    japanese: "コードをコピー",
    context: ["ChatGPT", "Claude Code", "VS Code"],
    explanation: "チャットの回答に含まれるコードブロックを、そのままコピーするためのボタンです。",
    vocabulary: [
      "code"
    ],
    learningTip: "「code」は「暗号」という意味もありますが、プログラミングでは「ソースコード」を指します。"
  },
  {
    id: 127,
    english: "Continue generating",
    japanese: "続けて生成",
    context: ["ChatGPT", "Claude"],
    explanation: "回答が途中で止まってしまった時に、続きを生成させるためのボタンです。",
    vocabulary: [
      "continue",
      "generating"
    ],
    learningTip: "#122の「generating」と#125の「continue」を組み合わせた表現です。"
  },
  {
    id: 128,
    english: "Edit message",
    japanese: "メッセージを編集",
    context: ["ChatGPT", "Claude"],
    explanation: "送信したメッセージの内容を修正したい時に使うボタンです。",
    vocabulary: [
      "edit",
      "message"
    ],
    learningTip: "「edit」は「編集する」。「message」は「メッセージ・伝言」で、日本語でもそのまま使われます。"
  },
  {
    id: 129,
    english: "Clear conversation history",
    japanese: "会話の履歴を消去",
    context: ["ChatGPT", "Claude"],
    explanation: "過去のやり取りの記録をすべて削除する機能です。",
    vocabulary: [
      "clear",
      "history"
    ],
    learningTip: "「clear」は「クリアする・消去する」。「history」は「歴史」のほか「履歴」という意味でもよく使われます。"
  },
  {
    id: 130,
    english: "AI-generated content may be incorrect.",
    japanese: "AIが生成したコンテンツは誤っている場合があります。",
    context: ["ChatGPT", "Claude", "Webアプリ"],
    explanation: "AIの回答には誤りが含まれる可能性があることを示す注意書きです。多くのAIチャットサービスの画面下部に表示されます。",
    vocabulary: [
      "content",
      "incorrect"
    ],
    learningTip: "「content」は「内容・コンテンツ」。「correct（正しい）」に否定の接頭語「in-」がついた「incorrect」は「間違っている」という意味です。"
  },
  {
    id: 131,
    english: "Share this conversation",
    japanese: "この会話を共有",
    context: ["ChatGPT", "Claude"],
    explanation: "AIとのやり取りをリンク形式などで他の人に共有するための機能です。",
    vocabulary: [
      "share"
    ],
    learningTip: "「share」は「シェアする・共有する」。SNSなどでもよく使われる単語です。"
  },
  {
    id: 132,
    english: "Upgrade to send more messages",
    japanese: "より多くメッセージを送るにはアップグレードしてください",
    context: ["ChatGPT", "Claude"],
    explanation: "無料プランの利用上限に達した時に、有料プランへの変更を促すメッセージです。",
    vocabulary: [
      "upgrade"
    ],
    learningTip: "「upgrade」は「より良い状態に変える・アップグレードする」。「to send ~」は「〜するために」という目的を表します。"
  },
  {
    id: 133,
    english: "Switch to a different model",
    japanese: "別のモデルに切り替える",
    context: ["ChatGPT", "Claude"],
    explanation: "用途に応じて、AIの種類（モデル）を切り替えるための操作です。",
    vocabulary: [
      "switch",
      "model"
    ],
    learningTip: "「switch」は「スイッチを切り替える」イメージで「切り替える」。「a different ~」は「別の〜」という意味です。"
  },
  {
    id: 134,
    english: "I don't have access to real-time information.",
    japanese: "私はリアルタイムの情報にアクセスできません。",
    context: ["ChatGPT", "Claude"],
    explanation: "AIが、最新の出来事や現在時刻などの情報を取得できないことを説明する典型的な返答です。",
    vocabulary: [
      "real-time",
      "information"
    ],
    learningTip: "「real-time」は「リアルタイムの・即時の」。「information」は「情報」で、数えられない名詞（複数形にしない）として使われます。"
  },
  {
    id: 135,
    english: "Something went wrong. Please try again.",
    japanese: "問題が発生しました。もう一度お試しください。",
    context: ["ChatGPT", "Claude", "Webアプリ", "エラーメッセージ"],
    explanation: "原因がはっきりしないエラーが起きた時に表示される、よく見る汎用的なエラーメッセージです。",
    vocabulary: [
      "something",
      "wrong",
      "try again"
    ],
    learningTip: "「something went wrong」は「何かがおかしくなった」という決まり文句。「try again」は「もう一度試す」という意味で、エラー画面の定番表現です。"
  },
  {
    id: 136,
    english: "Your message was flagged for review.",
    japanese: "あなたのメッセージは確認のためフラグが立てられました。",
    context: ["ChatGPT", "Claude"],
    explanation: "送信した内容がポリシーに違反する可能性がある時、自動的にチェック対象としてマークされることを示すメッセージです。",
    vocabulary: [
      "flagged",
      "review"
    ],
    learningTip: "「flag」は「旗」のほか「目印をつける・フラグを立てる」という動詞でも使われます。「for review」は「確認のために」という意味です。"
  },
  {
    id: 137,
    english: "Rate this response",
    japanese: "この回答を評価する",
    context: ["ChatGPT", "Claude"],
    explanation: "AIの回答の良し悪しを、ユーザーが👍👎などで評価できる機能です。",
    vocabulary: [
      "rate",
      "response"
    ],
    learningTip: "「rate」は「評価する」。「rating（評価・評定）」の動詞形です。"
  },
  {
    id: 138,
    english: "This chat has reached the maximum length.",
    japanese: "このチャットは最大の長さに達しました。",
    context: ["ChatGPT", "Claude"],
    explanation: "会話が長くなり、これ以上続けられない状態になったことを示すメッセージです。",
    vocabulary: [
      "chat",
      "maximum",
      "length"
    ],
    learningTip: "「maximum」は「最大の」という意味の形容詞・名詞です。「length」は「長さ」で、「long（長い）」の名詞形です。"
  },

  // ---- バッチ8: パッケージ管理(npm)編 (2026-06-13 追加) ----
  {
    id: 139,
    english: "npm warn deprecated package@1.0.0: This package is no longer maintained",
    japanese: "npm警告：非推奨 package@1.0.0：このパッケージはもうメンテナンスされていません",
    context: ["ターミナル", "エラーメッセージ"],
    explanation: "npm install時に、使用しているパッケージが古くなり開発が止まっている（非推奨）ことを知らせる警告です。動作には影響しませんが、別のパッケージへの移行を検討するきっかけになります。",
    vocabulary: [
      "deprecated",
      "maintained"
    ],
    learningTip: "「deprecate（非推奨にする）」の過去分詞「deprecated」。「maintain（保守する・メンテナンスする）」の過去分詞「maintained」は「保守されている」という意味です。"
  },
  {
    id: 140,
    english: "found 3 vulnerabilities (2 moderate, 1 high)",
    japanese: "3件の脆弱性が見つかりました（中程度2件、高度1件）",
    context: ["ターミナル", "エラーメッセージ"],
    explanation: "npm installの最後に表示される、依存パッケージに含まれるセキュリティ上の弱点（脆弱性）の数を知らせるメッセージです。",
    vocabulary: [
      "vulnerabilities",
      "moderate"
    ],
    learningTip: "「vulnerability（脆弱性）」は「vulnerable（弱い・攻撃されやすい）」の名詞形。「moderate」は「中程度の・穏やかな」という意味の形容詞です。"
  },
  {
    id: 141,
    english: "Run 'npm audit fix' to fix the issues",
    japanese: "問題を修正するには 'npm audit fix' を実行してください",
    context: ["ターミナル"],
    explanation: "見つかった脆弱性を自動で修正してくれるコマンドの案内です。",
    vocabulary: [
      "audit",
      "fix"
    ],
    learningTip: "「audit」は「会計などの監査」を意味する単語ですが、ここでは「セキュリティ上の問題を検査すること」を指します。「fix」は「修正する」という基本動詞です。"
  },
  {
    id: 142,
    english: "added 50 packages in 5s",
    japanese: "5秒で50個のパッケージを追加しました",
    context: ["ターミナル"],
    explanation: "npm installが完了した時に表示される、インストールされたパッケージの数と所要時間です。",
    vocabulary: [
      "package"
    ],
    learningTip: "「package」は「荷物・パッケージ」が原義で、プログラミングでは「再利用可能なコードのまとまり」を指します。"
  },
  {
    id: 143,
    english: "Cannot find module 'express'",
    japanese: "モジュール 'express' が見つかりません",
    context: ["ターミナル", "エラーメッセージ"],
    explanation: "プログラムが使おうとしたモジュール（パッケージ）がインストールされていない時に表示されるエラーです。npm installで該当パッケージを追加する必要があります。",
    vocabulary: [
      "module"
    ],
    learningTip: "「Cannot find ~」は「〜が見つからない」という意味で、エラーメッセージによく使われる形です。"
  },
  {
    id: 144,
    english: "Missing script: \"start\"",
    japanese: "スクリプトが見つかりません: \"start\"",
    context: ["ターミナル", "エラーメッセージ"],
    explanation: "npm runで指定したスクリプト名が、package.jsonのscriptsに定義されていない時に表示されるエラーです。",
    vocabulary: [
      "missing",
      "script"
    ],
    learningTip: "「missing」は「欠けている・見つからない」という意味。「script」はここでは「package.jsonに定義された一連のコマンド」を指します。"
  },
  {
    id: 145,
    english: "Installing dependencies...",
    japanese: "依存パッケージをインストール中...",
    context: ["ターミナル"],
    explanation: "npm installなどの実行中に表示される、必要なパッケージをダウンロード・配置している最中の表示です。",
    vocabulary: [
      "install",
      "dependencies"
    ],
    learningTip: "「install」は「インストールする」。「dependency」は「依存関係」で、複数形「dependencies」は「依存しているパッケージ群」を指します。"
  },
  {
    id: 146,
    english: "package-lock.json is out of date",
    japanese: "package-lock.json が古くなっています",
    context: ["ターミナル", "エラーメッセージ"],
    explanation: "package.jsonとpackage-lock.jsonの内容が一致していない時に表示される警告です。npm installを実行して同期させる必要があります。",
    vocabulary: [
      "out of date"
    ],
    learningTip: "「out of date」は「日付から外れている」＝「古くなっている・最新でない」という意味の熟語です。反対は「up to date（最新の）」。"
  },
  {
    id: 147,
    english: "A new version of this package is available",
    japanese: "このパッケージの新しいバージョンが利用可能です",
    context: ["ターミナル", "VS Code"],
    explanation: "使用しているパッケージに更新版がリリースされたことを知らせる通知です。",
    vocabulary: [
      "version",
      "available"
    ],
    learningTip: "「version」は「バージョン・版」。「available」は「利用可能な」で、新しいバージョンが使える状態にあることを示します。"
  },
  {
    id: 148,
    english: "Conflicting peer dependency detected",
    japanese: "競合するピア依存関係が検出されました",
    context: ["ターミナル", "エラーメッセージ"],
    explanation: "あるパッケージが要求するバージョンと、実際にインストールされているバージョンが食い違っている時に表示される警告です。",
    vocabulary: [
      "dependency",
      "detected"
    ],
    learningTip: "「dependency」は「dependencies」(#145)の単数形で「依存関係」。「detect（検出する）」の過去分詞「detected」は「検出された」という意味です。"
  },
  {
    id: 149,
    english: "Uninstalling package...",
    japanese: "パッケージをアンインストール中...",
    context: ["ターミナル"],
    explanation: "npm uninstallの実行中に表示される、パッケージを削除している最中の表示です。",
    vocabulary: [
      "uninstall"
    ],
    learningTip: "「un-」は「反対の動作」を表す接頭語。「install（取り付ける・導入する）」の反対が「uninstall（取り除く・削除する）」です。"
  },
  {
    id: 150,
    english: "Updating package.json",
    japanese: "package.json を更新しています",
    context: ["ターミナル", "VS Code"],
    explanation: "npm installやnpm uninstallの実行に伴い、package.jsonの依存関係の記述が自動更新されることを示します。",
    vocabulary: [
      "update"
    ],
    learningTip: "「update」は「更新する」。ここでは「-ing」形で「更新している最中」という進行中の動作を表しています。"
  },
  {
    id: 151,
    english: "npm install completed successfully",
    japanese: "npm install が正常に完了しました",
    context: ["ターミナル"],
    explanation: "コマンドがエラーなく最後まで実行されたことを示すメッセージです。",
    vocabulary: [
      "complete",
      "successfully"
    ],
    learningTip: "「complete」は「完了する」。「success（成功）」に「-fully」がついた「successfully」は「正常に・うまく」という意味の副詞です。"
  },
  {
    id: 152,
    english: "This script requires Node.js version 18 or higher",
    japanese: "このスクリプトには Node.js バージョン18以上が必要です",
    context: ["ターミナル", "エラーメッセージ"],
    explanation: "package.jsonのenginesフィールドなどで指定された、実行に必要なNode.jsのバージョン条件を示すメッセージです。",
    vocabulary: [
      "requires",
      "higher"
    ],
    learningTip: "「require」の三単現「requires」は「〜を必要とする」。「higher」は「high（高い）」の比較級で、「18 or higher」は「18以上」という意味です。"
  },
  {
    id: 153,
    english: "Clearing npm cache",
    japanese: "npmキャッシュを削除しています",
    context: ["ターミナル"],
    explanation: "npm cache cleanコマンドなどで、過去にダウンロードしたパッケージの一時保存データを削除している最中の表示です。",
    vocabulary: [
      "clear",
      "cache"
    ],
    learningTip: "「clear」(#129)は「消去する」。「cache」は「キャッシュ（よく使うデータを一時的に保存しておく場所）」で、ブラウザなどでも使われる用語です。"
  },
  {
    id: 154,
    english: "Checking for outdated packages",
    japanese: "古くなったパッケージを確認しています",
    context: ["ターミナル"],
    explanation: "npm outdatedコマンドなどで、更新可能なパッケージがあるかどうかを調べている最中の表示です。",
    vocabulary: [
      "outdated"
    ],
    learningTip: "「outdated」は「out（外）+ dated（日付がついた）」で「期限切れの・古くなった」という意味。#146の「out of date」とほぼ同じ意味です。"
  },
  {
    id: 155,
    english: "The node_modules folder is too large",
    japanese: "node_modulesフォルダが大きすぎます",
    context: ["ターミナル", "ファイル操作"],
    explanation: "依存パッケージが多いと、node_modulesフォルダの容量が数百MB〜数GBになることがあります。ディスク容量を圧迫する原因として知られています。",
    vocabulary: [
      "folder",
      "large"
    ],
    learningTip: "「folder」は「フォルダ・ディレクトリ」。「large」は「大きい」で、「too large」のように「too + 形容詞」(#62)で「〜すぎる」を表します。"
  },
  {
    id: 156,
    english: "Please restart your terminal for changes to take effect",
    japanese: "変更を反映するにはターミナルを再起動してください",
    context: ["ターミナル"],
    explanation: "環境変数やPATHの設定変更後、それを有効にするためにターミナル（またはPC）の再起動が必要なことを示すメッセージです。",
    vocabulary: [
      "restart",
      "take effect"
    ],
    learningTip: "「restart」(#86)は「再起動する」。「take effect」は「効果を持つ・発効する」という熟語で、法律やルールが「施行される」時にも使われます。"
  },

  // ---- バッチ9: ブラウザ開発者ツール編 (2026-06-13 追加) ----
  {
    id: 157,
    english: "Open the Console tab to see error messages",
    japanese: "エラーメッセージを見るにはConsoleタブを開いてください",
    context: ["ブラウザ", "VS Code", "JavaScript"],
    explanation: "ブラウザの開発者ツールにある「Console」タブには、JavaScriptのエラーやログ（console.log()の出力）が表示されます。",
    vocabulary: [
      "console"
    ],
    learningTip: "「console」はもともと「操作盤」を意味する単語。プログラミングでは「ログやエラーを表示する画面」を指します。"
  },
  {
    id: 158,
    english: "Uncaught TypeError: Cannot read properties of undefined",
    japanese: "未捕捉のTypeError：undefinedのプロパティを読み取れません",
    context: ["JavaScript", "ブラウザ", "エラーメッセージ"],
    explanation: "存在しない変数やオブジェクトのプロパティにアクセスしようとした時に発生する、JavaScriptで最も頻出するエラーの一つです。",
    vocabulary: [
      "uncaught",
      "properties"
    ],
    learningTip: "「uncaught」は「catch（捕まえる）」されていない＝try-catchで処理されていないエラーを意味します。「property」は「特性・プロパティ」で、複数形は「properties」。"
  },
  {
    id: 159,
    english: "Set a breakpoint to pause execution",
    japanese: "実行を一時停止するにはブレークポイントを設定してください",
    context: ["VS Code", "JavaScript"],
    explanation: "デバッグ時に、コードの特定の行で処理を一時停止させ、その時点の変数の値などを確認するための機能です。",
    vocabulary: [
      "breakpoint",
      "pause"
    ],
    learningTip: "「breakpoint」は「break（中断する）+ point（地点）」で「中断点」。「pause」は「一時停止する」で、動画再生の「ポーズ」と同じ単語です。"
  },
  {
    id: 160,
    english: "Step over this line of code",
    japanese: "このコード行をステップオーバーする",
    context: ["VS Code"],
    explanation: "デバッグ中に、現在の行を実行して次の行に進む操作です。関数の中には入らずに1行ずつ進めます。",
    vocabulary: [
      "step"
    ],
    learningTip: "「step」は「歩み・一歩」が原義で、デバッグでは「1行ずつ処理を進める」という意味になります。「step over（飛び越える）」「step into（中に入る）」のように使い分けます。"
  },
  {
    id: 161,
    english: "Clear the console",
    japanese: "コンソールをクリアする",
    context: ["ブラウザ", "VS Code", "JavaScript"],
    explanation: "Consoleタブに表示されたログやエラーをすべて消去する操作です。",
    vocabulary: [
      "console",
      "clear"
    ],
    learningTip: "#157の「console」と#129の「clear」を組み合わせた表現です。"
  },
  {
    id: 162,
    english: "Cookies are blocked for this site",
    japanese: "このサイトのCookieはブロックされています",
    context: ["ブラウザ", "エラーメッセージ"],
    explanation: "ブラウザの設定により、サイトがCookie（ログイン情報などを保存する小さなデータ）を保存・読み取りできない状態です。",
    vocabulary: [
      "cookie",
      "blocked"
    ],
    learningTip: "「cookie」は「クッキー（お菓子）」と同じ単語で、Webでは「サイトがブラウザに保存する小さなデータ」を指します。「blocked」(#115)は「ブロックされた」。"
  },
  {
    id: 163,
    english: "View page source",
    japanese: "ページのソースを表示",
    context: ["ブラウザ"],
    explanation: "現在表示しているWebページのHTMLコードを表示する機能です。",
    vocabulary: [
      "view",
      "source"
    ],
    learningTip: "「view」は「見る・表示する」。「source」は「源・元」で、プログラミングでは「ソースコード」を指します。"
  },
  {
    id: 164,
    english: "Enable JavaScript to use this site",
    japanese: "このサイトを利用するにはJavaScriptを有効にしてください",
    context: ["ブラウザ", "JavaScript", "エラーメッセージ"],
    explanation: "ブラウザの設定でJavaScriptが無効になっている時に、一部の機能が動作しないことを知らせるメッセージです。",
    vocabulary: [
      "enable"
    ],
    learningTip: "「enable」は「able（できる）」に「en-（〜にする）」がついて「可能にする・有効にする」という意味になります。「disabled」(#812)の反対です。"
  },
  {
    id: 165,
    english: "Reload the page and try again",
    japanese: "ページを再読み込みしてもう一度お試しください",
    context: ["ブラウザ", "エラーメッセージ"],
    explanation: "一時的なエラーが発生した時に、ページを再読み込み（リロード）して解決を試みることを促すメッセージです。",
    vocabulary: [
      "reload",
      "try again"
    ],
    learningTip: "「reload」は「load（読み込む）」に「re-（再び）」がついて「再読み込みする」。「try again」(#135)は「もう一度試す」。"
  },
  {
    id: 166,
    english: "Open the Network tab to inspect requests",
    japanese: "リクエストを調べるにはNetworkタブを開いてください",
    context: ["ブラウザ", "VS Code", "JavaScript"],
    explanation: "ブラウザの開発者ツールの「Network」タブでは、ページが送受信している通信（リクエスト・レスポンス）を確認できます。",
    vocabulary: [
      "network",
      "request"
    ],
    learningTip: "「network」は「ネットワーク・通信網」。「request」は「要求・依頼」で、Web開発では「サーバーへのリクエスト」を意味します。"
  },
  {
    id: 167,
    english: "Simulate a slow network connection",
    japanese: "低速なネットワーク接続をシミュレートする",
    context: ["ブラウザ", "VS Code"],
    explanation: "開発者ツールでは、Wi-Fiが遅い環境を再現してページの表示速度を確認できる機能があります。",
    vocabulary: [
      "simulate",
      "slow"
    ],
    learningTip: "「simulate」は「模擬的に再現する・シミュレートする」。「slow」は「遅い」で、「fast（速い）」の反対語です。"
  },
  {
    id: 168,
    english: "Data is saved in local storage",
    japanese: "データはローカルストレージに保存されます",
    context: ["JavaScript", "ブラウザ"],
    explanation: "ブラウザにデータを保存できる仕組みの一つで、ページを閉じてもデータが保持されます。学習アプリの進捗保存などにも使われます。",
    vocabulary: [
      "local",
      "storage"
    ],
    learningTip: "「local」は「地元の・その場所の」という意味で、「サーバーではなく自分のブラウザ内」を指します。「storage」は「保管・ストレージ」で、「store（保管する）」の名詞形です。"
  },
  {
    id: 169,
    english: "Your session has expired. Please log in again.",
    japanese: "セッションの有効期限が切れました。再度ログインしてください。",
    context: ["Webアプリ", "エラーメッセージ"],
    explanation: "ログイン状態を保持する期間（セッション）が切れた時に表示され、再ログインを求められます。",
    vocabulary: [
      "session",
      "expired"
    ],
    learningTip: "「session」(#53)は「セッション・ログイン中の期間」。「expire（期限が切れる）」の過去分詞「expired」は「期限切れになった」。"
  },
  {
    id: 170,
    english: "Right-click and select 'Inspect'",
    japanese: "右クリックして「検証」を選択してください",
    context: ["ブラウザ", "VS Code"],
    explanation: "ページ上の要素を右クリックすると表示されるメニューから、開発者ツールを開く操作です。",
    vocabulary: [
      "right-click",
      "select"
    ],
    learningTip: "「right-click」は「右クリックする」。「select」は「選択する」で、メニューや一覧から項目を選ぶ時に使われます。"
  },
  {
    id: 171,
    english: "Check the console for error details",
    japanese: "エラーの詳細はコンソールで確認してください",
    context: ["ブラウザ", "JavaScript"],
    explanation: "問題が発生した時に、詳しい情報がConsoleタブに出力されていることを案内するメッセージです。",
    vocabulary: [
      "check",
      "details"
    ],
    learningTip: "「check」は「確認する」。「detail（詳細）」の複数形「details」は「詳細情報」という意味でよく使われます。"
  },
  {
    id: 172,
    english: "This exception was not handled",
    japanese: "この例外は処理されませんでした",
    context: ["JavaScript", "エラーメッセージ"],
    explanation: "プログラム中で発生した予期しない問題（例外）が、try-catchなどで適切に処理されなかったことを示すエラーです。",
    vocabulary: [
      "exception",
      "handled"
    ],
    learningTip: "「exception」は「例外」。「handle（取り扱う・処理する）」の過去分詞「handled」は「処理された」という意味です。"
  },
  {
    id: 173,
    english: "Pause on exceptions",
    japanese: "例外発生時に一時停止する",
    context: ["VS Code", "JavaScript"],
    explanation: "デバッグ時に、エラー（例外）が発生した瞬間に自動で処理を一時停止させる設定です。原因の特定に役立ちます。",
    vocabulary: [
      "pause",
      "exceptions"
    ],
    learningTip: "#159の「pause」と#172の「exception」の複数形「exceptions」を組み合わせた表現です。"
  },
  {
    id: 174,
    english: "Debugging your code step by step",
    japanese: "コードを一行ずつデバッグする",
    context: ["VS Code", "JavaScript"],
    explanation: "ブレークポイントやステップ機能を使って、コードを少しずつ実行しながら問題箇所を見つける作業全体を指します。",
    vocabulary: [
      "debugging",
      "step by step"
    ],
    learningTip: "「debug」は「de-（取り除く）+ bug（虫・不具合）」で「不具合を取り除く」という意味。「step by step」は「一歩ずつ・少しずつ」という熟語です。"
  },

  // ---- バッチ10: Gitブランチ・履歴操作編 (2026-06-13 追加) ----
  {
    id: 175,
    english: "Checkout another branch",
    japanese: "別のブランチをチェックアウトする",
    context: ["Git", "ターミナル", "VS Code"],
    explanation: "VS Codeのソースコントロールやgit checkoutコマンドで、作業対象のブランチを切り替える操作です。",
    vocabulary: [
      "checkout",
      "branch"
    ],
    learningTip: "「checkout」はホテルの「チェックアウト」と同じ単語で、Gitでは「別のブランチに切り替える・取り出す」という意味になります。"
  },
  {
    id: 176,
    english: "Pull the latest changes from the remote repository",
    japanese: "リモートリポジトリから最新の変更を取得する",
    context: ["Git", "ターミナル", "GitHub"],
    explanation: "git pullは、リモートリポジトリの最新の変更をローカルに取り込む（fetch + mergeを行う）コマンドです。",
    vocabulary: [
      "pull",
      "remote",
      "latest"
    ],
    learningTip: "「pull」は「引っ張る・取得する」。「remote」は「遠隔の」で、Gitでは「自分のPC以外にあるリポジトリ」を指します。「latest」は「最新の」。"
  },
  {
    id: 177,
    english: "View the commit history",
    japanese: "コミット履歴を表示する",
    context: ["Git", "ターミナル", "VS Code"],
    explanation: "git logコマンドやVS Codeのタイムライン機能で、過去のコミットの一覧を確認する操作です。",
    vocabulary: [
      "commit",
      "history"
    ],
    learningTip: "「commit」(#23)は「変更を確定して保存すること」。「history」(#129)は「歴史」のほか「履歴」という意味でも使われます。"
  },
  {
    id: 178,
    english: "Show the differences between two commits",
    japanese: "2つのコミット間の差分を表示する",
    context: ["Git", "ターミナル", "VS Code"],
    explanation: "git diffコマンドは、ファイルやコミット間で何が変更されたか（差分）を確認するためのコマンドです。",
    vocabulary: [
      "diff"
    ],
    learningTip: "「diff」は「difference（差・違い）」の略語で、プログラミングでは「変更内容の差分」を意味する専門用語として定着しています。"
  },
  {
    id: 179,
    english: "Revert this commit",
    japanese: "このコミットを取り消す",
    context: ["Git", "ターミナル", "GitHub"],
    explanation: "git revertは、指定したコミットの変更を打ち消す新しいコミットを作成する操作です。履歴を消さずに元に戻せます。",
    vocabulary: [
      "revert",
      "commit"
    ],
    learningTip: "「revert」は「re-（再び）+ vert（向ける）」で「元に戻す」という意味。削除ではなく「打ち消すコミットを追加する」点がポイントです。"
  },
  {
    id: 180,
    english: "Amend the last commit",
    japanese: "直前のコミットを修正する",
    context: ["Git", "ターミナル"],
    explanation: "git commit --amendは、直前のコミットの内容（メッセージやファイル）を修正するコマンドです。",
    vocabulary: [
      "amend"
    ],
    learningTip: "「amend」は「修正する・改める」という意味。アメリカ憲法の修正条項を「amendment」と呼ぶのも同じ語源です。"
  },
  {
    id: 181,
    english: "Squash these commits into one",
    japanese: "これらのコミットを1つにまとめる",
    context: ["Git", "GitHub"],
    explanation: "複数の小さなコミットを1つにまとめる操作です。履歴を整理して読みやすくする時に使われます。",
    vocabulary: [
      "squash"
    ],
    learningTip: "「squash」は「押しつぶす」が原義で、スポーツの「スカッシュ」と同じ単語。Gitでは「複数のコミットを押しつぶして1つにする」イメージです。"
  },
  {
    id: 182,
    english: "Cherry-pick a commit from another branch",
    japanese: "別のブランチから特定のコミットだけを取り込む",
    context: ["Git", "ターミナル"],
    explanation: "cherry-pickは、別のブランチにある特定の1コミットだけを現在のブランチに取り込む操作です。",
    vocabulary: [
      "cherry-pick",
      "branch"
    ],
    learningTip: "「cherry-pick」は「さくらんぼを選んで摘む」が原義で、「良いものだけを選び取る」という意味の熟語です。"
  },
  {
    id: 183,
    english: "Delete this branch",
    japanese: "このブランチを削除する",
    context: ["Git", "GitHub", "ターミナル"],
    explanation: "不要になったブランチを削除する操作です。マージ済みのブランチを整理する時によく行われます。",
    vocabulary: [
      "delete",
      "branch"
    ],
    learningTip: "「delete」は「削除する」という基本動詞。「branch」(#29)は「ブランチ・枝（開発の分岐）」です。"
  },
  {
    id: 184,
    english: "Rename the current branch",
    japanese: "現在のブランチの名前を変更する",
    context: ["Git", "ターミナル"],
    explanation: "現在作業中のブランチの名前を変更する操作です。",
    vocabulary: [
      "branch"
    ],
    learningTip: "「rename」(#51)は「名前を変更する」。「current」は「現在の」という意味の形容詞です。"
  },
  {
    id: 185,
    english: "Create a new branch from main",
    japanese: "mainから新しいブランチを作成する",
    context: ["Git", "GitHub", "ターミナル"],
    explanation: "mainブランチを元に、新しい作業用ブランチを作る操作です。機能追加やバグ修正の作業を分離するために使われます。",
    vocabulary: [
      "create",
      "branch"
    ],
    learningTip: "「create」は「作成する」。「from ~」は「〜から」という起点を表す前置詞で、「branch from main」は「mainから分岐したブランチ」という意味になります。"
  },
  {
    id: 186,
    english: "Merge conflict: both modified",
    japanese: "マージコンフリクト：両方が変更されています",
    context: ["Git", "ターミナル", "エラーメッセージ"],
    explanation: "同じファイルの同じ部分を異なるブランチで両方変更した時に発生するコンフリクト表示です。手動で解決する必要があります。",
    vocabulary: [
      "merge",
      "conflict",
      "modified"
    ],
    learningTip: "「modify（変更する）」の過去分詞「modified」は「変更された」。「both modified」は「両方が変更した」ことを示し、コンフリクトの典型的な原因です。"
  },
  {
    id: 187,
    english: "Resolve the merge conflict",
    japanese: "マージコンフリクトを解決する",
    context: ["Git", "ターミナル", "VS Code"],
    explanation: "コンフリクトが起きた箇所を編集して、どちらの変更を残すかを決める作業です。",
    vocabulary: [
      "resolve",
      "merge"
    ],
    learningTip: "「resolve」(#83)は「解決する・特定する」。「merge conflict」は「マージの際に起きる衝突」を指す決まった表現です。"
  },
  {
    id: 188,
    english: "Your branch is up to date with 'origin/main'",
    japanese: "あなたのブランチは 'origin/main' と同期しています",
    context: ["Git", "ターミナル"],
    explanation: "ローカルブランチがリモートの最新状態と一致していることを示すメッセージです。",
    vocabulary: [
      "up to date",
      { term: "origin", meaning: "オリジン（リモートリポジトリの別名。通常 GitHub を指す）" }
    ],
    learningTip: "「up to date」(#146)は「最新の状態・同期済み」。「origin」(#31)はGitでリモートリポジトリの標準的な別名として使われます。"
  },
  {
    id: 189,
    english: "git blame shows who changed this line",
    japanese: "git blameはこの行を誰が変更したかを表示する",
    context: ["Git", "ターミナル"],
    explanation: "各行を最後に変更した人とコミットを調べるコマンドです。バグの原因を調査する時に使われます。",
    vocabulary: [
      "blame"
    ],
    learningTip: "「blame」は「責める・非難する」という意味の単語ですが、Gitでは単に「変更履歴を追跡する」コマンドの名前として使われています。"
  },
  {
    id: 190,
    english: "Fetch the latest changes without merging",
    japanese: "マージせずに最新の変更を取得する",
    context: ["Git", "ターミナル"],
    explanation: "git fetchは、リモートの最新情報をローカルに取得しますが、現在の作業内容には反映（マージ）しないコマンドです。",
    vocabulary: [
      "fetch",
      "without",
      "latest"
    ],
    learningTip: "「fetch」は「取ってくる」。「without」は「〜なしで」という前置詞で、「without merging」は「マージすることなしに」という意味です。"
  },
  {
    id: 191,
    english: "This branch has diverged from the remote",
    japanese: "このブランチはリモートから分岐しています",
    context: ["Git", "ターミナル"],
    explanation: "ローカルとリモートの両方に、互いにないコミットがある状態です。pushする前にpullやmergeが必要になることが多いです。",
    vocabulary: [
      "branch",
      "diverged"
    ],
    learningTip: "「diverge」は「分岐する・それぞれ別の方向に進む」という動詞。過去分詞「diverged」は「分岐した」という意味です。"
  },
  {
    id: 192,
    english: "Force push (use with caution)",
    japanese: "強制プッシュ（注意して使用してください）",
    context: ["Git", "ターミナル", "GitHub"],
    explanation: "--forceオプションを付けたpushは、リモートの履歴を上書きします。他の人の作業を消してしまう可能性があるため注意が必要です。",
    vocabulary: [
      "force",
      "caution"
    ],
    learningTip: "「force」は「力・強制する」。「caution」は「注意・警告」で、「use with caution（注意して使用する）」はマニュアルなどでよく見る定型表現です。"
  },

  // ---- バッチ11: AIプロンプト・機能編 (2026-06-13 追加) ----
  {
    id: 193,
    english: "Write a clear and specific prompt",
    japanese: "明確で具体的なプロンプトを書く",
    context: ["ChatGPT", "Claude"],
    explanation: "AIへの指示文（プロンプト）の書き方のコツです。明確で具体的なほど、望む回答が得やすくなります。",
    vocabulary: [
      "prompt"
    ],
    learningTip: "「prompt」は「指示・指令」のほか「即座の」という形容詞の意味もあります。AIに与える入力文を指す言葉として定着しています。"
  },
  {
    id: 194,
    english: "This response used 1,200 tokens",
    japanese: "この回答は1,200トークンを使用しました",
    context: ["ChatGPT", "Claude"],
    explanation: "AIは文章を「トークン」という単位に分割して処理します。料金や利用上限はトークン数で計算されることが多いです。",
    vocabulary: [
      { term: "token", meaning: "トークン（AIが文章を処理する際の最小単位）" }
    ],
    learningTip: "「token」はプログラミングの構文解析でも使われる単語ですが、AIでは「文章の処理単位」を指します。"
  },
  {
    id: 195,
    english: "Memory updated",
    japanese: "メモリが更新されました",
    context: ["ChatGPT", "Claude"],
    explanation: "AIがユーザーについて新しい情報を記憶したことを示す通知です。",
    vocabulary: [
      { term: "memory", meaning: "記憶機能（AIが過去の会話の情報を覚えておく機能）" }
    ],
    learningTip: "「memory」はコンピューターの「記憶装置」を指すこともありますが、ここではAIの「会話を覚えておく機能」を指します。"
  },
  {
    id: 196,
    english: "Attach a file to this message",
    japanese: "このメッセージにファイルを添付する",
    context: ["ChatGPT", "Claude"],
    explanation: "画像やPDFなどのファイルをチャットに添付し、その内容についてAIに質問できる機能です。",
    vocabulary: [
      "attach"
    ],
    learningTip: "「attach」は「添付する・取り付ける」。メールの「attachment（添付ファイル）」と同じ語源です。"
  },
  {
    id: 197,
    english: "Generate an image from this description",
    japanese: "この説明文から画像を生成する",
    context: ["ChatGPT", "Claude"],
    explanation: "テキストでの説明（プロンプト）から、AIが画像を作成する機能です。",
    vocabulary: [
      "generate",
      "image"
    ],
    learningTip: "「generate」は「生成する」。「image」は「画像・イメージ」で、日本語でもそのまま使われます。"
  },
  {
    id: 198,
    english: "Use voice mode to talk with the AI",
    japanese: "AIと話すにはボイスモードを使う",
    context: ["ChatGPT", "Claude"],
    explanation: "キーボード入力ではなく、音声でAIと会話できる機能です。",
    vocabulary: [
      "voice"
    ],
    learningTip: "「voice」は「声」。「voice mode」は音声入出力に切り替えるモードを指します。"
  },
  {
    id: 199,
    english: "Search the web for the latest information",
    japanese: "最新の情報をウェブで検索する",
    context: ["ChatGPT", "Claude"],
    explanation: "AIがリアルタイムの情報を取得するために、ウェブ検索を行う機能です。",
    vocabulary: [
      "search"
    ],
    learningTip: "「search」は「検索する」。「search for ~」は「〜を検索する」という形でよく使われます。"
  },
  {
    id: 200,
    english: "Summarize this document",
    japanese: "この文書を要約する",
    context: ["ChatGPT", "Claude"],
    explanation: "長い文書の内容を短くまとめてもらう機能です。",
    vocabulary: [
      "summarize"
    ],
    learningTip: "「summarize」は「summary（要約）」の動詞形で「要約する」という意味です。"
  },
  {
    id: 201,
    english: "Translate this text into Japanese",
    japanese: "このテキストを日本語に翻訳する",
    context: ["ChatGPT", "Claude"],
    explanation: "別の言語のテキストを指定した言語に翻訳してもらう機能です。",
    vocabulary: [
      "translate"
    ],
    learningTip: "「translate A into B」で「AをBに翻訳する」という意味になります。"
  },
  {
    id: 202,
    english: "Adjust the tone of this response",
    japanese: "この回答のトーンを調整する",
    context: ["ChatGPT", "Claude"],
    explanation: "フォーマル・カジュアルなど、回答の言葉遣いの雰囲気（トーン）を変更する機能です。",
    vocabulary: [
      "tone"
    ],
    learningTip: "「tone」は「音色・調子」が原義で、文章では「言葉遣いの雰囲気」を指します。"
  },
  {
    id: 203,
    english: "Set custom instructions for this AI",
    japanese: "このAIにカスタム指示を設定する",
    context: ["ChatGPT", "Claude"],
    explanation: "毎回の会話で前提として伝えたい好みやルールを、あらかじめ設定しておく機能です。",
    vocabulary: [
      "custom",
      "instructions"
    ],
    learningTip: "「custom」は「特別注文の・カスタムの」。「instruction（指示）」の複数形「instructions」は「指示事項・取扱説明」という意味です。"
  },
  {
    id: 204,
    english: "The context window limits how much the AI can remember",
    japanese: "コンテキストウィンドウは、AIが記憶できる量を制限する",
    context: ["ChatGPT", "Claude"],
    explanation: "AIが一度に処理できる文章量の上限を「コンテキストウィンドウ」と呼びます。これを超えると古い会話内容が忘れられます。",
    vocabulary: [
      "context",
      "window"
    ],
    learningTip: "「context」は「文脈」。「window」は「窓」が原義ですが、ここでは「一定の範囲・期間」を指す比喩的な使い方です。"
  },
  {
    id: 205,
    english: "This model may hallucinate facts",
    japanese: "このモデルはもっともらしい誤情報を生成する可能性があります",
    context: ["ChatGPT", "Claude"],
    explanation: "AIが、実際には存在しない情報をもっともらしく生成してしまう現象を「ハルシネーション」と呼びます。",
    vocabulary: [
      "hallucinate",
      "facts"
    ],
    learningTip: "「hallucinate」は「幻覚を見る」という意味の動詞。「fact（事実）」の複数形「facts」と組み合わせて使われています。"
  },
  {
    id: 206,
    english: "Draft an email based on this description",
    japanese: "この説明文をもとにメールの下書きを作成する",
    context: ["ChatGPT", "Claude"],
    explanation: "簡単な指示や要点から、メールや文章の下書きを作成してもらう機能です。",
    vocabulary: [
      "draft"
    ],
    learningTip: "「draft」は「下書き・草案」という名詞ですが、動詞では「下書きする」という意味にもなります。"
  },
  {
    id: 207,
    english: "Summarize the key points in bullet form",
    japanese: "要点を箇条書きでまとめる",
    context: ["ChatGPT", "Claude"],
    explanation: "長い文章を、箇条書き（bullet point）の形式で簡潔にまとめてもらう指示です。",
    vocabulary: [
      "bullet",
      "summarize"
    ],
    learningTip: "「bullet」は「弾丸」が原義ですが、文書では「・」のような箇条書きの記号（bullet point）を指します。"
  },
  {
    id: 208,
    english: "Paste your code here",
    japanese: "ここにコードを貼り付けてください",
    context: ["ChatGPT", "Claude", "Claude Code"],
    explanation: "コピーしたコードやテキストを入力欄に貼り付ける操作です。",
    vocabulary: [
      "paste"
    ],
    learningTip: "「paste」は「貼り付ける」。「copy and paste（コピー&ペースト）」は日本語でもそのまま使われる表現です。"
  },
  {
    id: 209,
    english: "Download this response as a file",
    japanese: "この回答をファイルとしてダウンロードする",
    context: ["ChatGPT", "Claude"],
    explanation: "AIの回答をテキストファイルなどの形式で保存できる機能です。",
    vocabulary: [
      "download"
    ],
    learningTip: "「download」(#135)は「ダウンロードする」という基本動詞です。"
  },
  {
    id: 210,
    english: "Read this response aloud",
    japanese: "この回答を音声で読み上げる",
    context: ["ChatGPT", "Claude"],
    explanation: "AIの回答を音声で読み上げてもらう機能です。",
    vocabulary: [
      "aloud"
    ],
    learningTip: "「aloud」は「声に出して」という副詞。「read aloud（音読する）」は学校の英語でもよく使われる表現です。"
  },

  // ---- バッチ12: VS Codeエディタ操作編 (2026-06-13 追加) ----
  {
    id: 211,
    english: "Insert a code snippet",
    japanese: "コードスニペットを挿入する",
    context: ["VS Code"],
    explanation: "よく使うコードのパターンを、短いキーワードから展開して入力する機能です。",
    vocabulary: [
      "snippet"
    ],
    learningTip: "「snippet」は「切れ端・断片」が原義で、プログラミングでは「再利用可能な短いコードの塊」を指します。"
  },
  {
    id: 212,
    english: "Increase indent",
    japanese: "インデントを増やす",
    context: ["VS Code"],
    explanation: "コードの行頭の空白（インデント）を増やして、階層構造を見やすくする操作です。",
    vocabulary: [
      "indent"
    ],
    learningTip: "「indent」は「字下げ」を意味する動詞・名詞です。コードの読みやすさに直結する重要な要素です。"
  },
  {
    id: 213,
    english: "Place multiple cursors to edit at once",
    japanese: "複数のカーソルを置いて一度に編集する",
    context: ["VS Code"],
    explanation: "Alt+クリックなどで複数の場所にカーソルを置き、同時に同じ編集を行える機能です。",
    vocabulary: [
      "cursor",
      "multiple"
    ],
    learningTip: "「cursor」は「点滅する入力位置を示す印」。「multiple」は「複数の」という意味の形容詞です。"
  },
  {
    id: 214,
    english: "Split the editor into two columns",
    japanese: "エディタを2列に分割する",
    context: ["VS Code"],
    explanation: "1つの画面を左右（または上下）に分割して、複数のファイルを同時に表示する機能です。",
    vocabulary: [
      "split",
      "columns"
    ],
    learningTip: "「split」は「分割する」。「column（列・縦の区分）」の複数形「columns」は「列」という意味です。"
  },
  {
    id: 215,
    english: "Open the Command Palette",
    japanese: "コマンドパレットを開く",
    context: ["VS Code"],
    explanation: "Ctrl+Shift+Pなどで開く、VS Codeのすべての機能をキーワード検索して実行できる入力欄です。",
    vocabulary: [
      "palette"
    ],
    learningTip: "「palette」は画家が絵の具を並べる「パレット」が原義。VS Codeでは「コマンドの一覧から選べる場所」を指します。"
  },
  {
    id: 216,
    english: "Change your keyboard shortcuts (keybindings)",
    japanese: "キーボードショートカット（キーバインディング）を変更する",
    context: ["VS Code"],
    explanation: "特定の操作に割り当てられたキーの組み合わせを、自分用にカスタマイズする設定です。",
    vocabulary: [
      "keybindings"
    ],
    learningTip: "「keybinding」は「key（キー）+ binding（結びつけること）」で「キーの割り当て」という意味です。"
  },
  {
    id: 217,
    english: "Switch to a dark theme",
    japanese: "ダークテーマに切り替える",
    context: ["VS Code"],
    explanation: "エディタの配色（明るい/暗い）を変更する設定です。長時間の作業で目の疲れを軽減するため、ダークテーマが人気です。",
    vocabulary: [
      "theme"
    ],
    learningTip: "「theme」は「主題・テーマ」のほか、見た目の配色デザイン全体を指す言葉としても使われます。"
  },
  {
    id: 218,
    english: "Zoom in to increase font size",
    japanese: "ズームインして文字サイズを大きくする",
    context: ["VS Code", "ブラウザ"],
    explanation: "画面全体やエディタの文字を拡大・縮小する操作です。",
    vocabulary: [
      "zoom",
      "font"
    ],
    learningTip: "「zoom in」は「拡大する」、「zoom out」は「縮小する」。「font」(#202)は「フォント・書体」です。"
  },
  {
    id: 219,
    english: "Go to line 42",
    japanese: "42行目に移動する",
    context: ["VS Code"],
    explanation: "指定した行番号にカーソルを移動する機能です。長いファイルで特定の場所を探す時に便利です。",
    vocabulary: [
      "line"
    ],
    learningTip: "「line」は「線」のほか、コードでは「行」を意味する基本語です。"
  },
  {
    id: 220,
    english: "Toggle word wrap",
    japanese: "ワードラップを切り替える",
    context: ["VS Code"],
    explanation: "長い行を画面幅で折り返して表示するかどうかを切り替える設定です。",
    vocabulary: [
      "toggle",
      "wrap"
    ],
    learningTip: "「toggle」は「オンとオフを切り替える」という動詞。「wrap」は「包む・折り返す」で、「word wrap」は「単語の折り返し」という意味です。"
  },
  {
    id: 221,
    english: "Find and replace in this file",
    japanese: "このファイル内で検索と置換を行う",
    context: ["VS Code"],
    explanation: "特定の文字列を検索し、別の文字列に一括で置き換える機能です。",
    vocabulary: [
      "find",
      "replace"
    ],
    learningTip: "「find」は「見つける・検索する」。「replace」(#113)は「置き換える」で、「Find and Replace」は定番のセット表現です。"
  },
  {
    id: 222,
    english: "Syntax highlighting makes code easier to read",
    japanese: "シンタックスハイライトはコードを読みやすくする",
    context: ["VS Code"],
    explanation: "コードの構文要素（変数名、文字列、コメントなど）を色分けして表示する機能です。",
    vocabulary: [
      "highlight",
      "syntax"
    ],
    learningTip: "「highlight」は「強調する・目立たせる」。「syntax」(#43)は「構文・文法」で、組み合わせて「構文の色分け表示」を意味します。"
  },
  {
    id: 223,
    english: "Fold this function",
    japanese: "この関数を折りたたむ",
    context: ["VS Code"],
    explanation: "関数やブロックの内容を一時的に隠して、コードの全体構造を見やすくする機能です。",
    vocabulary: [
      "fold"
    ],
    learningTip: "「fold」は「折る・折りたたむ」。紙を折る動作と同じ単語が使われています。"
  },
  {
    id: 224,
    english: "Show the outline of this file",
    japanese: "このファイルのアウトラインを表示する",
    context: ["VS Code"],
    explanation: "ファイル内の関数やクラスなどの構造を一覧表示する機能です。",
    vocabulary: [
      "outline"
    ],
    learningTip: "「outline」は「輪郭・概要」を意味し、文書では「全体の構成」を示す言葉として使われます。"
  },
  {
    id: 225,
    english: "Toggle the sidebar",
    japanese: "サイドバーの表示を切り替える",
    context: ["VS Code"],
    explanation: "ファイル一覧などが表示される画面左側のサイドバーを表示・非表示にする操作です。",
    vocabulary: [
      "sidebar",
      "toggle"
    ],
    learningTip: "「sidebar」は「side（側面）+ bar（棒・帯）」で「側面に表示される領域」を意味します。"
  },
  {
    id: 226,
    english: "Open a new panel",
    japanese: "新しいパネルを開く",
    context: ["VS Code"],
    explanation: "ターミナルや出力結果などが表示される、画面下部のエリア（パネル）を開く操作です。",
    vocabulary: [
      "panel"
    ],
    learningTip: "「panel」は「区切られた区画・操作盤」を意味する単語です。"
  },
  {
    id: 227,
    english: "Switch between open tabs",
    japanese: "開いているタブを切り替える",
    context: ["VS Code", "ブラウザ"],
    explanation: "複数のファイル（またはページ）をタブとして開き、その間を切り替える操作です。",
    vocabulary: [
      "tab"
    ],
    learningTip: "「tab」は「タブ・つまみ」が原義で、ファイルの「見出し」のように使われます。"
  },
  {
    id: 228,
    english: "Save this workspace",
    japanese: "このワークスペースを保存する",
    context: ["VS Code"],
    explanation: "開いているフォルダや設定の組み合わせを「ワークスペース」として保存し、後で再現できるようにする機能です。",
    vocabulary: [
      "workspace"
    ],
    learningTip: "「workspace」は「work（仕事）+ space（空間）」で「作業空間」という意味です。"
  },

  // ---- バッチ13: ターミナル基本コマンド編 (2026-06-13 追加) ----
  {
    id: 229,
    english: "List the files in the current directory",
    japanese: "現在のディレクトリ内のファイルを一覧表示する",
    context: ["ターミナル"],
    explanation: "lsコマンド（Windowsではdir）で、今いる場所にあるファイルやフォルダの一覧を表示する操作です。",
    vocabulary: [
      "list",
      "current"
    ],
    learningTip: "「list」は「一覧・リスト」の動詞形で「一覧表示する」。「current」は「現在の」という意味の形容詞です。"
  },
  {
    id: 230,
    english: "Change to the home directory",
    japanese: "ホームディレクトリに移動する",
    context: ["ターミナル"],
    explanation: "cdコマンドで、自分専用のフォルダ（ホームディレクトリ）に移動する操作です。",
    vocabulary: [
      "home",
      "directory"
    ],
    learningTip: "「home」は「家」のほか、コンピューターでは「ユーザーごとの専用フォルダ」を指します。「cd」だけで実行するとホームに移動します。"
  },
  {
    id: 231,
    english: "Remove this file permanently",
    japanese: "このファイルを完全に削除する",
    context: ["ターミナル", "ファイル操作"],
    explanation: "rmコマンドでファイルを削除する操作です。ごみ箱を経由せず完全に削除されるため、注意が必要です。",
    vocabulary: [
      "remove",
      "permanently"
    ],
    learningTip: "「remove」は「取り除く・削除する」。「permanent（永久的な）」に「-ly」がついた「permanently」は「永久に・完全に」という意味です。"
  },
  {
    id: 232,
    english: "Create a new directory",
    japanese: "新しいディレクトリを作成する",
    context: ["ターミナル"],
    explanation: "mkdirコマンドで、新しいフォルダを作成する操作です。",
    vocabulary: [
      "create",
      "directory"
    ],
    learningTip: "「create」(#185)は「作成する」。「directory」は「フォルダ」の技術的な呼び名です。"
  },
  {
    id: 233,
    english: "This command takes an optional argument",
    japanese: "このコマンドは省略可能な引数を取る",
    context: ["ターミナル"],
    explanation: "コマンドに渡すことができる追加情報（引数）の中には、必須ではなく省略できるものもあります。",
    vocabulary: [
      "argument",
      "optional"
    ],
    learningTip: "「argument」は「主張・論争」という意味もありますが、プログラミングでは「関数やコマンドに渡す値」を指します。「optional」は「option（選択）」に「-al」がついた形容詞で「省略可能な・任意の」という意味です。"
  },
  {
    id: 234,
    english: "Use the --help flag to see all options",
    japanese: "すべてのオプションを見るには --help フラグを使う",
    context: ["ターミナル"],
    explanation: "コマンドの後ろに付ける「--」で始まる指定を「フラグ」または「オプション」と呼びます。--helpは使い方を表示する代表的なフラグです。",
    vocabulary: [
      "flag",
      "options"
    ],
    learningTip: "「flag」は「旗」が原義で、「目印として付ける指定」を意味します。「option（選択肢）」の複数形「options」は「設定項目一覧」です。"
  },
  {
    id: 235,
    english: "Redirect the output to a file",
    japanese: "出力をファイルにリダイレクトする",
    context: ["ターミナル"],
    explanation: "コマンドの実行結果（標準出力）を、画面に表示する代わりにファイルへ書き込む操作です。「>」記号を使います。",
    vocabulary: [
      "output",
      "redirect"
    ],
    learningTip: "「redirect」は「re-（再び）+ direct（向ける）」で「向きを変える・転送する」。「output」は「出力」で、「input」(#101)の反対語です。"
  },
  {
    id: 236,
    english: "Exit the program",
    japanese: "プログラムを終了する",
    context: ["ターミナル"],
    explanation: "実行中のプログラムやセッションを終了させる操作です。",
    vocabulary: [
      "exit"
    ],
    learningTip: "「exit」は「出口・退出する」という意味。ビルの「EXIT」サインと同じ単語です。"
  },
  {
    id: 237,
    english: "Set an environment variable",
    japanese: "環境変数を設定する",
    context: ["ターミナル", "Windows"],
    explanation: "PATHなど、OS全体やシェル全体で使われる設定値（環境変数）を設定する操作です。",
    vocabulary: [
      "environment",
      "variable"
    ],
    learningTip: "「environment」は「環境」。「variable」は「変化するもの」＝「変数」を意味し、数学のxやyと同じ概念です。"
  },
  {
    id: 238,
    english: "Run this command with administrator privileges",
    japanese: "このコマンドを管理者権限で実行する",
    context: ["ターミナル", "Windows", "PowerShell"],
    explanation: "通常のユーザー権限では実行できない操作を行うために、管理者権限（administrator privileges）でコマンドを実行する必要があります。Windowsでは「管理者権限」、Mac/Linuxでは「sudo」がこれに近い概念です。",
    vocabulary: [
      "administrator",
      "privileges"
    ],
    learningTip: "「administrator」は「管理者」。「privilege（特権・権限）」の複数形「privileges」は「特権・権限一式」を指します。"
  },
  {
    id: 239,
    english: "Create an alias for this command",
    japanese: "このコマンドのエイリアスを作成する",
    context: ["ターミナル"],
    explanation: "長いコマンドに短い別名（エイリアス）を付けて、簡単に呼び出せるようにする設定です。",
    vocabulary: [
      "alias"
    ],
    learningTip: "「alias」は「別名・あだ名」という意味の単語で、英語の人名にもよく使われます。"
  },
  {
    id: 240,
    english: "Check which shell you are using",
    japanese: "使用しているシェルを確認する",
    context: ["ターミナル"],
    explanation: "bash、zsh、PowerShellなど、コマンドを実行するためのプログラム（シェル）の種類を確認する操作です。",
    vocabulary: [
      "shell",
      "check"
    ],
    learningTip: "「shell」は「貝殻・外殻」が原義で、OSの中核（カーネル）を「覆う」プログラムであることからこの名前が付きました。"
  },
  {
    id: 241,
    english: "List all running processes",
    japanese: "実行中のプロセスをすべて一覧表示する",
    context: ["ターミナル", "Windows"],
    explanation: "現在PC上で動いているプログラム（プロセス）の一覧を表示する操作です。問題のあるプログラムを見つける時に使います。",
    vocabulary: [
      "list",
      "process"
    ],
    learningTip: "「list」(#229)と「process」(#108)はそれぞれ既出の単語の組み合わせです。"
  },
  {
    id: 242,
    english: "Kill this process",
    japanese: "このプロセスを強制終了する",
    context: ["ターミナル"],
    explanation: "応答しなくなったプログラムなどを、強制的に終了させる操作です。",
    vocabulary: [
      "kill",
      "process"
    ],
    learningTip: "「kill」は「殺す」という意味の単語ですが、プログラミングでは「プロセスを強制終了する」という意味で日常的に使われます。"
  },
  {
    id: 243,
    english: "Print the current working directory",
    japanese: "現在の作業ディレクトリを表示する",
    context: ["ターミナル"],
    explanation: "pwdコマンドで、今自分がどのフォルダにいるかを表示する操作です。",
    vocabulary: [
      "print",
      "working"
    ],
    learningTip: "「print」は「印刷する」だけでなく「画面に表示する」という意味でも使われます。「working」は「work（働く）」の-ing形で「作業中の」という形容詞です。"
  },
  {
    id: 244,
    english: "Make this file executable",
    japanese: "このファイルを実行可能にする",
    context: ["ターミナル"],
    explanation: "chmod +xコマンドなどで、ファイルにプログラムとして実行する権限を与える操作です。",
    vocabulary: [
      "executable"
    ],
    learningTip: "「executable」は「execute（実行する）」に「-able（できる）」がついた形容詞で「実行可能な」という意味です。"
  },
  {
    id: 245,
    english: "Pipe the output of one command into another",
    japanese: "あるコマンドの出力を別のコマンドに渡す",
    context: ["ターミナル"],
    explanation: "「|」記号を使って、1つのコマンドの結果を別のコマンドへの入力として渡す操作です。",
    vocabulary: [
      "pipe",
      "output"
    ],
    learningTip: "「pipe」は「土管・パイプ」が原義で、データの流れを「パイプでつなぐ」イメージから名付けられました。"
  },
  {
    id: 246,
    english: "Show your command history",
    japanese: "コマンドの履歴を表示する",
    context: ["ターミナル"],
    explanation: "これまでに実行したコマンドの一覧を表示する操作です。bashの`history`コマンドやPowerShellの`Get-History`などで確認できます。",
    vocabulary: [
      "history"
    ],
    learningTip: "「history」(#129)はAIチャットの「会話履歴」だけでなく、ターミナルでも「これまで実行したコマンドの履歴」という意味で使われます。"
  },

  // ---- バッチ14: GitHub PR・CI/CD編 (2026-06-13 追加) ----
  {
    id: 247,
    english: "Open a pull request",
    japanese: "プルリクエストを開く",
    context: ["GitHub", "Git"],
    explanation: "変更内容をレビューしてもらうために、プルリクエスト（PR）を作成する操作です。",
    vocabulary: [
      "open",
      "pull request"
    ],
    learningTip: "「open」は「開く」。「pull request」(#32)は「変更を取り込んでほしいという依頼」を意味します。"
  },
  {
    id: 248,
    english: "Add a label to this issue",
    japanese: "このイシューにラベルを追加する",
    context: ["GitHub"],
    explanation: "イシューやPRに「bug」「enhancement」などの色付きタグ（ラベル）を付けて分類する機能です。",
    vocabulary: [
      "label"
    ],
    learningTip: "「label」は「ラベル・札」が原義で、ここでは「分類のための印」を意味します。"
  },
  {
    id: 249,
    english: "Set a milestone for this issue",
    japanese: "このイシューにマイルストーンを設定する",
    context: ["GitHub"],
    explanation: "複数のイシューやPRを「リリースv1.0」のような目標（マイルストーン）にまとめて、進捗を管理する機能です。",
    vocabulary: [
      "milestone"
    ],
    learningTip: "「milestone」は「里程標（道路に立つ距離の目印）」が原義で、「重要な節目・目標地点」を意味します。"
  },
  {
    id: 250,
    english: "This GitHub Actions workflow failed",
    japanese: "このGitHub Actionsのワークフローは失敗しました",
    context: ["GitHub", "エラーメッセージ"],
    explanation: "コードのプッシュなどをきっかけに自動実行される一連の処理（ワークフロー）が、エラーで止まったことを示します。",
    vocabulary: [
      "workflow",
      "failed"
    ],
    learningTip: "「workflow」は「work（作業）+ flow（流れ）」で「作業の流れ・手順」。「failed」は「失敗した」という意味です。"
  },
  {
    id: 251,
    english: "The build is in progress",
    japanese: "ビルドは進行中です",
    context: ["GitHub", "ターミナル"],
    explanation: "ソースコードを実行可能な形式に変換する処理（ビルド）が、まだ完了していないことを示します。",
    vocabulary: [
      "build",
      "in progress"
    ],
    learningTip: "「build」は「組み立てる・構築する」が原義で、プログラミングでは「ソースコードからプログラムを作る作業」を指します。「in progress」は「進行中」という熟語です。"
  },
  {
    id: 252,
    english: "All tests passed",
    japanese: "すべてのテストに合格しました",
    context: ["GitHub", "ターミナル"],
    explanation: "コードが正しく動作するかを確認する自動テストが、すべて成功したことを示します。",
    vocabulary: [
      "test",
      "passed"
    ],
    learningTip: "「test」は「試験・検査」。「pass（合格する）」の過去形「passed」は「合格した」という意味で、試験のスコア表示などでも使われます。"
  },
  {
    id: 253,
    english: "Deploy this branch to production",
    japanese: "このブランチをプロダクション環境にデプロイする",
    context: ["GitHub", "ターミナル"],
    explanation: "開発・テストが済んだコードを、実際にユーザーが使う環境（プロダクション環境）に反映する操作です。",
    vocabulary: [
      "deploy",
      "production"
    ],
    learningTip: "「deploy」は「展開する・配備する」が原義で、軍隊の「部隊を展開する」という使い方もあります。「production」は「製造・生産」のほか「本番環境」を指します。"
  },
  {
    id: 254,
    english: "Status checks have not completed yet",
    japanese: "ステータスチェックはまだ完了していません",
    context: ["GitHub"],
    explanation: "PRをマージする前に必須とされる自動テストなどの確認（ステータスチェック）が、まだ終わっていないことを示します。",
    vocabulary: [
      "status",
      "checks"
    ],
    learningTip: "「status」は「状態・状況」。「check（確認）」の複数形「checks」は「一連の確認項目」を意味します。"
  },
  {
    id: 255,
    english: "Leave a comment on this line",
    japanese: "この行にコメントを残す",
    context: ["GitHub", "VS Code"],
    explanation: "コードレビュー中に、特定の行に対して意見や指摘（コメント）を書き込む機能です。",
    vocabulary: [
      "comment"
    ],
    learningTip: "「comment」は「コメント・注釈」。プログラミングでは「コードの説明文」を指すこともありますが、ここでは「レビューでの発言」という意味です。"
  },
  {
    id: 256,
    english: "You were mentioned in a comment",
    japanese: "コメントであなたがメンションされました",
    context: ["GitHub"],
    explanation: "「@ユーザー名」の形でコメント中に名前を呼ばれた（メンションされた）ことを知らせる通知です。",
    vocabulary: [
      "mention",
      "comment"
    ],
    learningTip: "「mention」は「言及する・名前を出す」という動詞。SNSの「メンション」と同じ使われ方です。"
  },
  {
    id: 257,
    english: "Turn on notifications for this repository",
    japanese: "このリポジトリの通知をオンにする",
    context: ["GitHub"],
    explanation: "リポジトリで新しいIssueやPRが作られた時などに、通知を受け取る設定をオンにする操作です。",
    vocabulary: [
      "notification"
    ],
    learningTip: "「notification」は「notify（知らせる）」の名詞形で「通知」という意味です。"
  },
  {
    id: 258,
    english: "This pull request is still a draft",
    japanese: "このプルリクエストはまだドラフトです",
    context: ["GitHub"],
    explanation: "まだレビュー準備が整っていないPRを「ドラフト（Draft PR）」として作成し、後でレビュー依頼に切り替えることができます。",
    vocabulary: [
      "draft",
      "pull request"
    ],
    learningTip: "「draft」(#206)は「下書き・草案」。「still」は「まだ」という意味の副詞です。"
  },
  {
    id: 259,
    english: "Add a description for this pull request",
    japanese: "このプルリクエストに説明を追加する",
    context: ["GitHub"],
    explanation: "PRが「何を・なぜ変更したか」を説明する文章を書く欄です。レビュアーが内容を理解しやすくなります。",
    vocabulary: [
      "description"
    ],
    learningTip: "「description」は「describe（説明する）」の名詞形で「説明・記述」という意味です。"
  },
  {
    id: 260,
    english: "Use a template for new issues",
    japanese: "新しいイシューにテンプレートを使う",
    context: ["GitHub"],
    explanation: "イシュー作成時に表示される、あらかじめ用意されたフォーマット（テンプレート）です。報告内容を整理しやすくなります。",
    vocabulary: [
      "template"
    ],
    learningTip: "「template」は「型・手本」を意味する単語で、書類や文書のひな形を指す時にも使われます。"
  },
  {
    id: 261,
    english: "This branch is blocked from merging",
    japanese: "このブランチはマージがブロックされています",
    context: ["GitHub", "エラーメッセージ"],
    explanation: "設定されたルール（レビュー必須、テスト合格必須など）を満たしていないため、マージができない状態です。",
    vocabulary: [
      "blocked",
      "merge"
    ],
    learningTip: "「be blocked from ~ing」は「〜することを妨げられている」という形。「blocked」(#115)と「merge」(#26)の組み合わせです。"
  },
  {
    id: 262,
    english: "A required reviewer has not approved yet",
    japanese: "必須のレビュアーがまだ承認していません",
    context: ["GitHub"],
    explanation: "マージに必須と設定された担当者（レビュアー）からの承認が、まだ得られていないことを示します。",
    vocabulary: [
      "required",
      "reviewer"
    ],
    learningTip: "「required」は「必要な」。「review（確認する）」する人を「reviewer（レビュアー）」と呼びます。"
  },
  {
    id: 263,
    english: "Deployment pending review",
    japanese: "このデプロイはレビュー待ちです",
    context: ["GitHub"],
    explanation: "本番環境への反映（デプロイ）の前に、担当者の承認が必要で、まだその承認が行われていない状態です。",
    vocabulary: [
      "pending",
      "approval"
    ],
    learningTip: "「pending」は「保留中の・未決定の」という意味の形容詞。「approve（承認する）」の名詞形「approval」は「承認」です。"
  },
  {
    id: 264,
    english: "Close this pull request without merging",
    japanese: "マージせずにこのプルリクエストを閉じる",
    context: ["GitHub"],
    explanation: "レビューの結果、PRの変更を取り込まずに、PR自体を閉じる操作です。",
    vocabulary: [
      "close",
      "pull request"
    ],
    learningTip: "「close」は「閉じる」で、#120の「closed（閉じられた）」の動詞形です。"
  },

  // ---- バッチ15: Windows設定・通知編 (2026-06-13 追加) ----
  {
    id: 265,
    english: "Adjust the volume",
    japanese: "音量を調整する",
    context: ["Windows", "設定画面"],
    explanation: "スピーカーやヘッドフォンの音の大きさ（音量）を変更する操作です。",
    vocabulary: [
      "volume"
    ],
    learningTip: "「volume」は「量・体積」のほか「音量」という意味でも使われます。"
  },
  {
    id: 266,
    english: "Adjust the screen brightness",
    japanese: "画面の明るさを調整する",
    context: ["Windows", "設定画面"],
    explanation: "ディスプレイの明るさ（輝度）を変更する設定です。バッテリー消費にも影響します。",
    vocabulary: [
      "brightness"
    ],
    learningTip: "「brightness」は「bright（明るい）」の名詞形で「明るさ」という意味です。"
  },
  {
    id: 267,
    english: "Change your display settings",
    japanese: "ディスプレイの設定を変更する",
    context: ["Windows", "設定画面"],
    explanation: "画面の解像度や配置（複数モニターの並び順）などを変更する設定画面です。",
    vocabulary: [
      "display"
    ],
    learningTip: "「display」は「表示する」という動詞のほか、「画面・モニター」という名詞としても使われます。"
  },
  {
    id: 268,
    english: "Pin this app to the taskbar",
    japanese: "このアプリをタスクバーにピン留めする",
    context: ["Windows"],
    explanation: "よく使うアプリのアイコンを、画面下部のタスクバーに固定して表示する操作です。",
    vocabulary: [
      "pin",
      "taskbar"
    ],
    learningTip: "「pin」は「ピン・留め具」が原義で、「ピン留めする」という動詞として使われます。「taskbar」は「task（作業）+ bar（帯）」で「作業の帯」です。"
  },
  {
    id: 269,
    english: "Create a desktop shortcut",
    japanese: "デスクトップにショートカットを作成する",
    context: ["Windows", "ファイル操作"],
    explanation: "アプリやファイルに素早くアクセスできるアイコン（ショートカット）をデスクトップに作る操作です。",
    vocabulary: [
      "shortcut"
    ],
    learningTip: "「shortcut」は「short（短い）+ cut（道）」で「近道」が原義です。キーボードの「ショートカットキー」も同じ単語です。"
  },
  {
    id: 270,
    english: "Put your PC to sleep",
    japanese: "PCをスリープ状態にする",
    context: ["Windows"],
    explanation: "電源を完全に切らずに、消費電力を抑えた状態で待機させる機能です。すぐに作業を再開できます。",
    vocabulary: [
      "sleep"
    ],
    learningTip: "「sleep」は「眠る」という基本動詞。「put ~ to sleep」は「〜を眠らせる」という形です。"
  },
  {
    id: 271,
    english: "Sign out of your account",
    japanese: "アカウントからサインアウトする",
    context: ["Windows", "ブラウザ", "Webアプリ"],
    explanation: "現在ログインしているユーザーのセッションを終了する操作です。",
    vocabulary: [
      "sign out",
      "account"
    ],
    learningTip: "「sign out」は「ログアウトする」という意味の熟語。「account」は「アカウント・利用権」です。"
  },
  {
    id: 272,
    english: "Add a printer",
    japanese: "プリンターを追加する",
    context: ["Windows", "設定画面"],
    explanation: "PCに新しいプリンターを認識させ、利用できるようにする設定です。",
    vocabulary: [
      "printer"
    ],
    learningTip: "「printer」は「print（印刷する）」に「-er（する人・もの）」がついた語で「印刷機」という意味です。"
  },
  {
    id: 273,
    english: "Update your graphics driver",
    japanese: "グラフィックドライバーを更新する",
    context: ["Windows"],
    explanation: "画面表示を担当するハードウェア（グラフィックボード）を制御するソフトウェア（ドライバー）を最新版に更新する操作です。",
    vocabulary: [
      "driver",
      "graphics"
    ],
    learningTip: "「driver」は「運転する人」のほか、「ハードウェアをOSが操作するためのソフトウェア」を指します。「graphics」は「グラフィック・画像処理」です。"
  },
  {
    id: 274,
    english: "Turn on the firewall",
    japanese: "ファイアウォールをオンにする",
    context: ["Windows", "設定画面"],
    explanation: "外部からの不正なアクセスをブロックするセキュリティ機能（ファイアウォール）を有効にする設定です。",
    vocabulary: [
      "firewall"
    ],
    learningTip: "「firewall」は「fire（火）+ wall（壁）」で「防火壁」が原義。ネットワークでは「不正な通信を防ぐ壁」を意味します。"
  },
  {
    id: 275,
    english: "Sync your files with OneDrive",
    japanese: "OneDriveとファイルを同期する",
    context: ["Windows", "ファイル操作"],
    explanation: "クラウドストレージとローカルのファイルを自動的に一致させる（同期する）機能です。",
    vocabulary: [
      "sync"
    ],
    learningTip: "「sync」は「synchronize（同期する）」の略語で、複数の場所のデータを同じ状態に保つことを意味します。"
  },
  {
    id: 276,
    english: "Lock your screen",
    japanese: "画面をロックする",
    context: ["Windows"],
    explanation: "離席時などに、パスワードなしでは操作できない状態にする機能です。",
    vocabulary: [
      "lock"
    ],
    learningTip: "「lock」は「鍵をかける」が原義で、「画面を保護する」という意味でも使われます。"
  },
  {
    id: 277,
    english: "Change your wallpaper",
    japanese: "壁紙を変更する",
    context: ["Windows", "設定画面"],
    explanation: "デスクトップの背景画像（壁紙）を変更する設定です。",
    vocabulary: [
      "wallpaper"
    ],
    learningTip: "「wallpaper」は「wall（壁）+ paper（紙）」で、実際の壁紙とデスクトップの背景の両方を指す単語です。"
  },
  {
    id: 278,
    english: "Allow this app to access your microphone",
    japanese: "このアプリにマイクへのアクセスを許可する",
    context: ["Windows", "設定画面", "ブラウザ"],
    explanation: "ビデオ会議アプリなどが、マイク（音声入力装置）を使えるようにするための許可設定です。",
    vocabulary: [
      "allow",
      "microphone"
    ],
    learningTip: "「allow」は「許可する」。「microphone」は「micro（小さい）+ phone（音）」で「マイク」という意味です。"
  },
  {
    id: 279,
    english: "Turn on Bluetooth to connect your headphones",
    japanese: "ヘッドフォンを接続するにはBluetoothをオンにする",
    context: ["Windows", "設定画面"],
    explanation: "ワイヤレスのキーボードやヘッドフォンなどをPCに接続するための無線通信機能です。",
    vocabulary: [
      "bluetooth"
    ],
    learningTip: "「Bluetooth」は北欧の王の名前にちなんで名付けられた技術の名称で、固有名詞としてそのまま使われます。"
  },
  {
    id: 280,
    english: "Enable Airplane mode to turn off all wireless connections",
    japanese: "すべての無線接続をオフにするには機内モードを有効にする",
    context: ["Windows", "設定画面"],
    explanation: "Wi-FiやBluetoothなどの無線通信を一括でオフにするモードです。飛行機内での利用を想定して名付けられました。",
    vocabulary: [
      "airplane"
    ],
    learningTip: "「airplane」は「飛行機」。「airplane mode」は日本語の「機内モード」に相当する表現です。"
  },
  {
    id: 281,
    english: "Manage your notification settings",
    japanese: "通知設定を管理する",
    context: ["Windows", "設定画面"],
    explanation: "どのアプリから通知を受け取るか、通知の表示方法などを設定する画面です。",
    vocabulary: [
      "manage",
      "notification"
    ],
    learningTip: "「manage」は「管理する」。「notification」(#257)は「通知」という意味です。"
  },
  {
    id: 282,
    english: "Restart, sleep, or shut down your PC",
    japanese: "PCを再起動・スリープ・シャットダウンする",
    context: ["Windows"],
    explanation: "PCの電源メニューに表示される、終了方法の選択肢です。",
    vocabulary: [
      "shut down",
      "sleep"
    ],
    learningTip: "「shut down」は「shut（閉じる）+ down（下に）」で「完全に電源を切る」という意味。「sleep」(#270)との違いを覚えておきましょう。"
  },

  // ---- バッチ16: JavaScript配列・CSSレイアウト編 (2026-06-13 追加) ----
  {
    id: 283,
    english: "Loop through each item in the array",
    japanese: "配列の各要素をループ処理する",
    context: ["JavaScript", "VS Code"],
    explanation: "forやforEachなどを使い、配列に含まれる要素を1つずつ順番に処理することです。",
    vocabulary: [
      "loop",
      "array"
    ],
    learningTip: "「loop」は「輪」が原義で、プログラミングでは「同じ処理を繰り返すこと」を意味します。「array」は「整列」が原義で、「複数の値をまとめて並べたデータ構造」を指します。"
  },
  {
    id: 284,
    english: "Use map() to transform each element",
    japanese: "map()を使って各要素を変換する",
    context: ["JavaScript"],
    explanation: "map()は、配列の各要素に処理を適用し、新しい配列を作るメソッドです。",
    vocabulary: [
      "map",
      "transform",
      "element"
    ],
    learningTip: "「map」は「地図」のほか「対応づける」という意味の動詞でもあります。「transform」は「trans-（変える）+ form（形）」で「変形する・変換する」。「element」は「要素・成分」です。"
  },
  {
    id: 285,
    english: "Filter out items that don't match",
    japanese: "条件に一致しない項目を除外する",
    context: ["JavaScript"],
    explanation: "filter()は、配列から条件に合う要素だけを取り出して新しい配列を作るメソッドです。",
    vocabulary: [
      "filter"
    ],
    learningTip: "「filter」は「ろ過装置・フィルター」が原義で、「不要なものを取り除く」イメージの単語です。"
  },
  {
    id: 286,
    english: "Reduce the array to a single value",
    japanese: "配列を1つの値にまとめる",
    context: ["JavaScript"],
    explanation: "reduce()は、配列の全要素を1つの値に集約するメソッドです。合計値の計算などに使われます。",
    vocabulary: [
      "reduce",
      "single"
    ],
    learningTip: "「reduce」は「減らす・まとめる」。「single」は「単一の・1つの」という意味の形容詞です。"
  },
  {
    id: 287,
    english: "Push a new item to the end of the array",
    japanese: "配列の末尾に新しい要素を追加する",
    context: ["JavaScript"],
    explanation: "push()は、配列の最後に新しい要素を追加するメソッドです。",
    vocabulary: [
      { term: "push", meaning: "配列の末尾に要素を追加する" },
      "array"
    ],
    learningTip: "Gitの「push」(#74)は「変更をリモートのサーバーへ送信すること」、JavaScriptの「push」は「配列の末尾に要素を追加すること」。同じ単語ですが、意味はまったく異なります。"
  },
  {
    id: 288,
    english: "pop() removes the last item from the array",
    japanese: "pop()は配列の最後の要素を取り除く",
    context: ["JavaScript"],
    explanation: "pop()は、配列の最後の要素を取り除いて取得するメソッドです。push()と対になる操作です。",
    vocabulary: [
      "pop"
    ],
    learningTip: "「pop」は「ポンと飛び出す」イメージの単語で、「最後の要素を取り出す」操作を表します。"
  },
  {
    id: 289,
    english: "This function returns undefined",
    japanese: "この関数はundefinedを返す",
    context: ["JavaScript", "エラーメッセージ"],
    explanation: "関数にreturn文がない、または値を指定せずにreturnした場合、戻り値はundefinedになります。",
    vocabulary: [
      "function",
      "return",
      "undefined"
    ],
    learningTip: "「function」は「機能・関数」。「return」は「戻る・返す」で、「return文」は関数の結果を呼び出し元に返します。"
  },
  {
    id: 290,
    english: "Access a property of this object",
    japanese: "このオブジェクトのプロパティにアクセスする",
    context: ["JavaScript"],
    explanation: "オブジェクトは、名前（キー）と値のペア（プロパティ）の集まりです。ドット記法などでアクセスします。",
    vocabulary: [
      "object",
      "property"
    ],
    learningTip: "「object」は「物・対象」。「property」は「properties」(#158)の単数形で「特性・属性」という意味です。"
  },
  {
    id: 291,
    english: "Use Flexbox to align items",
    japanese: "Flexboxを使って要素を整列させる",
    context: ["CSS", "VS Code"],
    explanation: "CSSのレイアウト手法の一つで、要素を横並びや縦並びに簡単に整列・配置できます。",
    vocabulary: [
      "flexbox",
      "align"
    ],
    learningTip: "「flexbox」は「flexible（柔軟な）+ box（箱）」が由来です。「align」は「align with ~」のように「並べる・整列させる」という意味で使われます。"
  },
  {
    id: 292,
    english: "CSS Grid Layout divides the page into rows and columns",
    japanese: "CSS Grid Layoutはページを行と列に分割する",
    context: ["CSS", "VS Code"],
    explanation: "2次元のグリッド（格子状の構造）でページのレイアウトを組む、CSSのレイアウト手法です。",
    vocabulary: [
      "grid",
      "layout"
    ],
    learningTip: "「grid」は「格子・グリッド」。「layout」は「lay（置く）+ out（外に）」で「配置・レイアウト」という意味です。"
  },
  {
    id: 293,
    english: "Add margin and padding around this box",
    japanese: "この要素の周りにマージンとパディングを追加する",
    context: ["CSS", "VS Code"],
    explanation: "marginは要素の外側の余白、paddingは要素の内側の余白を指すCSSプロパティです。",
    vocabulary: [
      "margin",
      "padding"
    ],
    learningTip: "「margin」は「マージン・余白・縁」。「padding」は「pad（詰め物をする）」の名詞形で「詰め物・内側の余白」という意味です。"
  },
  {
    id: 294,
    english: "Add a border around this element",
    japanese: "この要素に枠線を追加する",
    context: ["CSS", "VS Code"],
    explanation: "要素の周囲に線（枠線）を表示するCSSプロパティです。",
    vocabulary: [
      "border",
      "element"
    ],
    learningTip: "「border」は「境界・縁」。「element」は「要素」で、HTMLの個々のタグを指します。"
  },
  {
    id: 295,
    english: "Add a hover effect to this button",
    japanese: "このボタンにホバー効果を追加する",
    context: ["CSS", "VS Code"],
    explanation: "マウスカーソルを要素の上に乗せた時（ホバー時）に、見た目を変化させる効果です。",
    vocabulary: [
      "hover",
      "effect"
    ],
    learningTip: "「hover」は「ホバリングする・上空にとどまる」が原義で、「マウスを上に置く」状態を指します。「effect」は「効果」です。"
  },
  {
    id: 296,
    english: "Animate this element with CSS transitions",
    japanese: "CSSトランジションでこの要素をアニメーションさせる",
    context: ["CSS", "VS Code"],
    explanation: "色や大きさなどのCSSプロパティの変化を、滑らかに（アニメーション）見せるための機能です。",
    vocabulary: [
      "animate",
      "transition"
    ],
    learningTip: "「animate」は「動かす・命を吹き込む」（animal=動物と同じ語源）。「transition」は「移行・推移」で、「ある状態から別の状態への変化」を表します。"
  },
  {
    id: 297,
    english: "Add a class to this element",
    japanese: "この要素にクラスを追加する",
    context: ["HTML", "CSS", "VS Code"],
    explanation: "HTML要素に「class」属性を付けて、CSSやJavaScriptから複数の要素をまとめて指定できるようにします。",
    vocabulary: [
      "class",
      "element"
    ],
    learningTip: "「class」は「種類・部類」が原義で、CSSでは「同じスタイルを適用するグループ」を指します。"
  },
  {
    id: 298,
    english: "Set the attribute value",
    japanese: "属性の値を設定する",
    context: ["HTML", "JavaScript"],
    explanation: "HTML要素が持つ追加情報（属性）に値を設定する操作です。例えばimg要素のsrc属性などです。",
    vocabulary: [
      "attribute"
    ],
    learningTip: "「attribute」は「属性・特質」を意味し、HTMLでは「タグの中に書かれる追加の情報」を指します。"
  },
  {
    id: 299,
    english: "Make sure this page is responsive on mobile devices",
    japanese: "このページがモバイル端末でレスポンシブになっているか確認する",
    context: ["CSS", "ブラウザ"],
    explanation: "画面の大きさに応じてレイアウトが自動的に調整される（レスポンシブな）デザインになっているかを確認することです。",
    vocabulary: [
      "responsive"
    ],
    learningTip: "「responsive」(#215)は「反応の良い・レスポンシブな」という意味で、Web開発では「画面サイズに対応する」という意味で使われます。"
  },
  {
    id: 300,
    english: "Center this element with auto margins",
    japanese: "オートマージンでこの要素を中央に配置する",
    context: ["CSS", "VS Code"],
    explanation: "margin: 0 auto;のように、左右のマージンを自動（auto）にすることで、要素を中央に配置するテクニックです。",
    vocabulary: [
      "center",
      "auto"
    ],
    learningTip: "「center」は「中心・中央に置く」。「auto」は「自動の」という意味で、「ブラウザに値を自動計算させる」設定を表します。"
  }

  // ---- バッチ 17 以降はここに追記 ----
];
