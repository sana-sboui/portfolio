# Sana Sboui — Portfolio

A bilingual, accessibility-focused software engineering portfolio built with Next.js, TypeScript and Tailwind CSS.

## What it showcases

- Professional experience, with Sabilouna presented first as the latest experience and featured project
- Selected academic and professional projects
- Bilingual English/French interface
- Light/dark theme
- Accessibility panel with:
  - text size
  - line spacing
  - letter spacing
  - word spacing
  - saturation / grayscale
  - high contrast
  - large cursor
  - browser text-to-speech
- Responsive layout
- Keyboard-visible focus states and skip navigation
- Client-side preferences persisted where appropriate

## Structure

The project follows a small separation of concerns:

```text
src/
├── app/                         # Next.js routes and global styles
├── domain/models/               # Domain types
├── application/hooks/           # Client-side application hooks
├── infrastructure/content/     # Portfolio data and translations
└── presentation/components/    # UI components
```

The structure is intentionally lighter than a backend Clean Architecture setup because this project is a frontend portfolio. It keeps domain data, application behavior, content and presentation separate without introducing unnecessary abstractions.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Build for production:

```bash
npm run build
npm start
```

## Before publishing

Update project links in:

```text
src/infrastructure/content/portfolio.ts
```

In particular:

- Sabilouna demo URL
- Sabilouna PFE presentation URL
- Sabilouna report URL
- UnityHR demo URL
- JobNest demo URL, if available

Empty URLs are intentionally not rendered in the interface.

## Deployment

This project is suitable for free deployment on platforms that support Next.js, such as Vercel's free tier for personal projects. Connect the Git repository, keep the default Next.js build settings, and deploy.

## Git workflow

Use conventional commits:

```text
feat: add project case study
fix: improve mobile navigation
refactor: simplify accessibility state
docs: update project links
```

Keep secrets out of the repository. This portfolio does not require server-side secrets.

## Notes

The text-to-speech feature uses the browser's Web Speech API. Available voices depend on the visitor's browser and operating system.
