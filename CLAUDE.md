# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server on port 3001
npm run build    # static export → out/
npm run start    # production preview on port 3001
npm run lint     # ESLint
```

No test suite is configured.

## Architecture

Static marketing site for ExpenseFlow AI (expense-tracking app). Built with Next.js App Router, exported as fully static HTML (`output: "export"`) and deployed to GitHub Pages via `.github/workflows/deploy.yml`.

**Key constraint**: static export means no server-side rendering, no API routes at runtime. The `next.config.ts` rewrites (`/api/*` → `API_URL`) only apply in dev/server mode — they're stripped in the static build.

### Page composition

`app/page.tsx` composes 13 section components in order: `Nav → Hero → Stats → Features → UseCases → SpotlightAI → HowSteps → GetStarted → Platforms → Pricing → TrialBanner → FAQ → Footer`. All sections are in `components/`.

### Providers

Two context providers wrap the app in `app/layout.tsx`:

- `lib/theme.tsx` — dark/light mode; persists to `localStorage` as `site_theme`; sets `data-theme` on `<html>`
- `lib/language.tsx` — English (`en`) / Bengali (`bn`); persists to `localStorage` as `site_lang`; provides a `t` translation object loaded from `locales/{lang}.json`

### Styling

Tailwind CSS v4 + custom CSS tokens in `app/globals.css`. The token system uses CSS custom properties for colors, spacing, and radii. Dark mode is the default; light mode overrides are scoped under `[data-theme="light"]`. Custom Aptos font family loaded from `public/fonts/`.

### Localization

All user-visible strings should go through the `t` object from `useLanguage()`. Translation files are `locales/en.json` and `locales/bn.json`. Both must be updated together when adding new strings.
