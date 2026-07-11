# Pemapol Sripratipbundit — Portfolio

A bilingual (EN / TH) personal portfolio built with **Astro**, **React**,
**TypeScript** and **Tailwind CSS v4**. Astro server-renders the page for a fast
first paint; a single hydrated React island powers all the interactivity.

## Stack

- **[Astro](https://astro.build)** — static-site framework; renders the document
  shell and pre-renders the portfolio, then ships a single client island.
- **[React 19](https://react.dev)** — one hydrated island (`Portfolio.tsx`, mounted
  `client:load`) owns all state: language switch, light/dark theme, collapsible
  cards, mobile menu and the email modal.
- **[TypeScript](https://www.typescriptlang.org)** — fully typed components and content.
- **[Tailwind CSS v4](https://tailwindcss.com)** (via `@tailwindcss/vite`) — design
  tokens are CSS variables mapped into Tailwind's theme with `@theme`, so every
  color/shadow utility is light/dark aware automatically.
- **[Font Awesome](https://fontawesome.com)** — icons throughout (nav, section
  headers, contact cards, hero, theme toggle, brand mark).

## Features

- **Bilingual** English / Thai toggle, persisted to `localStorage` (`pf-lang`).
- **Light / dark theme** with a no-flash inline `<head>` script that applies the
  persisted choice — or `prefers-color-scheme` — before paint (`pf-theme`); sun /
  moon toggle.
- **Responsive** layout with a dedicated **mobile dropdown menu** (hamburger)
  replacing the inline nav below 640px.
- **Hero photo** shown as a faded right-side backdrop on desktop and a faded
  full-width banner at the top on mobile.
- **Collapsible** experience / education / project / certification cards
  (keyboard accessible).
- **Email reveal modal** with copy-to-clipboard (the address is kept out of the
  raw markup).

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static output in dist/
pnpm preview    # preview the production build
```

## Project structure

```
public/
  favicon.svg          computer-icon favicon
  flags/               th.png, uk.png (language badges)
  Profile.jpg          hero photo
  *.pdf                linked reports / project documents
src/
  data/resume.ts       all content (typed bilingual strings + card data)
  styles/global.css    Tailwind entry: @import, tokens, @theme mapping, utilities
  lib/fontawesome.ts    Font Awesome icon registration
  layouts/Base.astro    document shell, fonts, FA styles, no-flash theme script
  pages/index.astro     mounts <Portfolio client:load />
  components/
    Portfolio.tsx       React island root — owns lang/theme/modal state + context
    AppContext.ts       shared context (current language, openEmail)
    Header.tsx          fixed nav + language / theme toggles + mobile menu
    Hero.tsx            intro, stats, hero photo
    Experience.tsx  Education.tsx  Projects.tsx  Certifications.tsx
    Skills.tsx  Languages.tsx  Contact.tsx  Footer.tsx
    Section.tsx  CollapsibleCard.tsx  DetailsToggle.tsx  CardLink.tsx
    EmailModal.tsx      copy-to-clipboard email reveal
```

## Styling

Utility classes live in the components. The design tokens (`--accent`, `--surface`,
`--ink`, shadows, …) are defined in [`src/styles/global.css`](src/styles/global.css)
and flip under `html.dark`; they're exposed to Tailwind via `@theme`, giving
utilities like `bg-surface`, `text-ink-2`, `border-accent-line` and `shadow-soft`.
A few decorative pieces (dashed rules, the hero photo fades) are custom `@utility`
helpers in the same file.

## Hero photo

The hero photo lives at `public/Profile.jpg` and is referenced by the
`hero-photo-bg` (desktop, right side) and `hero-photo-bg-mobile` (mobile, top)
utilities in `src/styles/global.css`, each paired with a matching `hero-fade*`
gradient. To swap it, replace that file — or update the `background-image` URLs.

## Editing content

All copy and data live in [`src/data/resume.ts`](src/data/resume.ts). Bilingual
fields are `{ en, th }` objects; English-only fields (bullet points, titles) are
plain strings. The `pick()` helper selects the active language at render time.
