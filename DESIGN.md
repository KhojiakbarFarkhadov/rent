# DESIGN — Rentbox

**Loyiha:** Rentbox · **Manba:** `dizayn-tz.md` (ekranlar), `dizayn-tizim-variantlar.md` (tanlov)

Tanlangan yo'nalish — **variant A "Ishonchli ko'k"**. Sabab: PRD'dagi asosiy farq
ishonch va kafolat, mijoz oldindan to'liq pul to'laydi. Interfeys tanish va tartibli
bo'lishi kerak, brend eksperimenti bu bosqichda ortiqcha xavf.

Bu fayl — vizual haqiqatning yagona manbai. Kod yozilganda ranglar va o'lchamlar
shu yerdan olinadi, ko'zga qarab tanlanmaydi.

---

## 1. Tokenlar — yorug' rejim

| Token | Hex | Qayerda |
|---|---|---|
| `--fon` | `#F1F5F9` | Sahifa foni |
| `--sirt` | `#FFFFFF` | Kartochka, modal, input, panel |
| `--asosiy` | `#1B6BD6` | Asosiy tugma, faol holat, havola |
| `--matn` | `#0F172A` | Sarlavha, jihoz nomi, narx |
| `--matn-2` | `#5B6B7F` | Meta, izoh, "8 ta bo'sh" |
| `--chegara` | `#E2E8F0` | Ajratgich, input chegarasi |

Kontrast (WCAG, hisoblab tekshirilgan): matn/sirt **17.85** · matn-2/sirt **5.45** ·
oq matn/asosiy **5.10** · asosiy/sirt **5.10**. Hammasi 4.5 chegarasidan yuqori.

## 2. Tokenlar — qorong'i rejim

Bu avtomatik teskari aylantirish emas — har qiymat qorong'i sirt uchun alohida
tanlangan va tekshirilgan.

| Token | Hex | Kontrast |
|---|---|---|
| `--fon` | `#0F1621` | — |
| `--sirt` | `#182131` | — |
| `--asosiy` | `#5C9CE6` | 5.65 sirtda · tugma matni qora `#0F1621`, 6.36 |
| `--matn` | `#F1F5F9` | 14.74 sirtda |
| `--matn-2` | `#94A3B8` | 6.30 sirtda |
| `--chegara` | `#2A3548` | ajratgich (bezak) |
| `--chegara-input` | `#5E7291` | 3.30 sirtda — input va tanlanadigan element uchun |

Muhim farq: yorug' rejimda asosiy tugma matni **oq**, qorong'ida **qora**. Aks holda
kontrast yetmaydi.

Amalga oshirish: `prefers-color-scheme` orqali OS sozlamasidan, plus foydalanuvchi
o'zi almashtira oladigan tugma. Foydalanuvchi tanlovi OS sozlamasidan ustun turadi.

## 3. Holat ranglari

PRD 8-bo'limdagi zanjir: So'rov → Tasdiqlandi → To'landi → Yakunlandi.

| Holat | Yorug' (fon / matn) | Qorong'i (fon / matn) |
|---|---|---|
| So'rov | `#E7EBF0` / `#5B6B7F` | `#243044` / `#94A3B8` |
| Tasdiqlandi | `#1B6BD6` / `#FFFFFF` | `#5C9CE6` / `#0F1621` |
| To'landi | `#0E7C55` / `#FFFFFF` | `#3FBF8F` / `#0F1621` |
| Yakunlandi | `#E7EBF0` / `#0F172A` | `#243044` / `#F1F5F9` |
| Bekor qilindi | `#E7EBF0` / `#5B6B7F` | `#243044` / `#94A3B8` |
| Rad etildi | `#C0392B` / `#FFFFFF` | `#E86B6B` / `#0F1621` |

Qo'shimcha: ogohlantirish `#FEF3C7` / `#B45309` (qorong'ida `#3A2E12` / `#FBBF24`),
xato banneri `#FEE2E2` / `#991B1B`.

**Qoida:** holat hech qachon faqat rang bilan berilmaydi — yonida doim matn bo'ladi.
Rangni ajrata olmaydigan foydalanuvchi ham holatni o'qiy olishi kerak.

## 4. Tipografiya

Sarlavha — **Manrope** (600/700). Matn — **Inter** (400/500/600).

| Rol | Shrift | O'lcham / qator | Qalinlik |
|---|---|---|---|
| Ekran sarlavhasi | Manrope | 24 / 1.25 | 700 |
| Blok sarlavhasi | Manrope | 19 / 1.3 | 600 |
| Kartochka nomi | Manrope | 16 / 1.35 | 600 |
| Asosiy matn | Inter | 15 / 1.55 | 400 |
| Meta, izoh | Inter | 13 / 1.5 | 400 |
| Mayda yorliq | Inter | 11 / 1.4, KATTA HARF, oraliq 0.08em | 500 |
| Narx | Inter | 20 / 1.2 | 600 |
| Tugma matni | Inter | 15 | 600 |

Narx har doim eng yirik raqam — u rangdan emas, o'lchamdan kuch oladi.
O'zbekcha matn inglizchadan ~15-20% uzun: tugma va sarlavhalar ikki qatorga sig'adi
deb hisoblanadi, bir qatorga qat'iy bog'lanmaydi.

## 5. O'lchov

**Oraliq shkalasi:** `4 · 8 · 12 · 16 · 24 · 32 · 48`. Boshqa qiymat ishlatilmaydi.

**Radius:** kartochka va modal 16px · rasm 12px · tugma va input 12px ·
chip va holat belgisi 999px · avatar 50%.

**Soya:** kartochka `0 2px 8px rgba(15,23,42,.06)` · savat paneli
`0 -2px 12px rgba(15,23,42,.08)` · modal `0 8px 32px rgba(15,23,42,.12)`.
Qorong'i rejimda soya o'rniga chegara ishlatiladi — qora fonda soya ko'rinmaydi.

Kartochkada soya va chegara bir vaqtda ishlatilmaydi.

## 6. Breakpointlar va joylashuv

| Nom | Kenglik | Katalog ustunlari |
|---|---|---|
| Mobil | < 640px | 1 |
| Planshet | 640-1023px | 2 |
| Kichik desktop | 1024-1279px | 3 |
| Desktop | ≥ 1280px | 4 |

Kontentning maksimal kengligi **1240px**, markazda. Undan keng ekranda chetlar bo'sh
qoladi — matn cho'zilib ketmasligi uchun.

| Element | Mobil | Desktop |
|---|---|---|
| Navigatsiya | Pastda yopishgan panel, 4 bo'lim: Bosh sahifa · Katalog · Savat · Bronlarim | Tepada gorizontal panel + qidiruv maydoni |
| Filtr | Pastdan chiqadigan oyna | Chapda doim ko'rinadigan ustun (280px) |
| Savat | Pastda yopishgan chiziq (jami + tugma) | O'ngda yopishgan panel |
| Jihoz detali (M-03) | Rasm → matn → tugma, ustma-ust | Chapda rasm galereyasi, o'ngda yopishgan bron paneli |
| Ekran cheti | 16px | 24px |

## 7. Komponentlar

**Tugma** — balandligi 48px, teginish maydoni ≥44px, radius 12px, matn 15/600.

| Tur | Yorug' rejim |
|---|---|
| Asosiy | fon `--asosiy`, matn oq |
| Ikkilamchi | fon `--sirt`, chegara 1px `--asosiy`, matn `--asosiy` |
| Xavfli | fon `--sirt`, chegara va matn `#C0392B` |
| O'chiq | fon `#E2E8F0`, matn `#94A3B8`, bosilmaydi |

Kutish holatida tugma ichida spinner chiqadi, **matn qolaveradi** — foydalanuvchi
nima bo'layotganini yo'qotmaydi.

**Input** — balandligi 48px, radius 12px, chegara 1px `--chegara`.
Fokusda chegara `--asosiy` + 3px `rgba(27,107,214,.12)` halqa.
Xatoda chegara `#C0392B`, ostida 13px qizil yozuv.

**Kartochka (katalog)** — rasm nisbati doim **4:3**, `object-fit: cover`.
Rasm ustiga matn yozilmaydi. Tuzilishi: rasm → nomi → meta → narx va bo'sh soni → tugma.

**Chip** — balandligi 32px, gorizontal to'ldirish 12px, radius 999px.
Tanlanmagan `#E7EBF0` / `#5B6B7F`, tanlangan `--asosiy` / oq.

**Kalendar (M-01)** — band kunlar ko'rinmaydi va bosilmaydi (PRD qoidasi).
O'tmish kunlari xira. Tanlangan oraliq `--asosiy` bilan to'ldiriladi.

**Holat belgisi** — chip shaklida, 3-bo'limdagi rang juftliklari bilan, matn bilan birga.

## 8. Animatsiya

| Harakat | Davomiylik | Egri |
|---|---|---|
| Tugma va chip holati | 120ms | `ease-out` |
| Modal va pastdan chiqadigan oyna | 220ms | `cubic-bezier(.2,.8,.2,1)` |
| Sahifalar orasi o'tish | 180ms | `ease-out` |
| Skelet pulsatsiyasi | 1400ms | `ease-in-out`, cheksiz |

`prefers-reduced-motion: reduce` yoqilgan bo'lsa barcha animatsiya o'chadi, faqat
opacity o'zgarishi qoladi.

Sakrash, aylanish va e'tibor tortadigan effekt yo'q — mahsulot ishonch sotadi.

## 9. Ikonkalar

Bitta to'plam, chiziqli uslub, chiziq qalinligi 1.5-2px, o'lcham 20px (matn yonida)
va 24px (navigatsiyada). Rang — matn rangi, hech qachon `--asosiy` emas
(faol navigatsiya bo'limi bundan mustasno).

## 10. Holatlarning ko'rinishi

- **Skelet:** fon `#E7EBF0` (qorong'ida `#243044`), radius elementnikiga teng.
  300ms dan qisqa yuklanishda ko'rsatilmaydi — miltillash bo'lmasligi uchun
- **Bo'sh holat:** markazda ikonka 56px `#94A3B8`, sarlavha 19px, izoh 13px `--matn-2`,
  pastda asosiy tugma. Uch narsa majburiy: nima uchun bo'sh · nima qilish mumkin ·
  ayblov ohangisiz matn
- **Xato:** foydalanuvchi tilida, texnik kodsiz. Har xatoda `Qayta urinish` tugmasi.
  Kiritilgan ma'lumot (filtr, savat, forma) yo'qolmaydi

## 11. Qoidalar — buziladigan joylar

1. Palitradan tashqariga chiqilmaydi. Yangi rang kerak bo'lsa — avval shu fayl yangilanadi
2. Oraliq shkalasidan tashqari qiymat yo'q (13px, 18px, 22px kabi)
3. Holat faqat rang bilan berilmaydi
4. Rasm ustiga matn yozilmaydi — faqat marketing sahifasida, himoya gradienti bilan
5. Telefon raqami bron tasdiqlanmaguncha hech qayerda ko'rsatilmaydi (PRD maxfiylik qoidasi)
6. Narx har doim eng yirik raqam

---

## Bog'liq hujjatlar

| Fayl | Nima |
|---|---|
| `dizayn-tz.md` | 14 ta mijoz ekrani: elementlar, o'tishlar, holatlar |
| `dizayn-tizim-variantlar.md` | Uch variant tahlili va nega A tanlangani |
| `dizayn-variantlar.html` | Variantlarning vizual taqqoslashi |
| `prototip.html` | Ishlaydigan prototip — shu fayldagi qiymatlar bilan qurilgan |

---

*Rentbox · vibecoding plugin bilan yaratilgan · vibecoding.uz*
