# Sana Sboui — Portfolio

A personal portfolio site built with Next.js and TypeScript, following a Clean Architecture–inspired folder structure, with full bilingual support (English/French) and light/dark theming.

**Live site:** //to add 

---

## Features

- **Bilingual (EN/FR)** 
- **Light/dark theme**
- **Responsive**
- **Typed content model** 
- **CI/CD** — GitHub Actions pipeline: lint + type-check + build on every push, automatic preview deploys from `dev`, automatic production deploys from `main`

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Hosting | Vercel |
| CI/CD | GitHub Actions |

---

## Project structure

The codebase is organized in loose layers, inspired by Clean Architecture, so content, logic and presentation don't bleed into each other:

```
app/
  layout.tsx              → root layout, metadata, Open Graph tags
  page.tsx                → assembles the page from content + components
  globals.css             → design tokens (colors, spacing) and global styles

domain/
  models/portfolio.ts      → TypeScript types (Project, Experience, Certification, Language)

infrastructure/
  content/
    portfolio.ts            → the actual data: projects, experience, certifications
    i18n.ts                 → all UI copy, keyed by language
    site.ts                 → contact links (email, LinkedIn, GitHub)

application/
  hooks/useLanguage.ts       → language state + persistence

presentation/
  components/
    layout/Header.tsx, SectionHeading.tsx
    theme/ThemeProvider.tsx   → theme context
    projects/ProjectCard.tsx, ProjectModal.tsx

.github/workflows/
  ci-cd.yml                 → lint/type-check/build on every branch, deploy preview from dev, deploy production from main
```

---

## Running it locally

```bash
git clone https://github.com/sana-sboui/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Using this as a template for your own portfolio

You don't need to touch most of the app to make this yours — almost everything lives in `infrastructure/content/`. Here's the order to go through:

### 1. Your info and contact links
Edit `infrastructure/content/site.ts`:
```ts
export const site = {
  name: "Your Name",
  email: "you@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
};
```

### 2. Your experience, projects and certifications
Edit `infrastructure/content/portfolio.ts`. Each entry is typed (see `domain/models/portfolio.ts`), so TypeScript will tell you if you're missing a field. Every text field is a `{ en: "...", fr: "..." }` object — if you only need one language, just keep both keys with the same value, or simplify the `Language` type and `Record<Language, string>` fields down to a single string throughout (more editing, but doable in an afternoon if bilingual isn't something you need).

Project images referenced by `coverImage` and `videoUrl`/`screenshots` should go in `public/projects/<project-name>/`.

### 3. All visible text (headings, button labels, nav)
Edit `infrastructure/content/i18n.ts`. This is the single place every piece of UI copy lives — search for the English string you want to change, update both the `en` and `fr` entries.

### 4. Colors and branding
Edit the CSS custom properties at the top of `app/globals.css`:
```css
:root {
  --primary: #3457d5;   /* your accent color, light mode */
  --background: #f6f7fb;
  ...
}
[data-theme="dark"] {
  --primary: #7d98ff;   /* your accent color, dark mode */
  ...
}
```
Everything else in the app references these variables, so changing them here re-themes the whole site.

### 5. Site metadata and social preview
Edit `app/layout.tsx` — update `title`, `description`, `metadataBase` (your real deployed URL), and add a 1200×630 preview image at `public/og-image.png` so link previews on LinkedIn/Slack/etc. look right.

### 6. Your own domain and name in the header/footer
`presentation/components/layout/Header.tsx` and the footer in `app/page.tsx` currently hardcode "Sana Sboui" as a wordmark — swap that for `site.name` or your own text.

---

## Deployment

This repo deploys via GitHub Actions + Vercel (see `.github/workflows/ci-cd.yml`), not Vercel's built-in Git integration. Branch model:

- `feature-*` branches → CI only (lint, type-check, build)
- `dev` → CI, then deploys to a **preview** URL
- `main` → CI, then deploys to **production**

To set this up for your own fork:
1. Create a project on Vercel (`vercel login` → `vercel link` from the project folder)
2. Add three GitHub repo secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` (the last two come from `.vercel/project.json` after linking)
3. Make sure Vercel's own Git integration is **disconnected** for the project (Settings → Git), since the Actions workflow is what deploys — leaving both connected causes duplicate deployments

---

## License

_Add a license here if you want others to reuse this freely — MIT is the common choice for portfolio templates:_

```
MIT License — feel free to fork and adapt this for your own portfolio.
```

---

## Credits

Built by [Sana Sboui](https://github.com/sana-sboui). If you use this as a base for your own portfolio, a link back or a star is appreciated but never required.