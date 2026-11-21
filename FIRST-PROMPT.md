このリポジトリは、2026-11-25 の JICA 国家測量研修（国家測量事業計画・管理）で hfu が話す講義デッキ「UN Open GIS Initiative — Your expertise, your connections, and one small test」です。別の Claude セッションで作った構造版（31枚、付録を除くと30枚）を引き継ぎます。

まず次の順に読んでください。
1. CLAUDE.md（規則と決定事項）
2. jica-un-open-gis-2026.md（正本）
3. docs/jica-un-open-gis-2026-open-items.md（未解決。0-0 が最新）
4. docs/jica-un-open-gis-2026-build-report.md（これまでの変更の履歴）
5. src/data.js、src/build.js

最初の作業（この順で、1つ終えるごとに報告）:
A. 環境の移行。build.js の /mnt/skills 依存と、/home/claude の出力先を直し、tools/ とリポジトリ内のパスで、ビルドと検証が通る状態にする。ビルドした PPTX が、引き継ぎ前の deck/jica-un-open-gis-2026-structure.pptx と、スライドの文字・ノートで同じになることを確認する（差分があれば報告）。
B. 検証の自動化。CLAUDE.md の「検証」を、1つのスクリプトにする（node か python）。PDF化と目視用のコンタクトシートの作成まで。
C. 私（hfu）の判断を待たずにできる仕上げ。はみ出し、行間、文字サイズ、ノートの誤字。内容は変えない。

やってはいけないこと:
- 正本にない事実を足さない。素材が無い所は PLACEHOLDER のままにする。
- ラオスのワークショップの結果、Hill Cot の画像、実話・失敗談を作らない。
- パスワード、64桁の鍵、管理用ホストなどを、コード、ログ、コミットメッセージに書かない。
- 実機や研修用ネットワークに接続しない。

Wi-Fi パスワードはスライドに載せる決定済みです。リポジトリは private の前提です。
作業の区切りごとに、日本語で短く報告してください。判断が必要な点は、選択肢と推奨を添えて聞いてください。
