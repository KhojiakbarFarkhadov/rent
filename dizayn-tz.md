# DIZAYN TZ — mijoz oqimi

**Loyiha:** Rent · **Manba:** PRD.md (5-bo'lim — Asosiy oqim, 8-bo'lim — Qoidalar)

Bu hujjat **faqat yurak amal — BRON QILISH** yo'lidagi mijoz ekranlarini tavsiflaydi.
Ega va admin ekranlari bu yerga kirmaydi — ular alohida hujjatda bo'ladi.

Vizual tizim — **variant A "Ishonchli ko'k"** (2-bo'limga qarang). Tanlov sababi va
rad etilgan variantlar `dizayn-tizim-variantlar.md` da.

---

## Ekranlar xaritasi

```
M-01 Bosh sahifa (sana + tadbir turi)
  |
  v
M-02 Katalog  <----------------+
  |  |                         |
  |  +--> M-03 Jihoz detali ---+
  v
M-04 Savat
  |
  +-- kirmagan --> M-05 Kirish --> M-06 SMS kod --+
  |                                               |
  +-- kirgan ------------------------------------>+
                                                  |
                                                  v
                                         M-07 So'rovni tasdiqlash
                                                  |
                                                  v
                                         M-08 So'rov yuborildi
                                                  |
                                                  v
                                         M-09 Mening bronlarim
                                                  |
                                                  v
                                         M-10 Bron detali
                                          |    |     |
                    M-11 To'lov <---------+    |     +--> M-13 Bekor qilish
                          |                    |
                          v                    v
                    M-12 To'lov natijasi   M-14 Izoh va reyting
```

---

## Dizayn tizimi — variant A "Ishonchli ko'k"

Tanlangan variant. Quyidagi qiymatlar barcha ekranlarga taalluqli — har ekranda
qayta yozilmaydi. Palitradan tashqariga chiqilmaydi.

### Ranglar

| Rol | Hex | Qayerda | Kontrast |
|---|---|---|---|
| Fon | `#F1F5F9` | Sahifa foni | — |
| Sirt | `#FFFFFF` | Kartochka, modal, input, pastki panel | — |
| Asosiy | `#1B6BD6` | Asosiy tugma, faol holat, havola, tanlangan chip | 5.10 (oq matn bilan) |
| Matn | `#0F172A` | Sarlavha, jihoz nomi, narx, asosiy matn | 17.85 (sirtda) |
| Ikkilamchi matn | `#5B6B7F` | Meta, izoh, "8 ta bo'sh", ega nomi | 5.45 (sirtda) |
| Chegara | `#E2E8F0` | Ajratgich chiziq, input chegarasi | — |

Barcha juftliklar WCAG bo'yicha hisoblangan va matn uchun 4.5 chegarasidan o'tadi.

**Holat ranglari** (PRD 8-bo'lim zanjiri bo'yicha):

| Holat | Fon | Matn |
|---|---|---|
| So'rov | `#E7EBF0` | `#5B6B7F` |
| Tasdiqlandi | `#1B6BD6` | `#FFFFFF` |
| To'landi | `#0E7C55` | `#FFFFFF` |
| Yakunlandi | `#E7EBF0` | `#0F172A` |
| Bekor qilindi | `#E7EBF0` | `#5B6B7F` |
| Rad etildi | `#C0392B` | `#FFFFFF` |

Holat hech qachon faqat rang bilan berilmaydi — yonida doim matn bo'ladi.

**Ogohlantirish rangi:** `#B45309` (savatdagi "jihoz band bo'lib qoldi" bloki uchun,
fon `#FEF3C7`).

### Tipografiya

Sarlavha — **Manrope** (600/700). Matn — **Inter** (400/500/600).
Ikkalasi ham o'zbek lotin belgilarini to'liq qo'llaydi.

| Rol | Shrift | O'lcham / qator | Qalinlik |
|---|---|---|---|
| Ekran sarlavhasi | Manrope | 24 / 1.25 | 700 |
| Blok sarlavhasi | Manrope | 19 / 1.3 | 600 |
| Kartochka nomi | Manrope | 16 / 1.35 | 600 |
| Asosiy matn | Inter | 15 / 1.55 | 400 |
| Meta va izoh | Inter | 13 / 1.5 | 400 |
| Mayda yorliq | Inter | 11 / 1.4, katta harf, oraliq 0.08em | 500 |
| **Narx** | Inter | 20 / 1.2 | 600 |
| Tugma matni | Inter | 15 | 600 |

Narx har doim eng yirik raqam — u rangdan emas, o'lchamdan kuch oladi.
O'zbekcha matn inglizchadan uzun, shuning uchun tugma va sarlavhalar ikki qatorga
sig'ishi hisobga olinadi.

### Burchak radiusi

| Element | Radius |
|---|---|
| Kartochka, modal, pastki panel | 16px |
| Rasm (kartochka ichida) | 12px |
| Tugma, input | 12px |
| Chip, holat belgisi, teg | 999px (tabletka) |
| Avatar | 50% |

### Oraliq shkalasi

`4 · 8 · 12 · 16 · 24 · 32 · 48` — boshqa qiymat ishlatilmaydi.

- Kartochka ichki to'ldirishi: 16px
- Kartochkalar orasi: 12px
- Bloklar orasi: 24px
- Ekran chetidan: 16px (mobil), 24px (planshetdan yuqori)

### Soya va chegara

- Kartochka: `0 2px 8px rgba(15,23,42,0.06)` — juda yumshoq, deyarli sezilmaydi
- Pastki yopishgan panel (savat): `0 -2px 12px rgba(15,23,42,0.08)`
- Modal: `0 8px 32px rgba(15,23,42,0.12)`
- Chegara faqat input va ajratgichda: 1px `#E2E8F0`
- Kartochkada soya ham, chegara ham bir vaqtda ishlatilmaydi

### Komponent qoidalari

**Tugma**
- Balandligi 48px, teginish maydoni kamida 44px
- Asosiy: fon `#1B6BD6`, matn oq, radius 12px
- Ikkilamchi: fon oq, chegara 1px `#1B6BD6`, matn `#1B6BD6`
- Xavfli (bekor qilish): fon oq, chegara va matn `#C0392B`
- O'chiq holat: fon `#E2E8F0`, matn `#94A3B8`, bosilmaydi
- Bosilganda: 8% quyuqroq, kutilganda tugma ichida spinner va matn o'rniga hech narsa emas — matn qoladi

**Input**
- Balandligi 48px, radius 12px, chegara 1px `#E2E8F0`
- Fokusda chegara `#1B6BD6`, tashqarida 3px `rgba(27,107,214,0.12)` halqa
- Xato holatida chegara `#C0392B`, ostida qizil yozuv 13px

**Kartochka (katalog)**
- Rasm nisbati doim `4:3`, `object-fit: cover` — egalar yuklagan rasm har xil bo'ladi
- Rasm ustiga matn yozilmaydi
- Tuzilishi: rasm → nomi → meta qatori → narx va bo'sh soni → tugma

**Chip**
- Balandligi 32px, gorizontal to'ldirish 12px
- Tanlanmagan: fon `#E7EBF0`, matn `#5B6B7F`
- Tanlangan: fon `#1B6BD6`, matn oq

### Holatlarning vizual ko'rinishi

- **Skelet:** fon `#E7EBF0`, radius elementnikiga teng, 1.4s yumshoq pulsatsiya
- **Bo'sh holat:** markazda ikonka `#94A3B8` (56px), ostida sarlavha 19px va izoh 13px `#5B6B7F`, pastda asosiy tugma
- **Xato banneri:** fon `#FEE2E2`, matn `#991B1B`, chapda ikonka, o'ngda `Qayta urinish`
- **Ogohlantirish banneri:** fon `#FEF3C7`, matn `#B45309`

### Hozircha yozilmagan

Qorong'i rejim, animatsiya vaqtlari va ikonka to'plami bu hujjatga kirmagan —
ular `DESIGN.md` da yoziladi.

---

## M-01 — Bosh sahifa (sana va tadbir turi)

**Vazifa:** tadbir sanasi va turini olib, mijozni o'sha kunga bo'sh jihozlar katalogiga
olib borish.

**Elementlar**

- Sarlavha va bir qatorlik tushuntirish: nima qilish mumkinligi
- Tadbir turi tanlagich: to'y · tug'ilgan kun · uzatish · ma'raka · boshqa
- Sana tanlash kalendari — o'tmish kunlari tanlanmaydi
- Kun soni tanlagich (1 kun / 2 kun / 3 kun)
- Asosiy tugma: **Jihozlarni ko'rish**
- Yuqori panelda: `Kirish` (kirmagan bo'lsa) yoki `Mening bronlarim` (kirgan bo'lsa)
- Ishonch bloki: tekshirilgan egalar, pul platformada ushlanadi, 72 soat ichida bepul bekor qilish

**O'tishlar**

| Element | Qayerga |
|---|---|
| Jihozlarni ko'rish | M-02 |
| Kirish | M-05 |
| Mening bronlarim | M-09 |

**Holatlar**

- **Yuklanmoqda:** tadbir turlari va kalendar kelguncha skelet bloklar; asosiy tugma o'chiq
- **Xato:** "Ma'lumot yuklanmadi" banneri + `Qayta urinish` tugmasi
- **Validatsiya:** sana tanlanmagan bo'lsa asosiy tugma o'chiq turadi

---

## M-02 — Katalog (tanlangan sanaga bo'sh jihozlar)

**Vazifa:** tanlangan sanaga bo'sh jihozlarni ko'rsatish va mijozga keraklisini
filtrlab topish imkonini berish.

**Elementlar**

- Tepada tanlangan sana va kun soni + `O'zgartirish` havolasi
- Filtr paneli: turkum (stul, stol, chodir, ovoz, yoritish, sahna, generator, idish-tovoq, dekoratsiya) · narx oralig'i · Toshkent tumani
- Saralash: narx (o'sish / kamayish) · ega reytingi
- Jihoz kartochkalari, har birida: foto · nomi · turkumi · kunlik narx · **shu sanaga bo'sh soni** ("8 ta bo'sh") · ega nomi va reytingi · `Savatga qo'shish` tugmasi
- Pastda yopishib turuvchi savat paneli: `N ta jihoz · jami X so'm` + `Savatga o'tish`

**O'tishlar**

| Element | Qayerga |
|---|---|
| Kartochka (foto yoki nomi) | M-03 |
| Savatga qo'shish | Shu ekranda qoladi, savat paneli yangilanadi |
| Savatga o'tish | M-04 |
| Sanani o'zgartirish | M-01 |

**Holatlar**

- **Yuklanmoqda:** 6 ta skelet kartochka; filtrlar bloklangan
- **Bo'sh ro'yxat (filtr sababli):** "Bu filtrlarga mos jihoz topilmadi" + `Filtrlarni tozalash`
- **Bo'sh ro'yxat (sana sababli):** "Bu sanaga bo'sh jihoz yo'q" + `Boshqa sana tanlash` → M-01
- **Xato:** "Katalog yuklanmadi" + `Qayta urinish`; filtr holati saqlanadi

---

## M-03 — Jihoz detali

**Vazifa:** bitta jihoz haqida qaror qabul qilish uchun yetarli ma'lumot berish va
kerakli sonini savatga qo'shish.

**Elementlar**

- Foto galereya (bir nechta rasm)
- Nomi, turkumi, kunlik narxi
- **Shu sanaga bo'sh soni** va tanlangan sana
- Soni tanlagich (− / +) — maksimum bo'sh songa teng
- Narx hisobi ko'rinib turadi: `kunlik tarif × dona × kun soni = jami`
- Tavsif va ega shartlari (olib ketish vaqti, holati, qadoqlash)
- Ega bloki: nomi · reytingi · izohlar soni. **Telefon raqami ko'rinmaydi** — PRD maxfiylik qoidasi, u faqat bron tasdiqlangandan keyin ochiladi
- Mijoz izohlari ro'yxati (oxirgi 5 ta + `Hammasini ko'rish`)
- Asosiy tugma: **Savatga qo'shish**

**O'tishlar**

| Element | Qayerga |
|---|---|
| Savatga qo'shish | M-02 ga qaytadi, savat paneli yangilanadi |
| Savatga o'tish | M-04 |
| Orqaga | M-02 (filtr va scroll holati saqlanadi) |

**Holatlar**

- **Yuklanmoqda:** foto va matn o'rnida skelet
- **Band bo'lib qolgan:** bo'sh soni 0 bo'lsa — soni tanlagich va asosiy tugma o'chiq, "Bu sanaga band" yozuvi + `Boshqa sana tanlash`
- **Topilmadi:** "Bu e'lon endi mavjud emas" + `Katalogga qaytish`
- **Xato:** "Ma'lumot yuklanmadi" + `Qayta urinish`

---

## M-04 — Savat

**Vazifa:** turli egalardan yig'ilgan jihozlarni bitta bron so'roviga aylantirish.

**Elementlar**

- Tepada sana va kun soni
- Jihozlar ro'yxati, egalar bo'yicha guruhlangan. Har qatorda: foto · nomi · soni (− / +) · kunlik narx · qator summasi · `O'chirish`
- Jami summa bloki: jihozlar summasi · kun soni · **Jami to'lanadi**
- `Yana jihoz qo'shish` havolasi
- Asosiy tugma: **So'rov yuborish**

**O'tishlar**

| Element | Qayerga |
|---|---|
| So'rov yuborish (kirmagan) | M-05 |
| So'rov yuborish (kirgan) | M-07 |
| Yana jihoz qo'shish | M-02 |
| Qator ustiga bosish | M-03 |

**Holatlar**

- **Bo'sh savat:** "Savat bo'sh — hali jihoz tanlanmagan" + `Katalogga o'tish` → M-02
- **Yuklanmoqda:** narx va bandlik qayta tekshirilayotganda qatorlar xiralashadi, asosiy tugma o'chiq
- **Bandlik o'zgargan (muhim holat):** savat ochilganda bandlik qayta tekshiriladi. Agar biror jihoz band bo'lib qolgan bo'lsa — sariq ogohlantirish: "1 ta jihoz band bo'lib qoldi", o'sha qator belgilanadi, `Olib tashlash` yoki `Sonini kamaytirish` taklif qilinadi. Ogohlantirish yopilmaguncha asosiy tugma o'chiq
- **Xato:** "Savatni tekshirib bo'lmadi" + `Qayta urinish`

---

## M-05 — Kirish (telefon raqami)

**Vazifa:** telefon raqamini olib, unga bir martalik SMS kod yuborish.

**Elementlar**

- Sarlavha: "Davom etish uchun kiring"
- Telefon raqami maydoni, `+998` old qo'shimchasi bilan, maska: `+998 (__) ___-__-__`
- Bir qatorlik izoh: raqam bron va aloqa uchun kerakligi
- Asosiy tugma: **Kod yuborish**
- Oferta va maxfiylik havolalari
- `Orqaga` — savatga qaytadi

**O'tishlar**

| Element | Qayerga |
|---|---|
| Kod yuborish | M-06 |
| Orqaga | M-04 |

**Holatlar**

- **Yuborilmoqda:** tugmada spinner, maydon bloklangan
- **Validatsiya xatosi:** raqam to'liq emas — maydon ostida qizil yozuv, tugma o'chiq
- **Xato:** "SMS yuborilmadi" banneri + `Qayta urinish`
- **Limit:** "Juda ko'p urinish. 5 daqiqadan keyin qayta urinib ko'ring" + taymer

---

## M-06 — SMS kod tasdiqlash

**Vazifa:** kodni tekshirib, foydalanuvchi sessiyasini ochish.

**Elementlar**

- Raqam ko'rsatiladi + `Raqamni o'zgartirish` havolasi
- Kod maydoni (4-6 xona, avtomatik fokus)
- `Kodni qayta yuborish` — 60 soniyalik taymer tugagach faollashadi
- Asosiy tugma: **Tasdiqlash**

**O'tishlar**

| Element | Qayerga |
|---|---|
| Tasdiqlash (savatdan kelgan bo'lsa) | M-07 |
| Tasdiqlash (bosh sahifadan kelgan bo'lsa) | M-09 |
| Raqamni o'zgartirish | M-05 |

**Holatlar**

- **Tekshirilmoqda:** tugmada spinner, maydon bloklangan
- **Kod noto'g'ri:** maydon ostida qizil yozuv + qolgan urinishlar soni ("2 ta urinish qoldi")
- **Kod muddati tugagan:** "Kod eskirdi" + `Yangi kod yuborish`
- **Xato:** tarmoq xatosi banneri + `Qayta urinish`

---

## M-07 — So'rovni tasdiqlash

**Vazifa:** yuborishdan oldin sana, jihozlar, summa va qoidalarni oxirgi marta
ko'rsatib, mijozdan tasdiq olish.

**Elementlar**

- Buyurtma xulosasi: sana · kun soni · jihozlar ro'yxati (qisqartirilgan) · **Jami summa**
- Aloqa raqami (kirgan raqam, tahrirlanmaydi)
- Izoh maydoni — ixtiyoriy: manzil, olib ketish vaqti, qo'shimcha so'rov
- Qoidalar bloki: to'lov admin tasdig'idan keyin · 72 soat oldin bekor qilinsa pul to'liq qaytadi · kechikkan kun uchun kunlik tarif
- Oferta bilan rozilik belgisi (checkbox)
- Asosiy tugma: **So'rovni yuborish**

**O'tishlar**

| Element | Qayerga |
|---|---|
| So'rovni yuborish | M-08 |
| Orqaga / Savatni tahrirlash | M-04 |

**Holatlar**

- **Yuborilmoqda:** tugma o'chiq + spinner, takroriy bosish bloklangan
- **Validatsiya:** oferta belgilanmagan bo'lsa tugma o'chiq
- **Bandlik o'zgargan:** yuborish paytida jihoz band bo'lib qolsa — "Afsus, 1 ta jihoz band bo'lib qoldi" + `Savatga qaytish` → M-04
- **Xato:** "So'rov yuborilmadi" + `Qayta urinish`

---

## M-08 — So'rov yuborildi

**Vazifa:** so'rov qabul qilinganini bildirish va keyin nima bo'lishini tushuntirish.

**Elementlar**

- Katta muvaffaqiyat belgisi
- Bron raqami (masalan `#1042`)
- Holat: **So'rov — tekshiruvda**
- Keyingi qadam matni: "Admin egalar bilan tekshiradi va tasdiqlaydi. Odatda 2 soat ichida javob keladi. Tasdiqlangach to'lov havolasi SMS orqali keladi."
- Buyurtma xulosasi (sana, jihozlar soni, jami summa)
- Tugmalar: **Mening bronlarim** · `Bosh sahifaga`

**O'tishlar**

| Element | Qayerga |
|---|---|
| Mening bronlarim | M-09 |
| Bosh sahifaga | M-01 |

**Holatlar** — statik ekran, yuklanish va xato holati yo'q.

---

## M-09 — Mening bronlarim

**Vazifa:** mijozning barcha bronlarini holati bilan bitta ro'yxatda ko'rsatish.

**Elementlar**

- Bo'limlar: `Faol` · `Yakunlangan`
- Bron kartochkasi: bron raqami · tadbir sanasi · jihozlar soni · jami summa · **holat belgisi**
- Holat belgilari: So'rov (kulrang) · Tasdiqlandi (ko'k) · To'landi (yashil) · Yakunlandi (kulrang) · Bekor qilindi (kulrang) · Rad etildi (qizil)
- Tasdiqlangan bronda kartochka ustida `To'lash` tugmasi

**O'tishlar**

| Element | Qayerga |
|---|---|
| Kartochka | M-10 |
| To'lash | M-11 |

**Holatlar**

- **Yuklanmoqda:** 3 ta skelet kartochka
- **Bo'sh ro'yxat:** "Hali bron yo'q" + bir qatorlik izoh + `Katalogga o'tish` → M-01
- **Xato:** "Bronlar yuklanmadi" + `Qayta urinish`

---

## M-10 — Bron detali

**Vazifa:** bitta bronning holati, tarkibi va mavjud amallarini ko'rsatish.

**Elementlar**

- Bron raqami va tadbir sanasi
- **Holat zanjiri** vizual ko'rinishda: So'rov → Tasdiqlandi → To'landi → Yakunlandi. Joriy bosqich belgilangan
- Jihozlar ro'yxati: nomi · soni · kunlik narx · qator summasi
- Jami summa va to'lov holati
- Ega bloki: nomi · reytingi · **telefon raqami — faqat bron tasdiqlangandan keyin ko'rinadi**
- Qoidalar eslatmasi: bekor qilish muddatiga qancha qolgani ("Bepul bekor qilishga 2 kun 4 soat qoldi")
- Holatga qarab tugmalar:
  - **So'rov:** `Bekor qilish`
  - **Tasdiqlandi:** **To'lash** · `Bekor qilish`
  - **To'landi:** `Bekor qilish` (qoidaga muvofiq qaytariladigan summa ko'rsatiladi)
  - **Yakunlandi:** **Izoh qoldirish** (agar hali qoldirilmagan bo'lsa)
  - **Rad etildi:** rad sababi matni + `Katalogga o'tish`

**O'tishlar**

| Element | Qayerga |
|---|---|
| To'lash | M-11 |
| Bekor qilish | M-13 |
| Izoh qoldirish | M-14 |
| Orqaga | M-09 |

**Holatlar**

- **Yuklanmoqda:** skelet
- **Topilmadi:** "Bron topilmadi" + `Mening bronlarim`
- **Xato:** "Ma'lumot yuklanmadi" + `Qayta urinish`

---

## M-11 — To'lov

**Vazifa:** tasdiqlangan bron uchun to'liq summani onlayn to'lash.

**Elementlar**

- Bron raqami va tadbir sanasi
- **To'lanadigan summa** — yirik shrift bilan
- To'lov usuli tanlagich: Payme · Click · Uzum
- Eslatma: to'lovdan keyin bron qat'iy band bo'ladi
- Bekor qilish qoidasi bir qatorda
- Asosiy tugma: **To'lash** — tashqi to'lov sahifasiga olib boradi

**O'tishlar**

| Element | Qayerga |
|---|---|
| To'lash | Tashqi to'lov tizimi, qaytgach → M-12 |
| Orqaga | M-10 |

**Holatlar**

- **Yo'naltirilmoqda:** tugma o'chiq + "To'lov tizimiga o'tmoqdasiz"
- **To'lov muddati o'tgan:** "Bu bronni to'lash muddati tugagan" + `Yangi so'rov yuborish` → M-02
- **Xato:** "To'lov tizimiga ulanib bo'lmadi" + `Qayta urinish` + boshqa usul taklifi

---

## M-12 — To'lov natijasi

**Vazifa:** to'lov natijasini aniq bildirish va keyingi qadamni ko'rsatish.

**Elementlar (uch xil ko'rinish)**

- **Muvaffaqiyat:** yashil belgi · "To'lov qabul qilindi" · bron raqami · holat `To'landi` · ega bilan bog'lanish uchun telefon raqami ochilgani haqida eslatma · tugmalar: `Bron detali` · `Bosh sahifaga`
- **Kutilmoqda:** kulrang belgi · "To'lov tekshirilmoqda" · avtomatik yangilanish · `Bronlarimga o'tish`
- **Muvaffaqiyatsiz:** qizil belgi · "To'lov o'tmadi" · sabab (agar to'lov tizimi bergan bo'lsa) · tugmalar: **Qayta urinish** → M-11 · `Bron detali`

**O'tishlar**

| Element | Qayerga |
|---|---|
| Bron detali | M-10 |
| Qayta urinish | M-11 |
| Bosh sahifaga | M-01 |

**Holatlar** — uchta ko'rinishning o'zi holat. Qo'shimcha: **yuklanmoqda** — to'lov tizimidan javob kutilayotganda spinner.

---

## M-13 — Bekor qilish

**Vazifa:** bekor qilish oqibatini aniq ko'rsatib, mijozdan tasdiq olish.

**Elementlar**

- Bron raqami va tadbir sanasi
- **Qaytariladigan summa** — 72 soat qoidasi bo'yicha hisoblangan:
  - Tadbirgacha 72 soatdan ko'p qolgan → "To'liq qaytariladi: X so'm"
  - 72 soatdan kam qolgan → "Pul qaytarilmaydi" ogohlantirishi
- Bekor qilish sababi — ixtiyoriy tanlov ro'yxati + erkin matn
- Ogohlantirish: amal qaytarilmaydi
- Tugmalar: **Bekor qilishni tasdiqlash** (qizil) · `Orqaga`

**O'tishlar**

| Element | Qayerga |
|---|---|
| Tasdiqlash | M-10 (holat `Bekor qilindi` ga o'zgargan) |
| Orqaga | M-10 |

**Holatlar**

- **Yuborilmoqda:** tugma o'chiq + spinner
- **Xato:** "Bekor qilinmadi" + `Qayta urinish`
- **Holat o'zgargan:** bron allaqachon boshqa holatga o'tgan bo'lsa — "Bu bronni endi bekor qilib bo'lmaydi" + `Bron detali`

---

## M-14 — Izoh va reyting

**Vazifa:** yakunlangan brondan keyin ega haqida reyting va izoh yig'ish.

**Elementlar**

- Ega nomi va bron xulosasi
- Yulduzcha reytingi (1-5) — majburiy
- Izoh matni — ixtiyoriy, 500 belgigacha
- Tez tanlov teglari: `Vaqtida yetkazdi` · `Holati yaxshi` · `Narxi to'g'ri` · `Aloqa yaxshi`
- Asosiy tugma: **Yuborish** · `Keyinroq` havolasi

**O'tishlar**

| Element | Qayerga |
|---|---|
| Yuborish | M-10 (izoh ko'rinadigan holatda) |
| Keyinroq | M-09 |

**Holatlar**

- **Yuborilmoqda:** tugma o'chiq + spinner
- **Validatsiya:** yulduzcha tanlanmagan bo'lsa tugma o'chiq
- **Allaqachon qoldirilgan:** "Siz bu bron uchun izoh qoldirgansiz" + qoldirilgan izoh ko'rinadi
- **Xato:** "Izoh saqlanmadi" + `Qayta urinish`

---

## Umumiy holat qoidalari

Bu qoidalar barcha ekranlarga taalluqli — har ekranda qayta yozilmaydi.

**Yuklanmoqda**

- Kontent o'rniga skelet bloklar ishlatiladi, aylanuvchi spinner emas. Spinner faqat tugma ichida (amal bajarilayotganda)
- 300 ms dan qisqa yuklanishda skelet ko'rsatilmaydi — miltillash bo'lmasligi uchun
- Yuklanish paytida asosiy tugma o'chiq turadi

**Bo'sh ro'yxat**

Har bir bo'sh holatda uchta narsa bo'lishi shart:

1. Nima uchun bo'sh ekani — bir jumla
2. Nima qilish mumkinligi — aniq tugma
3. Ayblov ohangi yo'q ("Hech narsa topilmadi" emas, "Bu sanaga bo'sh jihoz yo'q")

**Xato**

- Xato matni foydalanuvchi tilida: texnik kod va ingliz tilidagi xabar ko'rsatilmaydi
- Har xatoda `Qayta urinish` tugmasi bo'ladi
- Foydalanuvchi kiritgan ma'lumot (filtr, savat, forma) xato paytida yo'qolmaydi
- Tarmoq xatosi — sahifa tepasida banner; maydon xatosi — maydon ostida qizil yozuv

**Umumiy**

- Har ekranda orqaga qaytish yo'li bor
- Savat holati sessiya davomida saqlanadi (sahifa yangilansa ham yo'qolmaydi)
- Telefon raqami PRD qoidasiga ko'ra bron tasdiqlanmaguncha hech qayerda ko'rsatilmaydi

---

## Bu hujjatga kirmaganlar

- Ega ekranlari: jihoz qo'shish so'rovi, kalendar, daromad
- Admin ekranlari: e'lon tasdiqlash navbati, bron tasdiqlash, statistika
- Yetkazib berish va o'rnatish oqimi — PRD 10-bo'lim, v1'ga kirmaydi
- Depozit ekranlari — PRD 9-bo'lim, ochiq savol (S4'da hal qilinadi)
- Ranglar, shriftlar, komponent kutubxonasi — alohida hujjat

---

*Rent · vibecoding plugin bilan yaratilgan · vibecoding.uz*
