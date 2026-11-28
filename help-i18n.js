/* Translations for help.html — languages that are not written inline in the markup.
   Key   = the English copy of an element (its [data-en] text, tags stripped, whitespace collapsed).
   Value = { <language code>: inner HTML }. A missing language falls back to English.
   Changing English copy in help.html changes its key: update the key here too.
   Loaded after i18n.js (see the language registry there). */
NRI18n.addTranslations({
  // ── Page metadata (<title>, meta description)
  "NeuroReplay — User guide": {
    ru: "NeuroReplay — Руководство пользователя",
    uz: "NeuroReplay — Foydalanuvchi qo‘llanmasi"
  },
  "NeuroReplay user guide: installation, licence activation, camera setup, recording, Instant Replay, tags, Library, export and keyboard shortcuts.": {
    ru: "Руководство пользователя NeuroReplay: установка, активация лицензии, настройка камер, запись, Instant Replay, теги, Library, экспорт и горячие клавиши.",
    uz: "NeuroReplay foydalanuvchi qo‘llanmasi: o‘rnatish, litsenziyani faollashtirish, kamerani sozlash, yozib olish, Instant Replay, teglar, Library, eksport va tezkor tugmalar."
  },

  // ── Page copy
  "Features": {
    ru: "Возможности",
    uz: "Imkoniyatlar"
  },
  "Download": {
    ru: "Скачать",
    uz: "Yuklab olish"
  },
  "Request a demo": {
    ru: "Заказать демо",
    uz: "Demo buyurtma qilish"
  },
  "Contents": {
    ru: "Содержание",
    uz: "Mundarija"
  },
  "Before you start": {
    ru: "Перед началом",
    uz: "Boshlashdan oldin"
  },
  "Install": {
    ru: "Установка",
    uz: "O‘rnatish"
  },
  "License": {
    ru: "Лицензия",
    uz: "Litsenziya"
  },
  "Camera setup": {
    ru: "Настройка камер",
    uz: "Kamerani sozlash"
  },
  "Recording": {
    ru: "Запись",
    uz: "Yozib olish"
  },
  "Tagging": {
    ru: "Теги",
    uz: "Teglar"
  },
  "Instant Replay": {
    ru: "Instant Replay",
    uz: "Instant Replay"
  },
  "Library": {
    ru: "Library",
    uz: "Library"
  },
  "Export & highlights": {
    ru: "Экспорт и highlights",
    uz: "Eksport va highlights"
  },
  "Keyboard shortcuts": {
    ru: "Горячие клавиши",
    uz: "Tezkor tugmalar"
  },
  "Troubleshooting": {
    ru: "Устранение неполадок",
    uz: "Muammolarni bartaraf etish"
  },
  "Contact": {
    ru: "Контакты",
    uz: "Aloqa"
  },
  "User guide": {
    ru: "Руководство",
    uz: "Qo‘llanma"
  },
  "NeuroReplay user guide": {
    ru: "NeuroReplay <span class='grad'>руководство пользователя</span>",
    uz: "NeuroReplay <span class='grad'>foydalanuvchi qo‘llanmasi</span>"
  },
  "Day-to-day instructions for the Windows app that records several cameras at once and gives you instant replay, DVR rewind, frame-by-frame review, tags and telestration.": {
    ru: "Повседневная инструкция к программе для Windows, которая записывает сразу несколько камер и даёт мгновенный повтор (instant replay), DVR-перемотку, покадровый разбор, теги и телестрацию.",
    uz: "Bir vaqtning o‘zida bir nechta kamerani yozib oladigan hamda instant replay, DVR orqaga o‘tkazish, kadrma-kadr tahlil, teglar va telestratsiyani taqdim etadigan Windows dasturi uchun kundalik qo‘llanma."
  },
  "Download PDF": {
    ru: "Сохранить как PDF",
    uz: "PDF sifatida saqlash"
  },
  "Download the app": {
    ru: "Скачать программу",
    uz: "Dasturni yuklab olish"
  },
  "A Windows 10 or Windows 11 computer One or more USB cameras, or a configured RTSP/IP camera Enough free disk space for recordings An active NeuroReplay license": {
    ru: "<li>Компьютер с Windows 10 или Windows 11</li><li>Одна или несколько USB-камер либо настроенная RTSP/IP-камера</li><li>Достаточно свободного места на диске для записей</li><li>Активная лицензия NeuroReplay</li>",
    uz: "<li>Windows 10 yoki Windows 11 o‘rnatilgan kompyuter</li><li>Bitta yoki bir nechta USB kamera yoki sozlangan RTSP/IP kamera</li><li>Yozuvlar uchun diskda yetarli bo‘sh joy</li><li>Faol NeuroReplay litsenziyasi</li>"
  },
  "In Windows, check Settings → Privacy & security → Camera and make sure desktop apps are allowed to use the camera.": {
    ru: "В Windows откройте <b>Settings → Privacy &amp; security → Camera</b> и убедитесь, что классическим приложениям разрешён доступ к камере.",
    uz: "Windows’da <b>Settings → Privacy &amp; security → Camera</b> bo‘limini oching va desktop ilovalarga kameradan foydalanishga ruxsat berilganiga ishonch hosil qiling."
  },
  "Install and first launch": {
    ru: "Установка и первый запуск",
    uz: "O‘rnatish va birinchi ishga tushirish"
  },
  "Run the NeuroReplay-Setup.exe installer. Choose an install folder and click Next → Install. Open NeuroReplay from the Start menu or the desktop shortcut.": {
    ru: "<li>Запустите установщик <code>NeuroReplay-Setup.exe</code>.</li><li>Выберите папку установки и нажмите <b>Next → Install</b>.</li><li>Откройте NeuroReplay из меню «Пуск» или с ярлыка на рабочем столе.</li>",
    uz: "<li><code>NeuroReplay-Setup.exe</code> o‘rnatuvchi faylini ishga tushiring.</li><li>O‘rnatish papkasini tanlab, <b>Next → Install</b> tugmasini bosing.</li><li>NeuroReplay’ni Start menyusidan yoki ish stolidagi yorliqdan oching.</li>"
  },
  "If Windows shows an Unknown Publisher warning, the installer may be unsigned. Once you have confirmed the file came from the right source, choose More info → Run anyway.": {
    ru: "Если Windows показывает предупреждение <code>Unknown Publisher</code>, установщик может быть без цифровой подписи. Убедившись, что файл получен из надёжного источника, выберите <b>More info → Run anyway</b>.",
    uz: "Agar Windows <code>Unknown Publisher</code> ogohlantirishini ko‘rsatsa, o‘rnatuvchi raqamli imzosiz bo‘lishi mumkin. Fayl ishonchli manbadan olinganiga ishonch hosil qilgach, <b>More info → Run anyway</b> ni tanlang."
  },
  "Activate your license": {
    ru: "Активация лицензии",
    uz: "Litsenziyani faollashtirish"
  },
  "A license window opens on first launch. Use either of the two methods below.": {
    ru: "При первом запуске открывается окно лицензии. Используйте любой из двух способов ниже.",
    uz: "Birinchi ishga tushirishda litsenziya oynasi ochiladi. Quyidagi ikki usuldan birini tanlang."
  },
  "Install a .lic file": {
    ru: "Установка файла <code>.lic</code>",
    uz: "<code>.lic</code> faylini o‘rnatish"
  },
  "Click Install .lic file. Pick the .lic file you received by email. If the license is valid, the app opens its main window.": {
    ru: "<li>Нажмите <b>Install .lic file</b>.</li><li>Выберите файл <code>.lic</code>, полученный по электронной почте.</li><li>Если лицензия действительна, приложение откроет главное окно.</li>",
    uz: "<li><b>Install .lic file</b> tugmasini bosing.</li><li>Elektron pochta orqali olingan <code>.lic</code> faylini tanlang.</li><li>Litsenziya yaroqli bo‘lsa, ilova asosiy oynasini ochadi.</li>"
  },
  "Use a license key": {
    ru: "Использование лицензионного ключа",
    uz: "Litsenziya kalitidan foydalanish"
  },
  "Open the License Key tab. Click Copy next to your Machine ID. Send the Machine ID to your license provider to receive a key. Paste the key into the field and click Activate.": {
    ru: "<li>Откройте вкладку <b>License Key</b>.</li><li>Нажмите <b>Copy</b> рядом с вашим <b>Machine ID</b>.</li><li>Отправьте Machine ID поставщику лицензии, чтобы получить ключ.</li><li>Вставьте ключ в поле и нажмите <b>Activate</b>.</li>",
    uz: "<li><b>License Key</b> yorlig‘ini oching.</li><li><b>Machine ID</b> yonidagi <b>Copy</b> tugmasini bosing.</li><li>Kalit olish uchun Machine ID’ni litsenziya beruvchiga yuboring.</li><li>Kalitni maydonga qo‘yib, <b>Activate</b> tugmasini bosing.</li>"
  },
  "A license can have start and end dates, and its limits (for example the maximum number of cameras) affect which layouts you can pick. If activation fails, re-check the computer's date and time, the Machine ID and the key.": {
    ru: "У лицензии могут быть даты начала и окончания, а её ограничения (например, максимальное число камер) влияют на доступные layout. Если активация не удалась, проверьте дату и время компьютера, Machine ID и ключ.",
    uz: "Litsenziyaning boshlanish va tugash sanalari bo‘lishi mumkin, uning cheklovlari (masalan, kameralarning maksimal soni) esa tanlanadigan layout’larga ta’sir qiladi. Faollashtirish muvaffaqiyatsiz bo‘lsa, kompyuterning sana va vaqtini, Machine ID va kalitni qayta tekshiring."
  },
  "Connect your USB cameras, or make your RTSP/IP camera reachable on the network. Pick the camera count (layout) with the 1 / 2 / 4 / 6 / 8 buttons in the bottom bar, or use Ctrl+1/2/4/6/8. Choose the camera and resolution in each slot's selectors. Press START to start every selected camera at once, or use each slot's own Start button.": {
    ru: "<li>Подключите USB-камеры или сделайте RTSP/IP-камеру доступной в сети.</li><li>Выберите количество камер (layout) кнопками <b>1 / 2 / 4 / 6 / 8</b> в нижней панели или сочетанием <kbd>Ctrl</kbd>+<kbd>1</kbd>/<kbd>2</kbd>/<kbd>4</kbd>/<kbd>6</kbd>/<kbd>8</kbd>.</li><li>В каждом слоте выберите камеру и разрешение.</li><li>Нажмите <b>START</b>, чтобы запустить все выбранные камеры сразу, или используйте кнопку <b>Start</b> в каждом слоте.</li>",
    uz: "<li>USB kameralaringizni ulang yoki RTSP/IP kamerangizni tarmoqda mavjud qiling.</li><li>Pastki paneldagi <b>1 / 2 / 4 / 6 / 8</b> tugmalari yoki <kbd>Ctrl</kbd>+<kbd>1</kbd>/<kbd>2</kbd>/<kbd>4</kbd>/<kbd>6</kbd>/<kbd>8</kbd> yordamida kameralar sonini (layout) tanlang.</li><li>Har bir slotda kamera va ruxsatni (resolution) tanlang.</li><li>Barcha tanlangan kameralarni birdan yoqish uchun <b>START</b> ni bosing yoki har bir slotning o‘z <b>Start</b> tugmasidan foydalaning.</li>"
  },
  "You can't change the layout while cameras are running or recording — press STOP first.": {
    ru: "Пока камеры работают или идёт запись, layout менять нельзя — сначала нажмите <b>STOP</b>.",
    uz: "Kameralar ishlayotganda yoki yozuv ketayotganda layout’ni o‘zgartirib bo‘lmaydi — avval <b>STOP</b> ni bosing."
  },
  "4-camera layout: camera and resolution selectors per slot, with the START / REPLAY / REC / TAG bar below.": {
    ru: "Layout на 4 камеры: селекторы камеры и разрешения в каждом слоте, ниже панель START / REPLAY / REC / TAG.",
    uz: "4 kamerali layout: har bir slotda kamera va ruxsat tanlagichlari, pastda START / REPLAY / REC / TAG paneli."
  },
  "For RTSP cameras, enter the IP address, stream URL and credentials correctly. Never put credentials in public screenshots, logs or websites.": {
    ru: "Для RTSP-камер корректно введите IP-адрес, URL потока и учётные данные. Никогда не публикуйте учётные данные на скриншотах, в логах и на сайтах.",
    uz: "RTSP kameralar uchun IP manzil, oqim URL’i va kirish ma’lumotlarini to‘g‘ri kiriting. Kirish ma’lumotlarini ommaviy skrinshotlar, loglar yoki veb-saytlarga hech qachon qo‘ymang."
  },
  "While a camera is running its slot shows the live picture, with a LIVE badge and fps readout.": {
    ru: "Пока камера работает, в её слоте отображается живое изображение, значок <b>LIVE</b> и значение fps.",
    uz: "Kamera ishlayotganida uning slotida jonli tasvir, <b>LIVE</b> belgisi va fps ko‘rsatkichi ko‘rinadi."
  },
  "CAM 1 running: START becomes STOP and the slot shows LIVE.": {
    ru: "CAM 1 работает: START меняется на STOP, а в слоте отображается LIVE.",
    uz: "CAM 1 ishlamoqda: START tugmasi STOP ga aylanadi va slotda LIVE ko‘rinadi."
  },
  "One camera: press that slot's Rec button to start, press again to stop. All cameras: press REC or R to start or stop every running camera together.": {
    ru: "<li><b>Одна камера:</b> нажмите кнопку <b>Rec</b> этого слота, чтобы начать запись, и нажмите ещё раз, чтобы остановить.</li><li><b>Все камеры:</b> нажмите <b>REC</b> или <kbd>R</kbd>, чтобы запустить или остановить запись на всех работающих камерах одновременно.</li>",
    uz: "<li><b>Bitta kamera:</b> yozishni boshlash uchun shu slotning <b>Rec</b> tugmasini bosing, to‘xtatish uchun yana bosing.</li><li><b>Barcha kameralar:</b> ishlayotgan barcha kameralarda yozuvni birga boshlash yoki to‘xtatish uchun <b>REC</b> yoki <kbd>R</kbd> ni bosing.</li>"
  },
  "When a recording stops, the file is added to the Library automatically. Check free disk space before long sessions.": {
    ru: "Когда запись останавливается, файл автоматически добавляется в Library. Перед длинными сессиями проверьте свободное место на диске.",
    uz: "Yozuv to‘xtaganda fayl avtomatik ravishda Library’ga qo‘shiladi. Uzoq sessiyalardan oldin diskdagi bo‘sh joyni tekshiring."
  },
  "Tagging a moment": {
    ru: "Добавление тега к моменту",
    uz: "Lahzaga teg qo‘yish"
  },
  "While recording, press Space (or the TAG button) to open the tag popup.": {
    ru: "Во время записи нажмите <kbd>Space</kbd> (или кнопку <b>TAG</b>), чтобы открыть окно тега.",
    uz: "Yozish vaqtida teg oynasini ochish uchun <kbd>Space</kbd> (yoki <b>TAG</b> tugmasi) ni bosing."
  },
  "The tag popup while recording (red frame): type, label, OK / Skip.": {
    ru: "Окно тега во время записи (красная рамка): тип, подпись, <b>OK</b> / <b>Skip</b>.",
    uz: "Yozish vaqtidagi teg oynasi (qizil ramka): turi, izoh, <b>OK</b> / <b>Skip</b>."
  },
  "Pick a type: Takedown, Guard pass, Submission, Sweep, Custom. Add a label if you like. Press OK to save. Skip, or leaving it for 3 seconds, saves a Custom tag with no label. Recording and the R / T shortcuts keep working while the popup is open. Tags let you jump straight to a moment in the Library and Replay, and drive highlight selection.": {
    ru: "<li>Выберите тип: <b>Takedown, Guard pass, Submission, Sweep, Custom</b>. При желании добавьте подпись.</li><li>Нажмите <b>OK</b>, чтобы сохранить. <b>Skip</b> или бездействие в течение 3 секунд сохраняет тег <code>Custom</code> без подписи.</li><li>Запись и сочетания <kbd>R</kbd> / <kbd>T</kbd> продолжают работать, пока окно открыто.</li><li>Теги позволяют сразу перейти к нужному моменту в Library и Replay и используются при выборе highlights.</li>",
    uz: "<li>Turini tanlang: <b>Takedown, Guard pass, Submission, Sweep, Custom</b>. Xohlasangiz, izoh qo‘shing.</li><li>Saqlash uchun <b>OK</b> ni bosing. <b>Skip</b> yoki 3 soniya hech narsa qilmaslik izohsiz <code>Custom</code> tegini saqlaydi.</li><li>Oyna ochiq turganda yozuv va <kbd>R</kbd> / <kbd>T</kbd> tugmalari ishlashda davom etadi.</li><li>Teglar Library va Replay’da kerakli lahzaga darrov o‘tish imkonini beradi hamda highlight tanlashda ishlatiladi.</li>"
  },
  "Instant Replay and review": {
    ru: "Instant Replay и разбор",
    uz: "Instant Replay va tahlil"
  },
  "While recording, press REPLAY or T to open the most recent moment. Press T or the Replay button again to close it.": {
    ru: "Во время записи нажмите <b>REPLAY</b> или <kbd>T</kbd>, чтобы открыть последний момент. Нажмите <kbd>T</kbd> или кнопку <b>Replay</b> ещё раз, чтобы закрыть.",
    uz: "Yozish vaqtida eng so‘nggi lahzani ochish uchun <b>REPLAY</b> yoki <kbd>T</kbd> ni bosing. Yopish uchun <kbd>T</kbd> yoki <b>Replay</b> tugmasini yana bosing."
  },
  "Replay player: frame ruler, « ‹ ▶ › », ±3s / ±10s jumps, 0.25×–2× speed.": {
    ru: "Replay-плеер: шкала кадров, <code>« ‹ ▶ › »</code>, прыжки ±3 с / ±10 с, скорость 0.25×–2×.",
    uz: "Replay pleyeri: kadrlar shkalasi, <code>« ‹ ▶ › »</code>, ±3 s / ±10 s sakrash, 0.25×–2× tezlik."
  },
  "Timeline: drag to jump anywhere. Speed: use the buttons, or 1–5 (0.25× / 0.5× / 1× / 1.5× / 2×), or ↑ / ↓ to step. Frame step: ← / → (or , / .) for 1 frame, add Shift for 5. Zoom: + / − or the mouse wheel. Drag the zoomed picture to pan. I / O — mark the clip's in and out points. Space (or K) — play/pause all cameras together. Use the telestration tools in the replay/player to draw on the picture. Drawings stay locked to the image as you zoom and pan.": {
    ru: "<li><b>Timeline:</b> перетащите, чтобы перейти в любое место.</li><li><b>Скорость:</b> кнопками, либо <kbd>1</kbd>–<kbd>5</kbd> (0.25× / 0.5× / 1× / 1.5× / 2×), либо <kbd>↑</kbd> / <kbd>↓</kbd> для пошагового изменения.</li><li><b>Покадровый шаг:</b> <kbd>←</kbd> / <kbd>→</kbd> (или <kbd>,</kbd> / <kbd>.</kbd>) — 1 кадр, с <kbd>Shift</kbd> — 5 кадров.</li><li><b>Zoom:</b> <kbd>+</kbd> / <kbd>−</kbd> или колесо мыши. Перетаскивайте увеличенное изображение для панорамирования.</li><li><kbd>I</kbd> / <kbd>O</kbd> — отметить начало и конец клипа.</li><li><kbd>Space</kbd> (или <kbd>K</kbd>) — воспроизведение/пауза на всех камерах одновременно.</li><li>Используйте инструменты телестрации в replay/плеере, чтобы рисовать на изображении. Рисунки остаются привязанными к картинке при zoom и панорамировании.</li>",
    uz: "<li><b>Timeline:</b> istalgan joyga o‘tish uchun sudrang.</li><li><b>Tezlik:</b> tugmalar yordamida yoki <kbd>1</kbd>–<kbd>5</kbd> (0.25× / 0.5× / 1× / 1.5× / 2×), yoki bosqichma-bosqich o‘zgartirish uchun <kbd>↑</kbd> / <kbd>↓</kbd>.</li><li><b>Kadrma-kadr:</b> <kbd>←</kbd> / <kbd>→</kbd> (yoki <kbd>,</kbd> / <kbd>.</kbd>) — 1 kadr, <kbd>Shift</kbd> bilan — 5 kadr.</li><li><b>Zoom:</b> <kbd>+</kbd> / <kbd>−</kbd> yoki sichqoncha g‘ildiragi. Kattalashtirilgan tasvirni siljitish uchun sudrang.</li><li><kbd>I</kbd> / <kbd>O</kbd> — klipning boshlanish va tugash nuqtalarini belgilash.</li><li><kbd>Space</kbd> (yoki <kbd>K</kbd>) — barcha kameralarni birga ijro etish/pauza.</li><li>Tasvir ustiga chizish uchun replay/pleyerdagi telestratsiya vositalaridan foydalaning. Chizmalar zoom va siljitishda tasvirga bog‘langan holda qoladi.</li>"
  },
  "Delay monitor": {
    ru: "Задержка изображения (delay monitor)",
    uz: "Ekran kechikishi (delay monitor)"
  },
  "Enter seconds in the Display delay (sec) setting: 0 = live, 5 = picture delayed by five seconds. The setting is saved for the next session.": {
    ru: "Введите секунды в настройке <b>Display delay (sec)</b>: <code>0</code> = live, <code>5</code> = изображение с задержкой в пять секунд. Настройка сохраняется для следующей сессии.",
    uz: "<b>Display delay (sec)</b> sozlamasiga soniyalarni kiriting: <code>0</code> = live, <code>5</code> = tasvir besh soniyaga kechikadi. Sozlama keyingi sessiya uchun saqlanadi."
  },
  "Library: saved recordings": {
    ru: "Library: сохранённые записи",
    uz: "Library: saqlangan yozuvlar"
  },
  "Open the Library from the recordings icon at the top or with Ctrl+L. It has three tabs: Recordings, Tags and Settings. Press Esc to close.": {
    ru: "Откройте Library значком записей вверху или сочетанием <kbd>Ctrl</kbd>+<kbd>L</kbd>. В ней три вкладки: <b>Recordings</b>, <b>Tags</b> и <b>Settings</b>. Нажмите <kbd>Esc</kbd>, чтобы закрыть.",
    uz: "Library’ni yuqoridagi yozuvlar belgisidan yoki <kbd>Ctrl</kbd>+<kbd>L</kbd> bilan oching. Unda uchta yorliq bor: <b>Recordings</b>, <b>Tags</b> va <b>Settings</b>. Yopish uchun <kbd>Esc</kbd> ni bosing."
  },
  "Library: search, Open (show folder), and each recording's camera, date and size.": {
    ru: "Library: поиск, <b>Open</b> (показать папку), а также камера, дата и размер каждой записи.",
    uz: "Library: qidiruv, <b>Open</b> (papkani ko‘rsatish), hamda har bir yozuvning kamerasi, sanasi va hajmi."
  },
  "Double-click a recording to open it in the player. Rename to change the name; Preview for a quick look. Lock / Unlock protects a recording from accidental deletion. Tick checkboxes to delete several at once. Check lock state and your selection before deleting.": {
    ru: "<li>Дважды щёлкните запись, чтобы открыть её в плеере.</li><li><b>Rename</b> — изменить имя; <b>Preview</b> — быстрый просмотр.</li><li><b>Lock / Unlock</b> защищает запись от случайного удаления.</li><li>Отметьте флажки, чтобы удалить сразу несколько записей. Перед удалением проверьте состояние Lock и свой выбор.</li>",
    uz: "<li>Yozuvni pleyerda ochish uchun ustiga ikki marta bosing.</li><li><b>Rename</b> — nomni o‘zgartirish; <b>Preview</b> — tezkor ko‘rish.</li><li><b>Lock / Unlock</b> yozuvni tasodifiy o‘chirilishdan himoya qiladi.</li><li>Bir nechta yozuvni birdan o‘chirish uchun katakchalarni belgilang. O‘chirishdan oldin Lock holati va tanlovingizni tekshiring.</li>"
  },
  "Recordings and their tag metadata (sidecar files) are stored in:": {
    ru: "Записи и метаданные их тегов (sidecar-файлы) хранятся в:",
    uz: "Yozuvlar va ularning teg metama’lumotlari (sidecar fayllar) quyidagi papkada saqlanadi:"
  },
  "Export and highlights": {
    ru: "Экспорт и highlights",
    uz: "Eksport va highlights"
  },
  "Select a recording in the Library. Set the start and end time in the player. Choose Export MP4 (or highlight export) — the .webm recording becomes an .mp4. Pick a file name and location. Don't delete the source file or close the app until the export finishes.": {
    ru: "<li>Выберите запись в Library.</li><li>Задайте время начала и конца в плеере.</li><li>Выберите <b>Export MP4</b> (или экспорт highlights) — запись <code>.webm</code> станет <code>.mp4</code>.</li><li>Укажите имя файла и место сохранения.</li><li>Не удаляйте исходный файл и не закрывайте приложение, пока экспорт не завершится.</li>",
    uz: "<li>Library’dan yozuvni tanlang.</li><li>Pleyerda boshlanish va tugash vaqtini belgilang.</li><li><b>Export MP4</b> (yoki highlight eksporti) ni tanlang — <code>.webm</code> yozuv <code>.mp4</code> ga aylanadi.</li><li>Fayl nomi va joylashuvini tanlang.</li><li>Eksport tugamaguncha manba faylni o‘chirmang va ilovani yopmang.</li>"
  },
  "If an export fails, check that the source .webm still exists, that you can write to the output folder, and that there is free disk space.": {
    ru: "Если экспорт не удался, проверьте, что исходный файл <code>.webm</code> на месте, что у вас есть право записи в папку вывода и что на диске есть свободное место.",
    uz: "Eksport muvaffaqiyatsiz bo‘lsa, manba <code>.webm</code> fayli mavjudligini, chiqish papkasiga yozish huquqingiz borligini va diskda bo‘sh joy borligini tekshiring."
  },
  "Key": {
    ru: "Клавиша",
    uz: "Tugma"
  },
  "Action": {
    ru: "Действие",
    uz: "Amal"
  },
  "Start / stop recording on all running cameras": {
    ru: "Начать / остановить запись на всех работающих камерах",
    uz: "Barcha ishlayotgan kameralarda yozuvni boshlash / to‘xtatish"
  },
  "Open / close Instant Replay": {
    ru: "Открыть / закрыть Instant Replay",
    uz: "Instant Replay’ni ochish / yopish"
  },
  "Live: tag popup. In Replay: play/pause all cameras": {
    ru: "Live: окно тега. В Replay: воспроизведение/пауза на всех камерах",
    uz: "Live: teg oynasi. Replay’da: barcha kameralarni ijro etish/pauza"
  },
  "Replay: step 1 frame back / forward (Shift = 5 frames)": {
    ru: "Replay: шаг на 1 кадр назад / вперёд (<kbd>Shift</kbd> = 5 кадров)",
    uz: "Replay: 1 kadr orqaga / oldinga (<kbd>Shift</kbd> = 5 kadr)"
  },
  "Instant Replay: speed up / down. Library player: zoom": {
    ru: "Instant Replay: увеличить / уменьшить скорость. Плеер Library: zoom",
    uz: "Instant Replay: tezlikni oshirish / kamaytirish. Library pleyeri: zoom"
  },
  "Replay speed: 0.25× / 0.5× / 1× / 1.5× / 2×": {
    ru: "Скорость Replay: 0.25× / 0.5× / 1× / 1.5× / 2×",
    uz: "Replay tezligi: 0.25× / 0.5× / 1× / 1.5× / 2×"
  },
  "Replay pane: zoom": {
    ru: "Панель Replay: zoom",
    uz: "Replay paneli: zoom"
  },
  "Clip in / out point": {
    ru: "Точка начала / конца клипа",
    uz: "Klipning boshlanish / tugash nuqtasi"
  },
  "Close the tag popup, Library drawer or Library player": {
    ru: "Закрыть окно тега, панель Library или плеер Library",
    uz: "Teg oynasi, Library paneli yoki Library pleyerini yopish"
  },
  "Camera count (layout)": {
    ru: "Количество камер (layout)",
    uz: "Kameralar soni (layout)"
  },
  "Open the Library": {
    ru: "Открыть Library",
    uz: "Library’ni ochish"
  },
  "Open the Tags panel": {
    ru: "Открыть панель Tags",
    uz: "Tags panelini ochish"
  },
  "Switch the camera grid with the buttons in the top bar (or Ctrl+1/2/4/6/8), and pick Mongolian, English, Russian or Uzbek from the Language menu.": {
    ru: "Сетка камер переключается кнопками на верхней панели (или <kbd>Ctrl</kbd>+<kbd>1</kbd>/<kbd>2</kbd>/<kbd>4</kbd>/<kbd>6</kbd>/<kbd>8</kbd>), а язык — монгольский, английский, русский или узбекский — выбирается в меню <b>Language</b>.",
    uz: "Kamera to‘rini yuqori paneldagi tugmalar (yoki <kbd>Ctrl</kbd>+<kbd>1</kbd>/<kbd>2</kbd>/<kbd>4</kbd>/<kbd>6</kbd>/<kbd>8</kbd>) bilan almashtiring, mo‘g‘ul, ingliz, rus yoki o‘zbek tilini esa <b>Language</b> menyusidan tanlang."
  },
  "Problem": {
    ru: "Проблема",
    uz: "Muammo"
  },
  "What to check": {
    ru: "Что проверить",
    uz: "Nimani tekshirish kerak"
  },
  "Camera not showing": {
    ru: "Камера не отображается",
    uz: "Kamera ko‘rinmayapti"
  },
  "Another app using the camera, USB connection, Windows camera permission.": {
    ru: "Камеру использует другое приложение, USB-подключение, разрешение камеры в Windows.",
    uz: "Kameradan boshqa ilova foydalanayotgan bo‘lishi, USB ulanishi, Windows’dagi kamera ruxsati."
  },
  "Unplug and reconnect the camera, then restart the app.": {
    ru: "Отключите и снова подключите камеру, затем перезапустите приложение.",
    uz: "Kamerani uzib, qayta ulang, so‘ng ilovani qayta ishga tushiring."
  },
  "No RTSP picture": {
    ru: "Нет изображения RTSP",
    uz: "RTSP tasviri yo‘q"
  },
  "Stream URL, IP address, network, authentication.": {
    ru: "URL потока, IP-адрес, сеть, аутентификация.",
    uz: "Oqim URL’i, IP manzil, tarmoq, autentifikatsiya."
  },
  "Recording not saved": {
    ru: "Запись не сохраняется",
    uz: "Yozuv saqlanmayapti"
  },
  "Write permission on %USERPROFILE%\\Videos\\NeuroReplay\\, free disk space.": {
    ru: "Право записи в папку <code>%USERPROFILE%\\Videos\\NeuroReplay\\</code>, свободное место на диске.",
    uz: "<code>%USERPROFILE%\\Videos\\NeuroReplay\\</code> papkasiga yozish huquqi, diskdagi bo‘sh joy."
  },
  "Replay is empty": {
    ru: "Replay пуст",
    uz: "Replay bo‘sh"
  },
  "Whether that camera was recording, and the replay state.": {
    ru: "Велась ли запись с этой камеры, и состояние replay.",
    uz: "Shu kamera yozib turganmi-yo‘qmi va replay holati."
  },
  "Export failed": {
    ru: "Экспорт не удался",
    uz: "Eksport muvaffaqiyatsiz"
  },
  "Source file exists, output path, free disk space.": {
    ru: "Наличие исходного файла, путь вывода, свободное место на диске.",
    uz: "Manba fayl mavjudligi, chiqish yo‘li, diskdagi bo‘sh joy."
  },
  "License won't activate": {
    ru: "Лицензия не активируется",
    uz: "Litsenziya faollashmayapti"
  },
  "System date/time, Machine ID, key or the .lic file's validity period.": {
    ru: "Системные дата/время, Machine ID, ключ или срок действия файла <code>.lic</code>.",
    uz: "Tizim sanasi/vaqti, Machine ID, kalit yoki <code>.lic</code> faylining amal qilish muddati."
  },
  "App feels slow": {
    ru: "Приложение работает медленно",
    uz: "Ilova sekin ishlayapti"
  },
  "Stop unused cameras, lower the resolution, close other heavy apps.": {
    ru: "Остановите неиспользуемые камеры, снизьте разрешение, закройте другие ресурсоёмкие приложения.",
    uz: "Ishlatilmayotgan kameralarni to‘xtating, ruxsatni (resolution) pasaytiring, boshqa og‘ir ilovalarni yoping."
  },
  "If the problem persists, send support a screenshot of the error, the app and Windows versions, the camera type and the time it happened. Never send passwords, private keys or license secrets.": {
    ru: "Если проблема не исчезает, отправьте в поддержку скриншот ошибки, версии приложения и Windows, тип камеры и время, когда это произошло. Никогда не отправляйте пароли, закрытые ключи и секреты лицензии.",
    uz: "Muammo davom etsa, qo‘llab-quvvatlash xizmatiga xatoning skrinshotini, ilova va Windows versiyalarini, kamera turini va muammo yuz bergan vaqtni yuboring. Parollar, maxfiy kalitlar va litsenziya sirlarini hech qachon yubormang."
  },
  "For licenses, orders and technical help, contact the NeuroReplay sales and support team.": {
    ru: "По вопросам лицензий, заказов и технической помощи обращайтесь в отдел продаж и поддержки NeuroReplay.",
    uz: "Litsenziyalar, buyurtmalar va texnik yordam bo‘yicha NeuroReplay sotuv va qo‘llab-quvvatlash jamoasiga murojaat qiling."
  }
});
