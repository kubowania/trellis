# Trellis

A simple project tracker for small product teams. Create a workspace, add your projects, and keep everyone on the same page.

Built with Next.js (App Router) and plain CSS. Projects are stored in the browser, so there is no database or environment variables to set up.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run lint` | Run ESLint |
| `npm test` | Run unit tests (Node's built-in test runner) |
| `npm run build` | Production build |

## Where things live

| Page | File |
| --- | --- |
| Home | `app/page.js` |
| Onboarding | `app/onboarding/page.js` |
| Projects list | `app/projects/page.js` |
| New project form | `app/projects/new/page.js` |
| Pricing | `app/pricing/page.js` |
| Project data helpers | `lib/projects.mjs` |
| Shared styles (buttons, cards, forms) | `app/globals.css` |

## Conventions

- Use the shared `.btn`, `.btn-secondary` and `.card` classes in `app/globals.css` rather than new one-off styles.
- Every change goes through a pull request. CI (lint, test, build) must pass before merging to `main`.
