(function () {
  var root = document.documentElement;
  var CONFIG = window.NR_CONFIG || {};

  var I18N = {
    mn: {
      required: "Энэ талбарыг бөглөнө үү.", email: "Зөв и-мэйл хаяг оруулна уу.",
      phone: "Зөв утасны дугаар оруулна уу.", cameras: "1–64 хооронд тоо оруулна уу.",
      consent: "Үргэлжлүүлэхийн тулд зөвшөөрнө үү.", sending: "Илгээж байна…", submit: "Demo захиалах",
      success: "Баярлалаа! Таны хүсэлтийг хүлээн авлаа — бид удахгүй холбогдоно.",
      neterr: "Илгээж чадсангүй. Холболтоо шалгаад дахин оролдоно уу, эсвэл шууд и-мэйл бичнэ үү.",
      mailinfo: "И-мэйл клиент нээгдэж байна. Нээгдээгүй бол " + (CONFIG.contactEmail || "") + " рүү бичнэ үү.",
      fixerrors: "Тодоор тэмдэглэсэн талбаруудыг засна уу.",
      uc_coach: "Дасгалжуулагч", uc_club: "Тулааны спортын клуб", uc_competition: "Тэмцээн / зохион байгуулагч",
      uc_vr: "VR сургалтын төв", uc_other: "Бусад", undecided: "Шийдээгүй", select_ph: "— Сонгоно уу —"
    },
    en: {
      required: "Please fill in this field.", email: "Please enter a valid email address.",
      phone: "Please enter a valid phone number.", cameras: "Enter a number between 1 and 64.",
      consent: "Please agree to continue.", sending: "Sending…", submit: "Request a demo",
      success: "Thank you! Your request has been received — we'll be in touch shortly.",
      neterr: "Couldn't send. Check your connection and try again, or email us directly.",
      mailinfo: "Opening your email client. If nothing happens, email " + (CONFIG.contactEmail || "") + ".",
      fixerrors: "Please fix the highlighted fields.",
      uc_coach: "Coach", uc_club: "Combat gym / club", uc_competition: "Competition / event",
      uc_vr: "VR training facility", uc_other: "Other", undecided: "Undecided", select_ph: "— Select —"
    }
  };
  function t(key) { return (I18N[root.getAttribute('lang') === 'en' ? 'en' : 'mn'])[key]; }

  var btn = document.getElementById('langBtn');
  var submitBtn = document.getElementById('submitBtn');
  var submitting = false, lastPayloadKey = null;
  function setBtnLabel(text) { submitBtn.innerHTML = '<span class="btn-label">' + text + '</span>'; }

  function fillDynamicText() {
    var uc = document.getElementById('usecase');
    if (uc) {
      uc.options[0].textContent = t('select_ph'); uc.options[1].textContent = t('uc_coach');
      uc.options[2].textContent = t('uc_club'); uc.options[3].textContent = t('uc_competition');
      uc.options[4].textContent = t('uc_vr'); uc.options[5].textContent = t('uc_other');
    }
    var pl = document.getElementById('prefLang'); if (pl) pl.options[0].textContent = t('select_ph');
    var plan = document.getElementById('plan'); if (plan) plan.options[3].textContent = t('undecided');
    document.querySelectorAll('.field[data-invalid]').forEach(function (f) { validateField(f.querySelector('input,select,textarea')); });
    if (!submitting) setBtnLabel(t('submit'));
  }
  function setLang(l) {
    root.setAttribute('lang', l);
    btn.textContent = l === 'en' ? 'МН' : 'EN';
    try { localStorage.setItem('nr.site.lang', l); } catch (e) {}
    fillDynamicText();
  }
  var saved = 'mn';
  try { saved = localStorage.getItem('nr.site.lang') || 'mn'; } catch (e) {}
  btn.addEventListener('click', function () { setLang(root.getAttribute('lang') === 'en' ? 'mn' : 'en'); });

  document.getElementById('yr').textContent = new Date().getFullYear();
  var manual = document.getElementById('manualLink');
  if (manual && CONFIG.manualUrl) manual.setAttribute('href', CONFIG.manualUrl);

  (function () {
    var dl = document.getElementById('downloadBtn');
    var url = (CONFIG.downloadUrl || '').trim();
    if (dl && url) { dl.setAttribute('href', url); dl.setAttribute('download', ''); }
    if (CONFIG.version) { var v = document.getElementById('dlVersion'); if (v) { v.hidden = false; v.querySelector('.v').textContent = CONFIG.version; } }
    if (CONFIG.fileSize) { var s = document.getElementById('dlSize'); if (s) { s.hidden = false; s.querySelector('.v').textContent = CONFIG.fileSize; } }
  })();

  var nav = document.getElementById('nav');
  var progress = document.getElementById('progress'), mbar = document.getElementById('mbar');
  var heroEl = document.querySelector('.hero'), orderEl = document.getElementById('order');
  var onScroll = function () {
    var y = window.scrollY, max = document.documentElement.scrollHeight - window.innerHeight;
    nav.classList.toggle('scrolled', y > 8);
    if (progress) progress.style.width = (max > 0 ? Math.min(100, y / max * 100) : 0) + '%';
    if (mbar && heroEl && orderEl) {
      mbar.classList.toggle('show', y > heroEl.offsetHeight * 0.8 && orderEl.getBoundingClientRect().top > window.innerHeight * 0.9);
    }
  };
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  var hamb = document.getElementById('hamb'), mm = document.getElementById('mobileMenu');
  function closeMenu() { mm.classList.remove('open'); hamb.setAttribute('aria-expanded', 'false'); }
  hamb.addEventListener('click', function () { var open = mm.classList.toggle('open'); hamb.setAttribute('aria-expanded', open ? 'true' : 'false'); });
  mm.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });

  /* Legal modal (Privacy / Terms / IP) */
  var modal = document.getElementById('legalModal');
  var modalBody = document.getElementById('modalBody');
  var modalCard = modal ? modal.querySelector('.modal__card') : null;
  var lastFocus = null;
  function openModal(id) {
    var src = document.getElementById(id);
    if (!src || !modal) return;
    modalBody.innerHTML = src.innerHTML;
    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    if (modalCard) modalCard.focus();
  }
  function closeModal() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    modalBody.innerHTML = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  document.querySelectorAll('[data-modal]').forEach(function (b) {
    b.addEventListener('click', function () { openModal(b.getAttribute('data-modal')); });
  });
  if (modal) {
    modal.querySelectorAll('[data-close]').forEach(function (el) { el.addEventListener('click', closeModal); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
  }

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal');
  if (prefersReduced || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* Cursor spotlight on glass cards */
  if (!prefersReduced && window.matchMedia('(hover: hover)').matches) {
    var GLOW = '.tile, .uc, .tip, .addon, .req-grid > .req';
    document.addEventListener('pointermove', function (e) {
      var el = e.target.closest ? e.target.closest(GLOW) : null;
      if (!el) return;
      var r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }, { passive: true });
  }

  /* Interactive instant-replay demo in the hero mockup */
  (function () {
    var wrap = document.getElementById('rigWrap'), rb = document.getElementById('replayBtn');
    if (!wrap || !rb) return;
    var rig = wrap.querySelector('.rig'), live = rig.querySelector('.chip-live'), tc = rig.querySelector('.rig__tc');
    var timer = null, offset = 8.4;
    function setReplay(on) {
      rig.classList.toggle('is-replay', on);
      rb.setAttribute('aria-pressed', on ? 'true' : 'false');
      live.textContent = on ? 'REPLAY' : 'LIVE';
      clearInterval(timer);
      offset = 8.4; tc.textContent = '−00:08.4';
      if (on) {
        timer = setInterval(function () {
          offset = Math.max(0, offset - 0.1);
          tc.textContent = '−00:0' + offset.toFixed(1);
          if (offset <= 0) setReplay(false);
        }, 250);
      }
    }
    rb.addEventListener('click', function () { setReplay(rb.getAttribute('aria-pressed') !== 'true'); });
  })();

  var linkMap = {};
  document.querySelectorAll('#navLinks a').forEach(function (a) { var id = a.getAttribute('href').slice(1); if (id) linkMap[id] = a; });
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        Object.keys(linkMap).forEach(function (k) { linkMap[k].classList.remove('active'); });
        var a = linkMap[e.target.id]; if (a) a.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['features','how','pricing','download','faq'].forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });

  var form = document.getElementById('orderForm');
  var statusEl = document.getElementById('formStatus');
  function showStatus(kind, msg) { statusEl.setAttribute('data-kind', kind); statusEl.textContent = msg; try { statusEl.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'center' }); } catch (e) {} if (kind === 'error') { statusEl.setAttribute('tabindex', '-1'); statusEl.focus(); } }
  function clearStatus() { statusEl.removeAttribute('data-kind'); statusEl.textContent = ''; }
  function fieldOf(input) { return input.closest('.field') || input.closest('.consent'); }
  function setError(input, msg) {
    if (input.id === 'consent') { var ce = document.querySelector('[data-err="consent"]'); if (ce) ce.textContent = msg || ''; input.setAttribute('aria-invalid', msg ? 'true' : 'false'); return; }
    var f = fieldOf(input); if (!f) return;
    var err = f.querySelector('[data-err]');
    if (msg) { f.setAttribute('data-invalid', ''); if (err) err.textContent = msg; input.setAttribute('aria-invalid', 'true'); }
    else { f.removeAttribute('data-invalid'); if (err) err.textContent = ''; input.setAttribute('aria-invalid', 'false'); }
  }
  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, phoneRe = /^[+()\-\s0-9]{6,}$/;
  function validateField(input) {
    if (!input) return true;
    var val = (input.value || '').trim();
    if (input.type === 'checkbox') { if (input.required && !input.checked) { setError(input, t('consent')); return false; } setError(input, ''); return true; }
    if (input.required && !val) { setError(input, t('required')); return false; }
    if (input.type === 'email' && val && !emailRe.test(val)) { setError(input, t('email')); return false; }
    if (input.type === 'tel' && val && !phoneRe.test(val)) { setError(input, t('phone')); return false; }
    if (input.id === 'cameras' && val) { var n = Number(val); if (!Number.isFinite(n) || n < 1 || n > 64) { setError(input, t('cameras')); return false; } }
    setError(input, ''); return true;
  }
  form.querySelectorAll('input, select, textarea').forEach(function (el) {
    el.addEventListener('input', function () { if (fieldOf(el) && (fieldOf(el).hasAttribute('data-invalid') || el.id === 'consent')) validateField(el); });
    el.addEventListener('change', function () { validateField(el); });
  });
  function validateAll() {
    var ok = true, firstBad = null;
    form.querySelectorAll('input[required], select[required], textarea[required]').forEach(function (el) {
      if (!validateField(el) && !firstBad) firstBad = el;
      if (fieldOf(el) && fieldOf(el).hasAttribute('data-invalid')) ok = false;
      if (el.id === 'consent' && !el.checked) ok = false;
    });
    if (firstBad) firstBad.focus();
    return ok;
  }
  function collect() { var fd = new FormData(form), obj = {}; fd.forEach(function (v, k) { obj[k] = v; }); obj.consent = document.getElementById('consent').checked ? 'yes' : 'no'; return obj; }
  function mailtoFallback(data) {
    var to = CONFIG.contactEmail || '';
    var subject = 'NeuroReplay demo request — ' + (data.organization || data.fullname || '');
    var lines = ['Full name: ' + (data.fullname || ''), 'Organisation: ' + (data.organization || ''), 'Email: ' + (data.email || ''), 'Phone: ' + (data.phone || ''), 'Use case: ' + (data.usecase || ''), 'Camera count: ' + (data.cameras || ''), 'Preferred language: ' + (data.preferred_language || ''), 'View mode: ' + (data.plan || ''), 'Message: ' + (data.message || '')];
    showStatus('info', t('mailinfo'));
    window.location.href = 'mailto:' + encodeURIComponent(to) + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
  }
  function sending(on) {
    submitting = on;
    if (on) {
      submitBtn.setAttribute('disabled', '');
      submitBtn.innerHTML = '<span class="spinner" aria-hidden="true"></span><span class="btn-label">' + t('sending') + '</span>';
    } else {
      submitBtn.removeAttribute('disabled'); setBtnLabel(t('submit'));
    }
  }

  // POST the request to Supabase (table: demo_requests) via the REST API.
  function postToSupabase(data) {
    var base = (CONFIG.supabaseUrl || '').replace(/\/+$/, '');
    var row = {
      fullname: data.fullname, organization: data.organization, email: data.email,
      phone: data.phone, usecase: data.usecase,
      cameras: data.cameras ? parseInt(data.cameras, 10) : null,
      preferred_language: data.preferred_language, plan: data.plan,
      message: data.message, source: 'website'
    };
    return fetch(base + '/rest/v1/demo_requests', {
      method: 'POST',
      headers: {
        'apikey': CONFIG.supabaseAnonKey,
        'Authorization': 'Bearer ' + CONFIG.supabaseAnonKey,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(row)
    }).then(function (res) { if (!res.ok) throw new Error('HTTP ' + res.status); });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (submitting) return;
    clearStatus();
    if (!validateAll()) { showStatus('error', t('fixerrors')); return; }
    var data = collect(), payloadKey = JSON.stringify(data);
    if (payloadKey === lastPayloadKey) { showStatus('success', t('success')); return; }

    var hasSupabase = (CONFIG.supabaseUrl || '').trim() && (CONFIG.supabaseAnonKey || '').trim();
    var endpoint = (CONFIG.formEndpoint || '').trim();

    // No backend configured at all → honest mailto fallback.
    if (!hasSupabase && !endpoint) { mailtoFallback(data); return; }

    var send = hasSupabase
      ? postToSupabase(data)
      : fetch(endpoint, { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
          .then(function (res) { if (!res.ok) throw new Error('HTTP ' + res.status); });

    sending(true);
    send
      .then(function () { lastPayloadKey = payloadKey; form.reset(); fillDynamicText(); showStatus('success', t('success')); })
      .catch(function () { showStatus('error', t('neterr')); })
      .finally(function () { sending(false); });
  });

  setLang(saved);
})();
