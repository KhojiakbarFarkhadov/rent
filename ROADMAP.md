# ROADMAP — Rent

## 1. Magistral

| Sprint | Savol | Natija (shu loyihada) |
|--------|-------|------------------------|
| **S1 — kesim** | Ishlaydimi? | Bosh sahifada 4 ta seed jihoz ko'rinadi, bittasiga sana va soni tanlanadi, "Bron qilish" bosilganda bazaga yozuv tushadi va tasdiq ekrani chiqadi. Sayt o'z domenida jonli |
| **S2 — xotira** | Eslab qoladimi? | To'liq model: turkumlar, egalar, savat (bron qatorlari), rasm yuklash. Katalogda turkum, narx va tuman bo'yicha filtr ishlaydi |
| **S3 — auth** | Kim kirdi? | Telefon + SMS kod bilan kirish, sessiya saqlanadi. Mijoz, Ega va Admin faqat o'ziga tegishlisini ko'radi. Telefon raqamlari tasdiqlanmagan bronda yashirin |
| **S4 — chuqurlik** | Haqiqiy hayotda chidaydimi? | Holatlar zanjiri ishlaydi, band sana tanlanmaydi, narx va komissiya to'g'ri hisoblanadi, 72 soatlik bekor qilish va kechikish jarimasi amal qiladi, onlayn to'lov ulanadi |
| **S5 — telegram** | Qo'lda turadimi? | Mahsulot Telegram Mini App sifatida ochiladi, bron holati o'zgarganda xabar keladi, sayt ishlamasa bot zaxira kanal bo'ladi |
| **S6 — admin** | Boshqarib bo'ladimi? | Admin e'lon so'rovlarini va bronlarni panelda tasdiqlaydi, egani bloklaydi, haftalik bron va komissiya statistikasini ko'radi |

## 2. Tarmoqlar

Magistraldan chiqadigan ishlar. Har biri qovurdoq javobidan kelib chiqqan.

- **Miqdorli bandlik hisobi** — bitta e'londa 100 ta stul bo'lsa, sanaga nechtasi band
  ekani alohida yuritiladi
  *Sabab:* Blok 3'da "band sana umuman ko'rinmaydi" tanlangan — bu qisman bandlikni
  hisoblashni talab qiladi.

- **Admin ish oqimi ekrani** — e'lon so'rovlari va bron so'rovlari bitta navbatda
  *Sabab:* Blok 3'da e'lonni ham, bronni ham admin qo'lda tasdiqlashi aytilgan. Admin
  ishi tor joy bo'lib qolmasligi uchun alohida ekran kerak.

- **Turkum narx chegaralari** — har turkum uchun eng past va eng yuqori narx
  *Sabab:* Blok 4'da "ega belgilaydi, platforma chegara qo'yadi" tanlangan.

- **Reyting va izohlar** — yakunlangan brondan keyin mijoz ega haqida izoh qoldiradi
  *Sabab:* Blok 1'da asosiy farq "ishonch va kafolat", Blok 2'da ega profilida reyting
  va izohlar bo'lishi aytilgan.

- **Telefon raqamini yashirish** — tasdiqlanmagan bronda tomonlar bir-birining raqamini
  ko'rmaydi
  *Sabab:* Blok 5'da telefon raqamlari maxfiy deb belgilangan.

- **Qoidalar dvigateli** — kechikish, bekor qilish va qaytarish avtomatik hisoblanadi
  *Sabab:* Blok 5'da "yozma qoida bor, admin faqat chegara holatda" tanlangan.

- **Egalarni qo'lda kiritish paneli** — birinchi egalarni admin o'zi qo'shadi
  *Sabab:* Blok 1'da birinchi 10 foydalanuvchi tanish jihoz egalari ekani aytilgan.

## 3. Kelajak (v2+)

- Yetkazib berish va o'rnatish xizmati — haydovchi, marshrut, vaqt oynasi
- Tayyor tadbir paketlari: "50 kishilik to'y — bir tugma"
- Depozit tizimi: garov pulini ushlab turish va qaytarish (hozircha ochiq savol)
- Korporativ tadbirlar segmenti: shartnoma, hisob-faktura, kechiktirilgan to'lov
- Professional tashkilotchilar oqimi: agentlik, to'yxona, restoran uchun alohida kabinet
- Toshkentdan tashqari hududlar: viloyat markazlari, keyin butun O'zbekiston
- Alohida mobil ilova (v1 doirasi aniqlangandan keyin — ochiq savol)
- Operator roli: qo'ng'iroq orqali tasdiqlash va mijozga yordam

---

*Rent · vibecoding plugin bilan yaratilgan · vibecoding.uz*
