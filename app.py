# -*- coding: utf-8 -*-
import os
import json
from datetime import datetime
from flask import Flask, render_template, request, jsonify, redirect, url_for, send_file

app = Flask(__name__)
app.config['SECRET_KEY'] = 'muhammadyusuf-portfolio-secret-2026'

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MESSAGES_FILE = os.path.join(BASE_DIR, 'messages.json')

PORTFOLIO_DATA = {
    'name': 'Mahmudov Muhammadyusuf',
    'full_name': "Mahmudov Muhammadyusuf O'tkirjon o'g'li",
    'role': "Sotuv Bo'limi Rahbari | B2B Manager | Investitsion Konsultant",
    'hero_badges': [
        'Head of Sales',
        'B2B Sotuv Boshqaruvchisi',
        'Investitsion Konsultant',
        'Prompt Engineer & AI Integrator'
    ],
    'bio_lead': "AmoCRM, tizimli savdo voronkasi, SPIN savdo texnikalari va sun'iy intellekt vositalari orqali B2B hamda investitsiya savdolarini yangi cho'qqiga olib chiquvchi yetakchi mutaxassis.",
    'bio_details': [
        "24 yoshda, Toshkent shahrida istiqomat qilaman. B2B va B2C sohasida yuqori chekli bitimlarni muvaffaqiyatli yopish va savdo jamoalarini boshqarish bo'yicha 1.5 yildan ortiq samarali tajribaga egaman.",
        "Nurinvest kompaniyasida 30 dan ortiq investorlar bilan ishlab, kompaniyaga $250,000+ miqdorida investitsiya kirimini ta'minlaganman. HighWay avtomobil markazida sotuv jarayonlarini AmoCRM orqali tizimlashtirib, oylik savdo aylanmasini $30,000+ darajaga yetkazganmiz.",
        "Zamonaviy texnologiyalar bilan doimiy hamnafas holda Najot Ta'limda Prompt Engineering (Sun'iy Intellekt) yo'nalishini tamomlaganman. Savdo skriptlari, voronkalar va mijozlar tahlilida ilg'or AI vositalaridan foydalanaman."
    ],
    'stats': [
        {'value': 250, 'suffix': 'K$+', 'label': 'Jalb qilingan investitsiya', 'icon': 'fa-sack-dollar', 'desc': 'Nurinvest loyihasida'},
        {'value': 30, 'suffix': '+', 'label': 'Yirik investorlar', 'icon': 'fa-handshake', 'desc': "O'rtacha chek: $10,000"},
        {'value': 30, 'suffix': 'K$+', 'label': 'Oylik savdo aylanmasi', 'icon': 'fa-chart-line', 'desc': 'HighWay savdo natijasi'},
        {'value': 30, 'suffix': '+ /oy', 'label': 'Muvaffaqiyatli bitimlar', 'icon': 'fa-trophy', 'desc': "O'rtacha chek: $1,000+"}
    ],
    'contact': {
        'phone': '+998 (50) 053-48-12',
        'phone_display': '50-053-48-12',
        'phone_clean': '+998500534812',
        'telegram': '@muhammadyucufmm',
        'telegram_url': 'https://t.me/muhammadyucufmm',
        'instagram': '@yucufmahmudov',
        'instagram_url': 'https://www.instagram.com/yucufmahmudov/',
        'email': 'muhammadyucufmahmudov@gmail.com',
        'location': "Toshkent shahri, O'zbekiston",
        'age': '24 yosh (2002-yil 6-iyun)',
        'citizenship': "O'zbekiston",
        'employment': "To'liq bandlik, joyida ishlash va xizmat safarlariga tayyor"
    },
    'experiences': [
        {
            'company': 'Yogdu Media',
            'company_link': 'yogdu_agency',
            'location': 'Toshkent',
            'role': 'B2B Manager',
            'period': '2026-yil iyun — Hozirgacha',
            'duration': 'Hozirgi faoliyat',
            'badge': 'Faol ish joyi',
            'badge_class': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
            'points': [
                "Xodimlarning ish vaqtini tizimli hisobga olish (ish soatlari, overtime, otgul va mehnat ta'tillari).",
                "Savdo rejalari bajarilishi va sotuv samaradorligi (KPI) ko'rsatkichlarini qat'iy nazorat qilish va rag'batlantirish.",
                "B2B korporativ mijozlar bilan uzoq muddatli shartnomalar tuzish va savdo jarayonlarini muvofiqlashtirish."
            ]
        },
        {
            'company': 'HighWay',
            'company_link': "Avtomobil biznesi va texnik xizmat ko'rsatish",
            'location': 'Toshkent',
            'role': "Sotuv bo'limi rahbari (Head of Sales)",
            'period': '2026-yil mart — 2026-yil iyul',
            'duration': '5 oy',
            'badge': 'Muvaffaqiyatli Keys',
            'badge_class': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
            'points': [
                "Sotuv bo'limi faoliyatini boshqarish va AmoCRM orqali savdo jarayonlarini to'liq tizimlashtirish.",
                "Sotuv menejerlarini tizimli o'qitish, rivojlantirish va sotuvga to'laqonli javobgar bo'lib ish yuritish.",
                "Mijozlar bilan muzokara olib borib B2B / B2C va yuqori chekli bitimlarni muvaffaqiyatli yopish.",
                "O'rtacha chek: $1,000+ | Oyiga 30+ ta sotuv amalga oshirilgan | Oylik savdo aylanmasi: $30,000+.",
                "Sotuv konversiyasini oshirish, KPI va reja asosida jamoa samaradorligini barqaror boshqarish."
            ]
        },
        {
            'company': 'Nurinvest',
            'company_link': 'Nurinvest | Investment Consultant',
            'location': 'Toshkent',
            'role': "Sotuv bo'limi rahbari & Investment Consultant",
            'period': '2025-yil fevral — 2025-yil dekabr',
            'duration': '11 oy',
            'badge': 'Investitsiya Yutug\'i',
            'badge_class': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
            'points': [
                "Mijozlarga investitsiya produkti bo'yicha professional maslahatlar berish va muzokaralar olib borish.",
                "Yangi investorlarni jalb qilish va uzoq muddatli hamkorlikni shakllantirish.",
                "O'rtacha oyiga 5 ta investor olib kirilgan, har bir chek o'rtacha $10,000 ni tashkil qilgan.",
                "Umumiy hisobda 30+ ta investor jalb qilinib, kompaniyaga jami $250,000+ miqdorida investitsiya kirimi ta'minlangan.",
                "Mijoz ehtiyojini aniqlash, ishonchli kommunikatsiya o'rnatish va kelishuvlarni yopish bo'yicha katta tajriba."
            ]
        }
    ],
    'skills_categories': [
        {
            'title': 'Sotuv va Tizimlashtirish',
            'icon': 'fa-bullseye',
            'gradient': 'from-blue-500 to-indigo-600',
            'skills': [
                {'name': 'amoCRM & CRM Avtomatlashtirish', 'level': 96, 'icon': 'fa-server'},
                {'name': 'SPIN Savdo Texnikasi', 'level': 94, 'icon': 'fa-comments-dollar'},
                {'name': 'Savdo Voronkasi (Sales Funnel)', 'level': 95, 'icon': 'fa-filter'},
                {'name': 'B2B va B2C Muzokaralar', 'level': 95, 'icon': 'fa-handshake'},
                {'name': 'KPI & Jamoani Boshqarish', 'level': 92, 'icon': 'fa-users-gear'},
                {'name': 'Yuqori Chekli Bitimlarni Yopish', 'level': 96, 'icon': 'fa-award'}
            ]
        },
        {
            'title': 'AI & Texnologik Ko\'nikmalar',
            'icon': 'fa-microchip',
            'gradient': 'from-purple-500 to-pink-600',
            'skills': [
                {'name': 'Prompt Engineering (Sun\'iy Intellekt)', 'level': 92, 'icon': 'fa-brain'},
                {'name': 'ChatGPT / AI Savdo Asistentlari', 'level': 94, 'icon': 'fa-robot'},
                {'name': 'Google Sheets & Chuqur Analitika', 'level': 90, 'icon': 'fa-table'},
                {'name': 'Internet-Marketing & Lead Generation', 'level': 85, 'icon': 'fa-bullhorn'},
                {'name': 'MS Word & Ish Hujjatlari', 'level': 90, 'icon': 'fa-file-lines'},
                {'name': 'Ishbilarmonlik Muloqoti & Etika', 'level': 96, 'icon': 'fa-briefcase'}
            ]
        }
    ],
    'courses': [
        {
            'year': '2026',
            'title': 'Prompt Engineering va Sun\'iy Intellekt',
            'organization': "NAJOT TA'LIM MARKAZI",
            'mentor': 'Samandar Sultonov',
            'icon': 'fa-brain',
            'badge': 'Sun\'iy Intellekt',
            'badge_color': 'purple',
            'desc': "Zamonaviy LLM modellari, promptlar muhandisligi, AI vositalarini biznes va savdo jarayonlariga integratsiya qilish."
        },
        {
            'year': '2025',
            'title': 'Sotuv Texnikalari va Psixologiyasi',
            'organization': 'M-Factor',
            'mentor': 'Islombek Ibragimov',
            'icon': 'fa-chart-pie',
            'badge': 'Sotuv Mahorati',
            'badge_color': 'blue',
            'desc': "SPIN savdo texnikasi, e'tirozlar bilan ishlash, mijoz psixologiyasi va yuqori chekli bitimlarni yopish strategiyalari."
        },
        {
            'year': '2025',
            'title': 'Sotuvni Tizimlashtirish',
            'organization': 'Biznes Maslahat',
            'mentor': 'Ibrohim Gulyamov',
            'icon': 'fa-network-wired',
            'badge': 'Tizimlashtirish',
            'badge_color': 'emerald',
            'desc': "Kompaniyada barqaror savdo voronkasini yo'lga qo'yish, KPI tizimini qurish va sotuv bo'limi avtomatizatsiyasi."
        }
    ],
    'education': {
        'degree': 'Bakalavr',
        'year': '2020 — 2024',
        'institution': 'Guliston Davlat Universiteti',
        'faculty': 'Jismoniy Madaniyat, Sport'
    },
    'languages': [
        {'name': "O'zbek tili", 'level': 'Ona tili (Mukammal)', 'percent': 100, 'badge': 'Native'},
        {'name': 'Rus tili', 'level': 'B1 — Erkin muloqot va muzokaralar', 'percent': 75, 'badge': 'Professional'}
    ],
    'cases': [
        {
            'title': '$250,000+ Investitsiya Kirimi',
            'company': 'Nurinvest',
            'category': 'Investitsiya',
            'tag': 'B2B Investment',
            'metric': '$250K+',
            'metric_label': 'Jalb qilingan investitsiya',
            'desc': "30 dan ortiq yirik investorlar bilan tizimli muzokaralar olib borildi. O'rtacha $10,000 lik cheklar bilan kompaniyaga chorak million dollardan ortiq to'g'ridan-to'g'ri investitsiya kirimi ta'minlandi.",
            'tags': ['Investitsiya', 'B2B Muzokaralar', 'VIP Mijozlar', 'Konsalting']
        },
        {
            'title': 'AmoCRM Orqali Tizimli Savdo Qurish',
            'company': 'HighWay',
            'category': 'Tizimlashtirish',
            'tag': 'Avtomobil Biznesi',
            'metric': '$30K+ / oy',
            'metric_label': 'Oylik aylanma',
            'desc': "Barcha kiruvchi va chiquvchi lidlar AmoCRM orqali tartibga solindi. Sotuv menejerlari qayta tayyorlanib, oylik bitimlar soni 30+ taga, umumiy oylik tushum esa $30,000+ ga yetkazildi.",
            'tags': ['amoCRM', 'Head of Sales', 'Voronka', 'KPI Tizimi']
        },
        {
            'title': 'B2B Jamoa va Ish Vaqti Nazorati',
            'company': 'Yogdu Media',
            'category': 'Menejment',
            'tag': 'Media Agency',
            'metric': '100% KPI',
            'metric_label': 'Reja nazorati',
            'desc': "Xodimlar vaqtini qat'iy nazorat qilish va sotuv KPI ko'rsatkichlarini muvofiqlashtirish orqali jamoa mahsuldorligi oshirildi. Korporativ B2B mijozlar bilan barqaror kelishuvlar ta'minlandi.",
            'tags': ['B2B Menejment', 'Jamoa', 'KPI', 'Rejalashtirish']
        },
        {
            'title': 'Prompt Engineering Savdo Integratsiyasi',
            'company': 'Najot Ta\'lim & Shaxsiy Tajriba',
            'category': 'Sun\'iy Intellekt',
            'tag': 'AI & CRM',
            'metric': '2x Samaradorlik',
            'metric_label': 'Jarayonlar tezligi',
            'desc': "Mijozlar bilan yozishmalar skriptlari, e'tirozlarga javoblar bazasi va CRM tahlillarida sun'iy intellektdan (Prompt Engineering) foydalanib, menejerlar vaqti 2 baravargacha tejaldi.",
            'tags': ['Prompt Engineering', 'AI Integrator', 'Avtomatlashtirish']
        }
    ],
    'testimonials': [
        {
            'name': 'Islombek I.',
            'role': 'Biznes Asoschi & Hamkor',
            'avatar': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
            'text': "Muhammadyusuf muzokaralarda mijozning nozik nuqtalarini darhol his qiladi. Eng qiyin B2B bitimlarni ham o'zaro ishonch bilan yakunlaydi.",
            'rating': 5
        },
        {
            'name': 'Farrux A.',
            'role': 'Kompaniya Rahbari',
            'avatar': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
            'text': "AmoCRM tizimini noldan yo'lga qo'yib, jamoaning har oylik rejasini 100%+ bajarilishiga erishdi. Natijaga yo'naltirilgan yetakchi.",
            'rating': 5
        },
        {
            'name': 'Sardor K.',
            'role': 'Investor',
            'avatar': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
            'text': "Investitsiya loyihalarini taqdim etishdagi aniqlik va hisob-kitoblar bizni hamkorlikka undadi. Har bir so'zida mas'uliyat seziladi.",
            'rating': 5
        }
    ]
}

def load_messages():
    if os.path.exists(MESSAGES_FILE):
        try:
            with open(MESSAGES_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            return []
    return []

def save_message(msg):
    messages = load_messages()
    messages.insert(0, msg)
    with open(MESSAGES_FILE, 'w', encoding='utf-8') as f:
        json.dump(messages, f, ensure_ascii=False, indent=2)

@app.route('/')
def index():
    return render_template('index.html', data=PORTFOLIO_DATA)

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json() if request.is_json else request.form.to_dict()
    name = data.get('name', '').strip()
    contact_val = data.get('contact', '').strip()
    service = data.get('service', "Sotuv bo'limi konsaltingi").strip()
    message = data.get('message', '').strip()

    if not name or not contact_val:
        return jsonify({
            'success': False,
            'message': "Iltimos, ismingiz va telefon/telegram ma'lumotini kiriting."
        }), 400

    new_msg = {
        'id': datetime.now().strftime('%Y%m%d%H%M%S'),
        'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        'name': name,
        'contact': contact_val,
        'service': service,
        'message': message
    }
    save_message(new_msg)

    return jsonify({
        'success': True,
        'message': f"Tashakkur, {name}! Xabaringiz qabul qilindi. Muhammadyusuf tez orada (+998 50 053-48-12) siz bilan bog'lanadi."
    })

@app.route('/messages')
def view_messages():
    messages = load_messages()
    return render_template('messages.html', messages=messages, data=PORTFOLIO_DATA)

if __name__ == '__main__':
    print("Muhammadyusuf Mahmudov Portfolio Server ishga tushmoqda...")
    print("Sayt manzili: http://127.0.0.1:5500")
    app.run(host='0.0.0.0', port=5500, debug=True)
