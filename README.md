# NeuroReplay — Demo / order site

Production-ready landing + demo-request site for **NeuroReplay**, a Windows
desktop app for multi-camera instant replay & video review (sports, combat
sports, coaching, competitions, VR training).

No build step, no dependencies to install. Four languages — **MN / EN / RU / UZ** (default
Mongolian), light minimal design, accessible, responsive, works offline once loaded.

## Project structure

```
neuroreplay-site/
├── index.html        # public marketing / demo-request page (markup only)
├── styles.css        # all site styles (split out of index.html)
├── help.html         # user guide
├── app.js            # index.html behaviour: form, nav, reveal, layout
├── i18n.js           # shared language registry, switcher and copy swapping (both pages)
├── site-i18n.js      # translations for index.html (languages not written inline)
├── help-i18n.js      # translations for help.html
├── assets/           # logo, favicons, OG image, flags/ (language switcher)
├── robots.txt        # allows the site, disallows /admin/
└── admin/            # INTERNAL license keygen — NOT linked from the public site
    ├── index.html    # Supabase-auth login + .lic / license-key generator
    ├── assets/images/
    └── supabase/functions/sign-license/index.ts   # edge function (deployed via Supabase CLI)
```

The public page (`index.html`) links `styles.css` + `i18n.js` + `site-i18n.js` + `app.js`;
the `NR_CONFIG` block stays inline in the `<head>` so business settings live in one obvious place.

## Languages

`i18n.js` holds the only list of languages (`LANGUAGES`: code, native name, short label, flag).
The switcher, the demo form's "preferred language" options, the page title/description and
language-dependent links (`data-i18n-href="…{lang}…"`, e.g. the PDF manual) are all built from it.

- Mongolian and English are written inline in the markup:
  `<span data-mn>…</span><span data-en>…</span>`.
- Other languages live in `site-i18n.js` / `help-i18n.js` as
  `"English text": { ru: "…", uz: "…" }`. The key is the element's English text with tags
  stripped and whitespace collapsed; a missing translation falls back to English. Edit the
  English copy → update its key too.
- Messages that exist only in script (form validation, status) are in `app.js` → `MESSAGES`,
  same `{ key: { <code>: text } }` shape; markup opts in with `data-i18n="key"`.
- `?lang=ru` overrides the saved choice without storing it (used to render the PDF manuals).

**Adding a language:** add an entry to `LANGUAGES`, its flag to `assets/flags/`, and its column
to the translation tables and `MESSAGES`. No other code names a language.

### admin/ — license keygen (internal)

`admin/` is the license-generation tool, moved here so everything lives in one
repo. It is **not** linked from any public page, carries `noindex, nofollow`, and
is excluded from crawlers via `robots.txt`. Access is gated by Supabase login.
The Ed25519 **private signing key never lives in this repo** — it's a Supabase
secret (`NR_PRIVATE_KEY_B64`) used only by the `sign-license` edge function. The
`SUPABASE_ANON` key in `admin/index.html` is the public client key by design.
Local Supabase temp files (`supabase/.temp/`) are git-ignored. See
`admin/SETUP_GUIDE.md` and `admin/LICENSE_GENERATION_GUIDE.md`.

## Run locally

It's a static file — just open it, or serve it so relative links behave:

```bash
cd neuroreplay-site
# option A: open the file directly
start index.html            # Windows
# option B: serve it (any static server works)
python -m http.server 8080  # then visit http://localhost:8080
```

## Configure the demo / order form

The form submission target lives in a **config variable** near the top of
`index.html` — never inline a secret in this client-side file:

```html
<script>
  window.NR_CONFIG = {
    formEndpoint: "",                               // POST endpoint, or "" for mailto fallback
    contactEmail: "idereee.engineering@gmail.com",  // used by the form + mailto fallback
    manualUrl: "#"                                  // user-manual URL
  };
</script>
```

- **`formEndpoint` empty (`""`)** — the default. Submitting a *valid* form opens
  the visitor's email client pre-filled (honest mailto fallback; the site never
  pretends a submission succeeded when there is no backend).
- **Formspree** — set `formEndpoint: "https://formspree.io/f/xxxxxxxx"` with your
  own form ID (free at [formspree.io](https://formspree.io)). The form POSTs JSON
  with `Accept: application/json`, which Formspree accepts.
- **Custom API** — point `formEndpoint` at any endpoint that accepts a JSON
  `POST`. Payload keys: `fullname, organization, email, phone, usecase, cameras,
  preferred_language, plan, message, consent`.

The form validates every field, shows loading / success / validation / network-
error states, blocks duplicate identical submissions, and requires a privacy
consent checkbox.

## Before going live — fill in the real business info

- **Contact** — email, phone (+976 8555 1511) and Facebook (iderbat314) are set
  in the Direct-contact card and footer.
- **`manualUrl`** / footer **User manual** link — points to `help.html` (4-language
  guide with screenshots in `assets/help/`; PDFs in `assets/NeuroReplay-User-Manual-{mn,en,ru,uz}.pdf`).
  Regenerate a PDF after editing the guide (Chrome, A4, no header/footer):
  `chrome --headless=new --no-pdf-header-footer --virtual-time-budget=6000 --print-to-pdf=assets/NeuroReplay-User-Manual-ru.pdf "http://localhost/…/help.html?lang=ru"`.
- **`downloadUrl`** — Windows installer link is empty for now (Download button
  routes to the demo form until it's set).
- **Demo requests → Supabase** — the public form saves each request to the
  Supabase table `demo_requests`, and admins read them in `/admin/` → **Захиалгууд**
  tab. **One-time setup:** open Supabase → SQL Editor and run
  `admin/supabase/demo_requests.sql` (creates the table + row-level security:
  anon can INSERT, logged-in admins can read/update). Until you run it, the
  form shows a network error and the admin list shows a "table not found" hint.
  If Supabase is unreachable the form falls back to `formEndpoint`, then to a
  `mailto:` link — it never fakes a submit.
- **`formEndpoint`** — optional fallback POST endpoint if you don't use Supabase.
- **Pricing** — the site shows one main event-day package: **180,000 MNT per
  event day** with the Competition licence, up to 4 cameras, and on-site technical
  support during the event. The app has a single interface (the old Legacy /
  Minimal / Multiview modes were removed). Add-ons (Analyze module, extra cameras
  up to 8, multi-day package, training & setup) are listed below the card as
  "on request" — fill in real add-on prices before accepting payment.
- **Terms of service** — footer has a placeholder; link the final document.
- **Screenshots** — the hero uses a clearly labelled interactive product mockup;
  swap in real product screenshots when available (keep stable dimensions).

## Deploy on GitHub Pages

1. Create a repo and push these files:
   ```bash
   git init && git add . && git commit -m "NeuroReplay demo site"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
2. GitHub → **Settings → Pages** → Source: `Deploy from a branch` →
   Branch `main` / `/ (root)` → Save.
3. Live at `https://<username>.github.io/<repo>/`.

## Notes

- Fonts load from Google Fonts (Archivo, IBM Plex Sans/Mono).
- No analytics, no tracking, no fabricated testimonials, logos or statistics.
- Respects `prefers-reduced-motion`; keyboard-navigable with visible focus.
- `.nojekyll` disables Jekyll processing on GitHub Pages.
```
