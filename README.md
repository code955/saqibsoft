# Saqib Soft — Portfolio

Client-ready portfolio for **Saqib Soft**: full-stack developer based in Pakistan, available for remote work with UK, US, EU, and global clients.

**Live site:** [code955.github.io/saqibsoft](https://code955.github.io/saqibsoft/)
**Source:** [github.com/code955/saqibsoft](https://github.com/code955/saqibsoft)

## Pages

- `/` — Brand hero, featured case study, process, CTA
- `/work` — Case studies (live URL when available)
- `/about` — Professional bio + portrait
- `/skills` — Capabilities
- `/contact` — Inquiry form + email

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you go live

Edit these files with **real** details only:

| File | Update |
| --- | --- |
| `src/data/site.ts` | Email, LinkedIn, GitHub (leave socials `""` until real) |
| `src/data/projects.ts` | Add projects + live `url` when ready |
| `public/profile.png` | Portrait |

### Add a live project URL

```ts
url: "https://your-live-demo.com",
```

Empty `url` still shows a professional case study with **Request a walkthrough** — never a “coming soon” placeholder.

## Deploy (GitHub Pages)

This project builds as a static export (`output: "export"` in `next.config.ts`) and is hosted on GitHub Pages at
[code955.github.io/saqibsoft](https://code955.github.io/saqibsoft/), served from the `gh-pages` branch.

Whenever you change content (new project, new copy, new image) and want the live site updated, push your changes to
`master` first, then run:

```bash
npm run deploy
```

This builds the static export and publishes the `out/` folder to the `gh-pages` branch automatically. The live URL
stays the same — no extra setup needed.

> **Note:** the site is served from a sub-path (`/saqibsoft`), so any new `next/image` usage must wrap its `src` with
> `withBasePath()` from `src/lib/base-path.ts` (see existing usages in `page.tsx` / `CaseStudy.tsx` for reference).
> Internal links via `next/link` don't need this — the base path is applied automatically.
