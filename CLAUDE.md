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

Static marketing site for ExpenseFlow AI (expense-tracking app). Built with Next.js App Router, exported as fully static HTML (`output: "export"`) and deployed to GitHub Pages via `.github/workflows/deploy.yml`. Served at `expenseflowai.com` via Cloudflare DNS proxy (SSL Full).

**Key constraint**: static export means no server-side rendering, no API routes at runtime. The `next.config.ts` rewrites (`/api/*` → `API_URL`) only apply in dev/server mode (`GITHUB_PAGES` unset) — they're stripped when `GITHUB_PAGES=true`.

### Page composition

`app/page.tsx` composes 13 section components in order: `Nav → Hero → Stats → Features → UseCases → SpotlightAI → HowSteps → GetStarted → Platforms → Pricing → TrialBanner → FAQ → Footer`. All sections are in `components/`.

Stand-alone pages (`about`, `careers`, `contact`, `privacy`, `terms`, `cookies`) each have their own `app/<name>/page.tsx`. These use inline `copy` objects for text rather than locale files — keep that pattern for any new stand-alone pages.

### Providers

Two context providers wrap the app in `app/layout.tsx`:

- `lib/theme.tsx` — dark/light mode; persists to `localStorage` as `site_theme`; sets `data-theme` on `<html>`
- `lib/language.tsx` — English (`en`) / Bengali (`bn`); persists to `localStorage` as `site_lang`; provides a `t` translation object loaded from `locales/{lang}.json`

### Styling

Tailwind CSS v4 + custom CSS tokens in `app/globals.css`. The token system uses CSS custom properties for colors, spacing, and radii. Dark mode is the default; light mode overrides are scoped under `[data-theme="light"]`. Custom Aptos font family loaded from `public/fonts/`. No Tailwind utility classes in JSX — styles map to named rules in globals.css. Brand tokens: `--k-orange`, `--k-cyan`, `--k-blue`.

### Localization

All user-visible strings for main section components go through the `t` object from `useLanguage()`. Translation files are `locales/en.json` and `locales/bn.json`. Both must be updated together when adding new strings. The type is `typeof en`, so TypeScript will catch missing keys in `bn.json`.

### Nav anchor links

`Nav.tsx` uses `usePathname()` to detect when the user is on the home page. The `href()` helper returns bare anchors (`#features`) on `/` and prefixed paths (`/#features`) on sub-pages. Footer links always use `/#anchor`. Follow this pattern for any new anchor links.

### Contact form

The contact form (`app/contact/page.tsx`) POSTs directly to the backend at `process.env.NEXT_PUBLIC_API_URL` — no proxy in static builds. The backend endpoint (`POST /api/v1/contact`) has three spam guards: honeypot field, `1/minute + 3/hour` IP rate limit, and 20-character minimum message length.
