# Rathod Consultancy: Static Website

Plain HTML, CSS and JavaScript. No frameworks, no backend. All business details are **placeholders** (shown with a yellow background or in `[SQUARE BRACKETS]`) and must be replaced with real information.

## 1. Run locally
**Option 1:** double-click `index.html` (opens in your browser).
**Option 2 (VS Code Live Server):** open the folder in VS Code → Extensions (Ctrl+Shift+X) → install **Live Server** (Ritwick Dey) → right-click `index.html` → **Open with Live Server**. The page reloads when you save.

## 2. The contact form does NOT send messages
This is a static site, so the form only shows a notice. To make it work later:
- **Form service (easiest):** Formspree, Web3Forms or Netlify Forms. Add their `action="..." method="POST"` to the `<form>` in `contact.html` and remove the submit handler at the bottom of `js/script.js`.
- **Own backend:** build an endpoint (any language) that receives the form and sends an email, then point the form to it.

## 3. Replace the images
Keep the same filenames; the current files are grey placeholders.
`images/logo.png` (logo, about 320x80) · `images/hero.jpg` (home banner, 1600x900) · `images/about.jpg` · `images/service-1..3.jpg` · `images/gallery/gallery-1..6.jpg` · `favicon.png` (square, 64x64 or larger, in the project root). Compress photos (under ~300 KB each) and update the `alt` text in the HTML.

## 4. How to Update the Website
Open the file in VS Code and use Ctrl+F to find the text.
- **Company name / logo:** search `Rathod Consultancy` in every `.html` file; replace `images/logo.png`.
- **Phone, email, address, hours:** `contact.html` (info list), the footer of **all 5 pages**, and the JSON-LD block (see `<script type="application/ld+json">` in `index.html` and `contact.html`).
- **WhatsApp:** `contact.html`, the link `https://wa.me/WHATSAPPNUMBER`. Use the number with country code, digits only.
- **Services:** `services.html` (cards and details) and the services section of `index.html`. Comments mark where.
- **About text:** `about.html`. **Home text, stats, testimonials:** `index.html`. Only add real testimonials and statistics.
- **Social links:** footer of all pages (`href="#"` for Facebook, Instagram, LinkedIn) and the `sameAs` list in JSON-LD.
- **Google Maps:** Google Maps → Share → Embed a map → copy the `<iframe>` → paste in `contact.html` replacing the "REPLACE WITH GOOGLE MAPS EMBED" box.
- **SEO title / description:** the `<title>` and `<meta name="description">` at the top of each page (also the `og:` lines).
- **Colours:** the variables at the top of `css/style.css`.
- **Domain:** if you change it, update `canonical`, `og:url`, `sitemap.xml` and `robots.txt`.

## 5. Put it on GitHub (Windows PowerShell)
1. Create a GitHub account, then **New repository**, name it e.g. `rathod-consultancy`, keep it empty (no README).
2. In PowerShell:
```powershell
cd "C:\path\to\rathod-consultancy"
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/rathod-consultancy.git
git push -u origin main
```
(If Git is missing, install it from git-scm.com. Later updates: `git add .`, `git commit -m "Update"`, `git push`.)

## 6. Deploy with GitHub Pages
Repository → **Settings** → **Pages** → Source: **Deploy from a branch** → Branch **main**, folder **/ (root)** → **Save**. After 1-3 minutes the address appears at the top of that page: `https://YOUR-USERNAME.github.io/rathod-consultancy/`.

## 7. Custom domain (rathodconsultancy.com)
1. Buy the domain from any registrar. Screens differ between registrars; look for "DNS", "DNS records" or "Manage DNS".
2. In GitHub: Settings → Pages → **Custom domain** → enter `www.rathodconsultancy.com` (or the bare domain) → Save.
3. At the registrar add (check GitHub's current docs, "Managing a custom domain for GitHub Pages", for current values):
   - four **A records** for host `@` pointing to GitHub's IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - one **CNAME** for host `www` pointing to `YOUR-USERNAME.github.io`
4. Wait for DNS (minutes to 24 hours), then tick **Enforce HTTPS** in Pages settings (the certificate can take a while).
5. Sitemap and canonical URLs use `https://www.rathodconsultancy.com/`; keep your chosen version consistent.

## 8. Google Search
1. Deploy, connect the domain. 2. Open Google Search Console → add the property → verify (DNS record or HTML file). 3. **Sitemaps** → submit `sitemap.xml`. 4. **URL Inspection** → paste the home page → **Request indexing**. 5. Check progress under **Pages** (may take days or weeks). 6. Ongoing: real content, a Google Business Profile with the same name/address/phone, genuine reviews, fast images, updated pages.

A website does **not** guarantee Google will rank it highly. Ranking depends on competition, content quality and reputation.

## Files
`index/about/services/gallery/contact.html` · `css/style.css` · `js/script.js` · `images/` · `favicon.png` · `robots.txt` · `sitemap.xml`
