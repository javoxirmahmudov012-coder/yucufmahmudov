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
        "Nurinvest kompaniyasida 30 dan ortiq investorlar bilan ishlab, kompaniyaga $250,000+ miqdorida investitsiya kirimini ta'minlaganman. HighWay (chet elga o'qishga jo'natish konsaltingi) kompaniyasida sotuv bo'limini 0 dan butunlay o'zim tizimlashtirib, sotuvchilarni o'qitish va ilg'or sotuv texnikalari bo'yicha to'liq strategiyalar ishlab chiqqanman — natijada oyiga kamida 30 tadan 40+ tagacha xalqaro shartnomalar muvaffaqiyatli imzolangan.",
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
            'company': 'HighWay',
            'company_link': "Chet elda ta'lim konsaltingi (Study Abroad)",
            'location': 'Toshkent',
            'role': "Sotuv bo'limi rahbari (Head of Sales)",
            'period': '2026-yil mart — 2026-yil iyul',
            'duration': '5 oy',
            'badge': 'Yetakchi Keys',
            'badge_class': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
            'points': [
                "Chet elga o'qishga jo'natish konsalting kompaniyasida sotuv bo'limini 0 dan butunlay o'zim tizimlashtirganman.",
                "Sotuvchilarni noldan o'qitish, ilg'or savdo psixologiyasi va muzokara texnikalari ustida ishlash bo'yicha to'liq strategiyalar ishlab chiqqanman.",
                "Ushbu tizimli strategiya samarasi bilan oyiga kamida 30 tadan 40+ tagacha muvaffaqiyatli xalqaro shartnomalar tuzilishiga erishilgan.",
                "O'rtacha chek: $1,000+ | Oylik savdo aylanmasi barqaror $30,000+ dan $40,000+ gacha yetkazilgan.",
                "AmoCRM orqali lidlar oqimi, savdo voronkasi bosqichlari va menejerlar KPI ko'rsatkichlari to'liq nazoratga olingan."
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
            'title': 'HighWay: 0 dan Tizim va Oyiga 40+ Shartnoma',
            'company': 'HighWay',
            'category': 'Tizimlashtirish',
            'tag': 'Chet Elda Ta\'lim (Study Abroad)',
            'metric': '40+ / oy',
            'metric_label': 'Xalqaro shartnomalar',
            'desc': "HighWay chet elga o'qishga jo'natish konsaltingida sotuv bo'limi 0 dan to'liq tizimlashtirildi. Sotuvchilarni o'qitish va ilg'or sotuv texnikalari bo'yicha to'liq strategiyalar joriy etilib, oyiga kamida 30 tadan 40+ tagacha shartnomalar imzolanishiga erishildi.",
            'tags': ['0 dan Tizimlashtirish', 'Sotuvchilarni O\'qitish', 'Kamida 30-40+ Shartnoma/oy', 'AmoCRM & Skriptlar']
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

from flask import Flask, render_template, request, jsonify, redirect, url_for, send_file, Response

@app.route('/')
def index():
    return render_template('index.html', data=PORTFOLIO_DATA)

@app.route('/robots.txt')
def robots():
    content = "User-agent: *\nAllow: /\n\nSitemap: https://yucufmahmudov.uz/sitemap.xml\nSitemap: https://yucufmahmudovv.vercel.app/sitemap.xml\n"
    return Response(content, mimetype='text/plain')

@app.route('/sitemap.xml')
def sitemap():
    content = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yucufmahmudov.uz/</loc>
    <lastmod>2026-09-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yucufmahmudovv.vercel.app/</loc>
    <lastmod>2026-09-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>"""
    return Response(content, mimetype='application/xml')

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
