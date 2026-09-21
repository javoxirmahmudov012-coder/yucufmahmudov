/* =============================================
   i18n.js — 3 Til va Dark/Light Tema Tizimi
   UZ | RU | EN  +  Dark ↔ Light
   ============================================= */

const translations = {
  uz: {
    /* NAV */
    'nav.about':    "Men Haqimda",
    'nav.projects': "Keyslar",
    'nav.work':     "Tajriba",
    'nav.skills':   "Ko'nikmalar",
    'nav.contact':  "Bog'lanish",

    /* HERO */
    'home.badge':       "Yangi B2B Loyihalar uchun Ochiq",
    'home.greeting':    "Salom, men",
    'home.btn1':        "Loyiha haqida gaplashish",
    'home.btn2':        "Keyslar",
    'home.btn_cv':      "CV Yuklab Olish (PDF)",
    'home.profession1': "B2B Sotuv Rahbari",
    'home.profession2': "Tizimlashtirish & AmoCRM",
    'home.prof.label':  "Professional",
    'proj.details':     "Batafsil Case Study",

    /* STATS */
    'stat.invest.label':   "Jalb qilingan investitsiya (Nurinvest)",
    'stat.contracts.num':  "40 / oy",
    'stat.investors.label':"Yirik investorlar portfeli (Nurinvest)",
    'stat.revenue.label':  "Oylik savdo aylanmasi (HighWay)",
    'stat.contracts.label':"Chet elda ta'lim shartnomalari (HighWay)",
    'stat.kpi.label':      "0 dan tizimli AmoCRM & Voronka",
    'stat.speed.num':      "2x Tezlik",
    'stat.speed.label':    "Prompt Engineering & AI Integratsiyasi",

    /* ABOUT */
    'about.title.span': "Natijadorlik",
    'about.title.rest': "Va Tizimli Yondashuv",
    'about.desc': `AmoCRM, tizimli voronka va yuqori chekli muzokaralar orqali biznesingiz savdo aylanmasini yangi bosqichga olib chiqaman.<br><br><b>Nurinvest</b> kompaniyasida <b>$250,000+</b> to'g'ridan-to'g'ri investitsiya jalb qilganman (30 nafar investor). <b>HighWay</b> (chet elga o'qishga jo'natish konsaltingi) loyihasida sotuv bo'limini <b>0 dan butunlay o'zim tizimlashtirib</b>, <b>oyiga 40 ta xalqaro shartnoma</b> va <b>$40,000+ oylik aylanmaga</b> erishganman. Zamonaviy <b>AI va Prompt Engineering</b> texnologiyalari yordamida jamoa tezligi va konversiyasini oshiraman.`,
    'about.copy.title': "Raqamni nusxalash",

    /* PROJECTS */
    'projects.title.prefix': "Mening Muvaffaqiyatli",
    'projects.title.span':   "Keyslarim",

    'proj1.subtitle': "Yo'nalish va Yutuq",
    'proj1.desc':     "30 nafar yirik investor jalb qilinib, kompaniyaga jami $250,000+ to'g'ridan-to'g'ri investitsiya kirimi ta'minlandi.",

    'proj2.title':    "HighWay: 0 dan Tizim,<br>Oyiga 40 ta Shartnoma",
    'proj2.subtitle': "Chet Elda Ta'lim Konsaltingi",
    'proj2.desc':     "Sotuv bo'limi 0 dan to'liq tizimlashtirilib, oyiga 40 ta xalqaro shartnoma va $40,000+ oylik savdo aylanmasiga erishildi.",

    'proj3.subtitle': "Yo'nalish va Yutuq",
    'proj3.desc':     "Xodimlar ish vaqti hisobi (overtime, otgul, mehnat ta'tillari), savdo rejalarining 100% bajarilishini nazorat qilish va korporativ shartnomalar.",

    'proj3.title':    "Prompt Engineering:<br>AI Savdo Integratsiyasi",
    'proj3.subtitle': "Yo'nalish va Yutuq",
    'proj3.desc':     "Najot Ta'lim Markazida Samandar Sultonov kursi. CRM skriptlar, mijozlar e'tirozlariga avtomatlashtirilgan javoblar va jarayonlarni 2x tezlashtirish.",

    /* WORK */
    'work.title.span': "Mening Ish",
    'work.title.rest': "Tajribam & Ta'lim",
    'work.tab.exp':    "Tajriba",
    'work.tab.edu':    "Ta'lim & Kurslar",

    'work.yogdu.title': "B2B Manager",
    'work.yogdu.time':  "Iyun 2026 —<br>Hozirgacha",
    'work.yogdu.desc':  "Xodimlar ish vaqtini aniq hisobga olish (ish soatlari, overtime, otgul va mehnat ta'tillari). Savdo rejalari bajarilishi va sotuv samaradorligi (KPI) ko'rsatkichlarini qat'iy nazorat qilish va B2B bitimlarni tuzish.",

    'work.highway.title':  "Sotuv Bo'limi Rahbari",
    'work.highway.sub':    "HighWay (Chet elda ta'lim konsaltingi)",
    'work.highway.time':   "Mart 2026 —<br>Iyul 2026",
    'work.highway.desc':   "Chet elga o'qishga jo'natish konsalting kompaniyasida sotuv bo'limini 0 dan butunlay o'zim tizimlashtirganman. Sotuvchilarni noldan o'qitish va ilg'or sotuv texnikalari ustida ishlash bo'yicha to'liq strategiyalar tuzilgan. Shu tizim samarasi o'laroq, chet elda ta'lim bo'yicha oyiga kamida 30 tadan 40+ tagacha muvaffaqiyatli shartnomalar imzolangan.",

    'work.nurinvest.title': "Sotuv Bo'limi Rahbari & Konsultant",
    'work.nurinvest.sub':   "Nurinvest (Investment Consultant)",
    'work.nurinvest.time':  "Fevral 2025 —<br>Dekabr 2025",
    'work.nurinvest.desc':  "Mijozlarga investitsiya produktlari bo'yicha professional maslahatlar va muzokaralar. Oyiga o'rtacha 5 ta yirik investor (chek $10,000). Umumiy 30+ investor jalb qilinib, kompaniyaga $250,000+ investitsiya kirimi ta'minlangan.",

    'edu.najot.title': "Prompt Engineering (Sun'iy Intellekt)",
    'edu.najot.sub':   "Najot Ta'lim Markazi (Samandar Sultonov)",
    'edu.najot.desc':  "Zamonaviy sun'iy intellekt vositalari (LLM, ChatGPT, Claude) yordamida savdo jarayonlari, voronkalar, mijozlar bilan muloqot skriptlari va avtomatizatsiyani chuqur o'rganish.",

    'edu.mfactor.title': "Sotuv Texnikalari va Psixologiyasi",
    'edu.mfactor.sub':   "M-Factor (Islombek Ibragimov)",
    'edu.mfactor.desc':  "SPIN savdo texnikalari, e'tirozlar bilan ishlash, mijozning yashirin ehtiyojlarini aniqlash va yuqori chekli bitimlarni muvaffaqiyatli yopish san'ati.",

    'edu.ibrahim.title': "Sotuvni Tizimlashtirish",
    'edu.ibrahim.sub':   "Ibrohim Gulyamov",
    'edu.ibrahim.desc':  "Kompaniyada barqaror sotuv bo'limi tizimini qurish, KPI mexanizmlari, menejerlarni nazorat qilish va savdo aylanmasini rejali oshirish.",

    'edu.uni.title': "Bakalavr",
    'edu.uni.sub':   "Guliston Davlat Universiteti",
    'edu.uni.time':  "2020 — 2024",
    'edu.uni.desc':  "Oliy ma'lumot (Bakalavriat darajasi), intizom, liderlik va jamoani boshqarish ko'nikmalarini shakllantirish.",

    /* SKILLS */
    'skills.title.prefix': "Mening",
    'skills.title.span':   "Ko'nikmalarim",
    'skills.s1.title': "Sotuv va Menejment",
    'skills.s1.desc':  "AmoCRM orqali savdo jarayonlarini to'liq tizimlashtirish, yuqori chekli B2B va investitsiya bitimlarini yopish, jamoani boshqarish va KPI nazorati.",
    'skills.s1.sub':   "Asosiy Ko'nikmalar",
    'skills.s2.title': "AI & Zamonaviy Asboblar",
    'skills.s2.desc':  "Zamonaviy sun'iy intellekt va analitika vositalari orqali sotuv jarayonlarini tezlashtirish va aniq hisobotlarni yuritish.",
    'skills.s2.sub':   "Texnologik Vositalar",

    /* TESTIMONIALS */
    'test.title.span': "Hamkorlar Fikri",
    'test.title.rest': "Va Tavsiyalar",
    'test1.text': "Muhammadyusuf muzokaralarda mijozning nozik nuqtalarini darhol his qiladi va yuqori chekli bitimlarni yopishda juda ishonchli yetakchi.",
    'test2.text': "AmoCRM tizimini noldan yo'lga qo'yib, jamoaning har oylik rejasini 100%+ bajarilishiga erishdi. Oyiga $30,000+ savdo aylanmasiga chiqdik.",
    'test3.text': "Investitsiya loyihasini taqdim etishdagi aniqlik, hisob-kitoblar va ochiq muloqot bizni hamkorlikka undadi. Haqiqiy professional mutaxassis.",
    'test4.text': "Katta mas'uliyat va tafsilotlarga e'tibor bilan ishlaydi. Jamoada sog'lom muhit va intizomni mukammal darajada shakllantira oladi.",

    /* CONTACT */
    'contact.title':     "Bog'lanish",
    'contact.desc':      "Keyingi loyihangiz yoki biznesingiz haqida gaplashamiz.",
    'contact.copybtn':   "Telefonni Nusxalash",
    'contact.phone.title':    "Telefon",
    'contact.telegram.title': "Telegram",
    'contact.email.title':    "Email",
    'contact.location.title': "Manzil",
    'contact.location.val':   "Toshkent, O'zbekiston",
    'contact.social.title':   "Ijtimoiy Tarmoqlar",
    'contact.quick.title':    "Tezkor Muloqot",
    'contact.call.link':      "Qo'ng'iroq Qilish (50-053-48-12)",
    'contact.email.link':     "Elektron Pochta",

    'form.title':    "Konsultatsiyaga Yozilish",
    'form.desc':     "Quyidagi ma'lumotlarni qoldiring, tez orada siz bilan bog'lanaman.",
    'form.name.lbl': "Ismingiz *",
    'form.name.ph':  "Ismingizni kiriting",
    'form.contact.lbl': "Telefon yoki Telegram *",
    'form.contact.ph':  "+998 50 053-48-12 yoki @username",
    'form.service.lbl': "Qiziqtirayotgan Yo'nalish",
    'form.opt1': "Sotuv bo'limini tizimlashtirish",
    'form.opt2': "AmoCRM sozlash va integratsiya",
    'form.opt3': "Investitsiya jalb qilish ($10K+ cheklar)",
    'form.opt4': "B2B muzokaralar va yirik bitimlar",
    'form.opt5': "Prompt Engineering va AI savdoda",
    'form.opt6': "Boshqa hamkorlik",
    'form.msg.lbl': "Xabar yoki Izohingiz",
    'form.msg.ph':  "Loyihangiz haqida qisqacha yozing...",
    'form.submit':  "Xabarni Jo'natish",

    /* FOOTER */
    'footer.copy': "All Rights Reserved By",

    /* TOAST */
    'toast.copied': "Telefon raqami nusxalandi! 📋",
  },

  ru: {
    'nav.about':    "Обо Мне",
    'nav.projects': "Кейсы",
    'nav.work':     "Опыт",
    'nav.skills':   "Навыки",
    'nav.contact':  "Контакт",

    'home.badge':       \"Открыт к новым B2B проектам\",
    'home.greeting':    "Привет, я",
    'home.btn1':        \"Обсудить проект\",
    'home.btn2':        "Кейсы",
    'home.btn_cv':      \"Скачать резюме (PDF)\",
    'home.profession1': \"Руководитель B2B Продаж\",
    'home.profession2': \"Систематизация & AmoCRM\",
    'home.prof.label':  "Профессионал",
    'proj.details':     "Подробнее Case Study",

    'stat.invest.label':    "Привлечённые инвестиции (Nurinvest)",
    'stat.contracts.num':   "40 / мес",
    'stat.investors.label':"Портфель крупных инвесторов (Nurinvest)",
    'stat.revenue.label':  "Ежемесячный оборот продаж (HighWay)",
    'stat.contracts.label': "Договоры зарубежного образования (HighWay)",
    'stat.kpi.label':       "AmoCRM & Воронка с нуля",
    'stat.speed.num':       "2x Скорость",
    'stat.speed.label':     "Prompt Engineering & AI Интеграция",

    'about.title.span': "Результативность",
    'about.title.rest': "И Системный Подход",
    'about.desc': `Масштабирую выручку бизнеса через AmoCRM, прозрачные воронки и техники закрытия крупных сделок.<br><br>В компании <b>Nurinvest</b> обеспечил привлечение <b>$250,000+</b> прямых инвестиций (30 инвесторов). В проекте <b>HighWay</b> выстроил отдел продаж <b>с нуля</b>, достигнув <b>40 договоров в месяц</b> и ежемесячного оборота <b>$40,000+</b>. Применяю инструменты <b>AI и Prompt Engineering</b> для ускорения работы команды и роста конверсии.`,
    'about.copy.title': "Скопировать номер",

    'projects.title.prefix': "Мои Успешные",
    'projects.title.span':   "Кейсы",

    'proj1.subtitle': "Направление и Результат",
    'proj1.desc':     "Привлечено 30 крупных инвесторов, компании обеспечено $250 000+ прямых инвестиций.",

    'proj2.title':    "HighWay: Система с нуля,<br>40 договоров в месяц",
    'proj2.subtitle': "Консалтинг зарубежного образования",
    'proj2.desc':     "Отдел продаж выстроен с нуля. Достигнуто 40 успешных договоров в месяц с ежемесячным оборотом $40 000+.",

    'proj3.subtitle': "Направление и Результат",
    'proj3.desc':     "Учёт рабочего времени сотрудников (переработки, отгулы, отпуска), контроль 100% выполнения планов продаж и корпоративные договоры.",

    'proj3.title':    "Prompt Engineering:<br>AI в продажах",
    'proj3.subtitle': "Направление и Результат",
    'proj3.desc':     "Курс Samandar Sultonov в Najot Ta'lim. CRM-скрипты, автоматизированные ответы на возражения клиентов и ускорение процессов в 2 раза.",

    'work.title.span': "Мой Опыт",
    'work.title.rest': "Работы & Образование",
    'work.tab.exp':    "Опыт",
    'work.tab.edu':    "Образование & Курсы",

    'work.yogdu.title': "B2B Менеджер",
    'work.yogdu.time':  "Июнь 2026 —<br>По сей день",
    'work.yogdu.desc':  "Точный учёт рабочего времени сотрудников (часы, переработки, отгулы и отпуска). Жёсткий контроль выполнения планов продаж и KPI, заключение B2B сделок.",

    'work.highway.title': "Руководитель отдела продаж",
    'work.highway.sub':   "HighWay (Консалтинг зарубежного образования)",
    'work.highway.time':  "Март 2026 —<br>Июль 2026",
    'work.highway.desc':  "Выстроил отдел продаж с нуля в консалтинговой компании по зарубежному образованию. Разработал полные стратегии обучения менеджеров и внедрил передовые техники продаж. Результат: от 30 до 40+ успешных договоров в месяц.",

    'work.nurinvest.title': "Руководитель продаж & Консультант",
    'work.nurinvest.sub':   "Nurinvest (Инвестиционный консультант)",
    'work.nurinvest.time':  "Февраль 2025 —<br>Декабрь 2025",
    'work.nurinvest.desc':  "Профессиональные консультации и переговоры по инвестиционным продуктам. В среднем 5 крупных инвесторов в месяц (чек $10 000). Итого 30+ инвесторов, $250 000+ привлечённых инвестиций.",

    'edu.najot.title': "Prompt Engineering (Искусственный Интеллект)",
    'edu.najot.sub':   "Najot Ta'lim (Samandar Sultonov)",
    'edu.najot.desc':  "Глубокое изучение современных инструментов ИИ (LLM, ChatGPT, Claude) для автоматизации продаж, воронок и скриптов общения с клиентами.",

    'edu.mfactor.title': "Техники и Психология Продаж",
    'edu.mfactor.sub':   "M-Factor (Islombek Ibragimov)",
    'edu.mfactor.desc':  "SPIN-техники продаж, работа с возражениями, выявление скрытых потребностей клиента и искусство закрытия крупных сделок.",

    'edu.ibrahim.title': "Систематизация продаж",
    'edu.ibrahim.sub':   "Ibrohim Gulyamov",
    'edu.ibrahim.desc':  "Построение устойчивой системы отдела продаж, KPI-механизмы, контроль менеджеров и планомерный рост оборота.",

    'edu.uni.title': "Бакалавр",
    'edu.uni.sub':   "Гулистанский Государственный Университет",
    'edu.uni.time':  "2020 — 2024",
    'edu.uni.desc':  "Высшее образование (степень бакалавра), формирование дисциплины, лидерства и навыков управления командой.",

    'skills.title.prefix': "Мои",
    'skills.title.span':   "Навыки",
    'skills.s1.title': "Продажи и Менеджмент",
    'skills.s1.desc':  "Полная систематизация продаж через AmoCRM, закрытие крупных B2B и инвестиционных сделок, управление командой и контроль KPI.",
    'skills.s1.sub':   "Ключевые Навыки",
    'skills.s2.title': "AI & Современные Инструменты",
    'skills.s2.desc':  "Ускорение процессов продаж и ведение точной аналитики с помощью современного ИИ.",
    'skills.s2.sub':   "Технологические Инструменты",

    'test.title.span': "Отзывы Партнёров",
    'test.title.rest': "И Рекомендации",
    'test1.text': "Мухаммадюсуф мгновенно улавливает болевые точки клиента и является очень надёжным лидером в закрытии крупных сделок.",
    'test2.text': "Выстроил AmoCRM с нуля и добился 100%+ выполнения месячного плана команды. Вышли на $30 000+ оборота в месяц.",
    'test3.text': "Точность в презентации инвестпроекта, расчёты и открытое общение убедили нас в сотрудничестве. Настоящий профессионал.",
    'test4.text': "Работает с большой ответственностью и вниманием к деталям. Безупречно формирует здоровую атмосферу и дисциплину в команде.",

    'contact.title':     "Контакт",
    'contact.desc':      "Поговорим о вашем следующем проекте или бизнесе.",
    'contact.copybtn':   "Скопировать номер",
    'contact.phone.title':    "Телефон",
    'contact.telegram.title': "Telegram",
    'contact.email.title':    "Email",
    'contact.location.title': "Адрес",
    'contact.location.val':   "Ташкент, Узбекистан",
    'contact.social.title':   "Социальные Сети",
    'contact.quick.title':    "Быстрый Контакт",
    'contact.call.link':      "Позвонить (50-053-48-12)",
    'contact.email.link':     "Электронная Почта",

    'form.title':    "Записаться на Консультацию",
    'form.desc':     "Оставьте данные, и я свяжусь с вами в ближайшее время.",
    'form.name.lbl': "Ваше Имя *",
    'form.name.ph':  "Введите ваше имя",
    'form.contact.lbl': "Телефон или Telegram *",
    'form.contact.ph':  "+998 50 053-48-12 или @username",
    'form.service.lbl': "Интересующее Направление",
    'form.opt1': "Систематизация отдела продаж",
    'form.opt2': "Настройка и интеграция AmoCRM",
    'form.opt3': "Привлечение инвестиций ($10K+ чеки)",
    'form.opt4': "B2B переговоры и крупные сделки",
    'form.opt5': "Prompt Engineering и AI в продажах",
    'form.opt6': "Другое сотрудничество",
    'form.msg.lbl': "Сообщение или Комментарий",
    'form.msg.ph':  "Кратко о вашем проекте...",
    'form.submit':  "Отправить Сообщение",

    'footer.copy': "Все права защищены",
    'toast.copied': "Номер скопирован! 📋",
  },

  en: {
    'nav.about':    "About Me",
    'nav.projects': "Cases",
    'nav.work':     "Experience",
    'nav.skills':   "Skills",
    'nav.contact':  "Contact",

    'home.badge':       \"Available for B2B Leadership Roles\",
    'home.greeting':    "Hello, I'm",
    'home.btn1':        \"Discuss Your Project\",
    'home.btn2':        "Cases",
    'home.btn_cv':      \"Download CV (PDF)\",
    'home.profession1': \"Head of B2B Sales\",
    'home.profession2': \"Sales Operations & AmoCRM\",
    'home.prof.label':  "Professional",
    'proj.details':     "View Case Study",

    'stat.invest.label':    "Investment Attracted (Nurinvest)",
    'stat.contracts.num':   "40 / mo",
    'stat.investors.label':"Major Investors Portfolio (Nurinvest)",
    'stat.revenue.label':  "Monthly Sales Turnover (HighWay)",
    'stat.contracts.label': "Overseas Education Contracts (HighWay)",
    'stat.kpi.label':       "AmoCRM & Sales Funnel from scratch",
    'stat.speed.num':       "2x Speed",
    'stat.speed.label':     "Prompt Engineering & AI Integration",

    'about.title.span': "Results-Driven",
    'about.title.rest': "& Systematic Approach",
    'about.desc': `Driving revenue growth through structured AmoCRM pipelines, high-ticket deal negotiation, and disciplined sales management.<br><br>Secured <b>$250,000+</b> in direct investment at <b>Nurinvest</b> (30 investors). At <b>HighWay</b>, built the sales department <b>from scratch</b>, scaling to <b>40 contracts per month</b> and <b>$40,000+ monthly turnover</b>. Leveraging modern <b>AI and Prompt Engineering</b> to accelerate team workflows and boost conversions.`,
    'about.copy.title': "Copy number",

    'projects.title.prefix': "My Successful",
    'projects.title.span':   "Cases",

    'proj1.subtitle': "Direction & Achievement",
    'proj1.desc':     "30 major investors secured, generating $250,000+ in direct investment capital for the company.",

    'proj2.title':    "HighWay: System from Zero,<br>40 Contracts/Month",
    'proj2.subtitle': "Overseas Education Consulting",
    'proj2.desc':     "Built the sales department from scratch. Achieved 40 successful contracts per month and $40,000+ in monthly sales revenue.",

    'proj3.subtitle': "Direction & Achievement",
    'proj3.desc':     "Employee time tracking (overtime, time-off, leave), monitoring 100% sales plan completion, and corporate contracts.",

    'proj3.title':    "Prompt Engineering:<br>AI in Sales",
    'proj3.subtitle': "Direction & Achievement",
    'proj3.desc':     "Samandar Sultonov's course at Najot Ta'lim. CRM scripts, automated objection handling, and 2x process acceleration.",

    'work.title.span': "My Work",
    'work.title.rest': "Experience & Education",
    'work.tab.exp':    "Experience",
    'work.tab.edu':    "Education & Courses",

    'work.yogdu.title': "B2B Manager",
    'work.yogdu.time':  "June 2026 —<br>Present",
    'work.yogdu.desc':  "Precise employee time tracking (hours, overtime, time-off, leave). Strict monitoring of sales plan completion and KPI metrics, closing B2B deals.",

    'work.highway.title': "Head of Sales",
    'work.highway.sub':   "HighWay (Overseas Education Consulting)",
    'work.highway.time':  "March 2026 —<br>July 2026",
    'work.highway.desc':  "Built the sales department from scratch at an overseas education consulting company. Designed full manager training strategies and implemented advanced sales techniques, achieving 30–40+ successful contracts per month.",

    'work.nurinvest.title': "Head of Sales & Consultant",
    'work.nurinvest.sub':   "Nurinvest (Investment Consultant)",
    'work.nurinvest.time':  "Feb 2025 —<br>Dec 2025",
    'work.nurinvest.desc':  "Professional consultations and negotiations on investment products. Average 5 major investors per month (ticket $10,000). Total 30+ investors, $250,000+ in secured investments.",

    'edu.najot.title': "Prompt Engineering (Artificial Intelligence)",
    'edu.najot.sub':   "Najot Ta'lim (Samandar Sultonov)",
    'edu.najot.desc':  "In-depth study of modern AI tools (LLM, ChatGPT, Claude) for sales automation, funnels, and client communication scripts.",

    'edu.mfactor.title': "Sales Techniques & Psychology",
    'edu.mfactor.sub':   "M-Factor (Islombek Ibragimov)",
    'edu.mfactor.desc':  "SPIN selling, objection handling, identifying hidden client needs, and mastering high-ticket deal closure.",

    'edu.ibrahim.title': "Sales Systematisation",
    'edu.ibrahim.sub':   "Ibrohim Gulyamov",
    'edu.ibrahim.desc':  "Building a stable sales department, KPI mechanisms, manager oversight, and planned revenue growth.",

    'edu.uni.title': "Bachelor's Degree",
    'edu.uni.sub':   "Gulistan State University",
    'edu.uni.time':  "2020 — 2024",
    'edu.uni.desc':  "Higher education (Bachelor's degree), developing discipline, leadership, and team management skills.",

    'skills.title.prefix': "My",
    'skills.title.span':   "Skills",
    'skills.s1.title': "Sales & Management",
    'skills.s1.desc':  "Full sales systematisation via AmoCRM, closing high-ticket B2B and investment deals, team management and KPI control.",
    'skills.s1.sub':   "Core Skills",
    'skills.s2.title': "AI & Modern Tools",
    'skills.s2.desc':  "Accelerating sales processes and maintaining precise analytics using modern AI tools.",
    'skills.s2.sub':   "Tech Stack",

    'test.title.span': "Partner Reviews",
    'test.title.rest': "& Recommendations",
    'test1.text': "Muhammadyusuf immediately senses the client's pain points and is a highly reliable leader in closing high-ticket deals.",
    'test2.text': "He set up AmoCRM from scratch and achieved 100%+ monthly plan completion. We reached $30,000+ monthly turnover.",
    'test3.text': "The precision in presenting the investment project, the calculations, and open communication convinced us to partner. A true professional.",
    'test4.text': "Works with great responsibility and attention to detail. Perfectly builds a healthy atmosphere and discipline within the team.",

    'contact.title':     "Contact",
    'contact.desc':      "Let's talk about your next project or business.",
    'contact.copybtn':   "Copy Phone Number",
    'contact.phone.title':    "Phone",
    'contact.telegram.title': "Telegram",
    'contact.email.title':    "Email",
    'contact.location.title': "Location",
    'contact.location.val':   "Tashkent, Uzbekistan",
    'contact.social.title':   "Social Media",
    'contact.quick.title':    "Quick Contact",
    'contact.call.link':      "Call (50-053-48-12)",
    'contact.email.link':     "Email Me",

    'form.title':    "Book a Consultation",
    'form.desc':     "Leave your details and I will get back to you shortly.",
    'form.name.lbl': "Your Name *",
    'form.name.ph':  "Enter your name",
    'form.contact.lbl': "Phone or Telegram *",
    'form.contact.ph':  "+998 50 053-48-12 or @username",
    'form.service.lbl': "Area of Interest",
    'form.opt1': "Sales department systematisation",
    'form.opt2': "AmoCRM setup and integration",
    'form.opt3': "Investment attraction ($10K+ tickets)",
    'form.opt4': "B2B negotiations and major deals",
    'form.opt5': "Prompt Engineering and AI in sales",
    'form.opt6': "Other collaboration",
    'form.msg.lbl': "Message or Comment",
    'form.msg.ph':  "Briefly describe your project...",
    'form.submit':  "Send Message",

    'footer.copy': "All Rights Reserved By",
    'toast.copied': "Phone number copied! 📋",
  }
};

/* ── Tilni qo'llash ── */
function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!t[key]) return;

    const attr = el.getAttribute('data-i18n-attr');
    if (attr) {
      el.setAttribute(attr, t[key]);
    } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t[key];
    } else {
      el.innerHTML = t[key];
    }
  });

  // <html lang="..."> ni yangilash
  document.documentElement.lang = lang;

  // Faol tugmani yangilash
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
}

/* ── Tema tizimi ── */
function applyTheme(theme) {
  const btn = document.getElementById('theme-toggle');
  if (theme === 'light') {
    document.body.classList.add('light-theme');
    if (btn) btn.innerHTML = '<i class="ri-moon-line"></i>';
  } else {
    document.body.classList.remove('light-theme');
    if (btn) btn.innerHTML = '<i class="ri-sun-line"></i>';
  }
}

function toggleTheme() {
  const current = localStorage.getItem('theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
}

/* ── Ishga tushirish ── */
document.addEventListener('DOMContentLoaded', () => {
  // Tema
  const savedTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(savedTheme);

  // Til
  const savedLang = localStorage.getItem('lang') || 'uz';
  applyTranslations(savedLang);

  // Tugmalar
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
});
