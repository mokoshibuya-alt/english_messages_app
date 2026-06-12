// ============================================================
// 用語データ（重要単語の意味・カタカナ発音を一元管理）
//
// data.js の各例文の vocabulary は、ここに定義したキーを参照する。
// 同じ単語でも例文によって意味が違う場合は、
// data.js 側で { term: "キー", meaning: "この例文専用の意味" } のように上書きできる。
//
// 新しい単語を追加する時は、ここに1件追記するだけでよい。
// ============================================================

const terms = {
  "permission":    { meaning: "許可・権限",                                   katakana: "パーミッション" },
  "denied":        { meaning: "拒否された（deny の過去分詞）",                  katakana: "デナイド" },
  "such":          { meaning: "そのような",                                   katakana: "サッチ" },
  "directory":     { meaning: "フォルダ（フォルダの技術的な呼び名）",            katakana: "ディレクトリ" },
  "command":       { meaning: "コマンド・命令",                                katakana: "コマンド" },
  "found":         { meaning: "見つかった（find の過去分詞）",                  katakana: "ファウンド" },
  "delete":        { meaning: "削除する",                                     katakana: "デリート" },
  "action":        { meaning: "操作・行動",                                   katakana: "アクション" },
  "undone":        { meaning: "取り消された（undo の過去分詞）",                katakana: "アンダン" },
  "changes":       { meaning: "変更点・差分",                                 katakana: "チェンジズ" },
  "staged":        { meaning: "ステージングされた（コミット準備完了の状態）",     katakana: "ステージド" },
  "commit":        { meaning: "変更を確定して保存すること",                     katakana: "コミット" },
  "working tree":  { meaning: "作業ツリー（現在編集中のファイル群）",            katakana: "ワーキングツリー" },
  "clean":         { meaning: "きれいな・変更なしの状態",                       katakana: "クリーン" },
  "merge":         { meaning: "マージ・統合（2つのブランチを合体させること）",    katakana: "マージ" },
  "conflict":      { meaning: "競合・衝突",                                   katakana: "コンフリクト" },
  "detected":      { meaning: "検出された（detect の過去分詞）",                katakana: "ディテクテッド" },
  "branch":        { meaning: "ブランチ・枝（開発の分岐）",                     katakana: "ブランチ" },
  "up to date":    { meaning: "最新の状態・同期済み",                          katakana: "アップトゥデート" },
  "origin":        { meaning: "リモートリポジトリの別名（通常 GitHub）",         katakana: "オリジン" },
  "pull request":  { meaning: "プルリクエスト（コードのレビュー・統合依頼）",     katakana: "プルリクエスト" },
  "merged":        { meaning: "マージされた・統合された",                       katakana: "マージド" },
  "successfully":  { meaning: "正常に・成功して",                              katakana: "サクセスフリー" },
  "rate limit":    { meaning: "利用制限・レートリミット（単位時間あたりの上限）", katakana: "レートリミット" },
  "exceeded":      { meaning: "超えた・超過した（exceed の過去分詞）",          katakana: "エクシーデッド" },
  "access token":  { meaning: "アクセストークン（認証用の文字列）",              katakana: "アクセストークン" },
  "expired":       { meaning: "期限切れになった（expire の過去分詞）",          katakana: "エクスパイアード" },
  "trust":         { meaning: "信頼する・信用する",                            katakana: "トラスト" },
  "authors":       { meaning: "作成者・著者（author の複数形）",                katakana: "オーサーズ" },
  "unsaved":       { meaning: "保存されていない",                              katakana: "アンセーブド" },
  "lost":          { meaning: "失われた（lose の過去形）",                      katakana: "ロスト" },
  "syntax":        { meaning: "構文・文法（コードのルール）",                    katakana: "シンタックス" },
  "unexpected":    { meaning: "予期しない・予想外の",                           katakana: "アンエクスペクテッド" },
  "token":         { meaning: "トークン（コードの最小単位の記号や単語）",         katakana: "トークン" },
  "properties":    { meaning: "プロパティ・属性（オブジェクトの持つ情報）",       katakana: "プロパティーズ" },
  "undefined":     { meaning: "未定義・値が設定されていない状態",                katakana: "アンディファインド" },
  "extension":     { meaning: "拡張機能（VS Code に追加できる機能）",            katakana: "エクステンション" },
  "incompatible":  { meaning: "互換性がない・相性が悪い",                       katakana: "インコンパティブル" },
  "update":        { meaning: "アップデート・更新",                            katakana: "アップデート" },
  "available":     { meaning: "利用可能な・入手可能な",                         katakana: "アベイラブル" },
  "apply":         { meaning: "適用する",                                     katakana: "アプライ" },
  "session":       { meaning: "セッション（ログイン中の一連の接続期間）",        katakana: "セッション" },
  "invalid":       { meaning: "無効な・不正な",                                katakana: "インバリッド" },
  "credentials":   { meaning: "認証情報（ID やパスワードなど）",                 katakana: "クレデンシャルズ" },
  "allow":         { meaning: "許可する・許す",                                katakana: "アロウ" },
  "run":           { meaning: "実行する・走らせる",                            katakana: "ラン" },
  "matching":      { meaning: "一致する・マッチする",                          katakana: "マッチング" },
  "results":       { meaning: "結果・検索結果",                               katakana: "リザルツ" },
  "connection":    { meaning: "接続・コネクション",                            katakana: "コネクション" },
  "timed out":     { meaning: "タイムアウトした（時間切れになった）",            katakana: "タイムドアウト" },
  "untracked":     { meaning: "追跡されていない・管理されていない",              katakana: "アントラックド" },
  "include":       { meaning: "含める・含む",                                 katakana: "インクルード" },
  "detached":      { meaning: "切り離された・分離された",                       katakana: "デタッチド" },
  "HEAD":          { meaning: "現在チェックアウトしているポイント（Git の用語）", katakana: "ヘッド" },
  "state":         { meaning: "状態",                                        katakana: "ステート" },
  "conversation":  { meaning: "会話・やり取り",                               katakana: "コンバーセーション" },
  "permanently":   { meaning: "永久に・恒久的に",                              katakana: "パーマネントリー" },
  "deleted":       { meaning: "削除された",                                   katakana: "デリーテッド" },
  "limit":         { meaning: "制限・上限",                                   katakana: "リミット" },
  "reached":       { meaning: "達した・到達した（reach の過去形）",             katakana: "リーチト" },
  "fetch":         { meaning: "取得する・取ってくる",                          katakana: "フェッチ" },
  "failed":        { meaning: "失敗した（fail の過去形）",                      katakana: "フェイルド" },
  "push":          { meaning: "プッシュ（ローカルの変更をリモートに送ること）",   katakana: "プッシュ" },
  "repository":    { meaning: "リポジトリ（コードの保管場所）",                  katakana: "リポジトリ" },
  "uncommitted":   { meaning: "未コミットの・まだ確定されていない",              katakana: "アンコミッテッド" },
  "stash":         { meaning: "スタッシュ（変更を一時的に退避させること）",       katakana: "スタッシュ" },
  "overwrite":     { meaning: "上書きする",                                   katakana: "オーバーライト" },
  "existing":      { meaning: "既存の・現在ある",                              katakana: "イグジスティング" },
};

// 大文字小文字を無視してキーを解決する
function getTerm(key) {
  return terms[key] || terms[key.toLowerCase()] || null;
}
