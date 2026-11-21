const S = require("./data.js");
const fs = require("fs");
const path = require("path");
const sess = {0:"オープニング",1:"第1コマ Your expertise（13:00–14:00）",2:"第2コマ Connect（14:15–15:15）",3:"第3コマ Test（15:30–16:30）",4:"付録（構造版のみ。最終版では削除）"};
const st = {ready:"ready", placeholder:"placeholder", open:"open"};
let out = `# スライド計画（構造版）\n\n- 対象: \`jica-un-open-gis-2026-structure.pptx\`（${S.length}枚、16:9、英語スライド・英語ノート）\n- 位置づけ: 構造確認用の下書き。最終配布版ではない。\n- 正本: \`jica-un-open-gis-2026.md\`\n- status凡例: ready = そのまま使える設計 / placeholder = 素材・確認待ちで差し替え前提 / open = 実話や事実が未確定で創作せず保留\n\n`;
const cnt = {ready:0,placeholder:0,open:0};
let last = -1, tsum = {};
S.forEach((s,i)=>{ cnt[s.status]++; tsum[s.session]=(tsum[s.session]||0)+s.time; });
out += `## 概要\n\n| コマ | 枚数 | 想定発話時間（分） |\n|---|---|---|\n`;
for (const k of [0,1,2,3,4]) out += `| ${sess[k]} | ${S.filter(s=>s.session===k).length} | ${tsum[k]} |\n`;
out += `\nstatus内訳: ready ${cnt.ready} / placeholder ${cnt.placeholder} / open ${cnt.open}\n\n`;
out += `想定発話時間は各コマの60分に対し、第1コマ約50分＋質疑バッファ約10分、第2コマ約55分＋バッファ約5分、第3コマ約57分＋バッファ約3分。第1コマと第3コマの配分は、KCAIMの各コマのムーブメント時間に合わせた。\n\n`;
S.forEach((s,i)=>{
  if (s.session!==last){ out += `## ${sess[s.session]}\n\n`; last = s.session; }
  out += `### ${i+1}. ${s.title}\n\n`;
  out += `- session: ${s.session===0?"opening":s.session===4?"appendix":s.session}\n- 目的: ${s.ja.purpose}\n- key message: ${s.ja.key}\n- 視覚処理: ${s.ja.visual}\n- 想定発話時間: 約${s.time}分\n- 講師ノート要旨: ${s.ja.note}\n- 根拠・出典: ${s.evidenceJa}\n- status: ${st[s.status]}\n\n`;
});
const OUT = process.env.PLAN_OUT_DIR || path.join(__dirname, "..", "docs");
fs.writeFileSync(path.join(OUT, "jica-un-open-gis-2026-slide-plan.md"), out);
console.log(cnt);
