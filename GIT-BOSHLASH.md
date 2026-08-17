# Git va GitHub — bir martalik sozlash

Quyidagi buyruqlarni **loyiha ildizida** (`Desktop\Rent`) bajaring.
PowerShell yoki Git Bash — ikkalasi ham bo'ladi.

## 1-qadam — `.claude` fayllarini joyiga qo'yish

`.claude/` papkasiga masofadan yozib bo'lmaydi, shuning uchun agent va buyruq
fayllari `claude-sozlamalar/` ichida turibdi.

**PowerShell:**

```powershell
New-Item -ItemType Directory -Force .claude\agents, .claude\commands | Out-Null
Copy-Item claude-sozlamalar\agents\hisobotchi.md .claude\agents\
Copy-Item claude-sozlamalar\commands\hisobot.md  .claude\commands\
Remove-Item -Recurse -Force claude-sozlamalar
```

**Git Bash:**

```bash
mkdir -p .claude/agents .claude/commands
cp claude-sozlamalar/agents/hisobotchi.md .claude/agents/
cp claude-sozlamalar/commands/hisobot.md  .claude/commands/
rm -rf claude-sozlamalar
```

## 2-qadam — repozitoriy va birinchi commit

```bash
git init
node scripts/hooklarni-ulash.js
git add -A
git commit -m "Rent: hujjatlar paketi, progress paneli va hisobotchi agenti"
```

`hooklarni-ulash.js` `core.hooksPath` ni `.githooks` ga o'rnatadi. Shundan keyin
har commitda `progress.html` avtomatik yangilanadi.

## 3-qadam — GitHub'da private repo

### A yo'l — `gh` CLI bilan (tavsiya)

```bash
gh auth login
gh repo create KhojiakbarFarkhadov/rent --private --source=. --remote=origin --push
```

`gh` o'rnatilmagan bo'lsa: `winget install GitHub.cli`

### B yo'l — qo'lda

1. github.com/new sahifasida `rent` nomli **Private** repo oching
   (README, .gitignore va litsenziya **qo'shmang** — ular allaqachon bor)
2. Keyin:

```bash
git branch -M main
git remote add origin https://github.com/KhojiakbarFarkhadov/rent.git
git push -u origin main
```

## 4-qadam — tekshirish

```bash
git log --oneline
git remote -v
node scripts/progress.js --check
```

Brauzerda `progress.html` ni oching — 6 ta sprint va 0/41 task ko'rinishi kerak.

Claude Code'ni qayta ishga tushiring va `/hisobot` buyrug'i ro'yxatda chiqqanini
tekshiring.

---

*Rent · vibecoding plugin bilan yaratilgan · vibecoding.uz*
