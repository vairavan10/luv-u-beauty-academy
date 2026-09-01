# Deployment Guide

Everything a hosting provider needs to put this site online. Hand them this
file along with the code.

---

## 1. Requirements

| | |
|---|---|
| **Node.js** | **20.9.0 or newer** — Next.js 16 refuses to run on Node 18 |
| npm | 9+ (ships with Node 20) |
| Build output | A **Node.js server**, not a folder of static files (see §6) |

Check with `node -v` before anything else. Node 18 is the single most common
cause of a failed build here.

---

## 2. Build and run

```bash
npm ci          # install exact dependency versions from package-lock.json
npm run build   # production build
npm run start   # serves on port 3000 (override with PORT=8080)
```

`npm ci` is deliberate — `npm install` may resolve different versions.

The app must stay running. Use the platform's process manager (Vercel and
Netlify handle this for you) or `pm2` / `systemd` on a plain server.

---

## 3. Environment variables

**All are optional.** The site builds and runs correctly with none of them set;
each feature simply stays switched off. See `.env.example`.

| Variable | Effect if unset | Where to get it |
|---|---|---|
| `LEAD_WEBHOOK_URL` | Contact-form enquiries reach the server log only | A Google Apps Script web app, Zapier/Make catch hook, or inbox relay |
| `NEXT_PUBLIC_GA_ID` | No analytics collected | GA4 → Admin → Data streams |
| `NEXT_PUBLIC_GTM_ID` | No Tag Manager | GTM container ID |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Search Console can't verify by meta tag | Search Console → HTML tag method |

Two things to know:

- **`NEXT_PUBLIC_*` variables are baked in at build time.** Adding one requires
  a **fresh build**, not just a restart.
- `LEAD_WEBHOOK_URL` has no `NEXT_PUBLIC_` prefix on purpose — it is
  server-only and must never be exposed to browsers.
- If you set `NEXT_PUBLIC_GTM_ID`, configure GA4 *inside* Tag Manager and leave
  `NEXT_PUBLIC_GA_ID` empty, or every pageview is counted twice.

Set these in the host's dashboard. Never commit a `.env` file.

---

## 4. Platform notes

### Vercel

Zero configuration — it detects Next.js. Import the repo, add the environment
variables under Settings → Environment Variables, deploy.

### Netlify

Install the official Next.js plugin (`@netlify/plugin-nextjs`); Netlify usually
adds it automatically on detecting Next.

```
Build command:      npm run build
Publish directory:  .next
```

Do **not** set the publish directory to `out` — this site is not a static
export (see §6).

### Any Node host (VPS, Render, Railway, Fly, cPanel with Node support)

```bash
npm ci && npm run build
PORT=3000 npm run start
```

Put nginx/Apache in front as a reverse proxy for TLS. Keep the process alive
with pm2 or systemd.

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
```

For a smaller image, add `output: "standalone"` to `next.config.ts` and copy
`.next/standalone` instead — but that config line must be added first, or the
directory will not exist.

---

## 5. Before going live: the domain

The production domain is **hardcoded in 14 places** across 11 files —
every page's canonical URL, the sitemap, `robots.txt`, the Open Graph tags and
the LocalBusiness structured data.

```bash
grep -rn "luvubeautyacademy.com" src/
```

If the site will live on a different domain, **every one of those must be
updated before launch.** Canonical tags pointing at a domain that does not
resolve tell Google the real version of each page lives at a dead URL, which
can keep the entire site out of search results.

Confirm the domain resolves to the deployment before announcing it:

```bash
curl -I https://your-domain.com
```

---

## 6. This is not a static site

The app needs a Node runtime. It will **not** work on static-only hosting
(GoDaddy shared/cPanel without Node, plain S3, GitHub Pages) as-is, because of:

- `/api/enquiry` — the contact-form lead-capture endpoint
- `next/image` optimisation, which converts and resizes images on request

A static export is possible but costs both of those. It requires
`output: "export"` plus `images.unoptimized`, `export const dynamic =
"force-static"` in five metadata files, and **deleting `/api/enquiry`**.
Images would then be served at full size — the gallery photos are ~180 KB
each. Only take this route if static hosting is a hard requirement.

---

## 7. Handing over the code

Prefer giving repository access. For a ZIP, export a clean copy that excludes
`node_modules`, `.next` and any local env files:

```bash
git archive --format=zip --output=luv-u-beauty-academy.zip HEAD
```

Do not zip the working directory — `node_modules` is large, platform-specific,
and will not transfer correctly.

Never send a `.next` folder on its own; it still needs the source and a Node
server, so it saves nothing.

---

## 8. Post-deployment checklist

- [ ] `node -v` on the build machine is 20.9.0+
- [ ] Site loads over HTTPS on the final domain
- [ ] Domain in `src/` matches the live domain (§5)
- [ ] `/sitemap.xml` and `/robots.txt` return 200 and show the correct domain
- [ ] `/manifest.webmanifest` returns 200
- [ ] Contact form opens WhatsApp with the details pre-filled
- [ ] `LEAD_WEBHOOK_URL` set, and a test enquiry arrives at its destination
- [ ] `NEXT_PUBLIC_GA_ID` set and GA4 Realtime shows the visit
- [ ] Share a link on WhatsApp and confirm the preview image appears
- [ ] Submit the sitemap in Google Search Console
