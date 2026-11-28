/* Translations for help.html — languages that are not written inline in the markup.
   Key   = the English copy of an element (its [data-en] text, tags stripped, whitespace collapsed).
   Value = { <language code>: inner HTML }. A missing language falls back to English.
   Changing English copy in help.html changes its key: update the key here too.
   Loaded after i18n.js (see the language registry there). */
NRI18n.addTranslations({
  "Competition guide": {
    ru: "Руководство для соревнований",
    uz: "Musobaqa qo‘llanmasi"
  },
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
  "For RTSP cameras, enter the IP address, stream URL and credentials correctly. Never put credentials in public screenshots, logs or websites.": {
    ru: "Для RTSP-камер корректно введите IP-адрес, URL потока и учётные данные. Никогда не публикуйте учётные данные на скриншотах, в логах и на сайтах.",
    uz: "RTSP kameralar uchun IP manzil, oqim URL’i va kirish ma’lumotlarini to‘g‘ri kiriting. Kirish ma’lumotlarini ommaviy skrinshotlar, loglar yoki veb-saytlarga hech qachon qo‘ymang."
  },
  "While a camera is running its slot shows the live picture, with a LIVE badge and fps readout.": {
    ru: "Пока камера работает, в её слоте отображается живое изображение, значок <b>LIVE</b> и значение fps.",
    uz: "Kamera ishlayotganida uning slotida jonli tasvir, <b>LIVE</b> belgisi va fps ko‘rsatkichi ko‘rinadi."
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
  "Instant Replay and review": {
    ru: "Instant Replay и разбор",
    uz: "Instant Replay va tahlil"
  },
  "While recording, press REPLAY or T to open the most recent moment. Press T or the Replay button again to close it.": {
    ru: "Во время записи нажмите <b>REPLAY</b> или <kbd>T</kbd>, чтобы открыть последний момент. Нажмите <kbd>T</kbd> или кнопку <b>Replay</b> ещё раз, чтобы закрыть.",
    uz: "Yozish vaqtida eng so‘nggi lahzani ochish uchun <b>REPLAY</b> yoki <kbd>T</kbd> ni bosing. Yopish uchun <kbd>T</kbd> yoki <b>Replay</b> tugmasini yana bosing."
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
  },

  // ── 2026-11: Analyze, iPad, tag window, per-language screenshots
  "Two-camera layout: a camera selector in each slot, the camera count in the top bar, and the START / REC / REPLAY / TAG bar below.": {
    ru: "Раскладка на две камеры: выбор камеры в каждом слоте, число камер в верхней панели и панель СТАРТ / ЗАПИСЬ / ПОВТОР / МЕТКА внизу.",
    uz: "Ikki kamerali joylashuv: har bir slotda kamera tanlash, yuqori panelda kameralar soni va pastda START / REC / REPLAY / TAG paneli."
  },
  "The tag window while recording (red frame): the moment is already captured — now pick a category.": {
    ru: "Окно метки во время записи (красная рамка): момент уже сохранён — осталось выбрать категорию.",
    uz: "Yozib olish paytidagi teg oynasi (qizil ramka): lahza allaqachon saqlangan — endi toifani tanlang."
  },
  "The moment is captured the instant you press Space or TAG — you can pick the category a few seconds later. Click a category or press 1–5. Edit the categories in Settings → TAG. If you pick nothing for 4 seconds the tag is saved without a category. Skip (Esc) discards it. Recording and the R / T shortcuts keep working while the window is open. Tags let you jump straight to a moment in the Library, in Analyze and on the iPad.": {
    ru: "<li>Момент сохраняется сразу при нажатии <kbd>Space</kbd> или <b>МЕТКА</b> — категорию можно выбрать через несколько секунд.</li><li>Нажмите на категорию или клавишу <kbd>1</kbd>–<kbd>5</kbd>. Категории меняются в <b>Настройки → Метки</b>.</li><li>Если за 4 секунды ничего не выбрать, метка сохраняется без категории. <b>Пропустить</b> (<kbd>Esc</kbd>) отменяет её.</li><li>Пока окно открыто, запись и клавиши <kbd>R</kbd> / <kbd>T</kbd> продолжают работать.</li><li>Метки позволяют сразу перейти к нужному моменту в Library, в Analyze и на iPad.</li>",
    uz: "<li><kbd>Space</kbd> yoki <b>TAG</b> bosilgan lahza darhol saqlanadi — toifani bir necha soniyadan keyin tanlash mumkin.</li><li>Toifani bosing yoki <kbd>1</kbd>–<kbd>5</kbd> tugmasini bosing. Toifalar <b>Sozlamalar → Teglar</b> bo‘limida o‘zgartiriladi.</li><li>4 soniya ichida hech narsa tanlanmasa, teg toifasiz saqlanadi. <b>Oʻtkazib yuborish</b> (<kbd>Esc</kbd>) uni bekor qiladi.</li><li>Oyna ochiq turganda yozuv va <kbd>R</kbd> / <kbd>T</kbd> tugmalari ishlashda davom etadi.</li><li>Teglar Library, Analyze va iPad’da kerakli lahzaga darhol o‘tish imkonini beradi.</li>"
  },
  "Instant Replay: every camera together, the frame ruler, « ‹ ◀ ❚❚ › », AUTO slow motion, 0.25×–1× speed and Back to live.": {
    ru: "Instant Replay: все камеры вместе, линейка кадров, <code>« ‹ ◀ ❚❚ › »</code>, AUTO-замедление, скорость 0.25×–1× и <b>Вернуться в эфир</b>.",
    uz: "Instant Replay: barcha kameralar birga, kadrlar chizg‘ichi, <code>« ‹ ◀ ❚❚ › »</code>, AUTO sekinlashtirish, 0.25×–1× tezlik va <b>Jonli efirga qaytish</b>."
  },
  "Library: search, Open (show folder), and each recording’s camera, date and size. Recordings with tags show a tag icon.": {
    ru: "Library: поиск, <b>Открыть</b> (папку), камера, дата и размер каждой записи. У записей с метками есть значок метки.",
    uz: "Library: qidiruv, <b>Ochish</b> (papkani), har bir yozuvning kamerasi, sanasi va hajmi. Tegli yozuvlarda teg belgisi bor."
  },
  "While the delay is on, the iPad shows the same delayed picture.": {
    ru: "Пока задержка включена, iPad показывает такую же задержанную картинку.",
    uz: "Kechikish yoqilgan paytda iPad ham xuddi shunday kechikkan tasvirni ko‘rsatadi."
  },
  "Analyze: techniques, score and AI": {
    ru: "Analyze: техники, счёт и AI",
    uz: "Analyze: texnikalar, hisob va AI"
  },
  "Open a recording from the Library and press ANALYZE in the top bar to open the analysis panel (requires an Analyze license).": {
    ru: "Откройте запись из Library и нажмите <b>ANALYZE</b> в верхней панели — откроется панель анализа (нужна лицензия Analyze).",
    uz: "Library’dan yozuvni oching va yuqori paneldagi <b>ANALYZE</b> tugmasini bosing — tahlil paneli ochiladi (Analyze litsenziyasi kerak)."
  },
  "Analyze: technique buttons, score and counts, momentum graph, position time and the AI section; tags appear on the timeline below.": {
    ru: "Analyze: кнопки техник, счёт и количество, график momentum, время позиций и раздел AI; метки видны на таймлайне внизу.",
    uz: "Analyze: texnika tugmalari, hisob va sonlar, momentum grafigi, pozitsiya vaqti va AI bo‘limi; teglar pastdagi taymlaynda ko‘rinadi."
  },
  "Techniques: choose the side (Mine / Opponent), then press a technique button (or 1–9, 0, -, =). A tag is added at that moment and the score is counted for you. List: switch each tag between Landed / Failed, change its side, save a clip or delete it. Click a row to jump to that moment. Position time: press a position button to start its timer and press it again to stop — it adds up how long each side held it. Loop: press L to replay the nearest tag (or ±3 seconds) over and over. [ / ] set the loop start / end. The yellow chip in the top bar clears it. Compare: press COMPARE to open a second pane and watch another moment, or another camera’s recording, side by side. Export: CSV saves every tag and position; Highlight joins every tagged moment into one MP4.": {
    ru: "<li><b>Техники:</b> выберите сторону (<b>Мой / Соперник</b>) и нажмите кнопку техники (или <kbd>1</kbd>–<kbd>9</kbd>, <kbd>0</kbd>, <kbd>-</kbd>, <kbd>=</kbd>). В этот момент добавляется метка, счёт считается автоматически.</li><li><b>Список:</b> переключайте у каждой метки <b>Успех / Неудача</b>, меняйте сторону, сохраняйте клип или удаляйте. Нажмите на строку, чтобы перейти к моменту.</li><li><b>Время позиций:</b> кнопка позиции запускает таймер, повторное нажатие останавливает — так считается, сколько каждая сторона удерживала позицию.</li><li><b>Повтор:</b> <kbd>L</kbd> зацикливает ближайшую метку (или ±3 секунды). <kbd>[</kbd> / <kbd>]</kbd> задают начало / конец. Жёлтая кнопка вверху снимает повтор.</li><li><b>Сравнение:</b> <b>СРАВНИТЬ</b> открывает второе окно — другой момент или запись другой камеры рядом.</li><li><b>Экспорт:</b> <b>CSV</b> — все метки и позиции; <b>Highlight</b> — все отмеченные моменты в одном MP4.</li>",
    uz: "<li><b>Texnikalar:</b> tomonni tanlang (<b>Meniki / Raqib</b>), so‘ng texnika tugmasini bosing (yoki <kbd>1</kbd>–<kbd>9</kbd>, <kbd>0</kbd>, <kbd>-</kbd>, <kbd>=</kbd>). Shu lahzada teg qo‘shiladi, hisob avtomatik yuritiladi.</li><li><b>Ro‘yxat:</b> har bir tegni <b>Muvaffaqiyatli / Muvaffaqiyatsiz</b> holatiga o‘tkazing, tomonini o‘zgartiring, klip saqlang yoki o‘chiring. Qatorni bossangiz, o‘sha lahzaga o‘tadi.</li><li><b>Pozitsiya vaqti:</b> pozitsiya tugmasi taymerni ishga tushiradi, qayta bosish to‘xtatadi — har bir tomon qancha ushlab turgani hisoblanadi.</li><li><b>Takror:</b> <kbd>L</kbd> eng yaqin tegni (yoki ±3 soniyani) qayta-qayta o‘ynatadi. <kbd>[</kbd> / <kbd>]</kbd> boshi / oxirini belgilaydi. Yuqoridagi sariq tugma takrorni o‘chiradi.</li><li><b>Taqqoslash:</b> <b>COMPARE</b> ikkinchi oynani ochadi — boshqa lahza yoki boshqa kamera yozuvini yonma-yon ko‘rasiz.</li><li><b>Eksport:</b> <b>CSV</b> — barcha teglar va pozitsiyalar; <b>Highlight</b> — barcha belgilangan lahzalarni bitta MP4 ga birlashtiradi.</li>"
  },
  "Referee signals (AI)": {
    ru: "Сигналы судьи (AI)",
    uz: "Hakam ishoralari (AI)"
  },
  "Choose the sport and press Scan recording: the AI looks for the referee’s scoring signals and lists suggested tags. Confirm each with ✓ or drop it with ✕ — nothing becomes a tag until you confirm it.": {
    ru: "Выберите вид спорта и нажмите <b>Проверить запись</b>: AI ищет сигналы судьи об очках и показывает предложенные метки. Подтвердите каждую ✓ или отклоните ✕ — без подтверждения метка не создаётся.",
    uz: "Sport turini tanlang va <b>Yozuvni tekshirish</b> ni bosing: AI hakamning ochko ishoralarini qidiradi va taklif qilingan teglarni ko‘rsatadi. Har birini ✓ bilan tasdiqlang yoki ✕ bilan rad eting — tasdiqlanmagan narsa tegga aylanmaydi."
  },
  "Turn on Pose to draw the athletes’ body positions on the picture. The AI runs entirely on the computer — no video is sent anywhere.": {
    ru: "Включите <b>Pose</b>, чтобы рисовать положение тел спортсменов на картинке. AI работает полностью на компьютере — видео никуда не отправляется.",
    uz: "<b>Pose</b> yoqilsa, sportchilarning tana holati tasvirga chiziladi. AI butunlay kompyuterda ishlaydi — video hech qayerga yuborilmaydi."
  },
  "iPad — the head referee’s screen": {
    ru: "iPad — экран главного судьи",
    uz: "iPad — bosh hakam ekrani"
  },
  "The head referee watches live and replay on an iPad or phone. Replays there never affect the operators’ screen on the computer.": {
    ru: "Главный судья смотрит эфир и повторы на iPad или телефоне. Повторы там никак не влияют на экран операторов на компьютере.",
    uz: "Bosh hakam jonli efir va takrorlarni iPad yoki telefonda ko‘radi. U yerdagi takrorlar kompyuterdagi operatorlar ekraniga ta’sir qilmaydi."
  },
  "Turn on Control from iPad / phone in Settings → Alerts & control. The iPad and the computer must be on the same Wi-Fi. In Windows, set that network to Private. Open the address shown in Settings in Safari on the iPad and enter the PIN. There are two PINs: an iPad signed in with the control PIN can also start / stop recording and add tags; one signed in with the view-only PIN only watches live and replay. Every iPad has its own replay — one going back never moves another.": {
    ru: "<li>Включите <b>Управление с iPad / телефона</b> в <b>Настройки → Оповещения и управление</b>.</li><li>iPad и компьютер должны быть в <b>одной сети Wi-Fi</b>. В Windows сделайте эту сеть <b>частной (Private)</b>.</li><li>Откройте адрес из настроек в Safari на iPad и введите PIN.</li><li>Есть <b>два PIN</b>: iPad, вошедший с <b>PIN управления</b>, может также запускать / останавливать запись и ставить метки; с <b>PIN только для просмотра</b> — только смотреть эфир и повторы. У каждого iPad свой повтор — когда один отматывает назад, другие не меняются.</li>",
    uz: "<li><b>Sozlamalar → Ogohlantirish va boshqaruv</b> bo‘limida <b>iPad / telefondan boshqarish</b> ni yoqing.</li><li>iPad va kompyuter <b>bitta Wi-Fi</b> tarmog‘ida bo‘lishi kerak. Windows’da bu tarmoqni <b>Private</b> qiling.</li><li>Sozlamalarda ko‘rsatilgan manzilni iPad’dagi Safari’da oching va PIN kiriting.</li><li><b>Ikkita PIN</b> bor: <b>boshqaruv PIN</b> bilan kirgan iPad yozuvni boshlash / to‘xtatish va teg qo‘yishi ham mumkin; <b>faqat ko‘rish PIN</b> bilan kirgan iPad faqat jonli efir va takrorni ko‘radi. Har bir iPad’ning o‘z takrori bor — biri orqaga qaytsa, boshqalari o‘zgarmaydi.</li>"
  },
  "Settings: the iPad address and PIN (example values shown) and the display delay.": {
    ru: "Настройки: адрес и PIN для iPad (показаны примерные значения) и задержка экрана.",
    uz: "Sozlamalar: iPad manzili va PIN (namunaviy qiymatlar) hamda ekran kechikishi."
  },
  "iPad, live: the same delay as the computer (for example 5 seconds while recording).": {
    ru: "iPad, эфир: та же задержка, что и на компьютере (например, 5 секунд во время записи).",
    uz: "iPad, jonli efir: kompyuterdagi kabi kechikish (masalan, yozib olish paytida 5 soniya)."
  },
  "iPad, replay: dragged about 10 seconds back on the timeline. The green button returns to live.": {
    ru: "iPad, повтор: таймлайн отведён примерно на 10 секунд назад. Зелёная кнопка возвращает в эфир.",
    uz: "iPad, takror: taymlayn taxminan 10 soniya orqaga surilgan. Yashil tugma jonli efirga qaytaradi."
  },
  "Going back: drag the timeline under the video, or use −5s / +5s, frame steps and ⏸. Slow motion: 0.25× / 0.5× / 1×. ◀ plays backwards. Zoom: pinch with two fingers or double-tap. The ✕ in the top-right corner resets it. Camera: switch cameras with the buttons below. AUTO is the first running camera. Tags: tap a tag in the list on the right to jump to that moment. Press LIVE, or play until you catch up, to return to live.": {
    ru: "<li><b>Назад:</b> тяните таймлайн под видео или используйте <b>−5s</b> / <b>+5s</b>, шаг по кадрам и ⏸.</li><li><b>Замедление:</b> 0.25× / 0.5× / 1×. ◀ — воспроизведение назад.</li><li><b>Увеличение:</b> щипок двумя пальцами или двойное касание. ✕ в правом верхнем углу сбрасывает.</li><li><b>Камера:</b> переключайте камеры кнопками ниже. <b>АВТО</b> — первая включённая камера.</li><li><b>Метки:</b> нажмите метку в списке справа, чтобы перейти к моменту.</li><li>Нажмите <b>LIVE</b> или досмотрите до текущего момента, чтобы вернуться в эфир.</li>",
    uz: "<li><b>Orqaga:</b> video ostidagi taymlaynni suring yoki <b>−5s</b> / <b>+5s</b>, kadrma-kadr va ⏸ tugmalaridan foydalaning.</li><li><b>Sekinlashtirish:</b> 0.25× / 0.5× / 1×. ◀ — teskari o‘ynatish.</li><li><b>Kattalashtirish:</b> ikki barmoq bilan chimchilang yoki ikki marta bosing. Yuqori o‘ng burchakdagi ✕ qaytaradi.</li><li><b>Kamera:</b> pastdagi tugmalar bilan kamerani almashtiring. <b>AVTO</b> — birinchi yoqilgan kamera.</li><li><b>Teglar:</b> o‘ngdagi ro‘yxatdan tegni bossangiz, o‘sha lahzaga o‘tadi.</li><li>Jonli efirga qaytish uchun <b>LIVE</b> ni bosing yoki hozirgi lahzagacha o‘ynating.</li>"
  },
  "Analyze": {
    ru: "Analyze",
    uz: "Analyze"
  },
  "iPad": {
    ru: "iPad",
    uz: "iPad"
  },
  "Analyze: loop on / off": {
    ru: "Analyze: повтор вкл. / выкл.",
    uz: "Analyze: takrorni yoqish / o‘chirish"
  },
  "Analyze: loop start / end": {
    ru: "Analyze: начало / конец повтора",
    uz: "Analyze: takror boshi / oxiri"
  },
  "Analyze: next / previous tag": {
    ru: "Analyze: следующая / предыдущая метка",
    uz: "Analyze: keyingi / oldingi teg"
  },
  "No picture on the iPad": {
    ru: "Нет картинки на iPad",
    uz: "iPad’da tasvir yo‘q"
  },
  "Same Wi-Fi, Windows network set to Private. Fully restart NeuroReplay on the computer, then refresh the iPad.": {
    ru: "Одна сеть Wi-Fi, сеть Windows — <b>частная (Private)</b>. Полностью перезапустите NeuroReplay на компьютере и обновите страницу на iPad.",
    uz: "Bitta Wi-Fi, Windows tarmog‘i <b>Private</b>. Kompyuterda NeuroReplay’ni to‘liq qayta ishga tushiring va iPad sahifasini yangilang."
  }
});
