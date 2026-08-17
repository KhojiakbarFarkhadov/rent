# Qovurdoq xulosasi

**Sana:** 2026-08-17

**G'oya:** Toshkentda to'y, tug'ilgan kun yoki uzatish kabi shaxsiy tadbir tashkil
qilayotgan odam uchun stol-stul, ovoz, yoritish, chodir va sahna jihozlarini o'nlab
turli joydan alohida izlash muammosini hal qiladigan — sana bo'yicha bandlikni
ko'rsatib, bron va onlayn to'lovni bitta joyda bajaradigan jihoz ijarasi marketplace'i.

---

## 1. Mahsulot mohiyati

- **Yurak amal:** bron qilish. Butun mahsulot shu amal atrofida quriladi.
- **Asosiy farq:** ishonch va kafolat — egalar tekshirilgan, reyting bor, pul
  platformada ushlanadi.
- **Hozirgi holat:** ish web platforma/ilova va Telegram guruhlar orqali bajariladi
  (aynan qaysi platforma — ochiq savol).
- **Birinchi 10 foydalanuvchi:** tanish jihoz egalari. Ya'ni avval ta'minot qo'lda
  yig'iladi, talab keyin chaqiriladi.
- **Muvaffaqiyat metrikasi:** hali belgilanmagan (ochiq savol).

## 2. Foydalanuvchilar va rollar

- **Rollar:** Mijoz, Ega, Admin. Operator roli v1'da yo'q — uning ishini admin bajaradi.
- **Kirish:** telefon raqami + SMS kod. Sababi ikki xil: raqam haqiqiyligi ishonch
  beradi va bu auditoriya uchun eng tanish yo'l (email ishlatilmaydi).
- **Tasdiqlash:** admin har bir e'lonni qo'lda tasdiqlaydi.
- **Ega profili:** ism, telefon, reyting + hujjat (faqat adminga ko'rinadi) va
  mijozlarning izohlari.
- **Mijoz:** qidiradi, savat yig'adi, so'rov yuboradi, to'laydi, izoh qoldiradi.
- **Ega:** jihoz so'rovini yuboradi, kalendarini yuritadi, bron haqida xabar oladi.
- **Admin:** e'lonlarni joylaydi va tasdiqlaydi, bronlarni tasdiqlaydi, chegara
  holatlarda nizoni hal qiladi.

## 3. Asosiy oqim

1. Mijoz tadbir sanasi va turini tanlaydi
2. O'sha kunga bo'sh jihozlarni ko'radi — band sanalar umuman ko'rinmaydi
3. Turli egalardan kerakli jihozlarni bitta savatga yig'adi
4. Telefon + SMS kod bilan kirib, so'rov yuboradi
5. Admin so'rovni ko'rib, egalar bilan tekshirib tasdiqlaydi
6. Mijoz to'liq summani onlayn to'laydi — bron qat'iy band bo'ladi
7. Tadbir kuni jihoz beriladi va qaytariladi, mijoz izoh va reyting qoldiradi

- **Jihoz katalogga qanday tushadi:** ega so'rov yuboradi, e'lonni admin o'zi joylaydi.
- **Holatlar zanjiri:** So'rov -> Tasdiqlandi -> To'landi -> Yakunlandi.
  Qo'shimcha: Bekor qilindi, Rad etildi.
- **To'qnashuv:** band sana kalendarda umuman ko'rinmaydi, tanlab bo'lmaydi.
  Ya'ni miqdor va bandlik hisobi real vaqtda yuritiladi.
- **Qidiruv va filtr:** sana + jihoz turkumi + narx oralig'i + Toshkent tumani.

## 4. Pul va qoidalar

- **Narx birligi:** kunlik, dona hisobida (1 stul x 1 kun = N so'm).
- **Narxni kim belgilaydi:** ega belgilaydi, platforma har turkum uchun eng past va
  eng yuqori chegara qo'yadi.
- **To'lov:** to'liq summa oldindan onlayn (Payme / Click / Uzum). Komissiya avtomatik
  ushlanadi, qolgan pul egaga tadbirdan keyin o'tkaziladi.
- **Bekor qilish:** tadbirdan 72 soat oldin bekor qilinsa — pul to'liq qaytadi.
  Undan keyin qaytmaydi.
- **Kechikish:** har kechikkan kun uchun kunlik tarif qayta hisoblanadi.
- **Depozit:** hal qilinmagan (ochiq savol).

## 5. Chegaralar va xavflar

**V1'ga kirmaydi:**
- Yetkazib berish va o'rnatish xizmati — mijoz va ega o'zaro kelishadi
- Tayyor tadbir paketlari ("50 kishilik to'y — bir tugma")
- Korporativ tadbirlar segmenti
- Professional tashkilotchilar (agentlik, to'yxona, restoran) uchun alohida oqim
- Toshkentdan tashqari hududlar

**Eng katta xavf:** talab yo'qligi. Odam baribir tanish, tamada yoki to'yxona orqali
topishi mumkin — yiliga bir marta bo'ladigan ish uchun platforma qidirmasligi mumkin.

**Qonuniy tomoni:** oddiy vositachilik. Saytda ommaviy oferta bo'ladi, foydalanuvchi
roziligini tasdiqlaydi. Har ijaraga alohida shartnoma yozilmaydi.

**Maxfiy ma'lumotlar:** telefon raqamlari (bron tasdiqlanmaguncha tomonlar bir-birining
raqamini ko'rmaydi) va to'lov / bron tarixi.

**Nizo:** yozma qoidalar asosida avtomatik hal qilinadi (kechikish, bekor qilish),
admin faqat chegara holatlarga aralashadi.

**Zaxira kanal:** Telegram kanal yoki bot — sayt ishlamaganda bronlar vaqtincha shu
yerda qabul qilinadi.

---

## Ochiq savollar (keyin hal qilamiz)

| # | Savol | Qachon hal qilamiz |
|---|-------|--------------------|
| 1 | Birinchi 3 oyning muvaffaqiyat metrikasi qaysi raqam? | S1, doira va reja aniqlanganda |
| 2 | Hozir aynan qaysi platforma/ilova ishlatiladi — to'g'ridan-to'g'ri raqobatchi bormi? | S1, bozor tekshiruvi |
| 3 | Bitta odam bir vaqtda ham mijoz, ham ega bo'la oladimi? | S2, rollar va auth sprintida |
| 4 | Depozit bo'ladimi, qanday hisoblanadi va qanday qaytariladi? | S4, to'lov sprintida |
| 5 | Mobil ilova v1 doirasiga kiradimi? (v1 tashqarisi ro'yxatiga kiritilmadi) | S1, doira aniqlanganda |
