# Pemapol Sripratipbundit — Portfolio

Bilingual (EN / TH) personal portfolio, built with **Astro** + **React** +
**TypeScript** + **Tailwind CSS v4**. Ported from the Claude Design project
_"Pemapol Portfolio.dc.html"_.

## Stack

- [Astro](https://astro.build) — static site framework; renders the document shell
  and server-renders the portfolio for a fast first paint.
- [React](https://react.dev) — a single hydrated island (`Portfolio.tsx`) drives all
  interactivity: language switch, light/dark theme, collapsible cards, mobile menu
  and the email modal.
- [TypeScript](https://www.typescriptlang.org) — fully typed components and content.
- [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/vite`) — utility-first
  styling. Design tokens live as CSS variables and are mapped into Tailwind's theme
  with `@theme`, so every color/shadow utility is light/dark aware automatically.
- [Font Awesome](https://fontawesome.com) — icons throughout (section headers, contact
  cards, hero, theme toggle, brand mark).

## Features

- **Bilingual** English / Thai toggle (persisted to `localStorage`).
- **Light / dark theme** with a no-flash inline script (persisted, respects
  `prefers-color-scheme`); sun / moon Font Awesome toggle.
- **Responsive** with a dedicated **mobile dropdown menu** (hamburger) replacing the
  inline nav below 640px.
- **Collapsible** experience / education / project / certification cards
  (keyboard accessible).
- **Email reveal modal** with copy-to-clipboard (address kept out of raw markup).

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
  favicon.svg       computer-icon favicon
  flags/            uk.png, th.png (language badges)
  Profile.jpg       hero photo
src/
  data/resume.ts    all content (typed bilingual strings + card data)
  styles/global.css Tailwind entry: @import, tokens, @theme mapping, decorative utilities
  lib/fontawesome.ts  Font Awesome core config
  layouts/Base.astro  document shell, fonts, FA styles, no-flash theme script
  pages/index.astro   mounts <Portfolio client:load />
  components/        React island + section components (.tsx)
```

## Styling

Utility classes live in the components. The design's tokens (`--accent`, `--surface`,
`--ink`, shadows, …) are defined in `src/styles/global.css` and flip under `html.dark`;
they're exposed to Tailwind via `@theme`, giving utilities like `bg-surface`,
`text-ink-2`, `border-accent-line` and `shadow-soft`. A few decorative pieces
(dashed rules, the hero photo fade) are custom `@utility` helpers in the same file.

## Hero photo

The hero background photo lives at `public/Profile.jpg` and is referenced by the
`hero-photo-bg` utility in `src/styles/global.css`. To swap it, replace that file
(or update the `background-image` URL).

## Editing content

All copy and data live in [`src/data/resume.ts`](src/data/resume.ts). Bilingual
fields are `{ en, th }` objects; English-only fields (bullet points, titles) are
plain strings, matching the source design.
