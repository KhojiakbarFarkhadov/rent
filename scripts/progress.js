#!/usr/bin/env node
/**
 * progress.js — Rent loyihasining progress.html panelini yasaydi.
 *
 * Yagona haqiqat manbai: sprints/SPRINT-*.md fayllari.
 * Skript ularni o'qiydi, tasklar va hisobotlar holatini hisoblaydi va
 * loyiha ildizida progress.html faylini qaytadan yozadi.
 *
 * Ishlatish:  node scripts/progress.js
 * Tekshirish: node scripts/progress.js --check   (yozmaydi, farq bo'lsa 1 qaytaradi)
 * Ogohlantirish: node scripts/progress.js --ogoh (hisobotsiz sprintlarni sanab beradi)
 *
 * Tashqi kutubxona ishlatilmaydi.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const SPRINTS_DIR = path.join(ROOT, 'sprints');
const OUT_FILE = path.join(ROOT, 'progress.html');
const LOYIHA = 'Rent';

const CHECK_ONLY = process.argv.includes('--check');
const OGOH = process.argv.includes('--ogoh');

// ---------------------------------------------------------------- yordamchilar

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** Markdown ichidagi ** va ` belgilarini tozalaydi */
const sodda = (s) => String(s).replace(/\*\*/g, '').replace(/`/g, '').trim();

/**
 * `## Sarlavha` bo'limining tanasini qaytaradi.
 * Bo'lim keyingi `## ` sarlavhada yoki `---` ajratgichda (fayl oxiridagi footer)
 * tugaydi — aks holda oxirgi bo'lim footerni ham yutib yuboradi.
 */
function bolim(matn, sarlavha) {
  const re = new RegExp(`^##\\s+${sarlavha}\\s*$`, 'mi');
  const m = matn.match(re);
  if (!m) return '';
  const boshi = m.index + m[0].length;
  const qolgan = matn.slice(boshi);
  const chegaralar = [qolgan.search(/^##\s+/m), qolgan.search(/^---\s*$/m)].filter((i) => i !== -1);
  const oxiri = chegaralar.length ? Math.min(...chegaralar) : qolgan.length;
  return qolgan.slice(0, oxiri).trim();
}

/** Bo'lim bo'shmi? (faqat HTML izoh yoki bo'sh joy bo'lsa — bo'sh) */
function bosh(tana) {
  return tana.replace(/<!--[\s\S]*?-->/g, '').trim().length === 0;
}

function gitMalumot() {
  try {
    const out = execSync('git log -1 --format=%h|%ad|%s --date=short', {
      cwd: ROOT,
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .toString()
      .trim();
    const [hash, sana, xabar] = out.split('|');
    return { hash, sana, xabar };
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------- o'qish

function sprintlarniOqi() {
  if (!fs.existsSync(SPRINTS_DIR)) return [];
  return fs
    .readdirSync(SPRINTS_DIR)
    .filter((f) => /^SPRINT-\d+-.+\.md$/i.test(f))
    .sort((a, b) => parseInt(a.match(/\d+/)[0], 10) - parseInt(b.match(/\d+/)[0], 10))
    .map((fayl) => {
      const matn = fs.readFileSync(path.join(SPRINTS_DIR, fayl), 'utf8');
      const raqam = parseInt(fayl.match(/\d+/)[0], 10);

      const h1 = matn.match(/^#\s+(.+)$/m);
      const nom = h1 ? sodda(h1[1]) : `SPRINT ${raqam}`;

      const maqsadM = matn.match(/^\*\*Maqsad:\*\*\s*(.+)$/m);
      const savolM = matn.match(/^\*\*Savol:\*\*\s*(.+)$/m);

      const tasklarTana = bolim(matn, 'Tasklar');
      const tasklar = [...tasklarTana.matchAll(/^-\s*\[( |x|X)\]\s*(.+)$/gm)].map((m) => ({
        bajarildi: m[1].toLowerCase() === 'x',
        matn: sodda(m[2]),
      }));

      const mezon = [...bolim(matn, 'Qabul mezoni').matchAll(/^-\s+(.+)$/gm)].map((m) =>
        sodda(m[1])
      );

      const hisobotTana = bolim(matn, 'Hisobot');
      const handoffTana = bolim(matn, 'Handoff');

      const bajarilgan = tasklar.filter((t) => t.bajarildi).length;
      const jami = tasklar.length;
      const foiz = jami ? Math.round((bajarilgan / jami) * 100) : 0;

      let holat = 'boshlanmagan';
      if (jami > 0 && bajarilgan === jami) holat = 'yakunlandi';
      else if (bajarilgan > 0) holat = 'jarayonda';

      return {
        raqam,
        fayl,
        nom,
        maqsad: maqsadM ? sodda(maqsadM[1]) : '',
        savol: savolM ? sodda(savolM[1]) : '',
        tasklar,
        mezon,
        bajarilgan,
        jami,
        foiz,
        holat,
        hisobotBor: !bosh(hisobotTana),
        hisobot: bosh(hisobotTana) ? '' : hisobotTana,
        handoffBor: !bosh(handoffTana),
        handoff: bosh(handoffTana) ? '' : handoffTana,
      };
    });
}

function ochiqSavollarniOqi() {
  const prd = path.join(ROOT, 'PRD.md');
  if (!fs.existsSync(prd)) return [];
  const tana = bolim(fs.readFileSync(prd, 'utf8'), '9\\. Ochiq savollar');
  return [...tana.matchAll(/^\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|/gm)].map((m) => ({
    raqam: m[1],
    savol: sodda(m[2]),
    qachon: sodda(m[3]),
  }));
}

// ---------------------------------------------------------------- HTML

const IKON = {
  yakunlandi:
    '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  jarayonda:
    '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 4.5V8l2.5 1.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  boshlanmagan:
    '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="2.5 2.5"/></svg>',
};

const HOLAT_NOMI = {
  yakunlandi: 'Yakunlandi',
  jarayonda: 'Jarayonda',
  boshlanmagan: 'Boshlanmagan',
};

function statTile(label, qiymat, izoh) {
  return `<div class="tile">
        <div class="tile__label">${esc(label)}</div>
        <div class="tile__value">${esc(qiymat)}</div>
        <div class="tile__note">${esc(izoh)}</div>
      </div>`;
}

function meter(foiz, holat, aria) {
  return `<div class="meter" role="img" aria-label="${esc(aria)}">
          <div class="meter__track"><div class="meter__fill meter__fill--${holat}" style="width:${foiz}%"></div></div>
        </div>`;
}

function sprintKartochka(s) {
  const tasklar = s.tasklar
    .map(
      (t) => `<li class="task ${t.bajarildi ? 'task--done' : ''}">
              <span class="task__box" aria-hidden="true">${t.bajarildi ? IKON.yakunlandi : ''}</span>
              <span class="task__text">${esc(t.matn)}</span>
            </li>`
    )
    .join('\n');

  const hisobotBelgi = s.hisobotBor
    ? `<span class="rozetka rozetka--good">${IKON.yakunlandi} Hisobot yozilgan</span>`
    : `<span class="rozetka rozetka--muted">${IKON.boshlanmagan} Hisobot yo'q</span>`;

  const hisobotMatn = s.hisobotBor
    ? `<div class="hisobot"><div class="hisobot__sarlavha">Hisobot</div><pre>${esc(s.hisobot)}</pre></div>`
    : '';

  const handoffMatn = s.handoffBor
    ? `<div class="hisobot"><div class="hisobot__sarlavha">Handoff</div><pre>${esc(s.handoff)}</pre></div>`
    : '';

  return `<article class="kartochka kartochka--${s.holat}">
        <header class="kartochka__bosh">
          <div>
            <h3 class="kartochka__nom">${esc(s.nom)}</h3>
            <p class="kartochka__savol">${esc(s.savol)}</p>
          </div>
          <span class="chip chip--${s.holat}">${IKON[s.holat]} ${HOLAT_NOMI[s.holat]}</span>
        </header>

        <p class="kartochka__maqsad">${esc(s.maqsad)}</p>

        <div class="kartochka__olcham" title="${s.bajarilgan} / ${s.jami} task bajarildi">
          ${meter(s.foiz, s.holat, `${s.nom}: ${s.foiz} foiz bajarildi`)}
          <span class="kartochka__foiz">${s.foiz}%</span>
          <span class="kartochka__nisbat">${s.bajarilgan} / ${s.jami} task</span>
        </div>

        <ul class="tasklar">
${tasklar}
        </ul>

        <footer class="kartochka__oyoq">
          ${hisobotBelgi}
          <span class="fayl">sprints/${esc(s.fayl)}</span>
        </footer>
        ${hisobotMatn}
        ${handoffMatn}
      </article>`;
}

function htmlYasa(sprintlar, savollar, git) {
  const jamiTask = sprintlar.reduce((a, s) => a + s.jami, 0);
  const bajarilganTask = sprintlar.reduce((a, s) => a + s.bajarilgan, 0);
  const umumiyFoiz = jamiTask ? Math.round((bajarilganTask / jamiTask) * 100) : 0;
  const yakunlanganSprint = sprintlar.filter((s) => s.holat === 'yakunlandi').length;
  const hisobotlar = sprintlar.filter((s) => s.hisobotBor).length;
  const joriy =
    sprintlar.find((s) => s.holat === 'jarayonda') ||
    sprintlar.find((s) => s.holat === 'boshlanmagan');

  const sana = new Date().toISOString().slice(0, 10);
  const vaqt = new Date().toISOString().slice(11, 16);

  const jadval = sprintlar
    .map(
      (s) => `<tr>
              <td>${esc(s.nom)}</td>
              <td>${HOLAT_NOMI[s.holat]}</td>
              <td class="raqam">${s.bajarilgan}</td>
              <td class="raqam">${s.jami}</td>
              <td class="raqam">${s.foiz}%</td>
              <td>${s.hisobotBor ? 'Bor' : "Yo'q"}</td>
            </tr>`
    )
    .join('\n');

  const savollarRoyxat = savollar.length
    ? savollar
        .map(
          (q) => `<li class="savol">
              <span class="savol__raqam">${esc(q.raqam)}</span>
              <span class="savol__matn">${esc(q.savol)}</span>
              <span class="savol__qachon">${esc(q.qachon)}</span>
            </li>`
        )
        .join('\n')
    : '<li class="savol"><span class="savol__matn">Ochiq savol qolmadi.</span></li>';

  const maalumot = {
    loyiha: LOYIHA,
    yangilandi: `${sana} ${vaqt} UTC`,
    git,
    umumiyFoiz,
    jamiTask,
    bajarilganTask,
    sprintlar: sprintlar.map((s) => ({
      raqam: s.raqam,
      nom: s.nom,
      holat: s.holat,
      bajarilgan: s.bajarilgan,
      jami: s.jami,
      foiz: s.foiz,
      hisobotBor: s.hisobotBor,
    })),
    ochiqSavollar: savollar,
  };

  return `<!DOCTYPE html>
<html lang="uz" data-theme="auto">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${LOYIHA} — progress</title>
<style>
  :root {
    --surface-1: #fcfcfb;
    --plane: #f9f9f7;
    --text-primary: #0b0b0b;
    --text-secondary: #52514e;
    --text-muted: #898781;
    --grid: #e1e0d9;
    --baseline: #c3c2b7;
    --border: rgba(11,11,11,0.10);
    --accent: #2a78d6;
    --track: #e1e0d9;
    --good: #0ca30c;
    --warning: #fab219;
    --good-text: #006300;
    color-scheme: light;
  }
  @media (prefers-color-scheme: dark) {
    :root:where(:not([data-theme="light"])) {
      --surface-1: #1a1a19;
      --plane: #0d0d0d;
      --text-primary: #ffffff;
      --text-secondary: #c3c2b7;
      --text-muted: #898781;
      --grid: #2c2c2a;
      --baseline: #383835;
      --border: rgba(255,255,255,0.10);
      --accent: #3987e5;
      --track: #2c2c2a;
      --good: #0ca30c;
      --warning: #fab219;
      --good-text: #0ca30c;
      color-scheme: dark;
    }
  }
  :root[data-theme="dark"] {
    --surface-1: #1a1a19;
    --plane: #0d0d0d;
    --text-primary: #ffffff;
    --text-secondary: #c3c2b7;
    --text-muted: #898781;
    --grid: #2c2c2a;
    --baseline: #383835;
    --border: rgba(255,255,255,0.10);
    --accent: #3987e5;
    --track: #2c2c2a;
    --good: #0ca30c;
    --warning: #fab219;
    --good-text: #0ca30c;
    color-scheme: dark;
  }

  * { box-sizing: border-box; }
  body {
    margin: 0;
    padding: 32px 20px 64px;
    background: var(--plane);
    color: var(--text-primary);
    font: 15px/1.55 system-ui, -apple-system, "Segoe UI", sans-serif;
  }
  .sahifa { max-width: 1040px; margin: 0 auto; }

  header.bosh { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; margin-bottom: 28px; }
  h1 { margin: 0; font-size: 22px; font-weight: 600; letter-spacing: -0.01em; }
  .bosh__izoh { margin: 4px 0 0; color: var(--text-secondary); font-size: 13px; }
  .tugma {
    border: 1px solid var(--border); background: var(--surface-1); color: var(--text-secondary);
    border-radius: 8px; padding: 7px 12px; font: inherit; font-size: 13px; cursor: pointer;
  }
  .tugma:hover { color: var(--text-primary); }

  .qahramon {
    background: var(--surface-1); border: 1px solid var(--border); border-radius: 14px;
    padding: 24px; margin-bottom: 16px;
  }
  .qahramon__label { color: var(--text-secondary); font-size: 13px; margin-bottom: 6px; }
  .qahramon__raqam { font-size: 56px; font-weight: 600; line-height: 1; letter-spacing: -0.02em; }
  .qahramon__izoh { color: var(--text-secondary); font-size: 13px; margin-top: 8px; }
  .qahramon .meter { margin-top: 16px; }

  .tiles { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; margin-bottom: 28px; }
  .tile { background: var(--surface-1); border: 1px solid var(--border); border-radius: 12px; padding: 16px; }
  .tile__label { color: var(--text-secondary); font-size: 12px; }
  .tile__value { font-size: 28px; font-weight: 600; line-height: 1.2; margin-top: 2px; }
  .tile__note { color: var(--text-muted); font-size: 12px; margin-top: 2px; }

  h2 { font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
       color: var(--text-muted); margin: 32px 0 12px; }

  .meter { width: 100%; }
  .meter__track { height: 10px; background: var(--track); border-radius: 5px; overflow: hidden; }
  .meter__fill { height: 100%; background: var(--accent); border-radius: 0 4px 4px 0; transition: width .2s; }
  .meter__fill--yakunlandi { background: var(--good); border-radius: 5px; }
  .meter__fill--boshlanmagan { background: transparent; }

  .kartochka {
    background: var(--surface-1); border: 1px solid var(--border); border-radius: 14px;
    padding: 20px; margin-bottom: 12px;
  }
  .kartochka--yakunlandi { border-left: 3px solid var(--good); }
  .kartochka--jarayonda { border-left: 3px solid var(--accent); }
  .kartochka__bosh { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
  .kartochka__nom { margin: 0; font-size: 16px; font-weight: 600; }
  .kartochka__savol { margin: 2px 0 0; color: var(--text-secondary); font-size: 13px; }
  .kartochka__maqsad { margin: 12px 0 14px; color: var(--text-secondary); font-size: 13px; }
  .kartochka__olcham { display: grid; grid-template-columns: 1fr auto auto; align-items: center; gap: 12px; }
  .kartochka__foiz { font-size: 14px; font-weight: 600; font-variant-numeric: tabular-nums; }
  .kartochka__nisbat { color: var(--text-muted); font-size: 12px; font-variant-numeric: tabular-nums; white-space: nowrap; }
  .kartochka__oyoq { display: flex; align-items: center; justify-content: space-between; gap: 12px;
                     margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--grid); }
  .fayl { color: var(--text-muted); font-size: 12px; font-family: ui-monospace, "SF Mono", Menlo, monospace; }

  .tasklar { list-style: none; margin: 14px 0 0; padding: 0; }
  .task { display: flex; align-items: flex-start; gap: 10px; padding: 5px 0; font-size: 14px; }
  .task__box {
    flex: none; width: 16px; height: 16px; margin-top: 2px; border-radius: 4px;
    border: 1.5px solid var(--baseline); display: grid; place-items: center; color: #fff;
  }
  .task--done .task__box { background: var(--good); border-color: var(--good); }
  .task--done .task__text { color: var(--text-muted); text-decoration: line-through; }
  .task__box svg { width: 11px; height: 11px; }

  .chip, .rozetka {
    display: inline-flex; align-items: center; gap: 6px; white-space: nowrap;
    border-radius: 999px; padding: 4px 10px; font-size: 12px; font-weight: 500;
    border: 1px solid var(--border); color: var(--text-secondary); background: var(--plane);
  }
  .chip svg, .rozetka svg { width: 13px; height: 13px; flex: none; }
  .chip--yakunlandi, .rozetka--good { color: var(--good-text); }
  .chip--jarayonda { color: var(--accent); }
  .chip--boshlanmagan, .rozetka--muted { color: var(--text-muted); }

  .hisobot { margin-top: 14px; padding: 12px 14px; background: var(--plane); border-radius: 10px; border: 1px solid var(--grid); }
  .hisobot__sarlavha { font-size: 12px; font-weight: 600; color: var(--text-muted);
                       text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px; }
  .hisobot pre { margin: 0; white-space: pre-wrap; font: inherit; font-size: 13px; color: var(--text-secondary); }

  .savollar { list-style: none; margin: 0; padding: 0; background: var(--surface-1);
              border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
  .savol { display: grid; grid-template-columns: 28px 1fr auto; gap: 12px; align-items: baseline;
           padding: 12px 16px; border-bottom: 1px solid var(--grid); font-size: 14px; }
  .savol:last-child { border-bottom: 0; }
  .savol__raqam { color: var(--text-muted); font-variant-numeric: tabular-nums; }
  .savol__qachon { color: var(--text-muted); font-size: 12px; white-space: nowrap; }

  table { width: 100%; border-collapse: collapse; background: var(--surface-1);
          border: 1px solid var(--border); border-radius: 12px; overflow: hidden; font-size: 13px; }
  th, td { text-align: left; padding: 10px 14px; border-bottom: 1px solid var(--grid); }
  th { color: var(--text-muted); font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; }
  tr:last-child td { border-bottom: 0; }
  td.raqam, th.raqam { text-align: right; font-variant-numeric: tabular-nums; }

  footer.oyoq { margin-top: 32px; color: var(--text-muted); font-size: 12px; text-align: center; }
  details summary { cursor: pointer; color: var(--text-secondary); font-size: 13px; }

  @media (max-width: 620px) {
    .kartochka__olcham { grid-template-columns: 1fr; }
    .savol { grid-template-columns: 24px 1fr; }
    .savol__qachon { grid-column: 2; }
  }
</style>
</head>
<body>
<div class="sahifa">

  <header class="bosh">
    <div>
      <h1>${LOYIHA} — sprint progressi</h1>
      <p class="bosh__izoh">Yangilandi: ${sana} ${vaqt} UTC${
        git ? ` · commit ${esc(git.hash)} (${esc(git.sana)})` : ''
      }</p>
    </div>
    <button class="tugma" id="mavzu" type="button">Mavzu</button>
  </header>

  <section class="qahramon">
    <div class="qahramon__label">Umumiy bajarilish</div>
    <div class="qahramon__raqam">${umumiyFoiz}%</div>
    <div class="qahramon__izoh">${bajarilganTask} / ${jamiTask} task bajarildi${
      joriy ? ` · joriy: ${esc(joriy.nom)}` : ''
    }</div>
    ${meter(umumiyFoiz, umumiyFoiz === 100 ? 'yakunlandi' : 'jarayonda', `Umumiy bajarilish ${umumiyFoiz} foiz`)}
  </section>

  <div class="tiles">
    ${statTile('Sprintlar', String(sprintlar.length), 'magistral bo‘yicha')}
    ${statTile('Yakunlangan sprint', `${yakunlanganSprint}`, `${sprintlar.length} tadan`)}
    ${statTile('Bajarilgan task', `${bajarilganTask}`, `${jamiTask} tadan`)}
    ${statTile('Yozilgan hisobot', `${hisobotlar}`, `${sprintlar.length} tadan`)}
    ${statTile('Ochiq savol', String(savollar.length), 'PRD 9-bo‘lim')}
  </div>

  <h2>Sprintlar</h2>
${sprintlar.map(sprintKartochka).join('\n')}

  <h2>Ochiq savollar</h2>
  <ul class="savollar">
${savollarRoyxat}
  </ul>

  <h2>Jadval ko'rinishi</h2>
  <table>
    <thead>
      <tr>
        <th>Sprint</th><th>Holat</th><th class="raqam">Bajarildi</th>
        <th class="raqam">Jami</th><th class="raqam">Foiz</th><th>Hisobot</th>
      </tr>
    </thead>
    <tbody>
${jadval}
    </tbody>
  </table>

  <footer class="oyoq">
    Bu fayl qo'lda tahrirlanmaydi — <code>node scripts/progress.js</code> uni
    sprints/ papkasidan qaytadan yasaydi.<br>
    ${LOYIHA} · vibecoding plugin bilan yaratilgan · vibecoding.uz
  </footer>
</div>

<script type="application/json" id="rent-progress-data">
${JSON.stringify(maalumot, null, 2)}
</script>
<script>
  (function () {
    var tugma = document.getElementById('mavzu');
    var ildiz = document.documentElement;
    var saqlangan = null;
    try { saqlangan = window.name && window.name.indexOf('theme:') === 0 ? window.name.slice(6) : null; } catch (e) {}
    if (saqlangan) ildiz.setAttribute('data-theme', saqlangan);
    tugma.addEventListener('click', function () {
      var hozir = ildiz.getAttribute('data-theme');
      var qorongi = hozir === 'dark' ||
        (hozir !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      var yangi = qorongi ? 'light' : 'dark';
      ildiz.setAttribute('data-theme', yangi);
      try { window.name = 'theme:' + yangi; } catch (e) {}
    });
  })();
</script>
</body>
</html>
`;
}

// ---------------------------------------------------------------- ishga tushish

function main() {
  const sprintlar = sprintlarniOqi();
  if (!sprintlar.length) {
    console.error("progress: sprints/ papkasida SPRINT-*.md fayllari topilmadi.");
    process.exit(1);
  }
  const savollar = ochiqSavollarniOqi();
  const git = gitMalumot();
  const yangi = htmlYasa(sprintlar, savollar, git);

  const bajarilgan = sprintlar.reduce((a, s) => a + s.bajarilgan, 0);
  const jami = sprintlar.reduce((a, s) => a + s.jami, 0);

  if (CHECK_ONLY) {
    const eski = fs.existsSync(OUT_FILE) ? fs.readFileSync(OUT_FILE, 'utf8') : '';
    // Yangilanish vaqti har safar o'zgaradi — uni solishtiruvdan chiqaramiz.
    const tozala = (s) => s.replace(/Yangilandi:[^<]*/g, '').replace(/"yangilandi":[^,]*/g, '');
    if (tozala(eski) !== tozala(yangi)) {
      console.error('progress: progress.html eskirgan — `node scripts/progress.js` ishga tushiring.');
      process.exit(1);
    }
    console.log('progress: progress.html aktual.');
    return;
  }

  fs.writeFileSync(OUT_FILE, yangi, 'utf8');
  console.log(
    `progress: progress.html yangilandi — ${sprintlar.length} sprint, ${bajarilgan}/${jami} task, ` +
      `${sprintlar.filter((s) => s.hisobotBor).length} hisobot.`
  );

  if (OGOH) {
    const hisobotsiz = sprintlar.filter((s) => s.bajarilgan > 0 && !s.hisobotBor);
    if (hisobotsiz.length) {
      console.log('');
      console.log('DIQQAT — quyidagi sprintlarda hisobot yozilmagan:');
      for (const s of hisobotsiz) {
        console.log(`  - sprints/${s.fayl} (${s.bajarilgan} ta task bajarilgan, hisobot bo'sh)`);
      }
      console.log('');
      console.log('            Claude ga "hisobot" deb yozing yoki /hisobot buyrugini bering.');
      console.log('');
    }
  }
}

main();
