# PRD — Rent

## 1. G'oya bir jumlada

Toshkentda to'y, tug'ilgan kun yoki uzatish kabi shaxsiy tadbir tashkil qilayotgan odam
uchun stol-stul, ovoz, yoritish, chodir va sahna jihozlarini o'nlab turli joydan alohida
izlash muammosini hal qiladigan — sana bo'yicha bandlikni ko'rsatib, bron va onlayn
to'lovni bitta joyda bajaradigan jihoz ijarasi marketplace'i.

## 2. Muammo va auditoriya

**Auditoriya.** Toshkentdagi shaxsiy tadbir tashkilotchilari — yiliga 1-2 marta to'y,
tug'ilgan kun, uzatish yoki ma'raka o'tkazadigan oddiy odamlar. Ta'minot tomonida:
jihozi bo'sh turgan egalar va kichik ijara firmalari.

**Muammo.** Bitta tadbirga 8-12 xil jihoz kerak va har biri boshqa odamda. Narx ham,
kerakli sanada bo'sh yoki bandligi ham oldindan ko'rinmaydi — o'nlab qo'ng'iroq
qilinadi, kunlar ketadi, oxirida ham kafolat yo'q.

**Hozir qanday bajariladi.** Web platforma/ilova va Telegram guruhlar orqali, ko'pincha
tanish yoki tamada vositachiligida.

**Asosiy farq.** Ishonch va kafolat: egalar tekshirilgan, reyting bor, pul platformada
ushlanadi.

## 3. Yurak amal

> **BRON QILISH**

Foydalanuvchi tanlagan sanaga kerakli jihozlarni band qiladi. Qidiruv, savat, profil,
to'lov va admin paneli — hammasi shu bitta amalga xizmat qiladi.

## 4. Rollar va huquqlar

| Rol | Ko'radi | Qila oladi |
|-----|---------|------------|
| **Mijoz** | Katalog, tanlangan sanaga bo'sh jihozlar, o'z bronlari va to'lov tarixi | Qidiradi va filtrlaydi, savat yig'adi, bron so'rovi yuboradi, onlayn to'laydi, bekor qiladi, izoh va reyting qoldiradi |
| **Ega** | O'z jihozlari, ularning bandligi, o'ziga tegishli bronlar va daromadi | Jihoz qo'shish so'rovini yuboradi, narx va sonini yangilaydi, kalendarini yuritadi, bron haqida xabar oladi |
| **Admin** | Barcha e'lon so'rovlari, barcha bronlar, to'lovlar va komissiya, egalarning hujjatlari | E'lonni joylaydi, tasdiqlaydi va rad etadi, egani tasdiqlaydi va bloklaydi, bronni tasdiqlaydi, chegara holatlarda nizoni hal qiladi |

Bitta odam bir vaqtda ham mijoz, ham ega bo'la oladimi — **ochiq savol** (9-bo'lim).

## 5. Asosiy oqim

1. Mijoz tadbir sanasi va turini tanlaydi
2. O'sha kunga bo'sh jihozlarni ko'radi — band sanalar umuman ko'rinmaydi
3. Turli egalardan kerakli jihozlarni bitta savatga yig'adi
4. Telefon + SMS kod bilan kirib, bron so'rovini yuboradi
5. Admin so'rovni ko'rib, egalar bilan tekshirib tasdiqlaydi
6. Mijoz to'liq summani onlayn to'laydi — bron qat'iy band bo'ladi
7. Tadbir kuni jihoz beriladi va qaytariladi, mijoz izoh va reyting qoldiradi

## 6. Funksiyalar (v1)

**1. Sana bo'yicha katalog va savat.** Mijoz sanani tanlaydi, faqat o'sha kunga bo'sh
jihozlarni ko'radi, turkum / narx / Toshkent tumani bo'yicha filtrlaydi va turli
egalardan olingan jihozlarni bitta savatga yig'adi.

**2. Bron: so'rov, admin tasdig'i, onlayn to'lov.** Savatdan bron so'rovi shakllanadi,
admin uni tasdiqlaydi, mijoz to'liq summani oldindan onlayn to'laydi, komissiya
avtomatik ushlanadi.

**3. Egalar va e'lonlar boshqaruvi.** Ega jihoz qo'shish so'rovini yuboradi, admin
e'lonni joylaydi va tasdiqlaydi; ega bandligini va narxini yuritadi, profilida hujjat,
reyting va mijoz izohlari bo'ladi.

## 7. Ma'lumot modeli

Faqat jadval nomlari — ustun va tiplar S2 sprintida yoziladi.

| Jadval | Nima uchun |
|--------|-----------|
| `foydalanuvchilar` | Mijoz, ega va admin akkauntlari, telefon raqami asosida |
| `egalar` | Ega profili: hujjat, tasdiqlangan holati, reytingi |
| `turkumlar` | Jihoz turlari: plastik stul, banket stol, chodir, kolonka va h.k. |
| `jihozlar` | Katalogdagi har bir e'lon: egasi, turkumi, soni, kunlik narxi |
| `bandlik` | Qaysi jihozdan qaysi sanada nechtasi band ekani |
| `bronlar` | Bitta buyurtma: mijoz, sana, holati, umumiy summa |
| `bron_qatorlari` | Bron ichidagi har bir jihoz va uning soni |
| `tolovlar` | Har bron uchun to'lov, komissiya va egaga o'tkazma yozuvi |
| `elon_sorovlari` | Eganing admin uchun yuborgan jihoz qo'shish so'rovi |
| `izohlar` | Mijozning ega haqidagi reytingi va matnli izohi |

## 8. Qoidalar

**Narx.** Kunlik va dona hisobida: `kunlik tarif x dona x kun soni`. Narxni ega
belgilaydi, platforma har turkum uchun eng past va eng yuqori chegara qo'yadi.

**To'lov.** To'liq summa oldindan onlayn (Payme / Click / Uzum). Komissiya avtomatik
ushlanadi, qolgan pul egaga tadbirdan keyin o'tkaziladi.

**Bandlik.** Band sana kalendarda umuman ko'rinmaydi va tanlab bo'lmaydi. Miqdor
hisobga olinadi: 20 ta stuldan 12 tasi band bo'lsa, 8 tasi bo'sh deb ko'rsatiladi.

**Bekor qilish.** Tadbirdan 72 soat oldin bekor qilinsa — pul to'liq qaytadi. Undan
keyin qaytmaydi.

**Kechikish.** Har kechikkan kun uchun kunlik tarif qayta hisoblanadi.

**Nizo.** Yozma qoidalar asosida avtomatik hal qilinadi; admin faqat chegara
holatlarga aralashadi.

**Maxfiylik.** Telefon raqamlari bron tasdiqlanmaguncha tomonlarga ko'rinmaydi.
To'lov va bron tarixi faqat egasiga va adminga ko'rinadi.

**Holatlar zanjiri.**

```
So'rov -> Tasdiqlandi -> To'landi -> Yakunlandi
   |            |
   +-> Rad etildi
                +-> Bekor qilindi
```

## 9. Ochiq savollar

| # | Savol | Qachon hal qilamiz |
|---|-------|--------------------|
| 1 | Birinchi 3 oyning muvaffaqiyat metrikasi qaysi raqam? | S1, doira aniqlanganda |
| 2 | Hozir aynan qaysi platforma ishlatiladi — to'g'ridan-to'g'ri raqobatchi bormi? | S1, bozor tekshiruvi |
| 3 | Bitta odam bir vaqtda ham mijoz, ham ega bo'la oladimi? | S3, auth sprintida |
| 4 | Depozit bo'ladimi, qanday hisoblanadi va qaytariladi? | S4, chuqurlik sprintida |
| 5 | Mobil ilova v1 doirasiga kiradimi? | S1, doira aniqlanganda |

## 10. V1'ga kirmaydiganlar

- Yetkazib berish va o'rnatish xizmati — mijoz va ega o'zaro kelishadi
- Tayyor tadbir paketlari ("50 kishilik to'y — bir tugma")
- Korporativ tadbirlar segmenti
- Professional tashkilotchilar (agentlik, to'yxona, restoran) uchun alohida oqim
- Toshkentdan tashqari hududlar
- Operator roli — uning ishini admin bajaradi

---

*Rent · vibecoding plugin bilan yaratilgan · vibecoding.uz*
