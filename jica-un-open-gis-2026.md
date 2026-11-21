# JICA課題別研修「国家測量事業計画・管理」
# UN Open GIS Initiative講義 KCAIM

- file: `jica-un-open-gis-2026.md`
- status: working canonical artifact
- updated: 2026-11-02
- owner: hfu
- purpose: 2026-11-25の3コマ講義を設計し、最終的にClaude Codeへ渡すPPTX生成プロンプトを作る

# /system-record/scope

- status: normative
- primary-user: hfu
- downstream-agent: PPTXを生成するClaude Code
- in-scope:
  - 2026-11-25の3コマ全体と各コマの設計
  - UN Open GIS Initiative、DWG7、OSS、オープンデータの扱い
  - 藤村の実話・失敗談の選定
  - Raspberry Piの接続確認
  - 同日午前の上村講義との重複回避と接続
  - 2026-11-26の松澤講義への接続
  - 2026-12-14のOpenStreetMap講義への緩やかな接続
  - スライド案、講師ノート、演習、想定Q&A
  - Claude Code向けPPTX生成プロンプト
- out-of-scope:
  - 参加国の国家能力の比較評価
  - 参加国の個別案件の講評
  - 上村講義、松澤講義、OpenStreetMap講義そのものの再設計
  - UN Open GIS Initiative全体の百科事典的整理
  - KCAIM一般形式の確定

# /authorities/decision-priority

- status: normative
- priority:
  1. このスレッドでhfuが明示的に最終決定した事項
  2. 2026年度研修日程表及び研修環境に関する提供資料
  3. 松澤太郎の2026年講義資料
  4. 研修員9か国の基礎情報
  5. 過去の企画メモ
  6. エージェントが導いた設計上の解釈
- rule: 過去の企画メモは参考資料であり、現スレッドの最終決定を上書きしない。
- rule: 最終決定済み事項は、明示的な再検討指示がない限り再提案しない。

# /assets/course-context

- status: verified
- source: （各部等講師とりまとめ版）2026国家測量・研修日程_20260908.xlsx
- program: JICA課題別研修「国家測量事業計画・管理」
- audience: 海外の政府機関等に所属する地理空間情報の専門職9名
- participating-countries:
  - フィジー
  - ガボン
  - ラオス
  - ナイジェリア
  - パプアニューギニア
  - ルワンダ
  - シエラレオネ
  - 東ティモール
  - トーゴ
- lecture:
  - title: UN Open GIS Initiative
  - subtitle: Your expertise, your connections, and one small test
  - lecturer: hfu
  - date: 2026-11-25
  - language: English
  - interpretation: none
  - sessions:
    - session: 3
      time: 13:00-14:00
    - session: 4
      time: 14:15-15:15
    - session: 5
      time: 15:30-16:30
  - breaks:
    - 14:00-14:15
    - 15:15-15:30
- previous-session:
  - date: 2026-11-25
  - sessions: 1-2
  - time: 09:30-11:45
  - subject: 国土地理院の地理空間情報のWeb提供技術
  - lecturer: 上村海人
- related-sessions:
  - date: 2026-11-26
    sessions: 1-5
    time: 09:30-16:30
    lecturer: 松澤太郎
    organization: 株式会社Geolonia
    subject: 地理空間情報のWeb提供技術
    language: English
  - date: 2026-12-14
    sessions: 1-5
    time: 09:30-16:30
    lecturer: 古橋大地
    organization: マップコンシェルジュ株式会社
    subject: OpenStreetMap
    language: English

# /assets/training-environment

- status: [verified, volatile]
- device: Raspberry Pi 4 Model B
- memory: 4 GB
- use-model:
  - 研修員へ恒久配布しない。
  - 藤村・松澤の2日間の実習環境として使う。
  - 実質的に電源は入れたままとし、帰国までは利用可能。
  - 希望者への譲渡可能性を過去に案内したことはあるが、実績はない。
- participant-client:
  - Windows PC
  - PowerShell
  - web browser
- network:
  - participant and RPi must be on the same network
  - seminar SSID in Matsuzawa material: vectortiles
  - mDNS may fail
  - IP-address fallback is required
- access:
  - protocol: SSH
  - command-pattern: ssh niroku@<your-ip>
  - IP address, URL, and port concepts are required
  - command entry is required, primarily by copy and paste
- authentication:
  - a common plaintext password is shown in the classroom
  - the same password is used across all seminar RPis
  - rationale: isolated, short-lived, two-day training use
  - security-control-needed: password and live network details must not be embedded in publicly reusable materials
- collaboration:
  - work is nominally individual
  - peer assistance is common and desirable
- external-management:
  - Wi-Fi and IP information can be checked remotely
  - remote administration can reduce on-site preparation
  - live credentials and network observations require controlled handling
- inventory-observation:
  - international division has retained RPi stock due to discontinuation of routine distribution
  - this is operational background, not a lecture topic

# /assets/matsuzawa-2026-material

- status: stated
- interpretation-limit: 教材本文に記載された案であり、2026-11-26に実際に採用する確定運用とはまだ確認されていない。
- source:
  - https://github.com/smellman/jica_2026/blob/main/jica-seminar-2026.md
  - user-provided full text in current conversation
- title: Creating and Distributing Tiled Maps
- delivery:
  - English
  - five sessions on 2026-11-26
  - command-line tools used
  - participants open published instructions in a browser and copy commands into PowerShell or the Linux shell
- agenda:
  - System setup
  - What is a tiled map?
  - Software and data used
  - Create tiled maps
  - Design tiled maps
  - Distribute tiled maps
- setup-flow:
  1. Connect PC to SSID vectortiles.
  2. Open PowerShell.
  3. SSH to `niroku@<your ip>`.
  4. Install `niroku` from `https://unvt.github.io/niroku/install.sh` using `sudo`.
  5. Clone `https://github.com/smellman/jica_scripts.git`.
  6. Run `sudo make` in the system directory.
- software:
  - GDAL/OGR 3.10 commands
  - Tippecanoe
  - Charites
  - nano
  - make
  - caddy
  - tileserver-gl-light
- data:
  - Global Map Sri Lanka
  - PLATEAU aerial photographs
  - OpenStreetMap sample data
- outputs:
  - raster XYZ tiles
  - vector tiles
  - MBTiles
  - PMTiles
  - MapLibre style editing
  - local web delivery through ports 80 and 8000
- architecture-constraint:
  - Raspberry Pi 4
  - ARM64/aarch64 only for the seminar repository
- network-dependencies:
  - GitHub
  - unvt.github.io
  - package repositories and installer dependencies
  - source data sites
- license:
  - seminar presentation: CC BY 4.0
  - OSM imagery attribution requirements apply

# /decision-support/current-decisions

- status: normative
- decision: working
- official-title: UN Open GIS Initiative
- subtitle: Your expertise, your connections, and one small test
- primary-concepts:
  - connect
  - test
- concept-ownership:
  - connect: 藤村自身の基本的な特徴。人、組織、技術、現場、利用を接続する。
  - test: UN Open GIS Initiativeの基本的な特徴。完全な制度や正解を待たず、試して学ぶ。
- core-message:
  - Trust your expertise.
  - Connect it with others.
  - Start with one small test.
- narrative-engine:
  - connect creates the possibility
  - test turns the possibility into learning
  - learning creates the next connection
- overall-structure:
  - 第1コマ: Your expertise
  - 第2コマ: Connect
  - 第3コマ: Test
- participant-framing: 研修員は「途上国の受講生」ではなく、それぞれの国で地理空間情報を担う専門職として扱う。
- primary-intent: 各国の専門職が、自分の専門性を信頼し、他者と接続し、小さな実験を始められる状態を作る。
- emotional-objective: positive vibration
- case-handling-rule: 参加国の案件を、当該国研修員への予告なく個別講評する構成にしない。
- failure-story-rule: 失敗談は自己顕示または自己卑下として語らず、何を学び、誰とつながり、何を残せたかに着地させる。
- delivery-language: English without interpretation

# /decision-support/connect-test-backbone

- status: [derived, normative]
- decision: working

## Core logic

この講義の背骨は、専門性を起点として、connectとtestを循環させることである。

```text
expertise
  -> connect
  -> test
  -> observe and learn
  -> improve the connection
  -> next test
```

## Meaning of connect

- 人と人をつなぐ。
- 地理空間専門性を、都市計画、防災、行政、開発、OSS等の専門性へつなぐ。
- データを利用へつなぐ。
- 一日の講義を、翌日の技術実習へつなぐ。
- 公式制度とコミュニティを混同せず、接続可能な境界を作る。

## Meaning of test

- 完全な国家システムを縮小再現することではない。
- 何が動き、何が動かず、誰が必要かを観察すること。
- 失敗を避けるためではなく、次の判断材料を安価かつ安全に得ること。
- UN Open GIS Initiativeの姿勢を、RPi、OSS、限定地域、限定属性の実践で示すこと。

## Relationship

connectだけでは、良い関係の紹介で終わる。testだけでは、技術デモで終わる。接続した人々が一緒に試し、試した結果から次の接続を作ることが、講義全体の運動である。

# /scenarios/00-overall-lecture

- status: [derived, normative]
- decision: working

## Session progression

### Session 1: Your expertise

- time: 13:00-14:00
- role: 専門性を認識する
- target-feeling: I already have something valuable to contribute.

### Session 2: Connect

- time: 14:15-15:15
- role: 専門性を他者と組み合わせる
- target-feeling: I do not have to solve everything alone.

### Session 3: Test

- time: 15:30-16:30
- role: 接続を小さな実験へ変える
- target-feeling: I can begin something.

## Emotional progression

Respect -> Recognition -> Connection -> Honest difficulty -> Test -> Shared success -> Invitation

## Final message

> Trust your expertise.  
> Connect it with others.  
> Start with one small test.

# /scenarios/01-your-expertise

- status: [derived, normative]
- decision: working
- time: 13:00-14:00
- central-question: What can one geospatial professional do?

## Working movements

1. Welcome as peers: 5 minutes
2. What geospatial professionals contribute beyond maps: 10 minutes
3. Hill Cot, from 5 cm ortho to mapped information: 12 minutes
4.藤村の経路は計画されたものではなく、接続の累積だった: 12 minutes
5. Short reflection and closing message: 11 minutes
6. Questions and buffer: 10 minutes

# /scenarios/02-connect

- status: [derived, normative]
- decision: working
- time: 14:15-15:15
- central-question: What becomes possible when professionals connect across boundaries?

## Working movements

1. Why connection matters: 8 minutes
2. Minimum explanation of UN Open GIS Initiative and DWG7: 10 minutes
3. Laos building-level survey as a connection case: 12 minutes
4. Sierra Leone ortho workflow as a chain of expertise: 8 minutes
5. Failure stories, what did not connect and what remained: 12 minutes
6. Transition from connect to test: 5 minutes
7. Buffer: 5 minutes

# /scenarios/03-test

- status: [derived, normative]
- decision: working
- time: 15:30-16:30
- central-question: What can we test today, and what can you begin after returning home?

## Revised purpose

第3コマは技術講義ではなく、翌朝に松澤講義を確実に開始できるよう、研修員、PC、RPi、ネットワーク、認証、SSH接続を一度つなぎ、問題を見えるようにする接続試験である。

## Working movements

1. What a small test is: 7 minutes
2. Preview of Matsuzawa's next-day workflow: 5 minutes
3. Explain SSID, IP address, SSH, URL, and port: 8 minutes
4. Individual connection test with peer assistance: 25 minutes
5. Record readiness and unresolved issues: 5 minutes
6. One person, one real need, one small test: 5 minutes
7. Closing message and buffer: 5 minutes

## Minimum participant outcome

- PCをSSID `vectortiles`へ接続できる。
- 自分のRPiの識別子とIPアドレスを知る。
- PowerShellを開ける。
- `ssh niroku@<your-ip>` の意味を理解し、実行できる。
- 教室内で提示された一時パスワードを入力できる。
- RPiのシェルへ到達できたことを確認できる。
- ブラウザで `http://<your-ip>/` または確認用ページへ到達できる。
- URLとポート番号の関係を最低限理解する。
- 接続できないとき、電源、SSID、IP、SSH、ブラウザのどこで止まったかを示せる。

## Minimum machine outcome

- Raspberry Pi 4B 4 GBが起動済み。
- 参加者PCと同一ネットワーク上にある。
- SSHが有効。
- `niroku`ユーザーでログイン可能。
- 11月26日に必要な外部サイトへ到達可能。
- ホストごとのIPアドレスが確定し、参加者へ安全に配付可能。
- 接続試験用HTTPページまたは既知の確認方法がある。
- 未解決障害が記録され、翌朝までの担当が決まっている。

# /relationships/kamimura-exchange-2026-11-06

- status: [verified, open]
- date: 2026-11-06
- duration: 30 minutes
- participants:
  - hfu
  - 上村海人
- context: 上村は現時点で情報交換に積極的ではないように見えるが、内容が熟すまで部長へ説明しないという職位上の慎重さである可能性がある。
- normative-interpretation: 相手の動機を決めつけず、30分を要求ではなく接続試験として使う。

## Objectives

1. 同日午前の上村講義が何を扱うかを把握する。
2. 藤村講義と重複する説明を避ける。
3. 午前の講義から午後へ引き取れる用語、図、成果を特定する。
4. 翌日の松澤講義へつながる三日間の流れを共有する。
5. 上村から確定していない事項を無理に引き出さず、後日更新可能な接点を作る。

## Suggested 30-minute agenda

1. 0-5分: 藤村側から3コマの背骨を簡潔に説明する。
2. 5-15分: 上村講義の到達点、扱う技術、デモ、研修員の反応を確認する。
3. 15-22分: 重複と接続点を整理する。
4. 22-27分: RPi・松澤講義との関係で共有すべき情報を確認する。
5. 27-30分: 決まったこと、未定のこと、次回更新方法を確認する。

## Questions

- 午前終了時に研修員が理解していることは何か。
- tile、URL、HTTP、Web Mercator、vector tile等のどこまで扱うか。
- 研修員がブラウザ操作または端末操作を行うか。
- 午前の内容から午後に引用または再利用可能な図はあるか。
- 午後に繰り返さない方がよい説明は何か。
- 11月26日の松澤講義へ、午前の講義はどこを橋渡しするか。
- 11月6日時点で未確定の事項は何か。いつ更新可能か。

## Relational rule

「完成した説明を求める」のではなく、「現時点で確かなこと、まだ未定なこと、次に確認すること」を分けて共有する。これはKCAIMのstatus分離とも整合する。

# /relationships/matsuzawa-session-interface

- status: derived
- relationship-purpose: 11月25日の藤村講義を、11月26日09:30開始の松澤講義へ接続する。

## Revised start condition based on actual material

共有された教材本文には、PowerShellからSSH接続し、`niroku`を導入し、教材リポジトリをcloneし、`sudo make`で環境を構築する手順が記載されている。ただし、これは教材上の記載であり、2026-11-26に実際にこの手順を採用する確定プランかは未確認である。前日の完了条件は、松澤本人への確認後に確定する。

### Required before 09:30 on 2026-11-26

1. 参加者PCがSSID `vectortiles`へ接続できる。
2. 各参加者のRPiが同じネットワーク上で起動している。
3. 各参加者に確実なIPアドレスまたは確実に解決できる名前が割り当てられている。
4. PowerShellからSSH接続できる。
5. `niroku`ユーザーとsudoが機能する。
6. 共通パスワードが教室内で安全に提示できる。
7. RPiがARM64/aarch64で、松澤教材の前提と整合する。
8. GitHub、unvt.github.io、必要なパッケージ配布元、教材データ配布元へ到達できる。
9. ディスク空き容量と時刻同期に重大な問題がない。
10. ブラウザから各RPiのIPへアクセスできる。

### Provisional: not required before 09:30

- `niroku`の事前インストール
- `jica_scripts`の事前clone
- GDAL、Tippecanoe、Charites、caddy等の完成済み環境
- 全実習データの事前生成

教材本文上は、これらは松澤講義の「System setup」に含まれる。ただし、本番でも同じ構成を採用するかは未確認である。前日にどこまで準備するかは、松澤本人への確認と実機試験を経て決定する。

## Critical dependencies to test in advance

- DNS resolution
- HTTPS access
- GitHub clone
- `wget` from unvt.github.io
- package installation and repository availability
- sudo with the training account
- ARM64/aarch64 compatibility
- ports 80 and 8000 not blocked on the local network
- browser access from participant PCs to RPi addresses
- adequate SD-card space for software, source data, generated raster tiles, MBTiles, PMTiles, and temporary files

## Learning division

- 藤村:
  - connectとtestの意味
  - SSID、IP、SSH、URL、portの最低限
  - 接続試験
  - 問題箇所の可視化
  - 翌日の期待を作る
- 松澤:
  - Linux環境の構築
  - tileの技術概念
  - GDAL、Tippecanoe、Charites、make、caddy、tileserver-gl-light
  - raster/vector tile生成
  - style編集
  - Web配信

## Handover at 16:30 on 2026-11-25

- RPi readiness matrix
- participant-to-device mapping
- IP address roster in controlled form
- SSH success/failure
- browser success/failure
- external dependency test result
- unresolved issue and owner
- list of concepts taught: SSID, IP, SSH, URL, port
- list of concepts deliberately left to Matsuzawa

# /decision-support/security-aware-sharing

- status: [derived, normative]
- objective: 情報セキュリティのセンスを保ちつつ、実地利便性と翌年度の再現性を最大化する。

## Classification

### Public and reusable

PPTX、公開Markdown、JICA共有資料へ入れてよいもの:

- 接続手順
- PowerShellの起動方法
- `ssh niroku@<your-ip>` のようなプレースホルダー付きコマンド
- URL、port、SSHの概念説明
- トラブルシュートの順序
- SSIDが恒久的な機微情報でないと判断された場合のSSID
- 公開リポジトリURL
- 講義後に無効化される前提の一般的手順

### Session-specific controlled information

公開・再利用資料へ焼き込まないもの:

- 実際の共通SSHパスワード
- 当日のIPアドレス一覧
- 外部管理接続の詳細
- 内部ネットワーク構成
- 講義終了後も有効な認証情報
- 個体ごとの障害情報で内部構成を推測できるもの

## Recommended artifact split

1. **Public deck**
   - `<your-ip>`、`<password shown in class>`等のプレースホルダーを使う。
   - JICAが自由に共有しても安全な内容だけを持つ。

2. **Session card**
   - 当日だけ配る1枚物または画面表示。
   - device ID、IP、必要なら一時パスワードを含む。
   - 講義終了後に回収または期限切れ扱いとする。

3. **Generated readiness roster**
   - リモート確認結果から自動または半自動で生成する。
   - 翌年は再生成し、手書き文書を正本にしない。
   - KCAIMには作成手順と安全な参照先だけを記録する。

4. **Sanitized annual record**
   - 使用機種、OS、手順、問題、教訓を残す。
   - パスワードと当日IPは削除する。

## Password controls

共通平文パスワードの教室提示は、短期・隔離された実習環境では運用上理解可能だが、次を満たすべきである。

- 他用途で使わない専用パスワード。
- 講義前に設定し、講義後に変更またはイメージ初期化する。
- 公開PPTX、GitHub、JICA長期配付物に残さない。
- 画面共有・録画・写真へ意図せず残らないよう注意する。
- 外部管理用認証と同じものを使わない。
- 可能なら研修ネットワーク外からSSHへ到達できないようにする。

## IP and mDNS controls

- mDNSは便利な補助経路であり、唯一の接続方法にしない。
- 固定または予約済みDHCPのIP一覧を当日配付できるようにする。
- 参加者ごとのdevice IDとIPを対応づける。
- IP変更時に再生成できる手順を残す。
- 公開資料には実IPを焼き込まない。

# /decision-support/rpi-use-model

- status: derived
- conclusion: RPiは持続可能な国家システムの推奨機材でも、研修後の配布物でもなく、2日間の共有実験室である。
- lecture-framing:
  - A Raspberry Pi is a temporary laboratory.
  - Its value is not ownership; its value is that everyone can connect, test, break, observe, and rebuild in the same environment.
- implication:
  - 配布しないことを欠点として説明しない。
  - 帰国後に同じ機材を購入することを行動目標にしない。
  - 持ち帰るべきものは手順、判断、接続の考え方、公開教材である。
  - 実機譲渡の話は質問された場合の運用説明に留める。

# /decision-support/fujimura-attendance

- status: derived
- recommendation: 翌日の全5コマに同席し、観察者・補助者・講義間インターフェース担当に徹することが望ましい。
- rationale:
  - 接続試験の結果を実地で確認できる。
  - connectからtestへの講義全体の連続性を示せる。
  - SSH、IP、ブラウザ接続の初期トラブルを補助できる。
  - KCAIMへ踏み跡を残せる。
- boundaries:
  - 松澤の説明を先回りしない。
  - 質問を横取りしない。
  - 藤村講義を再開しない。
  - 全障害を一人で抱えない。
- decision: open

# /decision-support/case-use

## Sierra Leone

- status: derived
- primary-session: Session 1
- core-use: 高解像度画像を、使える地理空間情報へ変える専門職の判断。
- message: Professional judgement turns observation into shared information.
- secondary-use: Session 2で取得、処理、図化、利用、保守の専門性の鎖を示す。
- boundary: 5 cm GSDを標準解として薦めず、国や機関を評価しない。

## Laos

- status: derived
- primary-session: Session 2
- core-use: 政府都市計画部署、現地観察、共有語彙、OSM、将来の可視化をconnectした事例。
- secondary-use: Session 3で、一地区、一属性から始めるtestとして扱う。
- message: People can observe the same city, use a shared vocabulary, and improve a shared map together.

## OSM as digital public good

- status: derived
- framing:
  - shared base
  - participatory infrastructure
  - reusable public value
- boundary:
  - 政府地図の代替とは言わない。
  - 権威、品質保証、責任、公開条件の違いを保つ。
  - 12月14日のOSM講義を先取りしすぎない。

# /open-questions/kamimura

- status: open
- due: 2026-11-06
- questions:
  - 午前講義の到達点
  - 午後と重複する用語・説明
  - 午後へ引き取れる図・例
  - 松澤講義との接続
  - 未確定事項と更新時期

# /open-questions/rpi

- status: open
- known:
  - Raspberry Pi 4B 4 GB
  - same-network access
  - PowerShell, browser, SSH
  - mDNS may fail
  - common classroom password
  - individual work with peer support
- unknown:
  - 台数
  - Raspberry Pi OS名・版・ARM64確認
  - SDカード容量と空き容量
  - IP割当方式
  - hostname方式
  - SSH有効化状態
  - `niroku`ユーザーとsudo状態
  - common password lifecycle
  - browser check page
  - outbound access results
  - ports 80 and 8000 reachability
  - spare units and recovery image
  - readiness roster generation method

# /open-questions/matsuzawa

- status: open
- narrowed-questions:
  1. 前日に`niroku`をインストールせず、SSH接続確認までで止める理解でよいか。
  2. 使うRaspberry Pi OSと必要なARM64条件は何か。
  3. 必要なSDカード空き容量はどの程度か。
  4. 当日依存する外部ドメインとパッケージ配布元は何か。
  5. 事前にcloneまたはキャッシュすべきものはあるか。
  6. ports 80 and 8000以外に必要なポートはあるか。
  7. 前日確認用HTTPページを置いてよいか。
  8. 一部端末不調時のペア作業を許容するか。
  9. 藤村に期待する当日の補助範囲は何か。
  10. 終了後に環境を残すか、初期化するか。

# /inventory/next-actions

## Before 2026-11-06

1. 上村との30分情報交換用に、3コマ概要を1ページで示せるようにする。
2. 上村へ聞く質問を5項目以内に絞る。
3. 上村講義との重複候補を仮置きする。

## Before meeting Matsuzawa

1. 上記10問を共有する。
2. 実機1台で松澤資料のsetupから主要演習まで通し試験する。
3. 必要ドメイン、容量、時間、失敗点を記録する。
4. 前日完了条件をSSHとブラウザ接続までとする案を確認する。

## Before 2026-11-25

1. IP/機器対応表を生成する手順を作る。
2. 公開資料と当日限定session cardを分離する。
3. 一時共通パスワードの設定・提示・終了後処理を決める。
4. mDNSとIPの二系統を試験する。
5. readiness matrixを完成する。
6. 予備機、復旧イメージ、ペア作業、講師デモのfallbackを用意する。

## Agent can proceed

1. 上村向け1ページ説明資料の内容案を作る。
2. 第3コマの接続試験手順をスライド単位へ落とす。
3. readiness matrixとsession cardのひな型を作る。
4. Claude Code向けプロンプトに、公開資料へ秘密を埋め込まない規則を追加する。

## Working commitments

1. 公式タイトルと副題
2. connectとtestを基本概念とすること
3. 最終メッセージの三行
4. 研修員を対等な専門職として扱う原則
5. positive vibrationを目的とすること
6. 参加国の案件を予告なく講評しないこと
7. 英語・通訳なしで実施すること
8. 正式時間割

# /acceptance-tests/connect-test

- query: connectとtestは講義全体を一貫して説明できるか。
- expected: 専門性を接続し、小さく試し、学びから次の接続を作る循環として説明できる。
- result: pass

# /acceptance-tests/matsuzawa-start-condition

- query: 松澤講義を翌朝9:30に開始するための条件を説明できるか。
- expected: same network, known IP, PowerShell, SSH, account, password, ARM64, outbound access, browser accessを確認する。niroku等の実インストールは松澤講義へ残す。
- result: partial
- missing: 松澤本人との合意、OS、容量、依存先、ポート、fallback詳細。

# /acceptance-tests/security-aware-sharing

- query: 利便性の高い接続資料を、JICAが再共有しても安全な形で作れるか。
- expected: public deck、session card、generated readiness roster、sanitized annual recordを分離し、パスワードと実IPをpublic deckへ入れない。
- result: pass-at-design-level
- missing: 実際の生成・配付・終了後処理手順。

# /acceptance-tests/session-three

- query: 第3コマが60分で翌日の開始条件を作れるか。
- expected: 20分の説明、25分の個別接続試験、5分の記録、5分の振り返り、5分のバッファ。
- result: partial
- missing: 実機通し試験による所要時間確認。

# /acceptance-tests/generate-pptx-prompt

- query: Claude Code向け包括プロンプトを生成できるか。
- result: partial
- missing:
  - 上村講義との重複整理
  - 松澤本人との開始条件合意
  - RPi実機試験
  - 事例視覚資産
  - スライド単位の構成

# /traces/2026-11-02-connect-test-and-matsuzawa-material

- status: verified
- event: hfuが、藤村の基本特性はconnect、UN Open GIS Initiativeの基本特性はtestと整理した。RPi接続の過去実績・課題と、松澤太郎の2026年講義資料全文を共有した。
- observations:
  - connectとtestが講義の二つの動詞として明確になった。
  - 第3コマの本質はLinux入門ではなく、翌日のための接続試験である。
  - 松澤講義は環境構築自体を学習内容に含むため、前日に完成環境を作ってはならない。
  - 前日はSSH接続、ブラウザ接続、外部依存先、アカウント、ネットワーク、IPの確認までが妥当。
  - mDNS単独依存は避け、IP rosterをfallbackとして持つ必要がある。
  - 公開資料へ当日パスワードと実IPを焼き込むべきではない。
  - 再利用性は秘密の固定ではなく、手順、テンプレート、生成方法を残すことで確保する。
  - RPiは配布物ではなく、2日間の共有実験室として位置づけると講義のtest概念に整合する。
- next-review-trigger:
  - 2026-11-06の上村との情報交換
  - 松澤との開始条件合意
  - RPi実機通し試験


# /traces/2026-11-02-niroku-interpretation-correction

- status: verified
- event: hfuが「松澤さんは本当にnirokuを使うプランか」と問い、教材記載と本番確定プランを区別する必要が明らかになった。
- correction:
  - 共有された2026教材本文には、`niroku`を「this seminarのinstaller」とし、install scriptを実行する手順が明記されている。
  - しかし、教材本文が最新版の本番運用を確定するとは限らない。
  - よって「松澤はnirokuを使う」とverified扱いしてはならず、「教材にはniroku利用案が記載されている」とstated扱いにする。
- lesson: 資料記載、講師の現時点の意図、本番確定運用を分離する。
- next-action: 松澤本人に、2026-11-26もnirokuによる当日セットアップを行うか確認する。

# /open-questions/niroku-use

- status: open
- priority: highest
- query: 2026-11-26の本番で、松澤は`niroku`を使って当日環境構築を行う予定か。
- evidence:
  - 教材本文は`niroku`をseminar installerとして記載している。
  - install script、`jica_scripts` clone、`sudo make`の手順がある。
- unresolved:
  - 教材が本番確定版か。
  - `niroku`を当日導入するか、事前導入するか。
  - install scriptと依存先が本番環境で利用可能か。
  - 前日までにどこまでセットアップすべきか。
- consequence: この問いが解けるまで、Session 3の終了条件はSSH接続確認を中心とする暫定案とする。


# /procedures/30-minute-handover-sprint

- status: normative
- created: 2026-11-02
- purpose: hfuとの約30分の対話で、別エージェントが直ちに講義設計を継続できるKCAIMへ高密度に充実させる。
- principle: 新情報を広く集めるより、次のエージェントが誤読しやすい境界、講義を具体化する実話、直近の確認行動を優先する。

## Definition of done

30分後のKCAIMが、少なくとも次の問いに答えられる状態を目指す。

1. この講義は何を達成するのか。
2. connectとtestは、3コマでどう展開されるか。
3. 各コマで、どの実話を何のために使うか。
4. 失敗談をどのようにpositive vibrationへ着地させるか。
5. 第3コマで研修員は何を実際に行うか。
6. 上村講義、松澤講義、古橋講義とどう接続するか。
7. どの事項がworking decision、verified、stated、derived、open、volatileか。
8. 次のエージェントが、何を決めてよく、何を再検討してはいけないか。
9. Claude Code向けPPTXプロンプトへ進むために、何がまだ不足しているか。

## Time allocation

### 0-3 minutes: Orientation and freeze

- このターンまでのworking decisionsを再確認する。
- 今後30分では、変更理由が生じない限り作業上の前提として扱う。
- 最終成果物の用途を確認する: 別エージェントへの引継ぎであり、PPTX生成そのものではない。

### 3-10 minutes: Story harvesting

各事例について、次の6点だけを聞く。

1. いつ・どこで起きたか。
2. 誰と何をしようとしたか。
3. 藤村の正確な役割は何か。
4. 予想外だったこと、うまくいかなかったことは何か。
5. 何が残り、次に何へつながったか。
6. 講義で使える視覚資料は何か。

優先順位:

1. Hill Cotで5 cmオルソから図化した経験
2. フリータウン／ウォータールーの5 cm GSDドローンオルソへの関与
3. ラオス政府都市計画部署との建物階数調査
4. UN Open GIS InitiativeまたはDWG7の、最も有用な失敗談1件
5. 藤村の専門職としての形成を示す短い実話1件

### 10-16 minutes: Session mapping

- 各実話を、Session 1、2、3のどこに主配置するか決める。
- 各実話について、one-sentence takeawayを英語で決める。
- 事例の重複利用は一文または一枚に制限する。
- 各コマの4～6ムーブメントを確定に近づける。

### 16-21 minutes: Session 3 operational contract

- 研修員が行う接続試験の手順を順番に確定する。
- 公開PPTX、当日session card、readiness rosterを分離する。
- mDNS、IP、SSH、PowerShell、browser、passwordの扱いを決める。
- 前日にどこまで行い、松澤講義へ何を残すかを暫定確定する。
- niroku利用は松澤本人確認待ちとして固定する。

### 21-25 minutes: Interfaces and near-term actions

- 2026-11-06の上村との30分情報交換で聞く質問を最大5問へ絞る。
- 松澤へ聞く質問を最大5問へ絞る。
- 藤村が翌日の松澤講義へ同席する方針を決めるか、決定条件を明示する。

### 25-28 minutes: Acceptance-test review

- メッセージ一貫性
- 3コマの時間適合性
- 事例配置
- 松澤講義への接続
- 情報セキュリティを含む共有可能性
- PPTXプロンプト生成可能性

各テストをpass、partial、failへ更新し、missingを具体化する。

### 28-30 minutes: Handover packaging

- `/system-record/handover`を作る。
- 次のエージェント向けに、読む順序を示す。
- working decisions、current hypotheses、open questions、next actionsを分離する。
- ファイル全文を`jica-un-open-gis-2026.md`として出力する。

# /decision-support/30-minute-priorities

- status: derived
- priority-order:
  1. 実話の正確な内容と講義上の役割
  2. 失敗談の選定と前向きな着地点
  3. 第3コマの具体的な接続試験
  4. 上村・松澤とのインターフェース
  5. 次エージェント向けの境界と読み順
- defer-until-later:
  - 完成スライドのデザイン
  - 想定Q&Aの網羅
  - すべての出典の完全確認
  - Claude Codeプロンプトの最終文面
  - RPi在庫問題の組織的評価
  - KCAIM一般形式の改善

# /open-questions/30-minute-interview

- status: open
- first-question-set:
  1. Hill Cotで、藤村は何を見て、何を図化し、何を学んだか。
  2. フリータウン／ウォータールーのオルソについて、藤村の役割と、うまく接続しなかった部分は何か。
  3. ラオスの建物階数調査で、誰と何を試し、何が実際に変わったか。
- second-question-set:
  1. UN Open GIS InitiativeまたはDWG7で、今回もっとも語りたい失敗談は何か。
  2. その失敗で、失ったものと残ったものは何か。
- third-question-set:
  1. RPi接続試験で、研修員全員が最後に見られれば成功とする画面または状態は何か。
  2. 公開PPTXとは別に、当日限定session cardを用意する運用は可能か。

# /system-record/handover-readiness

- status: partial
- current-strengths:
  - 講義の目的、タイトル、副題、3コマ構造は現時点のworking decision。
  - connectとtestの背骨は現時点のworking decision。
  - 正式時間割、英語・通訳なし、RPi機種はverified。
  - 松澤教材の内容と、教材記載と本番運用を区別する必要は記録済み。
  - 情報セキュリティを意識した成果物分離案がある。
- current-gaps:
  - 実話の具体性と藤村の正確な役割。
  - 使用する失敗談の確定。
  - 事例を支える視覚資産と公開条件。
  - 第3コマの成功画面、接続確認方法、当日資料の具体形。
  - 上村及び松澤との確認後に更新すべき項目。
- handover-risk: 次のエージェントが、derivedな事例解釈をverified factとして扱うこと。
- control: 各オブジェクトのstatusとdecisionを尊重し、open項目を創作で埋めない。


# /assets/case-sierra-leone-hill-cot

- status: verified
- location: Hill Cot, Sierra Leone
- actors:
  - Sierra Leone OpenStreetMap community
  - a Japanese aerial survey company
  - hfu
- activity: 5 cm GSD orthophoto imagery was used to trace building footprints.
- hfu-observation: High-quality geospatial information appeared possible through a combination of OpenStreetMap practice and drone imagery.
- lecture-use:
  - primary-session: Session 1 / Your expertise
  - secondary-session: Session 2 / Connect
- core-message: High-quality geospatial information can emerge when local mapping practice, professional photogrammetry, and shared open tools are connected.
- evidence-boundary:
  - This case supports the possibility of quality production; it does not yet establish a universal production model.
  - The exact quality-control process, positional accuracy, completeness, licensing, and maintenance arrangement remain to be documented.
- visual-assets-needed:
  - orthophoto excerpt
  - traced building footprints
  - before/after or image/vector overlay
  - photograph of collaborative work, if publishable

# /assets/case-sierra-leone-freetown-waterloo

- status: verified
- locations:
  - Freetown, Sierra Leone
  - Waterloo, Sierra Leone
- actors:
  - HOT
  - Peter Masters
  - JICA Quick Mapping Project
  - hfu
  - local actors not yet fully specified
- activities:
  - Freetown: use of already existing geospatial resources
  - Waterloo: observation of drone mapping activities
  - coordination with Peter Masters of HOT
  - a small-value contract under the JICA Quick Mapping Project
- lecture-use:
  - primary-session: Session 2 / Connect
  - role: contrast two modes of action: use what already exists, and observe or test new mapping production where needed
- core-message: Connection is not always creating a new project. Sometimes it is finding and using what already exists; sometimes it is testing a new production path with the right partners.
- potential-failure-story: open
- missing:
  - exact year and sequence
  - precise role of hfu
  - contracted deliverable and contractor
  - what was successfully reused in Freetown
  - what was learned from the Waterloo observation
  - what did not connect or continue
  - publication conditions for materials

# /assets/case-laos-building-levels-workshop

- status:
  - verified
  - volatile
- date: 2026-11-20
- timing-relation: five days before the JICA UN Open GIS Initiative lecture on 2026-11-25
- source: November_Mapping_Workshop_Updated.docx
- source-status: working draft
- workshop-goal: Observe the same place together, verify small facts, and leave them as shared, reusable data.
- planned-location:
  - indoor: JICA Laos Office
  - field: near the JICA Laos Office, around the Chao Anouvong Stadium context
- planned-structure:
  - 09:30-10:30 indoor activity
  - 10:40-11:30 field activity
  - optional evening urban observation
- required-attribute: building:levels
- method:
  - brief introduction to OSM
  - explain how OSM and VirGo can complement each other
  - review the local OSM situation
  - guided input demonstration
  - small-group field observation using paper maps
  - record above-ground building levels
  - write “unsure” rather than guess
  - share one finding and one difficulty
  - hfu reviews observations and adds suitable, verifiable information to OSM
- principles:
  - one verified building is more valuable than many guessed buildings
  - do not estimate height without measurement
  - OSM is an open digital public good and shared reference layer
  - VirGo may retain authoritative and project-specific information
  - accessibility assessment should begin with objective facts and later involve people with relevant lived and professional experience
- lecture-use:
  - status: provisional until the workshop is completed
  - primary-session: Session 2 / Connect
  - secondary-session: Session 3 / Test
- potential-core-message: To connect people, begin with one place, one shared vocabulary, and one fact that everyone can verify.
- post-workshop-update-required:
  - actual participants and organizations
  - actual route and survey area
  - number of buildings observed
  - number of usable observations
  - difficulties encountered
  - whether data was entered into OSM
  - what was retained in VirGo or project records
  - photographs and screenshots available for the lecture
  - what changed between plan and execution

# /decision-support/case-placement-update

- status: derived

## Session 1

- primary-case: Hill Cot
- purpose: show professional judgement and production through collaboration
- English takeaway: High-quality geospatial information can be created by connecting local knowledge, professional imagery, and open mapping practice.

## Session 2

- primary-case: Freetown and Waterloo
- purpose: show that connection may mean reusing existing assets in one place and testing new production in another
- supporting-case: Laos workshop, if completed successfully and if the experience can be processed in five days
- English takeaway: Connect first: use what already exists, find the right partners, and choose where a new test is actually needed.

## Session 3

- primary-case: Laos workshop
- status: provisional
- purpose: show a recent, bounded test using one attribute and verifiable observations
- constraint: do not build the core narrative around an event that has not yet occurred; prepare a fallback slide independent of the workshop result
- fallback: explain the workshop design as a planned test, clearly labelled as a plan rather than a result

# /decision-support/laos-recency

- status: derived
- observation: The Laos workshop occurs only five days before the lecture.
- opportunity:
  - a fresh and concrete story
  - contemporary photographs and participant observations
  - direct demonstration of connect and test
- risks:
  - insufficient time to reflect
  - temptation to overclaim success
  - operational fatigue and incomplete materials
  - unexpected workshop changes
  - sensitivity because a Lao trainee will be present
- rule:
  - separate plan, observation, result, and lesson
  - use only verified outcomes on 2026-11-25
  - if reflection is immature, present the workshop as a small test and state what remains unknown
  - do not invite or pressure the Lao trainee to validate or comment

# /open-questions/case-sierra-leone-followup

- status: open
- questions:
  1. Hill Cotの図化は何年で、どの作業環境・ツールを使ったか。
  2. 建物外周線の品質確認は誰が、どのように行ったか。
  3. 成果はOSMへ入ったか、別成果として残ったか。
  4. フリータウンで「既にあるもの」とは具体的に何か。
  5. JICA Quick Mapping Projectの少額契約は、誰との、何の成果に対する契約か。
  6. Peter Mastersとの連携で、初めて可能になったことは何か。
  7. 何がうまく続かなかったか、または期待どおりに接続しなかったか。

# /open-questions/laos-post-workshop-review

- status: open
- due: 2026-11-20 after workshop
- minimum-review:
  1. What did we plan?
  2. What actually happened?
  3. What did participants verify?
  4. What remained uncertain?
  5. What was entered into shared data?
  6. What should not be generalized?
  7. Which one image best represents connect?
  8. Which one image best represents test?

# /traces/2026-11-02-case-harvest-1

- status: verified
- event: hfu supplied concise facts about Hill Cot, Freetown, Waterloo, the HOT/Peter Masters connection, the JICA Quick Mapping Project, and the planned 2026-11-20 Laos building-level workshop. The workshop outline was read from November_Mapping_Workshop_Updated.docx.
- observations:
  - Hill Cot is stronger than previously understood because the work joined a local OSM community and a Japanese aerial survey company in actual building-footprint production.
  - Freetown and Waterloo provide a useful contrast between reuse and new observation/testing.
  - The Laos case is highly aligned with connect and test but remains a future event and must not be narrated as a result before it occurs.
  - The Laos workshop already contains a strong epistemic rule: one verified building is more valuable than many guessed buildings.
  - The five-day interval between Laos and the lecture requires an explicit rapid review procedure and a fallback narrative.


# /assets/case-sierra-leone-hill-cot-detail

- status: verified
- location: Hill Cot, Sierra Leone
- production:
  - source: 5 cm GSD drone orthophoto
  - feature: building footprints
  - destination: OpenStreetMap
  - contributors:
    - Sierra Leone OpenStreetMap community
    - a Japanese aerial survey company
    - hfu
  - quality-control: validator on the OSM Sierra Leone side
- significance:
  - This was not only training or observation; building footprints were actually produced and entered into a shared public dataset.
  - Local community involvement and a professional aerial-survey contribution were connected in one production flow.
  - Validation responsibility was retained on the Sierra Leone OSM side rather than centralized in Japan.
- hfu-interpretation: High-quality geospatial information appeared possible through a combination of OpenStreetMap practice and drone imagery.
- lecture-message:
  - primary: Professional quality can emerge from a connected workflow, not only from a single institution.
  - secondary: Open contribution does not mean absence of quality control; validation and responsibility still matter.
- suggested-English-lines:
  - We traced building footprints from five-centimetre drone orthophotos.
  - The data went into OpenStreetMap.
  - Validation was conducted by the OSM Sierra Leone side.
  - Open collaboration does not remove professional responsibility. It redistributes it across a connected workflow.
- boundary:
  - Do not claim that all OSM data have this production or validation model.
  - Do not use this single case to prove universal positional accuracy or completeness.
  - Describe the observed workflow and result, not a general national mapping model.

# /assets/visual-hill-cot-mapped-area

- status: verified
- source: image uploaded by hfu in the current conversation
- content-description:
  - Map view of the Hill Cot area.
  - Dense building footprints are visible across the central and southern portions.
  - Major roads are shown prominently, including Hill Cot Road.
  - A watercourse labelled Congo River is visible near the centre-right.
  - Numerous point symbols are distributed across the area.
  - The image demonstrates the density and continuity of the mapped building fabric.
- lecture-use:
  - preferred-session: Session 1 / Your expertise
  - purpose: visual evidence that collaborative tracing produced a substantial, coherent mapped area rather than an isolated demonstration feature
  - presentation-method:
    - show the map full-screen
    - avoid explaining every symbol
    - focus on the large number and continuity of building footprints
    - pair with one close-up orthophoto/vector overlay if available
- caption-draft: Hill Cot: building footprints traced from 5 cm drone orthophotos and added to OpenStreetMap, with validation by OSM Sierra Leone.
- source-note-required: Confirm the map renderer, data attribution, screenshot date, and licence before publication.
- file-handling: The image should be retained as a candidate visual asset for the eventual PPTX, subject to attribution and licence confirmation.

# /assets/case-sierra-leone-hot-contract-detail

- status: verified
- contracting-arrangement:
  - programme: JICA Quick Mapping Project
  - contracted-function: coordination by HOT
  - scale: small-value contract
- practical-effect:
  - supported the activities of OSM Sierra Leone
  - made contact with OSM Sierra Leone smoother
  - enabled hfu to attend or observe drone mapping activity in Waterloo
- key-relationship: Pete Masters
- significance:
  - The contract did not primarily purchase a map product; it purchased coordination capacity and enabled access to an existing community and activity.
  - A small contract functioned as a connector between JICA, HOT, OSM Sierra Leone, professional mapping actors, and hfu.
- lecture-message: Sometimes the most valuable deliverable is not a new dataset. It is a working connection that lets the right people act together.
- suggested-English-lines:
  - The contract was small.
  - It did not simply buy a map.
  - It enabled coordination through HOT, supported OSM Sierra Leone, and allowed us to observe drone mapping in Waterloo.
  - A small contract can create a large connection.
- boundary:
  - Do not disclose contract value unless publication is confirmed.
  - Do not imply that HOT or Pete Masters alone delivered all local activity.
  - Keep the agency of OSM Sierra Leone visible.

# /decision-support/sierra-leone-story-arc

- status: derived
- proposed-arc:
  1. Freetown: begin by using what already exists.
  2. HOT/Pete Masters: create a trusted connection to the local community.
  3. Waterloo: observe a live drone-mapping production setting.
  4. Hill Cot: turn high-resolution imagery into building footprints.
  5. OSM Sierra Leone validator: retain quality control and responsibility in the local community.
  6. OpenStreetMap: leave the result in a shared, reusable public dataset.
- why-it-matters:
  - The arc contains both connect and test.
  - It shows that a small contract can support coordination rather than replace local actors.
  - It shows reuse, observation, production, validation, and sharing as distinct functions.
  - It avoids presenting hfu as the sole actor.
- positive-vibration-ending: The important outcome was not that one outside expert completed a map. It was that several kinds of expertise could work through one connected chain and leave a reusable result.

# /acceptance-tests/sierra-leone-case

- query: Can the Sierra Leone experience be explained as a concrete connect-and-test story without overstating hfu's role?
- expected:
  - Freetown is described as reuse of existing resources.
  - HOT coordination and Pete Masters are described as relationship enablers.
  - Waterloo is described as observation of drone mapping.
  - Hill Cot is described as actual building-footprint production from 5 cm orthophotos.
  - The footprints are stated to have entered OSM.
  - Validation is attributed to the OSM Sierra Leone side.
  - The small HOT contract is described as support for coordination and OSM Sierra Leone activity.
- result: pass
- remaining:
  - dates
  - exact existing resources reused in Freetown
  - visual attribution and licence
  - precise description of hfu's hands-on role in tracing

# /traces/2026-11-02-case-harvest-2

- status: verified
- event: hfu clarified the Hill Cot production and HOT coordination arrangement, and supplied a map image of the mapped Hill Cot area.
- facts-added:
  - Hill Cot building footprints were entered into OpenStreetMap.
  - Validation was performed by an OSM Sierra Leone-side validator.
  - The JICA Quick Mapping Project contract requested coordination from HOT.
  - The contract supported OSM Sierra Leone activities.
  - Connection through Pete Masters enabled smoother contact with OSM Sierra Leone and observation of drone mapping in Waterloo.
- lesson: A small procurement can be designed as connective infrastructure. It need not replace local production; it can enable local actors, professional specialists, and an international project to work through a shared chain.



# /decision-support/change-control

- status: normative
- purpose: 作業の連続性を保ちながら、残り時間と新情報に応じて設計を更新できるようにする。
- rule:
  - working decisionは、確定済みの教義ではなく、現時点で最も整合的な作業上の判断である。
  - 新しい事実、講師間インターフェース、実機試験、ラオス実施結果、時間制約により、変更してよい。
  - 変更時には、変更理由、影響するオブジェクト、置き換える旧判断をtraceへ残す。
  - 単なる案の増殖は避ける。変更後は一つのworking designへ再統合する。
  - 論理的一貫性、事実との整合、実施可能性を、過去の決定維持より優先する。
- stable-until-challenged:
  - official title and subtitle
  - connect and test as the current backbone
  - three 60-minute sessions
  - English delivery without interpretation
  - peer-professional framing
  - positive vibration
- explicitly-revisable:
  - session labels and detailed movements
  - case placement
  - session 3 procedure
  - Matsuzawa interface
  - Fujimura attendance
  - slide count and visual design
  - wording of takeaways



# /sources/fact-check-2026-11-02

- status: verified
- checked: 2026-11-02
- sources:
  - https://unopengis.org/DWG7.html
  - https://unopengis.org/
  - https://github.com/unvt/niroku
  - https://unvt.github.io/niroku/NARRATIVE.html
  - https://www.digitalpublicgoods.net/r/openstreetmap
  - https://www.openstreetmap.org/copyright
  - https://www.hotosm.org/en/projects/kyc-africa-drone-mapping-in-freetown-city/
  - https://www.hotosm.org/en/projects/waterloo-drone-mapping/
  - https://drone.hotosm.org/
- note: 外部公開情報で確認できない個別事実は、hfu提供情報としてverifiedとし、外部確認済みとは区別する。

# /decision-support/fact-check-results

- status: derived

## Confirmed externally

1. UN Open GIS Initiative公式サイトは、DWG7をUN Smart Maps Groupとし、open community of practice、visionを`keep web maps open`、missionを`test new technologies for future geospatial operations`と説明している。これは、本講義が`test`を中核概念とすることを支持する。
2. nirokuの公開リポジトリは、JICAとの2026年利用を対象とするUNVT Portableの新実装と説明し、Raspberry Pi OS trixie、Raspberry Pi 4以降、arm64/aarch64、sudo、初期セットアップ時のネットワークを要件としている。CaddyとMartinによるローカルWeb地図サーバを構成する。
3. OpenStreetMapはDigital Public Goods AllianceのregistryでDigital Public Goodとして登録され、ODbL-1.0のopen dataとして掲載されている。
4. OpenStreetMap公式著作権ページは、OSMデータがODbLであり、利用時にOpenStreetMapとcontributorsへの帰属表示が必要であると説明している。
5. HOTの公開ページは、Freetownでコミュニティ主導のドローンマッピングにより高解像度画像を作り、都市計画、防災、気候レジリエンス等への利用を目指す活動を説明している。
6. HOTのWaterloo公開ページは、Freetown Open Drone CrewがWaterlooでpeer-to-peerにドローン飛行、画像取得、open-source toolsによるdigitisationを共有したこと、JICAを含む機関が建物・道路・インフラ情報を必要としていたことを説明している。
7. HOT Drone Tasking Managerの公開ページは、Freetownで30人が低コストドローンを用い、80 km²を5 cm resolutionでマッピングしたと説明している。

## Supported but not fully verified externally

1. Hill Cotでhfu、日本の航空測量会社、OSM Sierra Leoneが建物外周線を作成し、OSM Sierra Leone側validatorが確認したという個別工程は、hfu提供情報に基づく。公開ページは周辺プロジェクトの存在と地域文脈を支持するが、この具体的役割分担までは確認できていない。
2. JICA Quick Mapping ProjectによるHOTへの少額契約、契約機能、Pete Mastersの具体的役割は、hfu提供情報に基づく。
3. 松澤の2026教材本文にはniroku利用が記載されるが、本番の最終運用は本人確認待ちである。niroku自体が2026年JICA利用を意図した現行プロジェクトであることは外部確認できた。

## Corrections and cautions

1. 地名表記に`Hill Cot`と`Hill Court Road`の揺れがある。hfuは`Hill Cot`を使用する一方、HOTのWaterloo公開ページは`Hill Court Road`と記載する。講義資料では画像・現地資料に基づき表記を確定し、必要なら`Hill Cot / Hill Court Road area`とする。
2. `Open collaboration does not remove professional responsibility. It redistributes it...`は設計上の解釈であり、外部事実として引用しない。
3. `high-quality geospatial information`は、5 cm GSDだけから自動的に成立しない。品質管理、完全性、位置精度、更新、用途適合性を分けて語る。
4. OSMがDigital Public Goodであることと、OSMの標準タイルサーバやAPIが無制限に使えることは別である。OSM公式情報はデータとサーバ資源を区別する。
5. niroku要件について、公開READMEは最低16 GB microSD、128 GB以上をmap data向けに推奨する。実習データと生成物を考慮し、実機容量を別途確認する。

# /system-record/handover

- status: verified
- handover-version: 2026-11-02-working-handover
- intended-recipient: another bounded agent continuing the lecture-design work
- canonical-file: jica-un-open-gis-2026.md
- immediate-purpose: continue from lecture architecture to slide-level design while preserving continuity and allowing evidence-based revision

## Read first

Read in this order:

1. `/decision-support/current-decisions`
2. `/decision-support/connect-test-backbone`
3. `/scenarios/00-overall-lecture`
4. `/scenarios/01-your-expertise`
5. `/scenarios/02-connect`
6. `/scenarios/03-test`
7. `/relationships/kamimura-exchange-2026-11-06`
8. `/relationships/matsuzawa-session-interface`
9. `/decision-support/security-aware-sharing`
10. `/assets/case-sierra-leone-hill-cot-detail`
11. `/assets/case-sierra-leone-hot-contract-detail`
12. `/assets/case-laos-building-levels-workshop`
13. `/inventory/next-actions`
14. `/open-questions/...`

## Current working commitments

The following are current working commitments. They should provide continuity, but may be revised when new evidence, interface constraints, or a better coherent design emerges:

- Official title: `UN Open GIS Initiative`
- Subtitle: `Your expertise, your connections, and one small test`
- Basic concepts: `connect` and `test`
- Three-session progression:
  - Session 1: Your expertise
  - Session 2: Connect
  - Session 3: Test
- Final message:
  - Trust your expertise.
  - Connect it with others.
  - Start with one small test.
- Audience framing: participants are peer geospatial professionals, not passive recipients from developing countries.
- Emotional objective: create positive vibration.
- Country cases must not be used to surprise, assess, or pressure the participant from that country.
- English delivery without interpretation.
- Official schedule:
  - 13:00-14:00
  - 14:15-15:15
  - 15:30-16:30

## Current design status

### Strong and stable

- Overall message and narrative backbone
- Session purposes and emotional outcomes
- Connect/test cycle
- Formal schedule
- Sierra Leone case architecture
- Provisional Laos case architecture
- Security-aware separation of public and session-specific materials
- Conceptual connection to the next day's Matsuzawa session

### Provisional but usable

- Minute-by-minute session movements
- Session 3 connection-test procedure
- Fujimura attendance at Matsuzawa's session
- Use of the Laos workshop as a result story
- Exact division of content with Kamimura and Matsuzawa

### Must remain open

- Whether Matsuzawa will actually use `niroku` in the 2026 delivery
- How far the RPi environment should be prepared before Matsuzawa's session
- The exact Raspberry Pi OS, storage, network, IP assignment, and recovery plan
- The exact content of Kamimura's morning session
- The outcome of the 2026-11-20 Laos workshop
- Visual licences and attributions

## Facts versus interpretation

- `verified`: supplied by hfu or confirmed in an attached schedule/document
- `stated`: written in a source, but not necessarily confirmed as the current operational plan
- `derived`: an interpretation or design recommendation
- `normative`: a rule adopted for this lecture design
- `open`: unresolved and must not be invented
- `volatile`: likely to change before delivery

The next agent must not convert `stated`, `derived`, `open`, or `volatile` objects into verified facts without evidence.

## Recommended next work

The next agent should proceed in this order:

1. Prepare a one-page briefing for the 2026-11-06 exchange with Kamimura.
2. Reduce questions for Kamimura to five concise questions.
3. Prepare five concise questions for Matsuzawa, led by the `niroku` decision.
4. Convert each session into a slide-level movement list, without yet generating PPTX.
5. Draft the Session 3 public slides using placeholders only.
6. Draft a separate session-card template for device ID, IP address, and temporary credentials.
7. Prepare a readiness-matrix template.
8. After the Laos workshop, update observations, results, and lessons separately.
9. Only after those updates, generate the Claude Code prompt for PPTX production.

## Agent behaviour

- Preserve compactness. Do not add background material merely because it is relevant; changes should improve coherence, accuracy, or implementation.
- Prefer concrete stories over abstract exhortation.
- Keep hfu's role accurate and non-heroic.
- Keep local actors and validators visible.
- Use failure stories to expose boundaries and retained value, not to produce negativity.
- Validate every proposed slide against at least one of:
  - Trust your expertise.
  - Connect it with others.
  - Start with one small test.
- Do not embed live passwords, real IP addresses, or external-management details in the public deck.
- Do not assume the Laos workshop succeeded before 2026-11-20.
- Do not assume the seminar will use `niroku` until Matsuzawa confirms it.

# /acceptance-tests/handover

- query: Can another agent continue the design without access to this conversation?
- expected:
  - current working decisions are explicit
  - reading order is explicit
  - confirmed facts and interpretations are separated
  - open questions are visible
  - immediate next actions are listed
  - security boundaries are stated
  - cases have stated purposes and limits
- result: pass

# /system-record/release-note

- status: verified
- release: handover-ready
- date: 2026-11-02
- summary:
  - Established connect and test as the two operational concepts.
  - Fixed the three-session architecture and formal schedule.
  - Developed the Sierra Leone case into a reusable connect-and-test story.
  - Preserved the Laos workshop as a prospective case with a post-event review gate.
  - Defined the Session 3 connection test and the security-aware artifact split.
  - Distinguished Matsuzawa's written material from the still-unconfirmed 2026 operating plan.
  - Added explicit handover instructions for the next agent.

# /procedures/claude-code-pptx-generation

- status: normative
- purpose: Claude Codeが、このKCAIMを唯一の設計正本として、内容確認用の構造版PPTXを生成できるようにする。
- current-stage: structure draft, not final delivery deck

## Generation objective

最初に生成するのは、2026-11-25当日の完成版ではなく、講義の論理、時間、スライド枚数、事例配置、講師ノート、実習導線を確認するための構造版PPTXである。

構造版の役割:

1. 3コマのリズムを可視化する。
2. Your expertise -> Connect -> Test の因果関係を検査する。
3. 講師の語りとスライド上の情報量を分離する。
4. シエラレオネ事例の配置を確認する。
5. ラオス事例を、未実施の計画として安全に仮置きする。
6. 第3コマの接続試験を、説明ではなく実行可能な導線として確認する。
7. 上村・松澤との確認後に置換すべき箇所を見えるようにする。

## Required deliverables

Claude Codeは、同じ作業ディレクトリに次を生成する。

1. `jica-un-open-gis-2026-structure.pptx`
2. `jica-un-open-gis-2026-slide-plan.md`
3. `jica-un-open-gis-2026-open-items.md`
4. `jica-un-open-gis-2026-build-report.md`

### PPTX

- 16:9 widescreen
- English slides
- English speaker notes
- approximately 24 to 30 slides
- clearly divided into three 60-minute sessions
- each content slide must serve at least one of:
  - Trust your expertise.
  - Connect it with others.
  - Start with one small test.
- use short, speakable English
- avoid dense paragraphs
- avoid a sequence of slogan-only slides
- include section divider slides sparingly
- put detail in speaker notes, not on slides

### Slide plan Markdown

For every slide, record:

- slide number
- working title
- session
- purpose
- key message
- visual treatment
- estimated speaking time
- speaker-note summary
- evidence/source
- status: ready / placeholder / open

### Open-items Markdown

List only unresolved matters that affect the deck, including:

- Kamimura overlap
- Matsuzawa and niroku decision
- RPi implementation details
- Laos post-workshop update
- visual licences and attribution
- Hill Cot / Hill Court naming

Do not invent answers.

### Build report

Record:

- files created
- slide count
- validation or rendering performed
- missing assets
- substitutions and placeholders
- any design decision not directly specified by the KCAIM

## Content architecture

Use the KCAIM as the source of truth, but treat all design decisions as working decisions that may be revised for coherence, factual accuracy, time, or implementation.

### Session 1: Your expertise

Target feeling:

> I already have something valuable to contribute.

Primary case:

- Hill Cot building-footprint production from 5 cm drone orthophotos
- local OSM community, Japanese aerial-survey expertise, and validation by OSM Sierra Leone

Avoid:

- turning Session 1 into a biography of hfu
- claiming that one case proves a universal quality model
- presenting OSM as quality-free or automatically authoritative

### Session 2: Connect

Target feeling:

> I do not have to solve everything alone.

Primary material:

- UN Open GIS Initiative and DWG7 as a community of practice
- official DWG7 mission to test new technologies for future geospatial operations
- Freetown: use what already exists
- HOT and Pete Masters as connection enablers
- Waterloo: observation of peer-to-peer drone mapping
- small JICA Quick Mapping Project contract as connective infrastructure
- one or two bounded failure stories

Avoid:

- an organizational history lecture
- a catalogue of software products
- overstating hfu's role
- hiding the agency of OSM Sierra Leone and other local actors

### Session 3: Test

Target feeling:

> I can begin something.

Primary function:

- prepare participants for the next day's technical session
- explain SSID, IP address, SSH, URL, and port at minimum viable depth
- conduct a connection test using PowerShell, SSH, and a browser
- treat peer assistance as part of the learning design

Security rules:

- never include a real password in the public PPTX
- never include live IP addresses in the public PPTX
- use placeholders such as `<your-ip>` and `<password shown in class>`
- represent session-specific details using a separate session-card placeholder

Matsuzawa boundary:

- the current material states that niroku is used, but 2026 final operation is not confirmed
- do not state that niroku will definitely be used
- do not pre-install or teach niroku in the structural deck as a confirmed decision
- make the final setup slide visibly replaceable after confirmation

Laos boundary:

- the workshop is planned for 2026-11-20
- until results are available, describe it as a planned small test
- do not invent outcomes, participant reactions, OSM edits, photographs, or lessons
- create one replaceable placeholder slide for post-workshop evidence

## Visual strategy

- Use documentary photographs, maps, orthophotos, screenshots, and simple conceptual diagrams.
- Do not create a decorative corporate deck.
- Do not use stock imagery merely to fill space.
- Do not generate fake documentary images for Sierra Leone, Laos, UN activities, or the RPi exercise.
- The Hill Cot map image is a candidate visual. If the file is unavailable, insert a labelled placeholder rather than re-creating it.
- Reserve explicit placeholders for:
  - Hill Cot orthophoto / footprint overlay
  - Hill Cot mapped-area screenshot
  - Freetown / Waterloo photograph or project visual
  - Laos workshop result visual
  - RPi connection flow
- A simple non-documentary connect-test cycle diagram may be created.
- Every visual must have a source or an explicit `SOURCE NEEDED` marker in notes.

## Speaker notes

Speaker notes are required for every content slide.

Notes must include:

1. natural spoken English suitable for a non-native English speaker
2. the purpose of the slide
3. transition to the next slide
4. source or evidence status
5. cautions against overclaiming
6. estimated time

Style:

- short sentences
- concrete verbs
- deliberate repetition of `connect` and `test`
- no TED-style exaggeration
- no motivational clichés
- no praise of the lecturer
- no evaluation of participant countries

## Slide-density controls

- Target 24 to 30 slides for the structural draft.
- Session 1: approximately 7 to 9 slides.
- Session 2: approximately 8 to 10 slides.
- Session 3: approximately 7 to 9 slides.
- Do not force the count if coherence requires fewer slides.
- Prefer one visual and one claim over many bullets.
- Operational instruction slides may contain numbered steps.

## Source discipline

- Use the sources and status distinctions already recorded in this KCAIM.
- Do not convert `derived`, `stated`, `open`, or `volatile` material into verified fact.
- Do not invent citations.
- Use plain URLs in speaker notes or source blocks.
- OSM-derived visuals require appropriate OpenStreetMap contributor attribution and ODbL notice.
- Externally verified facts may be summarized, not copied at length.

## Technical quality requirements

- Keep all text inside slide bounds.
- Use consistent margins, fonts, and hierarchy.
- Ensure code and commands use a monospaced font.
- Ensure placeholder text is visually distinct from final content.
- Do not embed credentials in metadata, notes, comments, or hidden slides.
- Render or inspect every slide after generation.
- Correct overlaps, clipping, unreadable text, and broken images.
- Confirm that the PPTX opens successfully.

## Completion rule

Do not claim the deck is the final delivery version.

The deck must identify these gates before finalization:

1. 2026-11-06 Kamimura exchange
2. Matsuzawa confirmation, including niroku and setup boundary
3. RPi end-to-end test
4. 2026-11-20 Laos workshop review
5. visual source and licence confirmation

# /acceptance-tests/claude-code-structure-deck

- query: Can Claude Code generate a useful structural PPTX from this KCAIM without inventing missing facts?
- expected:
  - 24 to 30 slide structural deck
  - three-session division
  - speaker notes on every content slide
  - Hill Cot case used with stated limits
  - Laos represented as planned and replaceable
  - Session 3 uses placeholders for live operational data
  - open items are exported separately
  - deck is explicitly labelled as a structural draft
- result: pass

# /procedures/claude-code-invocation

- status: normative
- instruction: Attach this entire KCAIM file to Claude Code and use the following short command. Do not paste a second competing content brief.

```text
Use the attached `jica-un-open-gis-2026.md` as the canonical design and knowledge file.

Follow `/procedures/claude-code-pptx-generation` exactly. Generate the four required deliverables, beginning with the structural draft PPTX, not a final delivery deck.

Preserve the distinction between verified facts, source statements, derived interpretations, working decisions, volatile information, and open questions. Do not invent missing facts or visuals. Use explicit placeholders where the KCAIM says evidence or confirmation is still needed.

Before finishing, inspect the generated slides for clipping, overlap, readability, missing notes, broken assets, and accidental disclosure of credentials or live network information. Report all remaining open items in the required Markdown file.
```

# /traces/2026-11-02-generation-contract

- status: derived
- event: The KCAIM was extended with a Claude Code generation contract for a structural PPTX.
- lesson: The KCAIM contains enough content for a structural deck, but the generation task needs an explicit contract for slide count, notes, visuals, placeholders, security, source discipline, and completion gates.
