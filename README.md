# Mahmudov Muhammadyusuf — Shaxsiy Portfolio Sayti (Python / Flask)

Ushbu portfolio veb-sayti **Mahmudov Muhammadyusuf O'tkirjon o'g'li** (Head of Sales, B2B Manager, Investitsion Konsultant) uchun Python Flask asosida zamonaviy, interaktiv va ultra-professional dizaynda yaratilgan.

## 🚀 Tezkor Ishga Tushirish (Windows)

1. **Eng oson usul:**
   - Papkadagi `run.bat` fayli ustiga ikki marta bosing. Sayt avtomatik ravishda brauzeringizda (`http://127.0.0.1:5000`) ochiladi.

2. **Terminal / Buyruqlar satri orqali:**
   ```bash
   pip install -r requirements.txt
   python app.py
   ```

Sayt manzili: **http://127.0.0.1:5000**  
Kelib tushgan xabarlar boshqaruvi: **http://127.0.0.1:5000/messages**

---

## 🌟 Sayt Xususiyatlari

- **Hero Bo'limi:** Yuqori aniqlikdagi fotosurat, maxsus yoritilgan ramka (glow border), suzuvchi natijalar bannerlari (Floating Badges).
- **Tezkor Aloqa:** `50-053-48-12` telefon raqami, Telegram (`@muhammadyucufmm`), elektron pochta va to'g'ridan-to'g'ri qo'ng'iroq qilish imkoniyati.
- **Jonli Metrikalar:** $250,000+ jalb qilingan investitsiya, 30+ investorlar, $30,000+ oylik aylanma va 30+ yirik oylik bitimlar.
- **Interaktiv Keyslar:** Loyihalarni yo'nalishlar bo'yicha saralash (Investitsiya, Tizimlashtirish, Menejment, AI).
- **Ko'nikmalar va AI Stack:** AmoCRM, SPIN savdo texnikasi, Prompt Engineering (Najot Ta'lim), Google Sheets tahlili.
- **Karyera Vaqti (Timeline):** HighWay, Nurinvest kompaniyalaridagi aniq erishilgan natijalar.
- **Ta'lim va Sertifikatlar:** GulDU, Samandar Sultonov, Islombek Ibragimov, Ibrohim Gulyamov kurslari.
- **Konsultatsiya Formasi:** AJAX orqali ishlovchi xabar qoldirish tizimi (xabarlar `messages.json` faylida xavfsiz saqlanadi).

---

## 📁 Loyiha Tuzilishi

```
shaxsiy/
├── app.py                  # Flask asosiy dasturi va API marshrutlari
├── requirements.txt        # Kerakli kutubxonalar
├── run.bat                 # Windows uchun 1 bosishda ishga tushiruvchi skript
├── messages.json           # Sayt orqali yuborilgan murojaatlar bazasi
├── static/
│   ├── css/
│   │   └── style.css       # Glassmorphism va maxsus animatsiyalar
│   ├── js/
│   │   └── main.js         # Interaktiv skriptlar va AJAX xabar tizimi
│   └── images/
│       └── profile.jpg     # Muhammadyusuf Mahmudov fotosurati
└── templates/
    ├── base.html           # Asosiy ramka, navbar va footer
    ├── index.html          # Portfolio asosiy sahifasi
    └── messages.html       # Kelgan xabarlar paneli
```
