# DECISIONS — Rent

Qaror jurnali. Format: `sana · qaror · sabab`.

---

**2026-08-17 · Stack qotirildi: Next.js + TypeScript + PostgreSQL + Prisma + Tailwind**
Sabab: kurs pozitsiyasi — o'ylash stackka emas, mahsulotga sarflanadi. To'liq izoh
`STACK.md`da.

**2026-08-17 · Arxitektura API-first bo'ladi**
Sabab: S5'da Telegram Mini App qo'shilganda backendni qaytadan yozmaslik uchun. Web
sahifa — API'ning birinchi mijozi.

**2026-08-17 · Yurak amal — bron qilish**
Sabab: qovurdoq Blok 1. Butun mahsulot shu bitta amal atrofida quriladi; qidiruv,
savat va to'lov unga xizmat qiladi.

**2026-08-17 · Auditoriya: Toshkentdagi shaxsiy tadbir tashkilotchilari**
Sabab: charxla bosqichi. Korporativ segment va professional tashkilotchilar keyinga
qoldirildi — bir vaqtda uch auditoriyaga qurish g'oyani tarqatib yuboradi.

**2026-08-17 · Asosiy raqobat ustunligi — ishonch va kafolat**
Sabab: qovurdoq Blok 1. Egalar tekshiriladi, reyting yuritiladi, pul platformada
ushlanadi. Bu qaror admin qo'lda tasdiqlash oqimini keltirib chiqardi.

**2026-08-17 · Rollar: Mijoz, Ega, Admin. Operator roli v1'da yo'q**
Sabab: qovurdoq Blok 2. Operator ishini v1'da admin bajaradi.

**2026-08-17 · Kirish telefon + SMS kod orqali**
Sabab: qovurdoq Blok 2. Ikki sabab birga: raqam haqiqiyligi ishonch beradi va bu
auditoriya email ishlatmaydi.

**2026-08-17 · E'lonni admin joylaydi, ega faqat so'rov yuboradi**
Sabab: qovurdoq Blok 3. Katalog sifati eng yuqori bo'ladi. Xavf: admin vaqti tor joy —
ROADMAP'da alohida tarmoq sifatida yozildi.

**2026-08-17 · Bronni admin tasdiqlaydi, keyin to'lov**
Sabab: qovurdoq Blok 3. Pul faqat tasdiqlangan bronga o'tadi — qaytarish jarayoni
kerak bo'lmaydi.

**2026-08-17 · Band sana kalendarda umuman ko'rinmaydi**
Sabab: qovurdoq Blok 3. To'qnashuvning eng sodda yechimi. Buning evaziga miqdorli
bandlik hisobi kerak bo'ladi (S4).

**2026-08-17 · Narx kunlik va dona hisobida, chegara bilan**
Sabab: qovurdoq Blok 4. Ega belgilaydi, platforma har turkum uchun eng past va eng
yuqori chegarani qo'yadi.

**2026-08-17 · To'lov to'liq va oldindan onlayn (Payme / Click / Uzum)**
Sabab: qovurdoq Blok 4. Komissiya avtomatik ushlanadi — biznes modeli shu bilan
ishlaydi.

**2026-08-17 · Bekor qilish: 72 soat oldin to'liq qaytarish**
Sabab: qovurdoq Blok 4. Ega sanani boshqa mijozga sotib ulguradi.

**2026-08-17 · Kechikish uchun kunlik tarif qayta hisoblanadi**
Sabab: qovurdoq Blok 4. Sodda va tushunarli qoida.

**2026-08-17 · Nizo yozma qoidalar asosida, admin faqat chegara holatda**
Sabab: qovurdoq Blok 5. Admin har nizoga aralashsa, o'sish to'xtaydi.

**2026-08-17 · Telefon raqamlari va to'lov tarixi maxfiy**
Sabab: qovurdoq Blok 5. Raqam ochiq bo'lsa, tomonlar platformani chetlab o'tadi —
komissiya yo'qoladi.

**2026-08-17 · Qonuniy shakl: oddiy vositachilik, ommaviy oferta**
Sabab: qovurdoq Blok 5. Har ijaraga alohida shartnoma yozish v1'ni og'irlashtiradi.

**2026-08-17 · Zaxira kanal — Telegram kanal yoki bot**
Sabab: qovurdoq Blok 5. Auditoriya baribir Telegramda; S5 bilan tabiiy birlashadi.

**2026-08-17 · V1 chegarasi belgilandi**
Sabab: qovurdoq Blok 5. Yetkazib berish, tayyor paketlar, korporativ segment,
professional tashkilotchilar oqimi va Toshkentdan tashqari hududlar v1'ga kirmaydi.

---

## OCHIQ SAVOLLAR

| # | Savol | Qachon hal qilamiz |
|---|-------|--------------------|
| 1 | Birinchi 3 oyning muvaffaqiyat metrikasi qaysi raqam — haftalik bron, katalog hajmi yoki aylanma? | S1, doira aniqlanganda |
| 2 | Hozir aynan qaysi platforma ishlatiladi, to'g'ridan-to'g'ri raqobatchi bormi? | S1, bozor tekshiruvi |
| 3 | Bitta odam bir vaqtda ham mijoz, ham ega bo'la oladimi? | S3, auth sprintida |
| 4 | Depozit bo'ladimi, qanday hisoblanadi va qanday qaytariladi? | S4, chuqurlik sprintida |
| 5 | Mobil ilova v1 doirasiga kiradimi? | S1, doira aniqlanganda |

---

*Rent · vibecoding plugin bilan yaratilgan · vibecoding.uz*
