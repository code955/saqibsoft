# Saqib Soft — Portfolio

Client-ready portfolio for **Saqib Soft**: full-stack developer based in Pakistan, available for remote work with UK, US, EU, and global clients.

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

```bash
npm run build
npm start
```

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

## Deploy

```bash
git init
git add .
git commit -m "Initial Saqib Soft portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Import the repo on [Vercel](https://vercel.com).
