/*
 * NeuroReplay site i18n — shared by every public page (index.html, help.html).
 *
 * How copy is authored
 *   - Markup carries the two "inline" languages side by side:
 *       <span data-mn>Монгол текст</span><span data-en>English text</span>
 *   - Every other language is a translation table registered with NRI18n.addTranslations(),
 *     keyed by the English text (tags stripped, whitespace collapsed). For those languages the
 *     [data-en] copy is shown and its content is swapped for the translation (English if missing).
 *   - Per-page metadata uses the same idea: <title data-i18n-en="…"> and
 *     <meta name="description" data-i18n-en="…"> hold the English, the element itself holds Mongolian.
 *   - Links that depend on the language: <a data-i18n-href="file-{lang}.pdf">.
 *   - The switcher is rendered into every [data-lang-switch] mount point.
 *
 * Adding a language = add one entry to LANGUAGES, a flag in assets/flags/, and its column in the
 * translation tables. Nothing else in the code names a language.
 */
(function (global) {
  'use strict';

  var LANGUAGES = [
    { code: 'mn', name: 'Монгол',   short: 'МН', label: 'Хэл',      flag: 'assets/flags/mn.svg', inline: true },
    { code: 'en', name: 'English',  short: 'EN', label: 'Language', flag: 'assets/flags/gb.svg', inline: true },
    { code: 'ru', name: 'Русский',  short: 'RU', label: 'Язык',     flag: 'assets/flags/ru.svg' },
    { code: 'uz', name: 'Oʻzbekcha', short: 'UZ', label: 'Til',      flag: 'assets/flags/uz.svg' }
  ];
  var DEFAULT_LANG = LANGUAGES[0].code;
  var SOURCE_LANG = 'en';                      // the inline copy that dictionary languages translate from
  var STORAGE_KEY = 'nr.lang';
  var LEGACY_STORAGE_KEYS = ['nr.site.lang', 'nr.help.lang'];
  var URL_PARAM = 'lang';

  var byCode = {};
  LANGUAGES.forEach(function (l) { byCode[l.code] = l; });

  var root = document.documentElement;
  var MARKUP_LANG = isLang(root.getAttribute('lang')) ? root.getAttribute('lang') : DEFAULT_LANG;   // language written in the elements themselves
  var table = {};                              // englishKey -> { langCode: html }
  var listeners = [];
  var current = null;
  var sourceNodes = null;                      // [{ el, html, key }] snapshot of the [data-en] copy
  var metaNodes = null;                        // [{ el, base, en, set }]

  // ── helpers ──────────────────────────────────────────────────────────
  function keyOf(text) { return String(text || '').replace(/\s+/g, ' ').trim(); }
  function isLang(code) { return Object.prototype.hasOwnProperty.call(byCode, code); }

  function storageGet() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      for (var i = 0; !v && i < LEGACY_STORAGE_KEYS.length; i++) v = localStorage.getItem(LEGACY_STORAGE_KEYS[i]);
      return v;
    } catch (e) { return null; }
  }
  function storageSet(code) {
    try {
      localStorage.setItem(STORAGE_KEY, code);
      LEGACY_STORAGE_KEYS.forEach(function (k) { localStorage.removeItem(k); });
    } catch (e) { /* private mode / blocked storage: the choice just isn't remembered */ }
  }
  function urlLang() {
    try { return new URLSearchParams(location.search).get(URL_PARAM); } catch (e) { return null; }
  }
  function initialLang() {
    var candidates = [urlLang(), storageGet()];
    for (var i = 0; i < candidates.length; i++) if (isLang(candidates[i])) return candidates[i];
    return DEFAULT_LANG;
  }

  function translate(enKey, code) {
    var row = table[enKey];
    return row && row[code];
  }

  // ── DOM application ──────────────────────────────────────────────────
  function snapshot() {
    if (sourceNodes) return;
    sourceNodes = [].map.call(document.querySelectorAll('[data-' + SOURCE_LANG + ']'), function (el) {
      return { el: el, html: el.innerHTML, key: keyOf(el.textContent) };
    });
    metaNodes = [].map.call(document.querySelectorAll('[data-i18n-en]'), function (el) {
      var isMeta = el.tagName === 'META';
      return {
        el: el,
        base: isMeta ? el.getAttribute('content') : el.textContent,
        en: el.getAttribute('data-i18n-en'),
        set: isMeta ? function (v) { el.setAttribute('content', v); } : function (v) { el.textContent = v; }
      };
    });
  }

  function apply(code) {
    var lang = byCode[code];
    snapshot();
    root.setAttribute('lang', code);
    root.setAttribute('data-copy', lang.inline ? code : SOURCE_LANG);   // CSS shows exactly one inline copy

    sourceNodes.forEach(function (n) {
      var html = lang.inline ? n.html : (translate(n.key, code) || n.html);
      if (n.el.innerHTML !== html) n.el.innerHTML = html;
    });
    metaNodes.forEach(function (n) {
      n.set(code === MARKUP_LANG ? n.base : code === SOURCE_LANG ? n.en : (translate(keyOf(n.en), code) || n.en));
    });
    [].forEach.call(document.querySelectorAll('[data-i18n-href]'), function (a) {
      a.setAttribute('href', a.getAttribute('data-i18n-href').replace(/\{lang\}/g, code));
    });
    switchers.forEach(function (s) { s.update(lang); });
  }

  function setLang(code, opts) {
    if (!isLang(code)) code = DEFAULT_LANG;
    var changed = code !== current;
    current = code;
    apply(code);
    if (opts && opts.persist) storageSet(code);
    if (changed) listeners.slice().forEach(function (fn) { fn(byCode[code]); });
  }

  // ── Language switcher (button + listbox, rendered from LANGUAGES) ────
  var switchers = [];
  var uid = 0;

  var CHEVRON = '<svg class="lang-switch__chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
  var CHECK = '<svg class="lang-switch__check" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>';

  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    if (html != null) n.innerHTML = html;
    return n;
  }
  function flagImg(lang, cls) {
    return el('img', { class: cls, src: lang.flag, alt: '', width: '20', height: '15', decoding: 'async' });
  }

  function createSwitcher(mount) {
    var id = 'lang-switch-' + (++uid);
    var btn = el('button', { type: 'button', class: 'lang-switch__btn', 'aria-haspopup': 'listbox', 'aria-expanded': 'false', 'aria-controls': id + '-list' });
    var btnFlag = flagImg(LANGUAGES[0], 'lang-switch__flag');
    var btnCode = el('span', { class: 'lang-switch__code' });
    btn.appendChild(btnFlag); btn.appendChild(btnCode); btn.insertAdjacentHTML('beforeend', CHEVRON);

    var list = el('ul', { class: 'lang-switch__menu', role: 'listbox', id: id + '-list', tabindex: '-1' });
    list.hidden = true;
    var options = LANGUAGES.map(function (lang) {
      var li = el('li', { class: 'lang-switch__opt', role: 'option', id: id + '-' + lang.code, 'data-lang': lang.code, lang: lang.code, 'aria-selected': 'false' });
      li.appendChild(flagImg(lang, 'lang-switch__flag'));
      li.appendChild(el('span', { class: 'lang-switch__name' }, lang.name));
      li.appendChild(el('span', { class: 'lang-switch__short' }, lang.short));
      li.insertAdjacentHTML('beforeend', CHECK);
      list.appendChild(li);
      return li;
    });

    mount.classList.add('lang-switch');
    mount.textContent = '';
    mount.appendChild(btn);
    mount.appendChild(list);

    var active = 0;
    function isOpen() { return !list.hidden; }
    function setActive(i) {
      active = (i + options.length) % options.length;
      options.forEach(function (o, j) { o.classList.toggle('is-active', j === active); });
      list.setAttribute('aria-activedescendant', options[active].id);
      options[active].scrollIntoView({ block: 'nearest' });
    }
    function open() {
      if (isOpen()) return;
      switchers.forEach(function (s) { if (s !== api) s.close(); });
      list.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      mount.classList.add('is-open');
      setActive(LANGUAGES.indexOf(byCode[current]));
      list.focus();
    }
    function close(refocus) {
      if (!isOpen()) return;
      list.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
      mount.classList.remove('is-open');
      if (refocus) btn.focus();
    }
    function choose(i) { close(true); setLang(LANGUAGES[i].code, { persist: true }); }

    btn.addEventListener('click', function () { isOpen() ? close(true) : open(); });
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); open(); }
    });
    list.addEventListener('keydown', function (e) {
      switch (e.key) {
        case 'ArrowDown': e.preventDefault(); setActive(active + 1); break;
        case 'ArrowUp': e.preventDefault(); setActive(active - 1); break;
        case 'Home': e.preventDefault(); setActive(0); break;
        case 'End': e.preventDefault(); setActive(options.length - 1); break;
        case 'Enter': case ' ': e.preventDefault(); choose(active); break;
        case 'Escape': e.preventDefault(); close(true); break;
        case 'Tab': close(false); break;
        default:
          // type-ahead on the first letter of the native name or the short code
          var ch = e.key.length === 1 ? e.key.toLowerCase() : '';
          if (!ch) return;
          for (var k = 1; k <= options.length; k++) {
            var j = (active + k) % options.length, l = LANGUAGES[j];
            if (l.name.toLowerCase().charAt(0) === ch || l.short.toLowerCase().charAt(0) === ch) { setActive(j); break; }
          }
      }
    });
    list.addEventListener('click', function (e) {
      var li = e.target.closest('[role="option"]');
      if (li) choose(options.indexOf(li));
    });
    list.addEventListener('mousemove', function (e) {
      var li = e.target.closest('[role="option"]');
      if (li && options.indexOf(li) !== active) setActive(options.indexOf(li));
    });

    var api = {
      mount: mount,
      close: close,
      update: function (lang) {
        btnFlag.src = lang.flag;
        btnCode.textContent = lang.short;
        btn.setAttribute('aria-label', lang.label + ': ' + lang.name);
        list.setAttribute('aria-label', lang.label);
        options.forEach(function (o) { o.setAttribute('aria-selected', o.getAttribute('data-lang') === lang.code ? 'true' : 'false'); });
      }
    };
    return api;
  }

  document.addEventListener('pointerdown', function (e) {
    switchers.forEach(function (s) { if (!s.mount.contains(e.target)) s.close(false); });
  });

  // ── public API ───────────────────────────────────────────────────────
  var NRI18n = {
    languages: LANGUAGES.slice(),
    /** Merge a translation table: { "English text": { ru: "…", uz: "…" }, … }. */
    addTranslations: function (t) {
      Object.keys(t || {}).forEach(function (k) {
        var key = keyOf(k), row = table[key] || (table[key] = {});
        Object.keys(t[k]).forEach(function (code) { row[code] = t[k][code]; });
      });
      if (current) apply(current);
    },
    current: function () { return current ? byCode[current] : null; },
    set: function (code) { setLang(code, { persist: true }); },
    /** fn(lang) runs on every language change, and right away if a language is already active. */
    onChange: function (fn) { listeners.push(fn); if (current) fn(byCode[current]); },
    /** Pick the entry for the current language from { mn: …, en: …, ru: … }, falling back to English. */
    pick: function (byLang) { return byLang[current] != null ? byLang[current] : byLang[SOURCE_LANG]; }
  };
  global.NRI18n = NRI18n;

  function init() {
    switchers = [].map.call(document.querySelectorAll('[data-lang-switch]'), createSwitcher);
    setLang(initialLang());
  }
  // Deferred page scripts (translation tables, page logic) run before DOMContentLoaded, so they can
  // register tables and listeners first; init then renders once with everything in place.
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})(window);
