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
    'home.profession1': "B2B Sotuv Menejeri",
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
    'about.desc': `Ismim Muhammadyusuf. So'nggi yillarda B2B savdo bo'limlarini tartibga solish, AmoCRM orqali voronkani shaffof qilish va jamoalarni boshqarish ustida ishlayapman.<br><br><b>Nurinvest</b> kompaniyasida 30 nafar yirik investor bilan ishlab, <b>$250,000+</b> sarmoya jalb qilishda qatnashdim. <b>HighWay</b> kompaniyasida esa sotuv tizimini <b>0 dan yo'lga qo'yib</b>, oylik shartnomalar sonini <b>40 taga</b> va <b>$40,000+</b> oylik aylanmaga yetkazishga muvaffaq bo'ldik.<br><br>Men har doim avval aniq tizim va qoidalarni o'rnatish, keyin esa uning asosida natijani oshirish tarafdoriman. Bo'sh vaqtimda sun'iy intellekt vositalarini (<b>Prompt Engineering</b>) o'rganib, ularni kundalik savdo amaliyotiga qanday tatbiq qilish ustida tajribalar o'tkazaman.`,
    'about.copy.title': "Raqamni nusxalash",

    /* PROJECTS */
    'projects.title.prefix': "Mening Muvaffaqiyatli",
    'projects.title.span':   "Keyslarim",

    'proj1.title':    "Nurinvest: <br />$250,000+ Investitsiya",
    'proj1.subtitle': "B2B Investitsiya Konsaltingi",
    'proj1.desc':     "30 nafar yirik investor jalb qilinib, kompaniyaga jami $250,000+ to'g'ridan-to'g'ri investitsiya kirimi ta'minlandi.",

    'proj2.title':    "HighWay: 0 dan Tizim,<br>Oyiga 40 ta Shartnoma",
    'proj2.subtitle': "Chet Elda Ta'lim Konsaltingi",
    'proj2.desc':     "Sotuv bo'limi 0 dan to'liq tizimlashtirilib, oyiga 40 ta xalqaro shartnoma va $40,000+ oylik savdo aylanmasiga erishildi.",

    /* WORK */
    'work.title.span': "Mening Ish",
    'work.title.rest': "Tajribam & Ta'lim",
    'work.tab.exp':    "Tajriba",
    'work.tab.edu':    "Ta'lim & Kurslar",

    'work.highway.title':  "B2B Sotuv Menejeri",
    'work.highway.sub':    "HighWay (Chet elda ta'lim konsaltingi)",
    'work.highway.time':   "Mart 2026 —<br>Iyul 2026",
    'work.highway.desc':   "Chet elga o'qishga jo'natish konsalting kompaniyasida sotuv bo'limini 0 dan butunlay o'zim tizimlashtirganman. Sotuvchilarni noldan o'qitish va ilg'or sotuv texnikalari bo'yicha to'liq strategiyalar joriy etilib, oyiga 40 ta muvaffaqiyatli xalqaro shartnoma va $40,000+ oylik savdo aylanmasiga erishildi.",

    'work.nurinvest.title': "B2B Sotuv Menejeri & Konsultant",
    'work.nurinvest.sub':   "Nurinvest (Investment Consultant)",
    'work.nurinvest.time':  "Fevral 2025 —<br>Dekabr 2025",
    'work.nurinvest.desc':  "Mijozlarga investitsiya produktlari bo'yicha professional maslahatlar va muzokaralar olib borish. 10 oy davomida 30 nafar yirik investor jalb qilinib, kompaniyaga jami $250,000+ to'g'ridan-to'g'ri investitsiya kirimi ta'minlandi.",

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

    /* CONTACT */
    'contact.title':     "Bog'lanish",
    'contact.desc':      "Savol yoki taklifingiz bo'lsa, bemalol xabar qoldiring.",
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

    'form.title':    "Xabar Qoldirish",
    'form.desc':     "Ma'lumotlaringizni qoldiring, imkon qadar tezroq javob beraman.",
    'form.name.lbl': "Ismingiz *",
    'form.name.ph':  "Ismingizni kiriting",
    'form.contact.lbl': "Telegram yoki Telefon *",
    'form.contact.ph':  "+998 50 053-48-12 yoki @username",
    'form.service.lbl': "Qiziqtirayotgan Yo'nalish",
    'form.opt1': "Sotuv bo'limini tizimlashtirish",
    'form.opt2': "AmoCRM sozlash va integratsiya",
    'form.opt3': "Investitsiya jalb qilish ($10K+ cheklar)",
    'form.opt4': "B2B muzokaralar va yirik bitimlar",
    'form.opt5': "Prompt Engineering va AI savdoda",
    'form.opt6': "Boshqa hamkorlik",
    'form.msg.lbl': "Xabar *",
    'form.msg.ph':  "Xabaringizni yozing...",
    'form.submit':  "Xabarni Yuborish",

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

    'home.badge':       "Открыт к B2B продажам & проектам",
    'home.greeting':    "Привет, я",
    'home.btn1':        "Обсудить проект",
    'home.btn2':        "Кейсы",
    'home.btn_cv':      "Скачать резюме (PDF)",
    'home.profession1': "B2B Менеджер по продажам",
    'home.profession2': "Систематизация & AmoCRM",
    'home.prof.label':  "Профессионал",
    'proj.details':     "Подробнее Case Study",

    'stat.invest.label':    "Привлечённые инвестиции (Nurinvest)",
    'stat.contracts.num':   "40 / мес",
    'stat.investors.label': "Портфель крупных инвесторов (Nurinvest)",
    'stat.revenue.label':   "Ежемесячный оборот продаж (HighWay)",
    'stat.contracts.label': "Договоры зарубежного образования (HighWay)",
    'stat.kpi.label':       "AmoCRM & Воронка с нуля",
    'stat.speed.num':       "2x Скорость",
    'stat.speed.label':     "Prompt Engineering & AI Интеграция",

    'about.title.span': "Результативность",
    'about.title.rest': "И Системный Подход",
    'about.desc': `Меня зовут Мухаммадюсуф. Моя основная деятельность сосредоточена на структурировании B2B продаж и автоматизации процессов через AmoCRM.<br><br>В компании <b>Nurinvest</b> обеспечил привлечение <b>$250,000+</b> прямых инвестиций (30 инвесторов). В проекте <b>HighWay</b> с нуля выстроил систему продаж, доведя объем до <b>40 успешных контрактов в месяц</b> и оборота <b>$40,000+</b>.<br><br>В работе придерживаюсь принципа «сначала понятная система и правила, затем масштабирование». Постоянно развиваюсь в сфере <b>Prompt Engineering</b>, внедряя возможности современных языковых моделей в реальные сценарии продаж.`,
    'about.copy.title': "Скопировать номер",

    'projects.title.prefix': "Мои Успешные",
    'projects.title.span':   "Кейсы",

    'proj1.title':    "Nurinvest: <br />$250,000+ Инвестиций",
    'proj1.subtitle': "B2B Инвестиционный Консалтинг",
    'proj1.desc':     "Привлечено 30 крупных инвесторов, компании обеспечено $250,000+ прямого инвестиционного капитала.",

    'proj2.title':    "HighWay: Система с нуля,<br>40 договоров в месяц",
    'proj2.subtitle': "Консалтинг Зарубежного Образования",
    'proj2.desc':     "Отдел продаж выстроен с нуля. Достигнуто 40 успешных договоров в месяц с ежемесячным оборотом $40,000+.",

    'work.title.span': "Мой Опыт",
    'work.title.rest': "Работы & Образование",
    'work.tab.exp':    "Опыт",
    'work.tab.edu':    "Образование & Курсы",

    'work.highway.title': "B2B Менеджер по продажам",
    'work.highway.sub':   "HighWay (Консалтинг зарубежного образования)",
    'work.highway.time':  "Март 2026 —<br>Июль 2026",
    'work.highway.desc':  "Выстроил отдел продаж с нуля в консалтинговой компании по зарубежному образованию. Разработал полные стратегии обучения менеджеров и внедрил передовые техники продаж. Результат: 40 успешных договоров в месяц и оборот $40,000+/мес.",

    'work.nurinvest.title': "B2B Менеджер по продажам & Консультант",
    'work.nurinvest.sub':   "Nurinvest (Инвестиционный консультант)",
    'work.nurinvest.time':  "Февраль 2025 —<br>Декабрь 2025",
    'work.nurinvest.desc':  "Профессиональные консультации и переговоры по инвестиционным продуктам. За 10 месяцев привлечено 30 крупных инвесторов и обеспечено $250,000+ инвестиций.",

    'edu.najot.title': "Prompt Engineering (Искусственный Интеллект)",
    'edu.najot.sub':   "Najot Ta'lim (Samandar Sultonov)",
    'edu.najot.desc':  "Глубокое изучение современных инструментов ИИ (LLM, ChatGPT, Claude) для автоматизации продаж, воронок и скриптов общения с клиентами.",

    'edu.mfactor.title': "Техники и Психология Продаж",
    'edu.mfactor.sub':   "M-Factor (Islombek Ibragimov)",
    'edu.mfactor.desc':  "SPIN-техники продаж, работа с возражениями, выявление скрытых потребностей клиента и искусство закрытия крупных сделок.",

    'edu.ibrahim.title': "Систематизация Продаж",
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

    'contact.title':     "Контакт",
    'contact.desc':      "Если у вас есть вопрос или предложение, напишите мне.",
    'contact.copybtn':   "Скопировать Номер",
    'contact.phone.title':    "Телефон",
    'contact.telegram.title': "Telegram",
    'contact.email.title':    "Email",
    'contact.location.title': "Локация",
    'contact.location.val':   "Ташкент, Узбекистан",
    'contact.social.title':   "Социальные Сети",
    'contact.quick.title':    "Быстрая Связь",
    'contact.call.link':      "Позвонить (50-053-48-12)",
    'contact.email.link':     "Написать Email",

    'form.title':    "Написать Сообщение",
    'form.desc':     "Оставьте свои данные, и я свяжусь с вами в ближайшее время.",
    'form.name.lbl': "Ваше Имя *",
    'form.name.ph':  "Введите ваше имя",
    'form.contact.lbl': "Telegram или Телефон *",
    'form.contact.ph':  "+998 50 053-48-12 или @username",
    'form.service.lbl': "Интересующее Направление",
    'form.opt1': "Систематизация отдела продаж",
    'form.opt2': "Настройка и интеграция AmoCRM",
    'form.opt3': "Привлечение инвестиций (чеки $10K+)",
    'form.opt4': "B2B переговоры и крупные сделки",
    'form.opt5': "Prompt Engineering и AI в продажах",
    'form.opt6': "Другое сотрудничество",
    'form.msg.lbl': "Сообщение *",
    'form.msg.ph':  "Напишите ваше сообщение...",
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

    'home.badge':       "Available for B2B Sales Roles",
    'home.greeting':    "Hello, I'm",
    'home.btn1':        "Discuss Your Project",
    'home.btn2':        "Cases",
    'home.btn_cv':      "Download CV (PDF)",
    'home.profession1': "B2B Sales Manager",
    'home.profession2': "Sales Funnels & AmoCRM",
    'home.prof.label':  "Professional",
    'proj.details':     "View Case Study",

    'stat.invest.label':    "Investment Attracted (Nurinvest)",
    'stat.contracts.num':   "40 / mo",
    'stat.investors.label': "Major Investors Portfolio (Nurinvest)",
    'stat.revenue.label':   "Monthly Sales Turnover (HighWay)",
    'stat.contracts.label': "Overseas Education Contracts (HighWay)",
    'stat.kpi.label':       "AmoCRM & Sales Funnel from scratch",
    'stat.speed.num':       "2x Speed",
    'stat.speed.label':     "Prompt Engineering & AI Integration",

    'about.title.span': "Results-Driven",
    'about.title.rest': "& Systematic Approach",
    'about.desc': `My name is Muhammadyusuf. I focus on streamlining B2B sales operations, structuring AmoCRM workflows, and creating predictable sales funnels.<br><br>At <b>Nurinvest</b>, I worked directly with 30 key investors, facilitating over <b>$250,000+</b> in investment capital. Later at <b>HighWay</b>, I built the sales framework <b>from scratch</b>, reaching a consistent pace of <b>40 contracts per month</b> and <b>$40,000+</b> monthly turnover.<br><br>My approach is simple: establish a solid structural foundation first, then scale execution. I also actively integrate <b>Prompt Engineering</b> and AI tools to eliminate friction in daily sales workflows.`,
    'about.copy.title': "Copy number",

    'projects.title.prefix': "My Successful",
    'projects.title.span':   "Cases",

    'proj1.title':    "Nurinvest: <br />$250,000+ Investment",
    'proj1.subtitle': "B2B Investment Consulting",
    'proj1.desc':     "30 major investors secured, generating $250,000+ in direct investment capital for the company.",

    'proj2.title':    "HighWay: System from Zero,<br>40 Contracts/Month",
    'proj2.subtitle': "Overseas Education Consulting",
    'proj2.desc':     "Built the sales department from scratch. Achieved 40 successful contracts per month and $40,000+ in monthly sales revenue.",

    'work.title.span': "My Work",
    'work.title.rest': "Experience & Education",
    'work.tab.exp':    "Experience",
    'work.tab.edu':    "Education & Courses",

    'work.highway.title': "B2B Sales Manager",
    'work.highway.sub':   "HighWay (Overseas Education Consulting)",
    'work.highway.time':  "March 2026 —<br>July 2026",
    'work.highway.desc':  "Built the sales department from scratch at an overseas education consulting company. Designed full manager training strategies and implemented advanced sales techniques, achieving 40 successful contracts per month and $40,000+/mo turnover.",

    'work.nurinvest.title': "B2B Sales Manager & Consultant",
    'work.nurinvest.sub':   "Nurinvest (Investment Consultant)",
    'work.nurinvest.time':  "Feb 2025 —<br>Dec 2025",
    'work.nurinvest.desc':  "Professional consultations and negotiations on investment products. In 10 months, secured 30 major investors and raised $250,000+ in direct investment capital.",

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

    'contact.title':     "Contact",
    'contact.desc':      "Feel free to reach out if you have a question or proposal.",
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

    'form.title':    "Send a Message",
    'form.desc':     "Leave your details and I will get back to you shortly.",
    'form.name.lbl': "Your Name *",
    'form.name.ph':  "Enter your name",
    'form.contact.lbl': "Telegram or Phone *",
    'form.contact.ph':  "+998 50 053-48-12 or @username",
    'form.service.lbl': "Area of Interest",
    'form.opt1': "Sales department systematisation",
    'form.opt2': "AmoCRM setup and integration",
    'form.opt3': "Investment attraction ($10K+ tickets)",
    'form.opt4': "B2B negotiations and major deals",
    'form.opt5': "Prompt Engineering and AI in sales",
    'form.opt6': "Other collaboration",
    'form.msg.lbl': "Message *",
    'form.msg.ph':  "Write your message...",
    'form.submit':  "Send Message",

    'footer.copy': "All Rights Reserved By",
    'toast.copied': "Phone number copied! 📋",
  }
};

/* =============================================
   TILNI O'ZGARTIRISH (applyLanguage)
   ============================================= */
function applyLanguage(lang) {
  if (!translations[lang]) lang = 'uz';

  const t = translations[lang];

  // Oddiy matnlar (textContent / innerHTML)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (t[key].includes('<') && t[key].includes('>')) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Atributlar (masalan: placeholder, title)
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const attr = el.getAttribute('data-i18n-attr');
    const key  = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.setAttribute(attr, t[key]);
    }
  });

  // Til tugmalarining active holatini yangilash
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // HTML lang atributini yangilash
  document.documentElement.setAttribute('lang', lang);

  // Tanlangan tilni localStorage ga saqlash
  localStorage.setItem('ym_language', lang);
}

/* =============================================
   TEMA (DARK / LIGHT)
   ============================================= */
function applyTheme(theme) {
  const isLight = theme === 'light';
  document.body.classList.toggle('light-theme', isLight);

  const icon = document.querySelector('#theme-toggle i');
  if (icon) {
    icon.className = isLight ? 'ri-moon-line' : 'ri-sun-line';
  }

  localStorage.setItem('ym_theme', theme);
}

/* =============================================
   DOM YUKLANGANDA ISHGA TUSHISH
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Saqlangan yoki standart tilni yuklash
  const savedLang = localStorage.getItem('ym_language') || 'uz';
  applyLanguage(savedLang);

  // Til tugmalariga click hodisasini ulash
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      applyLanguage(lang);
    });
  });

  // 2. Saqlangan yoki standart temani yuklash (standart: dark)
  const savedTheme = localStorage.getItem('ym_theme') || 'dark';
  applyTheme(savedTheme);

  // Tema tugmasiga click hodisasini ulash
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }
});
