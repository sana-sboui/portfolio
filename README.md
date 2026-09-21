# Sana Sboui — Portfolio

A modern, bilingual personal portfolio built with **Next.js** and **TypeScript**.

The project follows a **Clean Architecture–inspired structure**, separating content, application logic, domain models, and presentation components. It is also designed to be reused as a starting point for developers who want to build their own portfolio.

**Live site:** //

## Features

- **Bilingual interface** — English and French
- **Light / dark theme**
- **Responsive design** — desktop, tablet and mobile
- **Project media** — images, screenshots and video demonstrations
- **Project details modal**
- **CI/CD with GitHub Actions**
- **Vercel deployment**

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js](https://nextjs.org/) | React framework and application structure |
| [TypeScript](https://www.typescriptlang.org/) | Static typing |
| [Tailwind CSS](https://tailwindcss.com/) | Styling and responsive layout |
| [GitHub Actions](https://github.com/features/actions) | CI/CD |
| [Vercel](https://vercel.com/) | Hosting and deployment |

## Project Structure

The project follows a **Clean Architecture–inspired structure**. It keeps responsibilities separated so that content, domain models, application logic and UI components do not become tightly coupled.

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── domain/
│   └── models/
│       └── portfolio.ts
│
├── application/
│   └── hooks/
│       └── useLanguage.ts
│
├── infrastructure/
│   └── content/
│       ├── portfolio.ts
│       ├── i18n.ts
│       └── site.ts
│
└── presentation/
    └── components/
        ├── layout/
        │   ├── Header.tsx
        │   ├── Footer.tsx
        │   └── SectionHeading.tsx
        │
        ├── projects/
        │   ├── ProjectCard.tsx
        │   └── ProjectModal.tsx
        │
        ├── sections/
        │   ├── HeroSection.tsx
        │   ├── AboutSection.tsx
        │   ├── ProjectsSection.tsx
        │   ├── ExperienceSection.tsx
        │   ├── CertificationsSection.tsx
        │   └── ContactSection.tsx
        │
        └── theme/
            └── ThemeProvider.tsx

public/
└── projects/
│   ├── sabilouna/
│   ├── instalab/
│   ├── jobnest/
│   ├── unityhr/
│   ├── edusmart/
│   ├── medflow/
│   └── hms/
└── og-image.png

.github/
└── workflows/
    └── ci-cd.yml
````

### Layer responsibilities

#### `domain/`

Contains the core TypeScript models used by the application, such as:

* `Project`
* `Experience`
* `Certification`
* `Language`

This keeps the portfolio data structure explicit and type-safe.

#### `application/`

Contains application-level logic such as language state and persistence.

#### `infrastructure/`

Contains the portfolio content and configuration:

```text
portfolio.ts → projects, experience and certifications
i18n.ts      → interface translations
site.ts      → name, email, GitHub and LinkedIn
```

This is the main area to edit when adapting the template.

#### `presentation/`

Contains React components responsible for rendering the interface.

#### `app/`

Contains the Next.js application entry points, global styles and metadata.

# Getting Started

## Prerequisites

Make sure you have:

* Node.js 20 or later
* npm
* Git

Check your installed versions:

```bash
node --version
npm --version
git --version
```

## Installation

Clone the repository:

```bash
git clone https://github.com/sana-sboui/portfolio.git
```

Move into the project:

```bash
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Commands

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

Run ESLint:

```bash
npm run lint
```

Run TypeScript type-checking:

```bash
npx tsc --noEmit
```

# Using This as a Portfolio Template

The project is designed so that most customization can be done without modifying the core components.

If you want to use this project for your own portfolio, start with the following files.


## 1. Update Your Personal Information

Edit:

```text
src/infrastructure/content/site.ts
```

For example:

```ts
export const site = {
  name: "Your Name",
  email: "you@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
};
```

This information is used throughout the portfolio.

## 2. Add Your Projects, Experience and Certifications

Edit:

```text
src/infrastructure/content/portfolio.ts
```

Each entry is strongly typed using the models defined in:

```text
src/domain/models/portfolio.ts
```

### Example project

```ts
{
  name: "My Project",
  category: {
    en: "Web Application",
    fr: "Application Web",
  },
  description: {
    en: "A short description of the project.",
    fr: "Une courte description du projet.",
  },
  technologies: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
  ],
  coverImage: "/projects/my-project/cover.png",
}
```

---

## 3. Add Project Media

Project media belongs inside:

```text
public/projects/
```

For example:

```text
public/
└── projects/
    └── my-project/
        ├── cover.png
        ├── screenshot-1.png
        ├── screenshot-2.png
        └── demo.mp4
```

Reference the files from `portfolio.ts`:

```ts
{
  name: "My Project",
  coverImage: "/projects/my-project/cover.png",
  screenshots: [
    "/projects/my-project/screenshot-1.png",
    "/projects/my-project/screenshot-2.png",
  ],
  videoUrl: "/projects/my-project/demo.mp4",
}
```

Supported project resources include:

* Cover images
* Screenshots
* Videos
* Live demos
* Source repositories
* Additional resources

## 4. Customize the Interface Text

Edit:

```text
src/infrastructure/content/i18n.ts
```

This file contains the interface text for both supported languages.

For example:

```ts
navProjects: {
  en: "Projects",
  fr: "Projets",
}
```

This keeps UI copy centralized instead of spreading translations throughout components.

## 5. Customize the Theme

The main visual design tokens are defined in:

```text
src/app/globals.css
```

For example:

```css
:root {
  --primary: #3457d5;
  --background: #f6f7fb;
  --surface: #ffffff;
}

[data-theme="dark"] {
  --primary: #7d98ff;
  --background: #0f1117;
  --surface: #171a22;
}
```

The components reference these variables instead of hardcoding colors throughout the application.

Changing the variables allows you to re-theme the portfolio from a centralized location.

## 6. Update Metadata and Social Sharing

Edit:

```text
src/app/layout.tsx
```

Update:

* Page title
* Description
* `metadataBase`
* Open Graph metadata

You can add your own social preview image at:

```text
public/og-image.png
```

A recommended Open Graph image size is:

```text
1200 × 630
```

This image can be used when your portfolio link is shared on platforms such as LinkedIn or Slack.

## 7. Customize the Header and Footer

The header is located at:

```text
src/presentation/components/layout/Header.tsx
```

You can modify:

* Navigation links
* Header layout
* Theme button

The footer is located at:

```text
src/presentation/components/layout/Footer.tsx
```

# Bilingual Content

The portfolio currently supports:

* English
* French

Language-specific content follows this structure:

```ts
{
  en: "...",
  fr: "..."
}
```

The selected language is persisted locally, so refreshing the page does not reset the user's choice.

If you do not need bilingual support, you can simplify the project by:

1. Removing the language switcher.
2. Replacing `Record<Language, string>` fields with `string`.
3. Removing the language state and translation objects.

The language logic is isolated so this change does not require rewriting the entire UI.

# CI/CD

The project uses **GitHub Actions + Vercel** for deployment.

The workflow is defined in:

```text
.github/workflows/ci-cd.yml
```

The branch strategy is:

```text
feature/*
    │
    │ Pull Request
    ▼
  dev
    │
    │ Pull Request
    ▼
  main
```

### Feature branches

Feature branches run the CI checks:

```text
Lint
Type-check
Build
```

### `dev`

When changes are merged into `dev`, the workflow:

1. Runs the CI checks.
2. Builds the application.
3. Deploys a Vercel preview.

### `main`

When changes are merged into `main`, the workflow:

1. Runs the CI checks.
2. Builds the application.
3. Deploys the application to Vercel production.

This provides a simple development → preview → production workflow.

# Deploying Your Own Copy

If you fork this repository and want to use the same deployment workflow:

## 1. Create a Vercel project

Install the Vercel CLI:

```bash
npm install -g vercel
```

Log in:

```bash
vercel login
```

From the project directory:

```bash
vercel link
```

Follow the prompts to connect the project to Vercel and it should create a .vercel/ directory containing the project configuration.

After linking, the Vercel project information can be found in:

```bash
.vercel/project.json
```

This file contains the values needed to configure the GitHub Actions deployment:

* `orgId` → `VERCEL_ORG_ID`
* `projectId` → `VERCEL_PROJECT_ID`

The .vercel/ directory should not be committed to the repository (Already added in the .gitignore).

## 2. Configure GitHub Actions secrets

The deployment workflow requires three GitHub Actions secrets:

```text
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

#### `VERCEL_TOKEN`

Create a Vercel access token from your Vercel account and add it as:

```text
VERCEL_TOKEN
```

#### `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID`

After running:

```bash
vercel link
```

open:

```text
.vercel/project.json
```

You will find values similar to:

```json
{
  "orgId": "your-org-id",
  "projectId": "your-project-id"
}
```

Add them to GitHub as:

```text
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

### Add the secrets to GitHub

Go to:

```text
Repository
→ Settings
→ Secrets and variables
→ Actions
→ New repository secret
```

Add all three:

| GitHub Secret       | Source                               |
| ------------------- | ------------------------------------ |
| `VERCEL_TOKEN`      | Vercel access token                  |
| `VERCEL_ORG_ID`     | `.vercel/project.json` → `orgId`     |
| `VERCEL_PROJECT_ID` | `.vercel/project.json` → `projectId` |

These values are accessed by the GitHub Actions workflow through the `secrets` context.

## 3. Configure your branches

Create:

```text
main
dev
```

Then use feature branches for development:

```text
feature/my-new-section
feature/projects-update
feature/header-redesign
```

## 4. Configure Vercel Git integration

Make sure your Vercel project is correctly linked before running the deployment workflow.

Because this project uses GitHub Actions to deploy through the Vercel CLI, the Vercel project's Git integration should be disconnected:

```text
Vercel Dashboard
→ Project
→ Settings
→ Git
→ Disconnect
````

This prevents Vercel's automatic Git deployment and the GitHub Actions workflow from deploying the same changes twice.

# Contributing

This project is primarily a personal portfolio, but you're welcome to fork it and adapt it for your own use.

If you find a bug or have an improvement that could benefit the template, feel free to open an issue or pull request.

# License

This project is available under the **MIT License**.

You are free to:

* Use the template
* Modify it
* Create your own portfolio from it
* Use it as a starting point for another project

See the `LICENSE` file for the complete license text.

# Author

**Sana Sboui**

Software Engineering Graduate
Tunisia

* GitHub: [https://github.com/sana-sboui](https://github.com/sana-sboui)
* LinkedIn: [https://linkedin.com/in/sana-sboui-38776b217](https://linkedin.com/in/sana-sboui-38776b217)
* Email: [sbouisana02@gmail.com](mailto:sbouisana02@gmail.com)

If you use this project as the foundation for your own portfolio, a link back to the repository or a star is appreciated, but never required.