<div align="center">

<!-- Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=Luv%20U%20Beauty%20Academy&fontSize=48&fontColor=fff&animation=fadeIn&fontAlignY=38&desc=Premium%20Beauty%20Training%20Institute%20%E2%80%A2%20Tanjore%2C%20Tamil%20Nadu&descAlignY=58&descColor=ffffff99" width="100%" />

<!-- Badges -->
[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-E91E8C?style=for-the-badge)](LICENSE)
[![Build](https://img.shields.io/badge/Build-Passing-22C55E?style=for-the-badge&logo=github-actions&logoColor=white)](.github/workflows/ci.yml)

<br />

**🌸 A world-class, production-ready website for Luv U Beauty Academy — Tanjore's #1 beauty training institute. Built with Next.js 16, React 19, TypeScript, GSAP animations, and a premium dark-light design system.**

<br />

[🌐 Live Demo](#-live-demo) · [📸 Screenshots](#-screenshots) · [🚀 Features](#-features) · [🛠️ Tech Stack](#️-tech-stack) · [📦 Installation](#-installation) · [🤝 Contributing](#-contributing)

</div>

---

## 🌐 Live Demo

> **Production URL:** `https://luvubeautyacademy.com` *(deploy to Vercel for instant live URL)*

```
npm run dev        # → http://localhost:3000
npm run build      # Production build
npm run start      # Start production server
```

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **Premium Design System** | Dark cinematic hero sections, glassmorphism, smooth gradients |
| 📱 **Fully Responsive** | Mobile-first — pixel-perfect on every screen size |
| ⚡ **Blazing Performance** | Static generation (SSG) for all 20 pages — instant load |
| 🎭 **GSAP Animations** | Professional scroll-triggered animations, parallax, 3D text reveals |
| 🔍 **100% SEO Optimised** | JSON-LD structured data, Open Graph, canonical URLs, sitemap, robots |
| 🌐 **Multi-language** | Tamil & English content throughout |
| 🔒 **TypeScript Strict** | Full type safety across all components |
| 💬 **WhatsApp Integration** | One-click enrolment and enquiry via WhatsApp |
| 🖼️ **Interactive Gallery** | CSS-column masonry, lightbox with keyboard nav, staggered animations |
| 📋 **Course Catalogue** | 7 courses with live search, filter by level & duration |
| 🌙 **Smooth Scroll** | Lenis smooth scrolling library integrated |
| ♾️ **Lifetime Support FAQ** | Dynamic FAQ accordion with GSAP expand/collapse |

---

## 📸 Screenshots

<details>
<summary><strong>Click to view screenshots</strong></summary>

<br />

| Page | Description |
|---|---|
| 🏠 **Home** | Hero section with rotating badge, floating cards, marquee |
| 📚 **Courses** | Dark hero + interactive grid with search & filter |
| 🎓 **Course Detail** | Two-column layout with curriculum, FAQ, sticky sidebar |
| 👩 **About Us** | Owner profile + Tamil biography |
| 🖼️ **Gallery** | Masonry grid with lightbox & category filters |
| 💬 **Testimonials** | Masonry reviews with Tamil quotes & initials avatars |
| 📞 **Contact** | WhatsApp + Google Maps integration |
| 📝 **Blog** | Article listing + detail pages with SEO |

> **📁 See `/docs/screenshots/` folder for full screenshots**

</details>

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16.2.6](https://nextjs.org/) (App Router, SSG) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **UI** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Vanilla CSS |
| **Animations** | [GSAP 3.15](https://gsap.com/) + [Framer Motion 12](https://www.framer.com/motion/) |
| **Smooth Scroll** | [Lenis 1.3](https://lenis.darkroom.engineering/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Fonts** | Google Fonts (Playfair Display + Inter) |
| **Images** | Next.js Image (optimised, lazy-loaded) |
| **SEO** | JSON-LD Schema, Sitemap, Robots, Open Graph |
| **Deployment** | [Vercel](https://vercel.com/) (recommended) |

</div>

---

## 📁 Project Structure

```
luv-u-beauty-academy/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   ├── workflows/
│   │   └── ci.yml                    # GitHub Actions CI/CD
│   └── PULL_REQUEST_TEMPLATE.md
├── docs/
│   └── screenshots/                  # App screenshots
├── public/
│   ├── logo.jpg
│   ├── owner.jpg
│   ├── og-image.jpg
│   └── favicon files
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── about/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── courses/
│   │   │   └── [slug]/               # Dynamic course pages
│   │   ├── gallery/
│   │   ├── testimonials/
│   │   ├── globals.css
│   │   ├── layout.tsx                # Root layout
│   │   ├── page.tsx                  # Home page
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── home/                     # Home section components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── CoursesSection.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── TestimonialSection.tsx
│   │   │   ├── TrustSection.tsx
│   │   │   └── FAQSection.tsx
│   │   ├── layout/                   # Global layout components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── WhatsAppButton.tsx
│   │   ├── providers/
│   │   │   └── SmoothScrollProvider.tsx
│   │   └── ui/
│   │       ├── MoveToTop.tsx
│   │       └── ExitIntentPopup.tsx
│   ├── data/                         # Static data / content
│   │   ├── courses.ts
│   │   ├── testimonials.ts
│   │   └── faqs.ts
│   └── lib/                          # Utilities & schema
│       └── schema.ts
├── AGENTS.md
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── SECURITY.md
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## 📦 Installation

### Prerequisites

- **Node.js** `>= 20.9.0` (required by Next.js 16 — Node 18 will fail)
- **npm** `>= 9.0.0` (or pnpm / yarn)
- **Git** `>= 2.38`

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/vairavan10/luv-u-beauty-academy.git
cd luv-u-beauty-academy

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. ✅

### Available Scripts

```bash
npm run dev          # Start development server (hot reload)
npm run build        # Create optimised production build
npm run start        # Start production server
npm run lint         # Run ESLint code quality checks
```

---

## 🌍 Environment Variables

All environment variables are optional — the site builds and runs with none of
them set. Copy `.env.example` to `.env.local` and fill in what you need.

| Variable | Purpose |
|---|---|
| `LEAD_WEBHOOK_URL` | Where `/api/enquiry` forwards contact-form submissions. Server-only. |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container ID |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Google Search Console meta-tag value |

`NEXT_PUBLIC_*` values are inlined at build time — changing one needs a rebuild,
not just a restart. The WhatsApp number and site domain are constants in the
source, not environment variables.

> ⚠️ Never commit `.env.local` to version control.

---

## 🚀 Deployment

> **Handing this to a hosting provider?** Give them [DEPLOYMENT.md](DEPLOYMENT.md) —
> it covers the Node 20.9+ requirement, environment variables, the hardcoded
> domain that must be updated, and a pre-launch checklist.

### Vercel (Recommended — zero config)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vairavan10/luv-u-beauty-academy)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify

Install the official `@netlify/plugin-nextjs` plugin (Netlify normally adds it
automatically).

```bash
# Build command
npm run build

# Publish directory
.next
```

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

---

## 🗺️ Roadmap

- [x] Home page with GSAP animations
- [x] 7 Course pages with dynamic routing
- [x] Interactive gallery with lightbox
- [x] Tamil + English testimonials
- [x] SEO — JSON-LD, sitemap, OG tags
- [x] WhatsApp enquiry integration
- [x] Lifetime Support FAQ
- [x] Scroll-to-top button
- [x] Mobile-responsive sidebar drawer
- [ ] **v1.1** — Online course enquiry form (EmailJS)
- [ ] **v1.2** — Blog CMS (Sanity or Contentlayer)
- [ ] **v1.3** — Student portal / login
- [ ] **v1.4** — Razorpay payment integration for fees
- [ ] **v2.0** — PWA support + offline mode

---

## 🤝 Contributing

Contributions are warmly welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

```bash
# Fork → Clone → Branch → Commit → PR

git checkout -b feature/my-feature
git commit -m "feat: add my awesome feature"
git push origin feature/my-feature
# → Open a Pull Request on GitHub
```

**Commit Convention** ([Conventional Commits](https://www.conventionalcommits.org/)):

| Prefix | Use |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation only |
| `style:` | Formatting, no logic change |
| `refactor:` | Code refactor |
| `perf:` | Performance improvement |
| `chore:` | Build process / tooling |

---

## 📜 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for details.

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) — The React framework for the web
- [GSAP](https://gsap.com/) — Professional-grade animation library
- [Lenis](https://lenis.darkroom.engineering/) — Smooth scrolling
- [Lucide React](https://lucide.dev/) — Beautiful open-source icons
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [Unsplash](https://unsplash.com/) — High-quality free images
- [Shields.io](https://shields.io/) — Badge generation
- [Capsule Render](https://github.com/kyechan99/capsule-render) — Dynamic banner

---

## 📬 Contact

<div align="center">

**Luv U Beauty Academy** — Tanjore, Tamil Nadu, India

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/919487992728)
[![Website](https://img.shields.io/badge/Website-E91E8C?style=for-the-badge&logo=googlechrome&logoColor=white)](https://luvubeautyacademy.com)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/luvubeautyacademy)

> Built with ❤️ for Luv U Beauty Academy, Tanjore

</div>

---

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer" width="100%" />
</div>
