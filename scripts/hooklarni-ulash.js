#!/usr/bin/env node
/**
 * hooklarni-ulash.js — .githooks papkasini git'ga ulaydi.
 *
 * Bir marta ishga tushiriladi:  node scripts/hooklarni-ulash.js
 *
 * Shundan keyin:
 *   - har commitda  progress.html avtomatik yangilanadi va commitga qo'shiladi
 *   - har pushda    hisobot yozilmagan sprintlar haqida ogohlantirish chiqadi
 *
 * Windows'da ham ishlaydi (Git for Windows sh bilan birga keladi).
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const HOOKS = path.join(ROOT, '.githooks');

function main() {
  try {
    execSync('git rev-parse --is-inside-work-tree', { cwd: ROOT, stdio: 'ignore' });
  } catch {
    console.error('Xato: bu papka git repozitoriysi emas. Avval `git init` qiling.');
    process.exit(1);
  }

  if (!fs.existsSync(HOOKS)) {
    console.error('Xato: .githooks papkasi topilmadi.');
    process.exit(1);
  }

  execSync('git config core.hooksPath .githooks', { cwd: ROOT });

  // Unix tizimlarda bajariluvchi bayroqni qo'yamiz (Windows'da kerak emas)
  if (process.platform !== 'win32') {
    for (const f of fs.readdirSync(HOOKS)) {
      try {
        fs.chmodSync(path.join(HOOKS, f), 0o755);
      } catch {
        /* e'tiborsiz qoldiramiz */
      }
    }
  }

  console.log('Hooklar ulandi: core.hooksPath = .githooks');
  console.log('  pre-commit → progress.html avtomatik yangilanadi');
  console.log('  pre-push   → hisobotsiz sprintlar haqida ogohlantiradi');
}

main();
