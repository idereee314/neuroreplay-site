/* Russian + Uzbek (Latin) translations for index.html.
   The markup carries Mongolian + English inline (data-mn / data-en). For ru / uz, app.js shows the
   [data-en] copy and replaces its content with the entry below.
   Key   = the English element's text (tags stripped, whitespace collapsed, trimmed) — must match exactly.
   Value = [russian, uzbek] — inner HTML that replaces the English content.
   When you change English copy in index.html, update its key here too (otherwise ru/uz fall back to English). */
window.SITE_I18N = {
  // ── Nav / common
  "Skip to content": ["Перейти к содержанию", "Asosiy mazmunga o‘tish"],
  "Features": ["Возможности", "Imkoniyatlar"],
  "What's new": ["Что нового", "Yangiliklar"],
  "Pricing": ["Цены", "Narxlar"],
  "Download": ["Скачать", "Yuklab olish"],
  "Help": ["Руководство", "Qo‘llanma"],
  "Request a demo": ["Заказать демо", "Demo buyurtma qilish"],
  "How it works": ["Как это работает", "Qanday ishlaydi"],

  // ── Hero
  "Built for combat sports": ["Создано для единоборств", "Yakkakurashlar uchun yaratilgan"],
  "Rewind every bout in an instant.": [
    "Перемотайте любую схватку <span class=\"grad\">в одно мгновение.</span>",
    "Har bir bellashuvni <span class=\"grad\">bir zumda orqaga qaytaring.</span>"
  ],
  "NeuroReplay is multi-camera instant replay software for combat sports — wrestling, judo, BJJ, MMA, sambo. Record every mat with USB and RTSP/IP cameras, rewind a disputed moment live, slow it down, telestrate and export MP4.": [
    "NeuroReplay — многокамерная система мгновенного повтора (instant replay) для единоборств: борьбы, дзюдо, BJJ, MMA, самбо. Записывайте каждый татами USB- и RTSP/IP-камерами, отматывайте спорный момент прямо во время схватки, замедляйте, рисуйте поверх видео и экспортируйте в MP4.",
    "NeuroReplay — yakkakurashlar uchun ko‘p kamerali instant replay dasturi: kurash, dzyudo, BJJ, MMA, sambo. Har bir gilamni USB va RTSP/IP kameralar bilan yozib oling, bahsli lahzani jonli efirda orqaga qaytaring, sekinlashtiring, video ustiga chizing va MP4 formatida eksport qiling."
  ],
  "Works fully offline · Mongolian, English, Russian, Uzbek · No capture card needed": [
    "Работает полностью офлайн · монгольский, английский, русский, узбекский · Карта захвата не нужна",
    "To‘liq oflayn ishlaydi · mo‘g‘ul, ingliz, rus, o‘zbek tillari · Capture karta kerak emas"
  ],
  "Try the instant replay": ["Попробуйте instant replay", "Instant replay’ni sinab ko‘ring"],
  "Back to LIVE": ["Вернуться в LIVE", "LIVE’ga qaytish"],
  "Illustration — labelled product interface mockup": ["Иллюстрация — макет интерфейса программы", "Illyustratsiya — dastur interfeysi maketi"],
  "cameras per package (USB + RTSP)": ["камеры в одном пакете (USB + RTSP)", "ta kamera bitta paketda (USB + RTSP)"],
  "capture cards or switchers needed": ["карт захвата и видеомикшеров не нужно", "capture karta yoki svitcher kerak emas"],
  "languages: Mongolian · English · Russian · Uzbek": ["языка: монгольский · английский · русский · узбекский", "til: mo‘g‘ul · ingliz · rus · o‘zbek"],
  "offline — no internet needed": ["офлайн — интернет не нужен", "oflayn — internet kerak emas"],

  // ── Features
  "Capabilities": ["Возможности", "Imkoniyatlar"],
  "Everything the mat needs — in one place": ["Всё, что нужно у татами, — в одном месте", "Gilam yonida kerak bo‘lgan hamma narsa — bir joyda"],
  "From match-day calls to coaching and technical analysis — no separate capture card, switcher or editing suite.": [
    "От судейских решений на соревнованиях до тренировок и технического разбора — без отдельной карты захвата, микшера и видеоредактора.",
    "Musobaqadagi hakamlik qarorlaridan tortib murabbiylik va texnik tahlilgacha — alohida capture karta, svitcher yoki montaj dasturisiz."
  ],
  "The core: every angle at once, in perfect sync": ["Главное: все ракурсы сразу и идеально синхронно", "Asosiysi: barcha burchaklar bir vaqtda, mukammal sinxron"],
  "Pull USB and RTSP/IP cameras onto one timeline and replay the exact moment while it keeps recording.": [
    "Сведите USB- и RTSP/IP-камеры на одну шкалу времени и повторите нужный момент, не прерывая запись.",
    "USB va RTSP/IP kameralarni bitta vaqt shkalasiga joylang va yozuvni to‘xtatmasdan aynan o‘sha lahzani qayta ko‘ring."
  ],
  "Multi-camera recording": ["Многокамерная запись", "Ko‘p kamerali yozuv"],
  "Several cameras recorded and replayed in sync.": ["Несколько камер записываются и воспроизводятся синхронно.", "Bir nechta kamera sinxron yoziladi va qayta ko‘rsatiladi."],
  "Press T and every camera jumps back to the same moment in sync — even without REC.": [
    "Нажмите T — и все камеры синхронно вернутся к одному и тому же моменту, даже без REC.",
    "T tugmasini bosing — barcha kameralar sinxron ravishda bir lahzaga qaytadi, REC bosilmagan bo‘lsa ham."
  ],
  "Live DVR rewind": ["Live DVR-перемотка", "Jonli DVR orqaga qaytarish"],
  "Rewind without stopping the recording.": ["Перематывайте, не останавливая запись.", "Yozuvni to‘xtatmasdan orqaga qaytaring."],
  "RTSP / IP cameras": ["RTSP / IP-камеры", "RTSP / IP kameralar"],
  "Connect network IP cameras over LAN through FFmpeg — long-run and PoE-ready.": [
    "Подключайте сетевые IP-камеры по LAN через FFmpeg — на большие расстояния и с поддержкой PoE.",
    "Tarmoq IP kameralarini LAN orqali FFmpeg yordamida ulang — uzoq masofaga va PoE bilan."
  ],
  "Slow-motion & frame step": ["Замедление и покадровый шаг", "Sekinlashtirish va kadrma-kadr qadam"],
  "0.25×–2× speeds, J/K/L keys and frame-by-frame stepping both ways — no detail slips past.": [
    "Скорость 0.25×–2×, клавиши J/K/L и покадровый шаг вперёд и назад — ни одна деталь не ускользнёт.",
    "0.25×–2× tezlik, J/K/L tugmalari va oldinga-orqaga kadrma-kadr qadam — hech bir tafsilot qolib ketmaydi."
  ],
  "Zoom, pan & A–B loop": ["Зум, панорама и петля A–B", "Zoom, pan va A–B takrorlash"],
  "Zoom up to 8× and loop a section A–B as often as you need. Drawing tools come with the Analyze module.": [
    "Увеличение до 8× и повтор фрагмента A–B сколько угодно раз. Инструменты рисования — в модуле Analyze.",
    "8 baravargacha kattalashtiring va A–B qismini istalgancha takrorlang. Chizish vositalari Analyze modulida."
  ],
  "Tagging (TAG)": ["Теги (TAG)", "Teglar (TAG)"],
  "Press Space, pick a category with 1–9 and the moment is tagged. Jump straight back to it later.": [
    "Нажмите Space, выберите категорию клавишами 1–9 — момент отмечен. Позже к нему можно вернуться одним нажатием.",
    "Space’ni bosing, 1–9 tugmalari bilan toifani tanlang — lahza belgilandi. Keyin unga bir bosishda qaytasiz."
  ],
  "MP4 clip export": ["Экспорт клипов в MP4", "MP4 klip eksporti"],
  "Mark in/out points and save one camera or all of them as H.264 MP4 that plays anywhere.": [
    "Отметьте точки входа/выхода (I/O) и сохраните одну или все камеры в H.264 MP4, который откроется где угодно.",
    "Kirish/chiqish (I/O) nuqtalarini belgilang va bitta yoki barcha kameralarni istalgan joyda ochiladigan H.264 MP4 sifatida saqlang."
  ],
  "Multilingual & offline": ["Многоязычность и офлайн", "Ko‘p tilli va oflayn"],
  "Interface in Mongolian, English, Russian and Uzbek. Runs on-site with no internet.": [
    "Интерфейс на монгольском, английском, русском и узбекском. Работает на площадке без интернета.",
    "Interfeys mo‘g‘ul, ingliz, rus va o‘zbek tillarida. Musobaqa joyida internetsiz ishlaydi."
  ],

  // ── Analyze
  "Analyze module": ["Модуль Analyze", "Analyze moduli"],
  "Break every bout down into facts and numbers": ["Разбирайте каждую схватку на факты и цифры", "Har bir bellashuvni fakt va raqamlarga ajrating"],
  "An add-on licence for coaches and analysts. Draw on the video, measure angles, put two recordings side by side, tag every technique with its points — then get stats, highlights and reports in one place.": [
    "Дополнительная лицензия для тренеров и аналитиков. Рисуйте поверх видео, измеряйте углы, сравнивайте две записи рядом, отмечайте каждый технический приём с баллами — и получайте статистику, хайлайты и отчёты в одном месте.",
    "Murabbiylar va tahlilchilar uchun qo‘shimcha litsenziya. Video ustiga chizing, burchaklarni o‘lchang, ikki yozuvni yonma-yon solishtiring, har bir usulni ochkosi bilan belgilang — statistika, highlight va hisobotlarni bir joyda oling."
  ],
  "Turn a performance into numbers you can coach from": ["Превратите выступление в цифры для работы тренера", "Chiqishni murabbiylik uchun raqamlarga aylantiring"],
  "Open a recording and start tagging with single keys — NeuroReplay adds up the points, position time and momentum for you.": [
    "Откройте запись и отмечайте приёмы одной клавишей — NeuroReplay сам подсчитает баллы, время в позициях и динамику схватки.",
    "Yozuvni oching va bitta tugma bilan belgilashni boshlang — NeuroReplay ochkolar, pozitsiyadagi vaqt va momentumni o‘zi hisoblaydi."
  ],
  "Side-by-side compare (A | B)": ["Сравнение рядом (A | B)", "Yonma-yon solishtirish (A | B)"],
  "Play two recordings or two angles in sync and line them up to the frame.": [
    "Воспроизводите две записи или два ракурса синхронно и выравнивайте их с точностью до кадра.",
    "Ikki yozuv yoki ikki burchakni sinxron ijro eting va ularni kadr aniqligida moslang."
  ],
  "Technique tags with points": ["Теги приёмов с баллами", "Ochkoli texnika teglari"],
  "Up to 12 technique keys — each tag marks mine/opponent and landed/failed.": [
    "До 12 клавиш приёмов — каждый тег отмечает «свой / соперник» и «удался / не удался».",
    "12 tagacha texnika tugmasi — har bir teg «o‘zimniki / raqibniki» va «muvaffaqiyatli / muvaffaqiyatsiz»ni belgilaydi."
  ],
  "Stats & momentum graph": ["Статистика и график динамики", "Statistika va momentum grafigi"],
  "See at a glance who was in control, and when.": ["С первого взгляда видно, кто и когда контролировал схватку.", "Kim va qachon ustunlik qilganini bir qarashda ko‘rasiz."],
  "Draw on the video": ["Рисование поверх видео", "Video ustiga chizish"],
  "Freehand, line, arrow, rectangle, ellipse and text in 6 colours. Marks stay pinned to the picture while you zoom and pan.": [
    "Карандаш, линия, стрелка, прямоугольник, эллипс и текст — 6 цветов. Пометки остаются привязанными к изображению при зуме и панорамировании.",
    "Qalam, chiziq, strelka, to‘rtburchak, ellips va matn — 6 rangda. Zoom va pan qilganda belgilar tasvirga bog‘langan holda qoladi."
  ],
  "Angle & distance": ["Угол и расстояние", "Burchak va masofa"],
  "Three clicks give an angle in degrees, two give an on-screen distance — check elbows, knees and body lean.": [
    "Три клика — угол в градусах, два клика — расстояние на экране: проверяйте локти, колени и наклон корпуса.",
    "Uch marta bosish — burchak gradusda, ikki marta — ekrandagi masofa: tirsak, tizza va gavda qiyaligini tekshiring."
  ],
  "Ultra-slow speeds & smooth slow-mo export": ["Сверхмедленные скорости и плавный экспорт slow-mo", "Juda sekin tezliklar va silliq slow-mo eksporti"],
  "Watch at 0.1× and 0.15×, and export the marked section as smooth 0.5× / 0.25× / 0.125× slow-motion MP4 with generated in-between frames.": [
    "Смотрите на скорости 0.1× и 0.15× и экспортируйте отмеченный фрагмент в плавное замедленное MP4 0.5× / 0.25× / 0.125× с дорисованными промежуточными кадрами.",
    "0.1× va 0.15× tezlikda tomosha qiling, belgilangan qismni oraliq kadrlar yaratilgan holda silliq 0.5× / 0.25× / 0.125× slow-motion MP4 sifatida eksport qiling."
  ],
  "Position time": ["Время в позициях", "Pozitsiyadagi vaqt"],
  "Time up to 8 positions — standing, top, bottom, back and more — down to the second. The list is yours to edit.": [
    "Хронометраж до 8 позиций — в стойке, сверху, снизу, со спины и других — с точностью до секунды. Список настраивается.",
    "8 tagacha pozitsiya vaqtini o‘lchang — tik turgan, ustda, ostda, orqadan va boshqalar — soniyagacha aniq. Ro‘yxatni o‘zingiz tahrirlaysiz."
  ],
  "Highlight reel & combined report": ["Хайлайт-ролик и сводный отчёт", "Highlight rolik va umumiy hisobot"],
  "Join every tagged moment into one clip. Merge points and position time across many recordings into a CSV report.": [
    "Склейте все отмеченные моменты в один клип. Объедините баллы и время в позициях из многих записей в отчёт CSV.",
    "Barcha belgilangan lahzalarni bitta klipga birlashtiring. Ko‘plab yozuvlardagi ochko va pozitsiya vaqtini CSV hisobotga jamlang."
  ],
  "AI referee-signal detection": ["AI-распознавание жестов судьи", "Hakam ishoralarini AI bilan aniqlash"],
  "Scans a recording for referee gestures (judo, UWW wrestling, BJJ, sambo) and suggests tags — you confirm each with ✓. Runs offline on your PC.": [
    "Ищет в записи жесты судьи (дзюдо, борьба UWW, BJJ, самбо) и предлагает теги — вы подтверждаете каждый кнопкой ✓. Работает офлайн на вашем компьютере.",
    "Yozuvdan hakam ishoralarini (dzyudo, UWW kurashi, BJJ, sambo) qidiradi va teg taklif qiladi — har birini ✓ bilan tasdiqlaysiz. Kompyuteringizda oflayn ishlaydi."
  ],

  // ── What's new
  "New in the latest updates": ["Новое в последних обновлениях", "So‘nggi yangilanishlarda qo‘shildi"],
  "Built from real match-day feedback: faster, more reliable and easier to control.": [
    "По отзывам с реальных соревнований: быстрее, надёжнее и удобнее в управлении.",
    "Haqiqiy musobaqa kunlaridagi fikr-mulohazalar asosida: tezroq, ishonchliroq va boshqarish osonroq."
  ],
  "Replay without pressing REC": ["Повтор без нажатия REC", "REC bosmasdan replay"],
  "The last 1–10 minutes of every camera stay in memory, so you can replay a disputed moment at any time.": [
    "Последние 1–10 минут каждой камеры хранятся в памяти — спорный момент можно повторить в любой момент.",
    "Har bir kameraning so‘nggi 1–10 daqiqasi xotirada saqlanadi — bahsli lahzani istalgan vaqtda qayta ko‘rasiz."
  ],
  "Replays the last seconds at 0.25×, 0.5× or 1×, one to three times, then returns to LIVE on its own.": [
    "Повторяет последние секунды на скорости 0.25×, 0.5× или 1× от одного до трёх раз и сам возвращается в LIVE.",
    "So‘nggi soniyalarni 0.25×, 0.5× yoki 1× tezlikda bir-uch marta takrorlaydi va o‘zi LIVE’ga qaytadi."
  ],
  "J / K / L & smooth reverse": ["J / K / L и плавный реверс", "J / K / L va silliq orqaga ijro"],
  "Pro editing keys, frame stepping and 0.25×–2× speeds. Reverse playback without stutter.": [
    "Профессиональные клавиши монтажа, покадровый шаг и скорости 0.25×–2×. Обратное воспроизведение без рывков.",
    "Professional montaj tugmalari, kadrma-kadr qadam va 0.25×–2× tezlik. Orqaga ijro qotishsiz."
  ],
  "Camera health alarms": ["Оповещения о сбоях камер", "Kamera nosozligi signallari"],
  "A red banner and a beep when a camera disconnects, loses its picture or stops recording. USB cameras reconnect by themselves.": [
    "Красный баннер и звуковой сигнал, если камера отключилась, пропало изображение или остановилась запись. USB-камеры переподключаются автоматически.",
    "Kamera uzilsa, tasvir yo‘qolsa yoki yozuv to‘xtasa — qizil banner va ovozli signal. USB kameralar o‘zi qayta ulanadi."
  ],
  "6- and 8-camera grids": ["Сетка на 6 и 8 камер", "6 va 8 kameralik to‘r"],
  "Switch between 1, 2, 4, 6 and 8 cameras from the top bar or with Ctrl+1…8.": [
    "Переключайтесь между 1, 2, 4, 6 и 8 камерами на верхней панели или клавишами Ctrl+1…8.",
    "1, 2, 4, 6 va 8 kamera o‘rtasida yuqori paneldan yoki Ctrl+1…8 bilan almashtiring."
  ],
  "External monitor & delay": ["Внешний монитор и задержка", "Tashqi monitor va kechikish"],
  "Send chosen cameras to a second screen and run them a set number of seconds behind live.": [
    "Выводите выбранные камеры на второй экран с заданной задержкой в секундах относительно прямого эфира.",
    "Tanlangan kameralarni ikkinchi ekranga jonli efirdan belgilangan soniyaga kechiktirib chiqaring."
  ],
  "Your own TAG categories": ["Свои категории тегов", "O‘z TAG toifalaringiz"],
  "Pick up to 9 categories with keys 1–9 and add a note. Export reports as CSV or HTML.": [
    "До 9 категорий на клавишах 1–9 и заметка к тегу. Отчёты экспортируются в CSV или HTML.",
    "1–9 tugmalarida 9 tagacha toifa va izoh qo‘shish. Hisobotlar CSV yoki HTML’ga eksport qilinadi."
  ],
  "Adapts to weaker PCs": ["Подстраивается под слабые ПК", "Kuchsiz kompyuterlarga moslashadi"],
  "Checks the hardware and offers to lower resolution and buffer size when the PC is overloaded.": [
    "Проверяет железо и при перегрузке предлагает снизить разрешение и размер буфера.",
    "Uskunani tekshiradi va kompyuter yuklanib ketganda o‘lcham (rezolyutsiya) va bufer hajmini kamaytirishni taklif qiladi."
  ],
  "Remembers setup, protects recordings": ["Помнит настройки, бережёт записи", "Sozlamalarni eslaydi, yozuvlarni himoya qiladi"],
  "Restores cameras, resolutions and IP addresses on launch, and asks before you change a camera or quit mid-recording.": [
    "При запуске восстанавливает камеры, разрешения и IP-адреса и переспрашивает, прежде чем сменить камеру или закрыть программу во время записи.",
    "Ishga tushganda kameralar, rezolyutsiya va IP manzillarni tiklaydi, yozuv paytida kamerani almashtirish yoki dasturni yopishdan oldin so‘raydi."
  ],
  "Uzbek language added": ["Добавлен узбекский язык", "O‘zbek tili qo‘shildi"],
  "The app and the user manual now come in Mongolian, English, Russian and Uzbek.": [
    "Программа и руководство пользователя теперь на монгольском, английском, русском и узбекском.",
    "Dastur va foydalanuvchi qo‘llanmasi endi mo‘g‘ul, ingliz, rus va o‘zbek tillarida."
  ],
  "AI referee signals": ["AI-жесты судьи", "AI hakam ishoralari"],
  "In the Analyze module: spots referee gestures and suggests tags, with a pose-skeleton overlay.": [
    "В модуле Analyze: распознаёт жесты судьи и предлагает теги, показывает скелет позы поверх видео.",
    "Analyze modulida: hakam ishoralarini aniqlab teg taklif qiladi, video ustida tana skeletini ko‘rsatadi."
  ],
  "iPad / phone remote": ["Пульт с iPad / телефона", "iPad / telefondan boshqaruv"],
  "Coming soon": ["Скоро", "Tez orada"],
  "The head referee controls the replay from a tablet with a PIN — over local Wi-Fi, no internet.": [
    "Главный судья управляет повтором с планшета по PIN-коду — через локальный Wi-Fi, без интернета.",
    "Bosh hakam replay’ni planshetdan PIN-kod bilan boshqaradi — mahalliy Wi-Fi orqali, internetsiz."
  ],

  // ── How it works
  "Three steps, just a few minutes": ["Три шага — всего несколько минут", "Uch qadam — bir necha daqiqa"],
  "Setup is simple: plug in your cameras and start replaying.": ["Настройка простая: подключите камеры и начинайте повтор.", "Sozlash oddiy: kameralarni ulang va replay’ni boshlang."],
  "Connect cameras": ["Подключите камеры", "Kameralarni ulang"],
  "Plug in USB cameras or add RTSP/IP addresses and start recording — no capture cards or switcher.": [
    "Подключите USB-камеры или добавьте RTSP/IP-адреса и начните запись — без карт захвата и микшера.",
    "USB kameralarni ulang yoki RTSP/IP manzillarni qo‘shing va yozishni boshlang — capture karta va svitchersiz."
  ],
  "Review the moment": ["Разберите момент", "Lahzani ko‘rib chiqing"],
  "Rewind with instant replay, slow it down, step frames, zoom and tag it. Draw and compare with Analyze.": [
    "Отмотайте через instant replay, замедлите, пройдите покадрово, увеличьте и отметьте тегом. Рисуйте и сравнивайте в Analyze.",
    "Instant replay bilan orqaga qaytaring, sekinlashtiring, kadrma-kadr o‘ting, kattalashtiring va teg qo‘ying. Analyze’da chizing va solishtiring."
  ],
  "Export & share": ["Экспортируйте и делитесь", "Eksport qiling va ulashing"],
  "Export MP4 clips, tag reports and highlights and share them with athletes, coaches and teams.": [
    "Экспортируйте MP4-клипы, отчёты по тегам и хайлайты и делитесь ими со спортсменами, тренерами и командой.",
    "MP4 kliplar, teg hisobotlari va highlight’larni eksport qilib, sportchilar, murabbiylar va jamoa bilan ulashing."
  ],

  // ── Venue layout
  "Venue layout": ["Схема площадки", "Maydon sxemasi"],
  "Two cameras, two corners of the mat": ["Две камеры — два угла татами", "Ikki kamera — gilamning ikki burchagi"],
  "JJIF field: an 8×8 m fighting area with a 2 m safety area all around = a 12×12 m match area. Mats are 1×2 m tatami. Two cameras at opposite corners cover the whole area — scale up to 4 for larger venues.": [
    "Площадка JJIF: зона борьбы 8×8 м и зона безопасности 2 м по периметру = площадь 12×12 м. Татами 1×2 м. Две камеры в противоположных углах охватывают всю площадь — на больших площадках до 4 камер.",
    "JJIF maydoni: 8×8 m bellashuv zonasi va atrofida 2 m xavfsizlik zonasi = 12×12 m maydon. Tatami 1×2 m. Qarama-qarshi burchaklardagi ikki kamera butun maydonni qamraydi — katta maydonlarda 4 tagacha."
  ],
  "JJIF standard:": ["Стандарт JJIF:", "JJIF standarti:"],
  "Fighting area 8×8 m (blue) + 2 m safety area (red + outer blue ring) = 12×12 m match area. 1×2 m tatami in a basket-weave layout — 72 mats total.": [
    "Зона борьбы 8×8 м (синяя) + зона безопасности 2 м (красное и внешнее синее кольцо) = площадь 12×12 м. Татами 1×2 м уложены «плетёнкой» — всего 72 мата.",
    "Bellashuv zonasi 8×8 m (ko‘k) + 2 m xavfsizlik zonasi (qizil va tashqi ko‘k halqa) = 12×12 m maydon. 1×2 m tatamilar «to‘qima» usulida terilgan — jami 72 ta mat."
  ],
  "Fighting area · 8×8 m": ["Зона борьбы · 8×8 м", "Bellashuv zonasi · 8×8 m"],
  "Safety area · 2 m": ["Зона безопасности · 2 м", "Xavfsizlik zonasi · 2 m"],
  "Camera FOV": ["Обзор камеры", "Kamera ko‘rish maydoni"],
  "USB / LAN": ["USB / LAN", "USB / LAN"],
  "Computer": ["Компьютер", "Kompyuter"],
  "Height": ["Высота", "Balandlik"],
  "Mount high enough that athletes don't block each other and the whole mat stays visible.": [
    "Устанавливайте достаточно высоко, чтобы спортсмены не перекрывали друг друга и весь татами оставался в кадре.",
    "Sportchilar bir-birini to‘sib qo‘ymasligi va butun gilam ko‘rinib turishi uchun yetarlicha baland o‘rnating."
  ],
  "Down-tilt": ["Наклон вниз", "Pastga qiyalik"],
  "Angle each camera slightly downward, pointed at the centre of the mat.": ["Наклоните каждую камеру немного вниз, к центру татами.", "Har bir kamerani biroz pastga, gilam markaziga qaratib qiyalating."],
  "Position & distance": ["Расположение и дистанция", "Joylashuv va masofa"],
  "Two opposite (diagonal) corners, 1–2 m back — no blind spots, full mat coverage.": [
    "Два противоположных (диагональных) угла, в 1–2 м от татами — без слепых зон, весь ковёр в кадре.",
    "Ikki qarama-qarshi (diagonal) burchak, gilamdan 1–2 m nariroqda — ko‘rinmas zonasiz, butun gilam qamrovda."
  ],

  // ── Use cases
  "Who it's for": ["Для кого", "Kim uchun"],
  "From the competition floor to daily training": ["От соревновательной площадки до ежедневных тренировок", "Musobaqa maydonidan kundalik mashg‘ulotlargacha"],
  "Built for combat-sport competitions and clubs, coaching, technical review and VR training.": [
    "Для соревнований и клубов единоборств, тренерской работы, технического разбора и VR-тренировок.",
    "Yakkakurash musobaqalari va klublari, murabbiylik, texnik tahlil va VR mashg‘ulotlari uchun."
  ],
  "Competitions & officials": ["Соревнования и судьи", "Musobaqalar va hakamlar"],
  "Record every mat and show disputed scores to officials with instant replay.": ["Записывайте каждый татами и показывайте судьям спорные оценки через instant replay.", "Har bir gilamni yozib oling va bahsli ochkolarni hakamlarga instant replay orqali ko‘rsating."],
  "Combat gyms & academies": ["Клубы и академии единоборств", "Yakkakurash klublari va akademiyalari"],
  "Record bouts, drills and sparring, review them back and measure progress.": ["Записывайте схватки, упражнения и спарринги, пересматривайте их и отслеживайте прогресс.", "Bellashuv, mashq va sparringlarni yozib oling, qayta ko‘ring va o‘sishni o‘lchang."],
  "Coaches": ["Тренеры", "Murabbiylar"],
  "Break down technique frame by frame and show athletes on the spot.": ["Разбирайте технику покадрово и сразу показывайте спортсменам.", "Texnikani kadrma-kadr tahlil qiling va sportchilarga o‘sha zahoti ko‘rsating."],
  "VR training facilities": ["VR-тренировочные центры", "VR mashg‘ulot markazlari"],
  "Capture VR training from multiple angles for technical review.": ["Снимайте VR-тренировки с нескольких ракурсов для технического разбора.", "VR mashg‘ulotlarini texnik tahlil uchun bir nechta burchakdan yozib oling."],

  // ── Comparison
  "Why NeuroReplay": ["Почему NeuroReplay", "Nega NeuroReplay"],
  "Beyond a normal recording workflow": ["Больше, чем обычная видеозапись", "Oddiy video yozuvdan ko‘proq"],
  "A normal recording just leaves a file to watch later. NeuroReplay gives you review, analysis and export in the moment.": [
    "Обычная запись оставляет лишь файл, который смотрят потом. NeuroReplay даёт повтор, анализ и экспорт прямо сейчас.",
    "Oddiy yozuv keyin ko‘rish uchun faylni qoldiradi xolos. NeuroReplay esa ko‘rib chiqish, tahlil va eksportni shu zahoti beradi."
  ],
  "Capability": ["Возможность", "Imkoniyat"],
  "Normal recording": ["Обычная запись", "Oddiy yozuv"],
  "Review while still recording": ["Просмотр во время записи", "Yozuv davomida ko‘rish"],
  "Must stop and open the file": ["Нужно остановить и открыть файл", "To‘xtatib, faylni ochish kerak"],
  "Multiple angles in sync": ["Несколько ракурсов синхронно", "Bir nechta burchak sinxron"],
  "On one timeline": ["На одной шкале времени", "Bitta vaqt shkalasida"],
  "Aligned by hand": ["Выравнивание вручную", "Qo‘lda moslash"],
  "Instant replay on the spot": ["Мгновенный повтор на месте", "Joyida instant replay"],
  "One trigger": ["Одно нажатие", "Bitta bosish"],
  "Not possible": ["Невозможно", "Imkonsiz"],
  "Telestration & tags": ["Рисование и теги", "Chizish va teglar"],
  "Built in": ["Встроено", "Ichiga o‘rnatilgan"],
  "Separate tool": ["Отдельная программа", "Alohida dastur"],
  "Produce highlights": ["Создание хайлайтов", "Highlight tayyorlash"],
  "MP4 straight from tags": ["MP4 прямо из тегов", "Teglardan to‘g‘ridan-to‘g‘ri MP4"],
  "Manual editing": ["Ручной монтаж", "Qo‘lda montaj"],

  // ── Pricing
  "The event-day package": ["Пакет на день соревнований", "Musobaqa kuni paketi"],
  "One clear price: the Competition licence, 4 cameras and on-site technical support during the event. Add Analyze and other extras below.": [
    "Одна понятная цена: лицензия Competition, 4 камеры и техническая поддержка на площадке во время соревнований. Analyze и другие опции — ниже.",
    "Bitta aniq narx: Competition litsenziyasi, 4 kamera va musobaqa davomida joyida texnik yordam. Analyze va boshqa qo‘shimchalar — quyida."
  ],
  "Event day": ["День соревнований", "Musobaqa kuni"],
  "Competition licence — live, replay, recording, TAG": ["Лицензия Competition — live, replay, запись, TAG", "Competition litsenziyasi — live, replay, yozuv, TAG"],
  "per event day": ["за день соревнований", "musobaqa kuni uchun"],
  "Up to 4 cameras (USB/RTSP)": ["До 4 камер (USB/RTSP)", "4 tagacha kamera (USB/RTSP)"],
  "Instant replay & auto replay": ["Instant replay и auto replay", "Instant replay va auto replay"],
  "Live DVR rewind & replay buffer": ["Live DVR-перемотка и буфер повтора", "Jonli DVR va replay buferi"],
  "Slow-mo, frame step, zoom/pan": ["Замедление, покадровый шаг, зум/панорама", "Slow-mo, kadr qadami, zoom/pan"],
  "Tagging & CSV/HTML reports": ["Теги и отчёты CSV/HTML", "Teglar va CSV/HTML hisobotlar"],
  "Camera alarms & external monitor": ["Оповещения камер и внешний монитор", "Kamera signallari va tashqi monitor"],
  "On-site technical support during the event": ["Техническая поддержка на площадке во время соревнований", "Musobaqa davomida joyida texnik yordam"],
  "Add-ons": ["Дополнительно", "Qo‘shimchalar"],
  "Training & setup": ["Обучение и установка", "O‘qitish va o‘rnatish"],
  "on request": ["по запросу", "kelishiladi"],
  "Extra cameras (up to 8)": ["Дополнительные камеры (до 8)", "Qo‘shimcha kameralar (8 tagacha)"],
  "Multi-day package": ["Пакет на несколько дней", "Ko‘p kunlik paket"],
  "What's included →": ["Что входит →", "Nimalar kiradi →"],
  "The package includes Windows 10/11, the multilingual interface (MN·EN·RU·UZ) and offline operation.": [
    "Пакет включает работу на Windows 10/11, многоязычный интерфейс (MN·EN·RU·UZ) и офлайн-режим.",
    "Paketga Windows 10/11 da ishlash, ko‘p tilli interfeys (MN·EN·RU·UZ) va oflayn rejim kiradi."
  ],

  // ── Download
  "Get NeuroReplay for Windows": ["Скачайте NeuroReplay для Windows", "NeuroReplay’ni Windows uchun yuklab oling"],
  "Download the installer and set it up on Windows 10/11. Activation needs a license — request a demo and we'll issue a key.": [
    "Скачайте установщик и установите на Windows 10/11. Для активации нужна лицензия — закажите демо, и мы выдадим ключ.",
    "O‘rnatuvchini yuklab oling va Windows 10/11 ga o‘rnating. Faollashtirish uchun litsenziya kerak — demo buyurtma qiling, biz kalit beramiz."
  ],
  "Download for Windows": ["Скачать для Windows", "Windows uchun yuklab olish"],
  "Version": ["Версия", "Versiya"],
  "Size": ["Размер", "Hajmi"],
  "Windows installer": ["Установщик для Windows", "Windows o‘rnatuvchisi"],
  "Runs fully offline": ["Работает полностью офлайн", "To‘liq oflayn ishlaydi"],
  "No capture card required": ["Карта захвата не нужна", "Capture karta kerak emas"],
  "MN · EN · RU · UZ interface": ["Интерфейс MN · EN · RU · UZ", "MN · EN · RU · UZ interfeys"],

  // ── Order form
  "Request a demo / get a quote": ["Заказать демо / получить предложение", "Demo buyurtma qilish / narx taklifini olish"],
  "Fill in the form and we'll get back to you to arrange a demo, pricing and setup.": [
    "Заполните форму — мы свяжемся с вами, чтобы договориться о демо, цене и установке.",
    "Shaklni to‘ldiring — demo, narx va o‘rnatishni kelishish uchun siz bilan bog‘lanamiz."
  ],
  "Full name": ["Имя и фамилия", "To‘liq ism"],
  "Organisation / club": ["Организация / клуб", "Tashkilot / klub"],
  "Email": ["Эл. почта", "E-pochta"],
  "Phone": ["Телефон", "Telefon"],
  "Use case": ["Назначение", "Foydalanish maqsadi"],
  "Camera count": ["Количество камер", "Kameralar soni"],
  "Preferred language": ["Язык общения", "Muloqot tili"],
  "Licence of interest": ["Интересующая лицензия", "Qiziqtirgan litsenziya"],
  "Message": ["Сообщение", "Xabar"],
  "I agree that the details I provide may be used only to contact me about this request.": [
    "Я согласен(на), что предоставленные данные будут использованы только для связи со мной по этой заявке.",
    "Men bergan ma’lumotlarim faqat ushbu so‘rov bo‘yicha men bilan bog‘lanish uchun ishlatilishiga roziman."
  ],
  "Your details are used only for this request and never sold. If no endpoint is configured, the button opens your email client instead.": [
    "Ваши данные используются только для этой заявки и никогда не продаются. Если форма не настроена, кнопка откроет почтовый клиент.",
    "Ma’lumotlaringiz faqat shu so‘rov uchun ishlatiladi va hech qachon sotilmaydi. Shakl sozlanmagan bo‘lsa, tugma e-pochta dasturini ochadi."
  ],
  "Direct contact": ["Прямая связь", "To‘g‘ridan-to‘g‘ri aloqa"],
  "Location": ["Местоположение", "Manzil"],
  "Ulaanbaatar, Mongolia": ["Улан-Батор, Монголия", "Ulan-Bator, Mo‘g‘uliston"],
  "System": ["Система", "Tizim"],

  // ── Requirements
  "System requirements": ["Системные требования", "Tizim talablari"],
  "What computer does it run on": ["На каком компьютере работает", "Qanday kompyuterda ishlaydi"],
  "Three tiers depending on camera count and workload. Windows 10/11 (64-bit) required.": [
    "Три уровня в зависимости от числа камер и нагрузки. Требуется Windows 10/11 (64-bit).",
    "Kameralar soni va yuklamaga qarab uch daraja. Windows 10/11 (64-bit) talab qilinadi."
  ],
  "Minimum": ["Минимум", "Minimal"],
  "1–2 cameras, a single coach reviewing casually": ["1–2 камеры, один тренер для простого просмотра", "1–2 kamera, bitta murabbiy oddiy ko‘rib chiqish uchun"],
  "CPU": ["Процессор", "Protsessor"],
  "Storage": ["Диск", "Disk"],
  "Integrated is fine": ["Встроенной достаточно", "Integratsiyalashgani yetarli"],
  "Recommended": ["Рекомендуем", "Tavsiya etiladi"],
  "4 cameras, running continuously through a full session or event": ["4 камеры, непрерывная работа всю тренировку или весь турнир", "4 kamera, butun mashg‘ulot yoki musobaqa davomida uzluksiz"],
  "(optional)": ["(по желанию)", "(ixtiyoriy)"],
  "High-performance": ["Высокая производительность", "Yuqori unumdorlik"],
  "6–8 cameras, or heavy multi-angle DVR rewind at once": ["6–8 камер или интенсивная одновременная перемотка нескольких ракурсов", "6–8 kamera yoki bir vaqtda bir nechta burchakni jadal orqaga qaytarish"],
  "These are practical guidelines, not benchmarked lab results. If your camera count or resolution differs, we recommend trying NeuroReplay on your own machine during a demo.": [
    "Это практические рекомендации, а не результаты лабораторных тестов. Если у вас другое число камер или разрешение, советуем проверить NeuroReplay на своём компьютере во время демо.",
    "Bular laboratoriya sinovlari emas, amaliy tavsiyalar. Kameralar soni yoki rezolyutsiya boshqacha bo‘lsa, demo paytida NeuroReplay’ni o‘z kompyuteringizda sinab ko‘rishni tavsiya qilamiz."
  ],

  // ── FAQ
  "Frequently asked questions": ["Частые вопросы", "Ko‘p beriladigan savollar"],
  "Which cameras are compatible?": ["Какие камеры подходят?", "Qaysi kameralar mos keladi?"],
  "Any USB camera Windows recognises, plus network cameras that provide an RTSP/IP stream (via FFmpeg). You can mix USB and IP cameras at once.": [
    "Любая USB-камера, которую видит Windows, а также сетевые камеры с потоком RTSP/IP (через FFmpeg). USB- и IP-камеры можно использовать одновременно.",
    "Windows taniydigan har qanday USB kamera, shuningdek RTSP/IP oqimini beradigan tarmoq kameralari (FFmpeg orqali). USB va IP kameralarni birga ishlatish mumkin."
  ],
  "Does it require Windows?": ["Нужен ли Windows?", "Windows shartmi?"],
  "Yes. NeuroReplay is Windows 10/11 desktop software. There is no macOS or Linux build at this time.": [
    "Да. NeuroReplay — настольная программа для Windows 10/11. Версий для macOS и Linux пока нет.",
    "Ha. NeuroReplay — Windows 10/11 uchun desktop dastur. Hozircha macOS va Linux versiyalari yo‘q."
  ],
  "How does license activation work?": ["Как активируется лицензия?", "Litsenziya qanday faollashtiriladi?"],
  "There are two options: an event .lic file (works on any computer for the set dates) or a licence key bound to one computer. After ordering we send the file or key with instructions.": [
    "Есть два варианта: файл .lic для соревнований (работает на любом компьютере в заданные даты) или лицензионный ключ, привязанный к одному компьютеру. После заказа мы пришлём файл или ключ с инструкцией.",
    "Ikki variant bor: musobaqa uchun .lic fayl (belgilangan sanalarda istalgan kompyuterda ishlaydi) yoki bitta kompyuterga bog‘langan litsenziya kaliti. Buyurtmadan so‘ng fayl yoki kalitni yo‘riqnoma bilan yuboramiz."
  ],
  "What's the difference between Competition and Analyze?": ["Чем отличаются Competition и Analyze?", "Competition va Analyze nimasi bilan farq qiladi?"],
  "Competition is the base licence: live, instant replay, recording, tagging and clip export. Analyze is an add-on licence: drawing, angle measurement, A|B compare, technique points, position time, stats, highlight reels and AI referee signals.": [
    "Competition — базовая лицензия: live, instant replay, запись, теги и экспорт клипов. Analyze — дополнительная лицензия: рисование, измерение углов, сравнение A|B, баллы за приёмы, время в позициях, статистика, хайлайт-ролики и AI-распознавание жестов судьи.",
    "Competition — asosiy litsenziya: live, instant replay, yozuv, teglar va klip eksporti. Analyze — qo‘shimcha litsenziya: chizish, burchak o‘lchash, A|B solishtirish, texnika ochkolari, pozitsiya vaqti, statistika, highlight roliklar va AI hakam ishoralari."
  ],
  "Which sports does the AI referee-signal detection support?": ["Для каких видов спорта работает AI-распознавание жестов судьи?", "AI hakam ishoralarini qaysi sport turlarida aniqlaydi?"],
  "Judo (ippon, waza-ari, osaekomi, matte), UWW wrestling (1/2/4/5 points), BJJ (2/3/4 points, advantage) and sambo (1/2/4 points, total victory). It is a beta assistant — it only suggests, and the operator confirms each tag. Accuracy depends on how large and clear the referee is in frame.": [
    "Дзюдо (иппон, вадза-ари, осаэкоми, матэ), борьба UWW (1/2/4/5 баллов), BJJ (2/3/4 балла, преимущество) и самбо (1/2/4 балла, чистая победа). Это бета-помощник: он только предлагает, а каждый тег подтверждает оператор. Точность зависит от того, насколько крупно и чётко судья виден в кадре.",
    "Dzyudo (ippon, vaza-ari, osaekomi, mate), UWW kurashi (1/2/4/5 ochko), BJJ (2/3/4 ochko, ustunlik) va sambo (1/2/4 ochko, toza g‘alaba). Bu beta yordamchi: u faqat taklif qiladi, har bir tegni operator tasdiqlaydi. Aniqlik hakamning kadrda qanchalik katta va aniq ko‘rinishiga bog‘liq."
  ],
  "Can it run offline?": ["Работает ли без интернета?", "Internetsiz ishlaydimi?"],
  "Yes. Recording, replay, analysis and export all work offline over your local network.": [
    "Да. Запись, повтор, анализ и экспорт работают офлайн в вашей локальной сети.",
    "Ha. Yozuv, replay, tahlil va eksport — barchasi mahalliy tarmoqda oflayn ishlaydi."
  ],
  "How much storage do I need?": ["Сколько места на диске нужно?", "Diskda qancha joy kerak?"],
  "It depends on the number of cameras, resolution, recording length and DVR buffer. We recommend a fast SSD for match-day capture and will size it with you during the demo.": [
    "Зависит от числа камер, разрешения, длительности записи и DVR-буфера. Для записи соревнований рекомендуем быстрый SSD; точный объём рассчитаем вместе на демо.",
    "Kameralar soni, rezolyutsiya, yozuv davomiyligi va DVR buferiga bog‘liq. Musobaqa yozuvi uchun tez SSD tavsiya qilamiz; aniq hajmni demo paytida birga hisoblaymiz."
  ],
  "How do I set up an RTSP camera?": ["Как настроить RTSP-камеру?", "RTSP kamerani qanday sozlash kerak?"],
  "Connect the IP camera to your LAN and enter its RTSP URL (rtsp://…) and credentials in the software. FFmpeg decodes the stream and syncs it with your other cameras. We help with setup.": [
    "Подключите IP-камеру к локальной сети и введите в программе её RTSP-адрес (rtsp://…) и данные для входа. FFmpeg декодирует поток и синхронизирует его с остальными камерами. Мы поможем с настройкой.",
    "IP kamerani mahalliy tarmoqqa ulang va dasturga uning RTSP manzilini (rtsp://…) hamda kirish ma’lumotlarini kiriting. FFmpeg oqimni dekodlab, boshqa kameralar bilan sinxronlaydi. Sozlashda yordam beramiz."
  ],
  "What support do you offer?": ["Какую поддержку вы предоставляете?", "Qanday yordam ko‘rsatasiz?"],
  "Depending on your plan: email or priority support, match-day assistance, on-site setup and training. The app comes in 4 languages; support is in Mongolian, English and Russian.": [
    "В зависимости от пакета: поддержка по эл. почте или приоритетная, помощь в день соревнований, установка на месте и обучение. Программа на 4 языках; поддержка — на монгольском, английском и русском.",
    "Paketga qarab: e-pochta yoki ustuvor yordam, musobaqa kunida ko‘mak, joyida o‘rnatish va o‘qitish. Dastur 4 tilda; yordam mo‘g‘ul, ingliz va rus tillarida."
  ],

  // ── CTA / footer
  "Ready to level up your event?": ["Готовы вывести соревнования на новый уровень?", "Musobaqangizni yangi bosqichga olib chiqasizmi?"],
  "Request a demo and see NeuroReplay working with your own cameras and setup.": [
    "Закажите демо и посмотрите, как NeuroReplay работает с вашими камерами и вашей площадкой.",
    "Demo buyurtma qiling va NeuroReplay o‘z kameralaringiz va sozlamalaringiz bilan qanday ishlashini ko‘ring."
  ],
  "Multi-camera instant replay & video review software for Windows. For combat-sport competitions, gyms, coaching and VR training.": [
    "Многокамерная программа instant replay и видеоразбора для Windows. Для соревнований и клубов единоборств, тренеров и VR-тренировок.",
    "Windows uchun ko‘p kamerali instant replay va video tahlil dasturi. Yakkakurash musobaqalari, klublar, murabbiylar va VR mashg‘ulotlari uchun."
  ],
  "Links": ["Ссылки", "Havolalar"],
  "Contact": ["Контакты", "Aloqa"],
  "User manual": ["Руководство пользователя", "Foydalanuvchi qo‘llanmasi"],
  "Created by": ["Автор", "Muallif"],
  "All rights reserved": ["Все права защищены", "Barcha huquqlar himoyalangan"],
  "Made in Mongolia": ["Сделано в Монголии", "Mo‘g‘ulistonda yaratilgan"],
  "Privacy": ["Конфиденциальность", "Maxfiylik"],
  "Terms": ["Условия", "Shartlar"],
  "IP": ["Интеллект. собственность", "Intellektual mulk"],
  "Want to try NeuroReplay?": ["Хотите попробовать NeuroReplay?", "NeuroReplay’ni sinab ko‘rmoqchimisiz?"],
  "Get a demo": ["Получить демо", "Demo olish"],

  // ── Legal
  "Privacy policy": ["Политика конфиденциальности", "Maxfiylik siyosati"],
  "Details you submit via the order form (name, organisation, email, phone, use case, camera count, message) are used only to respond to your demo/order request and arrange pricing and setup. We never sell or share your data with third parties. This website uses no tracking, analytics or cookies. NeuroReplay runs offline, so your recording data stays only on your computer — we have no access to it. On request we will delete your data: idereee.engineering@gmail.com.": [
    "Данные, которые вы отправляете через форму заказа (имя, организация, эл. почта, телефон, назначение, количество камер, сообщение), используются только для ответа на вашу заявку на демо/заказ и согласования цены и установки. Мы никогда не продаём и не передаём ваши данные третьим лицам. Сайт не использует трекинг, аналитику и cookies. NeuroReplay работает офлайн, поэтому ваши записи хранятся только на вашем компьютере — у нас нет к ним доступа. По запросу мы удалим ваши данные: idereee.engineering@gmail.com.",
    "Buyurtma shakli orqali yuborgan ma’lumotlaringiz (ism, tashkilot, e-pochta, telefon, foydalanish maqsadi, kameralar soni, xabar) faqat demo/buyurtma so‘rovingizga javob berish hamda narx va o‘rnatishni kelishish uchun ishlatiladi. Ma’lumotlaringizni hech qachon sotmaymiz va uchinchi shaxslarga bermaymiz. Sayt kuzatuv, analitika yoki cookie’lardan foydalanmaydi. NeuroReplay oflayn ishlaydi, shuning uchun yozuvlaringiz faqat kompyuteringizda saqlanadi — bizda ularga kirish imkoni yo‘q. So‘rovingizga ko‘ra ma’lumotlaringizni o‘chiramiz: idereee.engineering@gmail.com."
  ],
  "Terms of service": ["Условия использования", "Foydalanish shartlari"],
  "By using NeuroReplay you accept the licence terms. A licence is bound to the purchased plan, period and machine; copying, reselling, sharing or reverse-engineering it is prohibited. Prices and plan contents may change without notice, and final pricing is confirmed on order. The software is provided \"as is\" without a guarantee of uninterrupted or error-free operation. Obtaining consent from participants/athletes when recording and complying with local laws is the user's responsibility.": [
    "Используя NeuroReplay, вы принимаете условия лицензии. Лицензия привязана к приобретённому пакету, сроку и компьютеру; её копирование, перепродажа, передача и обратная разработка (reverse engineering) запрещены. Цены и состав пакетов могут меняться без уведомления, окончательная цена подтверждается при заказе. Программа предоставляется «как есть», без гарантии бесперебойной и безошибочной работы. Получение согласия участников/спортсменов на съёмку и соблюдение местного законодательства — ответственность пользователя.",
    "NeuroReplay’dan foydalanib, siz litsenziya shartlarini qabul qilasiz. Litsenziya sotib olingan paket, muddat va kompyuterga bog‘langan; uni nusxalash, qayta sotish, boshqalarga berish yoki teskari muhandislik (reverse engineering) qilish taqiqlanadi. Narxlar va paket tarkibi oldindan ogohlantirmasdan o‘zgarishi mumkin, yakuniy narx buyurtmada tasdiqlanadi. Dastur «boricha» taqdim etiladi, uzluksiz va xatosiz ishlashi kafolatlanmaydi. Yozib olishda ishtirokchilar/sportchilar roziligini olish va mahalliy qonunlarga rioya qilish foydalanuvchi zimmasida."
  ],
  "Intellectual property": ["Интеллектуальная собственность", "Intellektual mulk"],
  "The NeuroReplay software, its name, logo, source code, interface, design and this website are protected by copyright, all rights owned by Iderbat Myagmardorj. The \"NeuroReplay\" name and logo are trademarks of their owner. Reproducing, distributing, modifying or using them commercially without prior written permission is prohibited.": [
    "Программа NeuroReplay, её название, логотип, исходный код, интерфейс, дизайн и этот сайт защищены авторским правом; все права принадлежат Iderbat Myagmardorj. Название и логотип «NeuroReplay» являются товарными знаками их владельца. Копирование, распространение, изменение или коммерческое использование без предварительного письменного разрешения запрещены.",
    "NeuroReplay dasturi, uning nomi, logotipi, manba kodi, interfeysi, dizayni va ushbu sayt mualliflik huquqi bilan himoyalangan; barcha huquqlar Iderbat Myagmardorjga tegishli. «NeuroReplay» nomi va logotipi egasining tovar belgilaridir. Oldindan yozma ruxsatsiz nusxalash, tarqatish, o‘zgartirish yoki tijorat maqsadida foydalanish taqiqlanadi."
  ]
};
