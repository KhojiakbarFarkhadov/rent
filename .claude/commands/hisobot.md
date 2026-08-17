---
description: Bajarilgan ishni sprint fayliga hisobot qilib yozadi va progress.html panelini yangilaydi
---

`hisobotchi` agentini ishga tushir.

Vazifa: shu sessiyada bajarilgan ishni loyiha hujjatlariga ko'chirish.

1. `git status --short` va `git diff --stat HEAD` bilan nima o'zgarganini aniqla
   (git bo'lmasa — fayllarni to'g'ridan-to'g'ri o'qi)
2. Joriy sprintni top — `sprints/` ichida hammasi belgilanmagan eng kichik raqamli sprint
3. Kodda dalili bor tasklarni `- [x]` deb belgila, dalilsizga tegma
4. `## Hisobot` bo'limiga bugungi sana bilan yangi yozuv qo'sh
5. `## Handoff` bo'limini joriy holatga qarab qayta yoz
6. Mahsulot qarori o'zgargan bo'lsa `DECISIONS.md`ga yoz, yangi yo'nalish bo'lsa `ROADMAP.md`ga
7. `node scripts/progress.js` ishga tushirib panelni yangila
8. O'zbekcha commit xabarini taklif qil — commitni o'zing qilma

Qo'shimcha ko'rsatma bo'lsa: $ARGUMENTS
