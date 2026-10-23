# CLAUDE.md

Single-page static site for the band Swimming with the Jaguars. See `README.md` for the page's sections and design.

## Deployment

The site auto-deploys to Netlify. **Every push to `main` goes straight to the live site** at https://swimmingwiththejaguars.com; there is no staging step and no build. Check changes locally before pushing to `main`.

After pushing, give Netlify about 5 minutes, then check the live site to confirm the change deployed (e.g. fetch the changed files and compare them with the repo, and load the page to look for console errors).

## Layout

- `index.html`: markup only. Keep styles in `css/style.css` and scripts in `js/main.js`; don't add `<style>`, `<script>` blocks, or `style=""` attributes.
- `images/`: covers, halftone portraits, logos, and favicon. Some files are source photos that the page doesn't reference.
- No build tooling, package manager, or tests. Fonts come from Google Fonts; platform icons are inline SVG (Simple Icons). Shared icons live in the hidden `.sprite` SVG at the top of `<body>` and are used with `<use href="#i-…">`.

## Page conventions

- Headlines are "wood type" bands: an element with `data-fit` (and `data-max`, the max font size in px) wrapping a `.fit` span. `js/main.js` sizes the font so the text fills the band's width. `.fit.reg` gets an off-register second ink pass from `data-text`, which must match the visible text.
- Sections with `.press` get `.inked` once they scroll into view, which triggers the print-strike animation.
- Colors and fonts are CSS custom properties on `:root` in `css/style.css` (e.g. `--ink`, `--yellow`, `--bone`).

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`. Opening `index.html` directly from disk also works.
