# Pro Lead Maker — Website

A production-ready, high-performance B2B agency website for **Pro Lead Maker** — built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and an MDX-powered blog.

Deployed via [Vercel](https://vercel.com) — repo: [Leadwork/Outreach-Website-Design](https://github.com/Leadwork/Outreach-Website-Design).

---

## ✦ Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS + custom utilities |
| Animations | Framer Motion (lazy, motion-safe) |
| Blog | MDX files in `/content/blog/` — no CMS |
| Icons | Lucide React |
| Forms | Formspree |
| Calendar | Calendly (lazy-loaded) |
| Hosting | Vercel (static & SSR friendly) |

---

## ✦ Local development

```bash
# 1. install deps
npm install

# 2. run dev server
npm run dev

# 3. build for production
npm run build && npm run start
```

Open <http://localhost:3000>.

> Requires Node 18.17+ (Node 20 LTS recommended).

---

## ✦ Folder structure

```
proleadmaker/
├── app/
│   ├── layout.tsx              # root layout (fonts, metadata, JSON-LD)
│   ├── page.tsx                # Home
│   ├── services/page.tsx
│   ├── results/page.tsx
│   ├── tools/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── blog/
│   │   ├── page.tsx            # Blog list + search + categories
│   │   └── [slug]/page.tsx     # Dynamic post page (MDX)
│   ├── sitemap.ts              # auto sitemap.xml
│   ├── robots.ts               # auto robots.txt
│   ├── manifest.ts             # PWA manifest
│   ├── not-found.tsx           # custom 404
│   └── globals.css             # Tailwind + design tokens
├── components/                 # all shared UI
├── content/
│   └── blog/*.mdx              # ← edit/add blog posts here
├── lib/
│   ├── site.ts                 # company config, services, nav, social
│   └── blog.ts                 # MDX loader, frontmatter parser
├── public/                     # favicon, logo, og-image, /images
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

---

## ✦ Publishing a new blog post (no CMS, no dashboard)

Blog posts are plain MDX files in `/content/blog/`. To publish a new post:

### 1. Create a new MDX file

`/content/blog/<your-slug>.mdx`

```mdx
---
title: "Your Awesome Post Title"
date: "2026-05-30"
category: "Cold Email"
excerpt: "Short 140-180 character description for SEO and card preview."
author: "MD. Al Amin"
coverImage: ""
---

## Opening hook

Write your post here. Standard markdown works:

- bullets
- **bold**
- _italic_
- > blockquotes

## Section heading

More content...

## Ready to apply this?

Want help building this for your team? [Book a free 30-minute strategy call](https://calendly.com/proleadmaker/lead-generation).
```

### 2. Commit & push to GitHub

```bash
git add content/blog/<your-slug>.mdx
git commit -m "post: <your-slug>"
git push
```

### 3. Vercel auto-deploys

Within ~60 seconds the post is live at:
`https://proleadmaker.com/blog/<your-slug>`

It automatically appears on:
- `/blog` (list page, sorted by date)
- Home page "From the blog" section (latest 3)
- `sitemap.xml`
- Blog category filter (if a new category)

### Frontmatter fields

| Field | Required | Notes |
|---|---|---|
| `title` | yes | H1 of the post; used in `<title>` + OG |
| `date` | yes | Use `YYYY-MM-DD`. Drives sort order. |
| `category` | yes | Free text — becomes a filterable chip |
| `excerpt` | yes | 140-180 chars — used in card + meta description |
| `author` | yes | Defaults to "MD. Al Amin" if omitted |
| `coverImage` | optional | Path to image in `/public/images/blog/...` |

---

## ✦ Editing content

| What you want to edit | Where |
|---|---|
| Company info (email, phone, social) | `lib/site.ts` |
| Services list (titles, descriptions) | `lib/site.ts` → `services` |
| Navigation links | `lib/site.ts` → `navLinks` |
| Home page sections | `app/page.tsx` + `components/*.tsx` |
| Brand colors | `tailwind.config.ts` (`brand.pink`, `brand.purple`, `brand.magenta`) and `app/globals.css` |
| Calendly URL | `lib/site.ts` → `siteConfig.calendly` |
| WhatsApp number | `lib/site.ts` → `siteConfig.whatsapp` |
| Formspree endpoint | `lib/site.ts` → `siteConfig.formspree` |
| SEO defaults | `app/layout.tsx` |
| Site URL | `lib/site.ts` → `siteConfig.url` |

---

## ✦ Replacing placeholders

The site ships with branded placeholder components in several spots — clearly labeled and easy to swap once real assets exist.

| Placeholder | File | What to drop in |
|---|---|---|
| Hero video | `components/Hero.tsx` | Replace the placeholder block with a `<video>` element or embed |
| Founder photo | `app/about/page.tsx` | Replace the gradient block with `<Image>` |
| Team avatars | `app/about/page.tsx` | Replace icon avatars with `<Image>` per person |
| Client video testimonials | `app/results/page.tsx` | Replace placeholder play buttons with YouTube `<iframe>` embeds |
| Review screenshots | `app/results/page.tsx` | Replace the dashed boxes with `<Image>` of Fiverr/Upwork/LinkedIn reviews |
| Blog cover images | `content/blog/*.mdx` frontmatter | Add `coverImage: "/images/blog/your-image.jpg"` and update card to render it |

---

## ✦ Performance & SEO

This site is optimised to score 100/100 across PageSpeed Insights:

- **Performance** — Inter font subset, lazy Framer Motion, lazy Calendly script, image optimisation via `next/image`, no render-blocking resources.
- **Accessibility** — semantic HTML, ARIA labels on icon buttons, skip-to-content link, focus styles, `prefers-reduced-motion`.
- **Best Practices** — security headers (HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy), HTTPS-only via Vercel.
- **SEO** — per-page metadata, `sitemap.xml`, `robots.txt`, canonical URLs, JSON-LD for `Organization`, `WebSite`, and `BlogPosting`.

---

## ✦ Deployment to Vercel

1. Push this repo to GitHub: <https://github.com/Leadwork/Outreach-Website-Design>
2. Go to <https://vercel.com/new> and import the repo.
3. Vercel detects Next.js automatically — no env vars needed.
4. Set the production domain to `proleadmaker.com` (or your domain).
5. After first deploy, every `git push` to `main` triggers a new deploy.

---

## ✦ Forms & integrations

| Integration | Where used | Notes |
|---|---|---|
| Formspree | Contact page | POSTs to `https://formspree.io/f/mlgzlykl` — change in `lib/site.ts` |
| Calendly | Contact + everywhere "Book a call" | Embedded lazily via IntersectionObserver |
| WhatsApp | Floating button + buttons | Links to `wa.me/8801315739311` |

---

## ✦ Contact

- Email — `alamin@proleadmaker.com`
- Founder — MD. Al Amin
- Phone / WhatsApp — `+8801315739311`
- LinkedIn — <https://www.linkedin.com/company/proleadmaker/>

Built with care. Ship pipeline. 🚀
