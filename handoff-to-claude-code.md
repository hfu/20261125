# Claude Code への引き継ぎ（gh:hfu/20261125 用）

使い方: 1) 成果物をリポジトリに置く（下の「置くもの」）。2) Part A を `CLAUDE.md` として保存。3) Part B を最初のプロンプトとして貼る。
注意: デッキに Wi-Fi パスワード（共有デッキに残す決定）と研修機のIPが入っている。リポジトリは **private** を推奨。公開する場合は、先にスライド21・25・27とノートから外す。

## 置くもの

```
20261125/
  CLAUDE.md                                  ← Part A
  jica-un-open-gis-2026.md                   ← 正本（KCAIM、hfuの手元のもの）
  deck/jica-un-open-gis-2026-structure.pptx
  src/data.js  src/build.js  src/plan.js
  tools/apply_theme.js                       ← /mnt/skills/public/pptx/scripts/ から複製（下記）
  docs/jica-un-open-gis-2026-open-items.md
  docs/jica-un-open-gis-2026-build-report.md
  docs/jica-un-open-gis-2026-slide-plan.md   （自動生成）
  docs/jica-un-open-gis-2026-ops-request-spares.md
  docs/Vientiane_Mapping_Workshop_Indoor_Activity.pdf
```

重要: `src/build.js` は次に依存していて、そのままでは Claude Code 側で動かない。最初に直す。
- `require("/mnt/skills/public/pptx/scripts/apply_theme.js")` → `tools/` へ複製して相対パスにする
- `OUT = "/home/claude"` と `plan.js` の出力先 → リポジトリ内の `deck/` と `docs/` にする
- 検証用の `validate.py`、`soffice.py` も同じ場所にあった。無ければ、LibreOffice で PDF 化して目視、zip を展開して XML を検査する方法で代える。

---

## Part A: CLAUDE.md

```markdown
# 20261125 — JICA国家測量研修「UN Open GIS Initiative」講義デッキ

講義日: 2026-11-25（水）13:00–16:30、講師 hfu（藤村）。翌日 11-26 は松澤さんの回。
正本: `jica-un-open-gis-2026.md`（KCAIM）。迷ったら正本。正本にないことは書かない。

## 言語
- スライド本文とスピーカーノート: 英語（短い文、平易、慣用句を避ける）
- 報告・Markdown: 日本語
- 文体は「高密度・低圧」。偉そうにしない、上から目線に読まれない。

## 構造
- 生成元は `src/data.js`（スライドの内容）→ `src/build.js`（描画）→ `src/plan.js`（slide-plan.md）。PPTXを直接編集しない。直すのは data.js か build.js。
- 各スライドは session / kind / status(ready, placeholder, open) / time / title / data / say / purpose / transition / evidence / caution / ja{...} / evidenceJa を持つ。
- ノートは SAY / PURPOSE / TRANSITION / SOURCE-STATUS / VISUAL / CAUTION / TIME。全スライドに SAY と VISUAL が必要。
- コマ: S1 = 2–9、S2 = 10–19、S3 = 20–30、31 は付録（5つのゲート、DRAFT ONLY、納品時に削除）。スライドを挿入すると番号がずれる。Markdown 内の番号は更新する。

## 情報の区別（必ず守る）
確認済みの事実 / 出典の記述 / 派生した解釈 / 作業上の決定 / 変わりやすい情報 / 未解決。
素材が無いところは、作らずに、破線の PLACEHOLDER と `SOURCE NEEDED` を置く。

## 決定事項（hfu）
- 前日（松澤さん）の接続試験は SSH とブラウザ接続の確認まで。午前（上村さん）は URL・ポートを扱わない。タイルは事業の案内まで。
- ホスト名は device ID としてスライドに出してよい。対応づけも示す。IPも出す（mDNSが動かないかもしれないため）。
- 接続手順は **IP直打ちを主**。`.local` は主にしない。Windows での名前解決は当日まで確認できない。
- Wi-Fi: SSID `vectortiles`、パスワード `vectortiles`、5GHz のみ（5GHz前提で準備）。パスワードは共有デッキに残す。
- ブラウザ手順は「404でOK」のまま（ポート80のルートは404を返す）。
- 研修機11台のうち、m326 と m353 は予備機。他の9台に国を割り当てる（現状は国名アルファベット順の仮案。hfu未確認）。国旗の絵文字は使わない。国名のみ。

## 絶対に書かない・触れない
- 共有SSHパスワード、64桁のWi-Fi鍵（PSK）、秘密鍵、トークン
- MACアドレス、管理用ホスト（m321、m323）、管理用ドメイン、運用の接続経路
- 講師専用機・未参加機（m321、m323、m331、m342）
- 実機・フリートへの接続はしない。調査や変更が要るときは、依頼文を書いて hfu に渡す（`m3xx-fleet-ops` の運用セッションが実行する）。

## 検証（変更のたびに）
1. ビルドが通る。全スライドに SAY と VISUAL がある。
2. PDF化して目視: はみ出し、重なり、文字の小ささ、壊れた画像、ノートの欠け。
3. PPTX を展開して検査: `vectortiles` はスライド21・27と、そのノートだけ。IP（192.168.86.）はスライド25だけ。64桁の16進文字列、MAC、管理用ホスト名・ドメインがゼロ。
4. 隠しスライド・コメントを作らない。
5. status の内訳（ready / placeholder / open）を報告に書く。

## 未解決（`docs/…open-items.md` が最新）
Hill Cot のプロセス、ラオスの差し替え（スライド23）と第2コマでの置き場所、スライド4の3語、スライド8・18の実話と失敗談、Pete Masters の扱い、国の割当の確認、予備機への教材投入（運用側）、Windows 名前解決の当日確認。
```

---

## Part B: 最初のプロンプト

```text
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
```

---

## 次に hfu が Claude Code に頼むとよいこと（引き継ぎ後）

- ラオスのワークショップ資料（PDF）を読ませて、スライド23の差し替え案を作らせる（結果の部分は、hfu が箇所を指定）。
- 国の割当の確定後に、`data.js` の `countries` を直させる。
- 当日の朝に、Windows PC で名前解決を試した結果を、スライド27・ノートへ反映させる。
- 講義後に、実際に使ったデッキを `deck/final/` に置き、付録（スライド31）を外した版を作らせる。
