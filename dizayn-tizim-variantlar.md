# DIZAYN TIZIMI — uchta variant

**Loyiha:** Rent · **Manba:** PRD.md, dizayn-tz.md + foydalanuvchi bergan uchta namuna

Bu hujjat tanlov uchun. Uch variantdan **bittasi** tanlanadi, qolgani arxivga tushadi.
Nusxa ko'chirish yo'q — namunalardan faqat tamoyillar olingan.

---

## 1. Namunalardan nima o'rganildi

| Namuna | Yo'nalish | Ishlaydigan tamoyil |
|---|---|---|
| Mobil ilova (ko'k, kartochkali) | Iste'molchi ilovasi | Katta burchak radiusi, oq kartochka kulrang fonda, bitta kuchli urg'u rang, yirik teginish maydonlari |
| Arxitektura sayti (oq, laym) | Studiya / premium | Ko'p bo'sh joy, tipografiya yetakchi, urg'u rang faqat to'ldirishda, ingichka chegaralar |
| Jurnal yoyilmasi (illyustratsiya) | Redaksion / issiq | Qog'oz fon, to'yingan lekin cheklangan palitra, serif sarlavha, inson ohangi |

**Uchalasida ham takrorlanadigan uchta narsa:**

1. Bitta kuchli urg'u rang, qolgani neytral — hech qaysisida ikkita raqobatdosh rang yo'q
2. Rasm yoki illyustratsiya asosiy vizual yuk, interfeys esa unga xalaqit bermaydi
3. Bo'sh joy — bezak emas, tuzilma. Elementlar orasi siqilmagan

---

## 2. Rent konteksti nimani talab qiladi

Bular dizayn qarorini boshqaradigan chegaralar — PRD va dizayn-tz'dan:

- **Ishonch — asosiy farq** (PRD 2-bo'lim). Interfeys jiddiy va tartibli ko'rinishi kerak; mijoz oldindan to'liq pul to'laydi
- **Foydalanuvchi yiliga 1-2 marta keladi** (PRD 2-bo'lim). Hech narsani "o'rganish" kerak bo'lmasin: tugma tugmaga o'xshasin, narx yirik bo'lsin
- **Rasmlarni egalar yuklaydi** — sifati har xil bo'ladi. Kartochka dizayni yomon rasmni ham ko'tara olishi kerak: bir xil nisbat, yumshoq chegara, rasm ustiga matn yozilmaydi
- **Narx va bandlik — eng muhim ikki raqam** (dizayn-tz M-02, M-03). Ular rangdan emas, o'lchamdan kuch olishi kerak
- **Holatlar zanjiri** (PRD 8-bo'lim): So'rov → Tasdiqlandi → To'landi → Yakunlandi. Har variantda bu to'rt holat bir-biridan farq qilishi shart
- **Matn o'zbekcha** — inglizchadan ~15-20% uzun. Tor tugmalar va bir qatorga hisoblangan sarlavhalar sinadi

---

## 3. Variant A — "Ishonchli ko'k"

> **Bir jumlada:** bankning ilovasidek tanish va xavfsiz — mijoz kartasini chiqarishdan
> qo'rqmaydi, lekin mahsulot esda qoladigan yuzga ega bo'lmaydi.

**Ranglar**

| Rol | Hex | Ishlatilishi | Kontrast |
|---|---|---|---|
| Fon | `#F1F5F9` | Sahifa foni | — |
| Sirt | `#FFFFFF` | Kartochka, modal, input | — |
| Asosiy | `#1B6BD6` | Tugma, faol holat, havola, narx | 5.10 oq matn bilan |
| Matn | `#0F172A` | Sarlavha va asosiy matn | 17.85 sirtda |
| Ikkilamchi matn | `#5B6B7F` | Izoh, meta, "8 ta bo'sh" | 5.45 sirtda |

Holat ranglari: Tasdiqlandi `#1B6BD6` · To'landi `#0E7C55` · Rad etildi `#C0392B` · So'rov `#5B6B7F`

**Shrift juftligi:** sarlavha **Manrope** (600/700), matn **Inter** (400/500).
Ikkalasi ham o'zbek lotin belgilarini to'liq qo'llaydi, ekranda toza o'qiladi.

**Burchak radiusi:** kartochka va input 16px · tugma 12px · rasm 12px · chip 999px (tabletka)

**Umumiy ohang:** tinch, tartibli, "professional xizmat". Soyalar juda yumshoq
(0 2px 8px rgba(15,23,42,0.06)), chegaralar deyarli ko'rinmaydi.

**Kuchli tomoni:** ishonch va'dasini to'g'ridan-to'g'ri bajaradi; hech kimga tushuntirish
kerak emas. Rasm sifati past bo'lsa ham kartochka chiroyli qoladi.

**Zaif tomoni:** bozorda o'ndan ortiq shunday ko'k ilova bor — brend sifatida
ajralib turmaydi. To'y kayfiyati yo'q, biroz "idora"ga o'xshaydi.

---

## 4. Variant B — "Arxitektura oq"

> **Bir jumlada:** dizayn studiyasining sayti kabi qat'iy va zamonaviy — mahsulot
> arzon vositachi emas, jiddiy platforma degan taassurot beradi.

**Ranglar**

| Rol | Hex | Ishlatilishi | Kontrast |
|---|---|---|---|
| Fon | `#F7F7F4` | Sahifa foni, iliq oq | — |
| Sirt | `#FFFFFF` | Kartochka | — |
| Urg'u | `#C8F04E` | **Faqat to'ldirish:** asosiy tugma, faol chip, belgi | 14.10 qora matn bilan |
| Siyoh | `#14140F` | Matn, ikonka, havola, ikkilamchi tugma | 18.47 sirtda |
| Ikkilamchi matn | `#63635A` | Meta, izoh | 6.06 sirtda |

**Muhim cheklov (hisoblab tekshirildi):** laym rangning oq fondagi kontrasti — **1.31**.
Ya'ni u hech qachon matn, ikonka yoki ingichka chiziq rangi bo'la olmaydi. Faqat
to'ldirish sifatida, ustida qora matn bilan. Havolalar va ikonkalar siyoh rangida
qoladi. Namunadagi sayt ham aynan shunday ishlagan.

Holat ranglari: Tasdiqlandi `#14140F` (to'ldirilgan) · To'landi `#C8F04E` (to'ldirilgan, qora matn) · Rad etildi `#C0392B` · So'rov — chegara bilan, to'ldirishsiz

**Shrift juftligi:** sarlavha **Archivo** (600/700, harf oralig'i −0.02em),
matn **Inter** (400/500). Sarlavhalar yirik va zich — tipografiya asosiy bezak.

**Burchak radiusi:** kartochka 8px · rasm 8px · input 8px · tugma va chip 999px (to'liq tabletka).
Bu qarama-qarshilik — deyarli to'g'ri burchakli kartochka va butunlay dumaloq tugma — uslubning belgisi.

**Umumiy ohang:** ko'p havo, soyasiz, 1px ingichka chegaralar. Ranglar kam, o'lcham
va joylashuv gapiradi.

**Kuchli tomoni:** raqobatchilarga o'xshamaydi, esda qoladi. Bo'sh joy ko'pligi
katalogni sokin qiladi — 30 ta jihoz ham bosim o'tkazmaydi.

**Zaif tomoni:** yomon rasmni yashirmaydi, aksincha ochib qo'yadi — egalar yuklagan
rasmga talab qattiq bo'ladi. Laym rangdan noto'g'ri foydalanilsa (matnda, ikonkada)
o'qib bo'lmay qoladi, ya'ni jamoada intizom talab qiladi.

---

## 5. Variant C — "Bayram"

> **Bir jumlada:** mahalliy va issiq, to'y tayyorgarligining o'zidek — mijoz bu
> platformani chet el mahsuloti emas, o'ziniki deb his qiladi.

**Ranglar**

| Rol | Hex | Ishlatilishi | Kontrast |
|---|---|---|---|
| Fon | `#FBF6EE` | Qog'oz tusidagi fon | — |
| Sirt | `#FFFFFF` | Kartochka | — |
| Asosiy | `#C24A32` | Tugma, faol holat, narx urg'usi | 4.86 oq matn bilan |
| Ikkilamchi | `#1F6B54` | Muvaffaqiyat, "bo'sh", tasdiq | oq matn bilan mos |
| Matn | `#241C16` | Sarlavha va matn | 16.76 sirtda |
| Ikkilamchi matn | `#6B5B4E` | Meta, izoh | 6.50 sirtda |

Qo'shimcha urg'u: `#E3A93C` (sarg'ish) — faqat belgi va reyting yulduzchasi uchun,
matn uchun emas.

Holat ranglari: Tasdiqlandi `#C24A32` · To'landi `#1F6B54` · Rad etildi `#9B2C1E` · So'rov `#6B5B4E`

**Shrift juftligi:** sarlavha **Lora** (600, serif), matn **Inter** (400/500).
Serif sarlavha issiqlik va "hikoya" ohangini beradi, sans matn o'qishni yengil qoladi.

**Burchak radiusi:** kartochka 14px · rasm 10px · tugma 10px · chip 999px

**Umumiy ohang:** issiq, inson qo'li tekkan. Soyalar kam, o'rniga juda ingichka
issiq chegara (`rgba(36,28,22,0.08)`). Bo'sh holat va xato ekranlarida kichik
illyustratsiya ishlatiladi.

**Kuchli tomoni:** hissiy jihatdan to'g'ri joyda — odam to'yga tayyorlanayotgan
paytda sovuq interfeysdan ko'ra shu yaqinroq. Brend sifatida ham eng ajralib
turadigani.

**Zaif tomoni:** "issiq" bilan "arzon" o'rtasidagi chiziq ingichka — rang yoki
illyustratsiyada bir oz oshirib yuborilsa, ishonch va'dasi zaiflashadi. Qattiq
intizom talab qiladi: palitradan tashqariga chiqilmaydi.

---

## 6. Taqqoslash

| | A — Ishonchli ko'k | B — Arxitektura oq | C — Bayram |
|---|---|---|---|
| Birinchi taassurot | Xavfsiz | Zamonaviy | Iliq |
| Ishonch va'dasi | Eng kuchli | Kuchli | O'rtacha |
| Brend sifatida ajralishi | Past | Yuqori | Yuqori |
| Yomon rasmga chidamliligi | Yuqori | Past | O'rtacha |
| Jamoadan intizom talabi | Past | Yuqori | Yuqori |
| Radius | 16px | 8px + tabletka | 14px |
| Sarlavha shrifti | Manrope | Archivo | Lora (serif) |

---

## 7. Tavsiya

Agar birinchi maqsad — **birinchi 100 ta bronni olish**, `A` ni oling: u hech kimni
o'ylantirmaydi va to'lovga to'siq qo'ymaydi. PRD'dagi eng katta xavf "talab yo'qligi"
edi — bu bosqichda dizayn eksperimenti qo'shimcha xavf.

Agar maqsad — **brend qurish va egalarni jalb qilish**, `C` ni oling: mahalliy va
esda qoladi, egalar bilan gaplashganda ko'rsatish oson.

`B` — eng chiroyli, lekin eng qimmat variant: u sifatli fotosuratsiz ishlamaydi.
Egalar rasmni o'zi yuboradigan (PRD: e'lonni admin joylaydi) sxemada rasm sifatini
nazorat qilish mumkin — shunda `B` real bo'ladi.

**Aralashtirmang.** Uchta variantdan qism-qism olib yangi tizim qurish — eng ko'p
uchraydigan xato. Bittasini tanlab, S1 davomida shunga sodiq qoling.

---

## 8. Keyingi qadam

Tanlangandan keyin alohida `DESIGN.md` yoziladi va unda:
qorong'i rejim qadamlari · komponentlar ro'yxati (tugma, input, kartochka, chip,
modal) · oraliq shkalasi (4/8/12/16/24/32) · shrift o'lchamlari shkalasi ·
bo'sh va xato holatlarining vizual ko'rinishi.

Vizual taqqoslash: `dizayn-variantlar.html` — uch variant bir xil kartochka va
holat qatorida yonma-yon.

---

*Rent · vibecoding plugin bilan yaratilgan · vibecoding.uz*
