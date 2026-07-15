# Civic Risk Advisory — Design System

A brand and document design system for **Civic Risk Advisory LLC (CRA)** — the independent insurance-advisory practice of **DJ Falkson, FCAS, MAAA**. CRA bridges insurance outcomes and the upstream forces that shape them (climate risk, land use, regulation, market structure), combining operator depth with a public-interest lens. Unlike actuarial consultancies built around carrier engagements, CRA serves the institutions on the *other* side of the table.

This is a **document / identity system**, not an app UI. Its purpose is visual consistency across one-pagers, capability statements, invoices, letterhead, business cards, and slide decks. Everything here derives from the CRA Brand Style Guide and three real capability one-pagers.

---

## Sources

All source material lives in `uploads/`:

- `uploads/CRA_Brand_Style_Guide.md` — the authoritative brand guide (colors, type, layout, tone). Everything in this system traces back to it.
- `uploads/CRA_OnePager_V1.2_PrivateSector.pdf` — capability one-pager, private-sector audience (startups, MGAs, carriers).
- `uploads/CRA_OnePager_V2.1_PublicSector.pdf` — public-sector audience (policy leaders, agencies).
- `uploads/CRA_OnePager_V3.1_ResearchAdvocacy.pdf` — research & advocacy audience.

No Figma file or codebase was provided.

---

## Identity & boilerplate

Canonical strings — use these exactly in every document, component default, and generated asset. Machine-readable copy lives in **`brand.constants.js`** (single source of truth).

- **Entity:** Civic Risk Advisory LLC (a New York LLC, founded February 2026). Wordmark/short: *Civic Risk Advisory*. Domain: **civicriskadvisory.com**.
- **Person:** **DJ Falkson** — the display name everywhere (not "Daniel (DJ) Falkson"). With credentials in signatures/bylines: **DJ Falkson, FCAS, MAAA**.
- **Title:** **Founder & Principal** (client-facing); **Managing Member** on legal signature blocks.
- **Contact:** **dj.falkson@civicriskadvisory.com** · (703) 862-4045 · LinkedIn · 444 E 82nd St Apt 34E, New York, NY 10028.
- **Footer (short):** `Civic Risk Advisory LLC · dj.falkson@civicriskadvisory.com · (703) 862-4045`. **Proposals** add a `Confidential · [Month Year]` marker and `N / total` page numbers.
- **Invoices:** number `CRA-YYYY-###`; **Net 15** retainer / **Net 30** project; 1.5%/mo late interest; bank JPMorgan Chase.

---

## CONTENT FUNDAMENTALS

How CRA writes.

**Voice.** Warm but substantive — not corporate, not casual. Practitioner-grounded: DJ always speaks from *inside* insurance companies, never as an outside observer ("built and led Lemonade's global actuarial pricing function as its first actuary"). Bridge-building: connects insurance operations to policy, tech to regulation, industry to public interest. Direct: leads with the *problem the audience faces*, then establishes credibility. Non-partisan: surfaces incentives and tradeoffs without taking political positions.

**Person & address.** Mixed and deliberate. Marketing/about copy is third-person or agentless ("Actuarial leader with over a decade of experience…"). Where the reader is addressed it is second person ("Whether you're launching a new program… you need advisors with operating experience"). First person appears sparingly in the public/research variants ("informs how I think about…"). Never "we" — CRA is one principal, not a faceless firm.

**Casing.** Sentence case for body and taglines. Section headers are **UPPERCASE**, tracked (ABOUT · THE CHALLENGE · WHAT AN ENGAGEMENT LOOKS LIKE · SELECTED WRITING & SPEAKING). The wordmark is spaced uppercase. Title Case only for proper nouns and publication titles.

**Punctuation.** Em-dashes for asides and parenthetical precision. Spaced middots (` · `) as separators in footers and metadata. Curly quotes on article titles. Serial commas.

**Concreteness.** Concrete over abstract — "rating plan design," "rate filing requirements," "catastrophe modeling," not "regulatory challenges." Real numbers when earned ("$1B in premium growth," "a team of 20+"). Credentials stated plainly and once (FCAS; M.S. Analytics, Georgia Tech).

**Structure of a one-pager.** Tagline → ABOUT (who he is, from the inside) → THE CHALLENGE (the reader's problem) → WHAT AN ENGAGEMENT LOOKS LIKE (labeled bullets) → availability note (italic) → SELECTED WRITING & SPEAKING.

**Avoid.** Corporate buzzwords ("synergy," "leverage," "best-in-class"), generic consultant-speak ("we help companies optimize…"), academic overwriting, partisan framing. **No emoji** — ever.

**Example (public-sector tagline):** "Insurance expertise applied to affordability, resilience, and public policy."

---

## VISUAL FOUNDATIONS

The look: warm, grounded, editorial. Print-derived, not app-derived. "Not McKinsey."

**Color.** A warm, muted palette drawn from DJ's personal style. Navy `#1B2A4A` (bands, headings), Maroon `#7A2E3B` (stripes, bars, bullets, links), Soft Maroon `#A8566A` (wordmark on dark), Olive `#5C6B4F` (writing/speaking bullets, subtle accents). Backgrounds are **Warm Off-White `#FAF7F3`** — never pure white — with Cream `#F0EBE3` dividers. Text is `#2A2A2A` ink, never pure black. Strictly avoided: pure black, pure white, bright/saturated reds, oranges, blues, and cool corporate blue-grays.

**Type.** The **IBM Plex** superfamily carries the whole system — one coherent family across three roles: **Plex Serif** for names, titles, and hero display (the editorial, published-author voice); **Plex Sans** for body, section labels, and the tracked-caps wordmark; **Plex Mono** for figures, tables, and code (the numerals an actuary lives in). Brand expression comes from weight, case, and tracking. SemiBold 600 for names/headings and bullet labels; Regular 400 body; Italic for taglines and availability notes; Light 300 for subtitles. Uppercase section labels use 0.14em tracking; the wordmark uses 0.34em. Plex is open-source and on Google Fonts, so it loads on the web and **embeds into PDFs identically** — removing the old Montserrat/Calibri split. Only editable `.docx` needs a system fallback, declared in the font stacks: **Georgia** (serif), **Calibri / Segoe UI** (sans), **Consolas** (mono). For editable Word, either embed fonts (Options → Save → Embed fonts) or accept the fallback.

**Backgrounds.** Solid warm off-white. **No gradients, no photographic backgrounds, no textures, no patterns.** The only large color fields are the navy header/footer bands. Restraint is the aesthetic.

**Structural motifs (the signature).**
- A **5px maroon stripe** runs full-height down the left edge of every page.
- A **navy header band** opens the document (headshot, name, wordmark, tagline, contact).
- A **navy footer bar** closes it, with a 2px maroon accent rule on top and centered light CTA text.
- **Section headers** carry a 3×14px maroon left bar.
- **Cream hairline dividers** (1px) separate sections.

**Bullets.** Two kinds, each with meaning: small filled **maroon squares** for engagement/service bullets (labeled `Label: description`, label SemiBold Navy); small round **olive dots** for writing & speaking credits.

**Corners.** Near-square — this is print language. Radii top out at ~6px for on-screen cards; document pages and bands are square-cornered. The only circle is the headshot.

**Cards / elevation.** When cards are used on screen, they sit just above the warm page on white with subtle, warm-toned navy shadows (`--shadow-sm/md/lg`, e.g. `0 4px 16px rgba(27,42,74,0.08)`). No heavy borders; hairlines only.

**Borders.** Hairlines in cream or light gray. Never heavy black rules. Table header rows are navy with white text; alternating rows use cream.

**Imagery.** Essentially none beyond a single circle-cropped headshot with a 2.5px white ring. No stock photography, no illustration, no iconographic imagery.

**Motion & interaction.** Quiet and professional. Short fades (120–200ms) on the standard ease `cubic-bezier(0.4,0,0.2,1)`. No bounce, no infinite loops. Hover darkens the accent (`--accent-hover`); press deepens it further (`--accent-press`). Navy elements darken slightly on hover. No shrink/scale press effects on document elements.

**Transparency & blur.** Not used. Solid fields only. (The one exception: subtle low-opacity light borders on the interactive toolbar in the one-pager kit.)

**Layout.** Single-column documents — no sidebars. Generous margins (left 0.7in, right 0.6in on the one-pager). US Letter is the working page (816×1056 @ 96dpi on screen).

---

## DATA VISUALIZATION

Charts follow a discipline separate from brand accents. The palette extends the brand with a warm **ochre** `#C0873E` and a muted **slate teal** `#3F6E7D` so a full chart still reads as CRA. Tokens live in `tokens/dataviz.css`; a portable copy (JSON + matplotlib / Plotly / Streamlit code) lives in `dataviz/` for use outside this tool (Claude Code, notebooks, dashboards).

- **Categorical (≤6, in order):** Navy · Maroon · Olive · Ochre · Slate Teal · Soft Maroon — ordered most-different-first. Beyond 6, group or facet.
- **Sequential (“risk/intensity”):** single-hue maroon ramp, light → deep.
- **Diverging (“olive ↔ maroon”):** favorable → cream-neutral → adverse.
- **Single series** is Navy; reserve Maroon for the headline/alert series. Axis is Navy; gridlines are warm-light `#E4DED4`, never black.
- **Line graphs:** default stroke 2.5px, emphasis 3px (+ markers at low density), secondary 1.75px; shaded area ~12% opacity. Labels in Plex Mono/Sans, titles in Plex Serif.
- **Never encode meaning by hue alone** — pair with labels, position, or dashes (grayscale + color-vision safe).

---

## ICONOGRAPHY

CRA has **almost no iconography**, and that is intentional. There is no icon font, no SVG icon set, no Lucide/Heroicons dependency.

- **Contact glyphs** are **Unicode characters**, rendered inline: ✉ (`\u2709`) for email, ☎ (`\u260E`) for phone. (Where a font lacks symbol glyphs — e.g. in ReportLab PDFs — register DejaVu Sans for these, per the style guide.) On the web the system font's glyph is used. See `ContactLine`.
- **LinkedIn** is shown as a tiny **"in" badge** (text set in a rounded square), followed by the word "LinkedIn" — never the raw URL.
- **Bullets** are geometric shapes, not icons: maroon squares (engagements) and olive dots (credits).
- **No emoji**, anywhere.
- **No decorative icons.** If a future need arises for a UI icon set, substitute a thin-stroke set (e.g. Lucide) via CDN and document it here — but the brand's baseline is glyph-free.

**The mark: The Span.** CRA's logo is a **Hell Gate–style bridge** — a Hell Gate is visible from DJ's window, it's unmistakably NYC, and it carries the brand's core idea of *bridging* insurance markets and public policy. An oxblood **steel through-arch** (Hell Gate is genuinely painted that color) springs from two masonry piers and crests over the deck; the arch feet bind flush into the pier bases. The arch is always Maroon `#7A2E3B`; the piers/deck/hangers are light (`#DCE4EE`) on navy or Navy on warm. Use the **`Logo`** component (`variant`: `lockup` primary · `mark` · `wordmark` · `stacked`) or the standalone SVGs in `assets/logo/`. The horizontal **lockup with the mark left of the wordmark** is the primary lockup; the compact descriptor line is **“Insurance · Policy · Resilience.”** The `Wordmark` alone remains valid for tight spots and inside the lockups.

---

## Components

Reusable React primitives, in `components/<group>/`. Each has a `.jsx`, `.d.ts`, `.prompt.md`, and its group has one `@dsCard` HTML. Import via `const { Name } = window.CivicRiskAdvisoryDesignSystem_40ae19`.

**brand/**
- **Logo** — the CRA identity: the Span (Hell Gate) bridge mark + wordmark. `variant` (lockup / mark / wordmark / stacked), `tone`, `descriptor`. Also exports **BridgeMark** (the symbol alone).
- **Wordmark** — the spaced-caps CRA wordmark; used inside lockups and where a mark won't fit. Light/dark tones.
- **HeaderBand** — the navy identity band opening a document (headshot, name, wordmark, tagline, contacts).
- **FooterBar** — the navy footer band with maroon accent rule and centered CTA.

**layout/**
- **SectionHeader** — uppercase tracked navy heading with a maroon left bar.
- **Divider** — cream hairline rule between sections.
- **AccentStripe** — the full-height maroon left-edge page stripe.

**content/**
- **Bullet** — square-maroon-marker list item, with optional SemiBold-navy label.
- **WritingCredit** — round-olive-marker credit item with optional italic source.
- **ContactLine** — icon + label contact row (email/phone/LinkedIn).

**media/**
- **Headshot** — circle-cropped portrait with white ring; initials fallback.

---

## UI Kits

- **ui_kits/one_pagers/** — the CRA **capability one-pager**, recreated as an interactive document with all three audience variants (Private Sector, Public Sector, Research & Advocacy) selectable from a toolbar. Composed entirely from the primitives above. Copy is verbatim from the source PDFs (`data.js`). Entry: `ui_kits/one_pagers/index.html`.

---

## Index / Manifest (root)

- `styles.css` — **the** entry stylesheet consumers link; `@import`s only.
- `brand.constants.js` — canonical identity & boilerplate strings (single source of truth).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `dataviz.css`.
- `components/` — `brand/` (incl. `Logo`), `layout/`, `content/`, `media/`.
- `assets/` — `headshot.jpg` + `headshot-alt.jpg`, `fonts/` (IBM Plex TTFs), `logo/` (mark, reversed, lockups, favicons as SVG).
- `ui_kits/one_pagers/` — the interactive one-pager recreation.
- `dataviz/` — portable chart palette: `cra_palette.json` + matplotlib / Plotly / Streamlit code (for Claude Code, notebooks, dashboards).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand, Data Viz) shown in the Design System tab, plus `document-suite.md` (anatomy notes for the full document suite).
- `explorations/` — `Design Decisions.html` (font / data-viz / contrast) and `Logo Concepts v2.html` (logo direction exploration).
- `SKILL.md` — Agent-Skills-compatible entry point.
- `readme.md` — this file.
- `uploads/` — original brand guide, one-pager PDFs, and real CRA documents (RFP proposal, contract, invoice).

---

## Caveats / substitutions

- **Headshot present.** `assets/headshot.jpg` (square, 1030×1067) is DJ's primary headshot — wired into the `HeaderBand` and the one-pager kit. A second informal photo (`assets/headshot-alt.jpg`, calculator + headphones) is available for less formal contexts. The `Headshot` component still falls back to a Soft Maroon "DJ" monogram when no `src` is passed.
- **Logo / mark.** CRA's mark is **The Span** — a Hell Gate–style bridge (see Iconography). Live via the `Logo` component; standalone SVGs (mark, reversed, horizontal + stacked lockups, favicon, favicon-simple) in `assets/logo/`.
- **Fonts.** The **IBM Plex** superfamily (Serif / Sans / Mono) loads on the web via `@import` in `tokens/fonts.css` (Google Fonts). For offline document generation (PDF / DOCX / matplotlib in a Python sandbox), the TTFs are bundled in **`assets/fonts/`** with registration snippets in `assets/fonts/fonts.md`. Plex is open-source (SIL OFL) and embeds into PDFs identically. System fallbacks (Georgia / Calibri / Consolas) cover editable `.docx`. This replaces the earlier Montserrat setup and its PDF-vs-Word split.
- **No slide-deck samples.** The style guide describes a deck treatment, but no deck template was provided, so none was fabricated. Happy to build a CRA slide template on request.
