Project: **Fysio1 static website**

### Project Overview
- Lightweight, framework-free marketing site for a Norwegian physiotherapy clinic.
- Root `index.html` plus dedicated folders for each section (Behandlingar, Terapeutar, osv.).
- Shared assets live under `sass/`, `css/`, `js/`, `img/`; contact form posts to `mail.php` (requires PHP-capable hosting).
- Always prioritize stability, trust, and the existing visual identity; large redesigns require explicit client approval.

### Repository Structure
- `index.html` – homepage with hero, info, contact, footer.
- `/<Section>/index.html` – per-section static pages (`Behandlingar`, `Terapeutar`, `Timebestilling`, `Fasilitetar`, `Fysioavdeling`, `Lokale`, `Treningsstudio`, `Kontakt`).
- `sass/` – SCSS source (`style.scss`, `_colors.scss`, `_mixins.scss`, `_components.scss`).
- `css/style.css` & `css/style.css.map` – compiled output; never edit directly.
- `js/script.js` – single vanilla JS bundle shared by all pages.
- `img/` – background imagery, staff photos, logos; confirm usage before altering or pruning.
- `mail.php` – simple POST handler for the contact form (if supported by hosting).

### Source-of-Truth Styling Files
- `sass/style.scss` orchestrates all styling and imports partials; treat it as the only editable stylesheet.
- `_colors.scss` defines palette tokens; extend here when new brand colors are formally approved.
- `_mixins.scss` holds reusable mixins (e.g., `burgerBtn`, `contactForm`). Add new mixins here instead of repeating declarations.
- `_components.scss` is empty today; reuse for future component-specific snippets if needed.

### Build / Compile Commands (Sass → CSS)
Run Sass locally whenever `sass/` changes, then commit both the updated SCSS and compiled CSS/map:

```bash
sass sass/style.scss css/style.css --source-map --style=expanded
```

Use the existing CLI `sass` (Dart Sass). Do **not** introduce new build tooling or pipelines.

### HTML Rules
- Keep structure semantic and mobile-first; reuse the existing nav/footer/contact layouts.
- Set accurate `lang="no"` (or locale variant) and unique `<title>`/`<meta name="description">` per page.
- Never inline large styles; rely on the shared CSS.
- Preserve current layout hierarchy—hero, info blocks, CTA buttons—unless a bug fix requires a minimal adjustment.
- Maintain clear booking/contact paths: nav links, CTA buttons, contact section, map embed.
- Avoid placeholder anchors (`href=""` or `#`)—use real URLs or remove the link.

### CSS / SCSS Rules
- Modify only `sass/*.scss`; recompile afterwards.
- Use variables from `_colors.scss` and mixins from `_mixins.scss` to stay on-brand.
- Favor mobile-first declarations; leverage the existing media query breakpoints at 700px, 768px, 992px, 1200px, 1405px, 1600px.
- Keep selectors scoped to existing class patterns; avoid ID-based styling unless already in use.
- Document only non-obvious sections; keep SCSS readable and grouped by component (nav, hero, services, therapists, etc.).

### JavaScript Rules
- Only touch `js/script.js`; stay with vanilla ES5/ES6 (no new dependencies or bundlers).
- Guard DOM queries (`document.querySelector`) so shared scripts do not crash on pages lacking certain elements (e.g., `infoText`).
- Maintain accessible interactions: update `aria-expanded`, keep keyboard handlers, and ensure click targets remain intuitive.
- Keep scripts performant and small; no global event spam or heavy animations.

### SEO Rules
- Unique titles and meta descriptions per page; keep copy in Norwegian and aligned with on-page content.
- Maintain a single `<h1>` per page, then descending heading levels.
- Ensure internal links are descriptive (e.g., “Bestill time” instead of “Klikk her”).
- Add canonical URLs and open graph tags when modifying head sections.
- Remove or replace broken/empty external links immediately.

### Accessibility Rules
- Provide `aria-label` and `aria-controls` for interactive controls (burger menu, accordions, toggles).
- Keep focus states visible; avoid “outline: none” unless replaced with an accessible alternative.
- Add `title` attributes to embedded iframes and ensure forms have associated labels.
- Use semantic markup for lists, headings, and buttons; avoid div-only controls.
- Make sure any new content remains readable (sufficient contrast, large enough hit areas).

### Image / Performance Rules
- Reuse existing assets when possible; new images must be optimized (compressed JPEG/WebP) before committing.
- Store media in `img/`; reference via relative paths already used in CSS.
- When adding background images, set appropriate `background-size`/`position` for mobile.
- Do not add autoplay video, carousels, or heavy libraries.
- Always verify that large hero images remain performant on mobile (consider lazy loading for inline `<img>` if introduced).

### Content / Medical Wording Rules
- All copy must stay in Norwegian (Nynorsk tone consistent with current text).
- Do **not** invent or exaggerate medical claims, treatment outcomes, therapist qualifications, pricing, or guarantees; stick to provided facts.
- Keep tone professional, trustworthy, and clear about contact/booking steps.
- Highlight availability, services, and collaboration details without promising specific clinical results.

### File Deletion Rules
- Never delete or rename files silently. If removal is truly necessary, document the rationale in the PR/summary and verify no references remain (`grep`/search).
- For suspected unused assets, confirm via repository-wide search and seek approval before deletion.

### Manual QA Checklist
- View homepage and every section page on both mobile (simulate ≤375px) and desktop (≥1200px).
- Toggle burger menu, desktop nav, hero CTA, services accordion, therapists cards, and booking buttons.
- Submit contact form with dummy data (when backend available) or at least confirm form validation and action URL.
- Check console for JavaScript errors on each page.
- Verify map iframe loads and navigation links resolve correctly.
- Inspect layout for regressions introduced by the change (spacing, typography, backgrounds).

### Before-Finish Checklist
- Re-run the Sass compile command and ensure `css/style.css` and `css/style.css.map` reflect the latest SCSS edits.
- Lint/format any touched HTML/JS manually (consistent tabs/spaces, attribute order).
- Re-test affected interactions/pages per the QA checklist.
- Run `git status` to confirm only intentional files changed; no stray `.DS_Store` or editor artifacts.
- Prepare a concise summary of changes plus any verification steps taken (tests, manual checks).
- Highlight any follow-up actions (e.g., backend configuration) in the final note.

Keep every change small, reviewable, and justified—this is a production-facing clinic site.
