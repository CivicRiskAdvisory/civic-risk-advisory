/* @ds-bundle: {"format":4,"namespace":"CivicRiskAdvisoryDesignSystem_40ae19","components":[{"name":"CRA","sourcePath":"brand.constants.js"},{"name":"FooterBar","sourcePath":"components/brand/FooterBar.jsx"},{"name":"HeaderBand","sourcePath":"components/brand/HeaderBand.jsx"},{"name":"BridgeMark","sourcePath":"components/brand/Logo.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Bullet","sourcePath":"components/content/Bullet.jsx"},{"name":"ContactLine","sourcePath":"components/content/ContactLine.jsx"},{"name":"WritingCredit","sourcePath":"components/content/WritingCredit.jsx"},{"name":"AccentStripe","sourcePath":"components/layout/AccentStripe.jsx"},{"name":"Divider","sourcePath":"components/layout/Divider.jsx"},{"name":"SectionHeader","sourcePath":"components/layout/SectionHeader.jsx"},{"name":"Headshot","sourcePath":"components/media/Headshot.jsx"}],"sourceHashes":{"brand.constants.js":"837fca3dcb7e","components/brand/FooterBar.jsx":"4d3d10e79ab4","components/brand/HeaderBand.jsx":"ec0c6a518f12","components/brand/Logo.jsx":"2bed75aac29e","components/brand/Wordmark.jsx":"9a7076f47110","components/content/Bullet.jsx":"3cfd654fddf5","components/content/ContactLine.jsx":"5ec16d6a0e2e","components/content/WritingCredit.jsx":"16782e400431","components/layout/AccentStripe.jsx":"92cb782ca273","components/layout/Divider.jsx":"44ba69e32d1b","components/layout/SectionHeader.jsx":"5462f5e3b9e0","components/media/Headshot.jsx":"cf173cd34001","ui_kits/one_pagers/OnePager.jsx":"a8d80fe7a11d","ui_kits/one_pagers/data.js":"3b8ddc2f52b0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CivicRiskAdvisoryDesignSystem_40ae19 = window.CivicRiskAdvisoryDesignSystem_40ae19 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// brand.constants.js
try { (() => {
/* ============================================================
   CRA canonical identity & boilerplate — single source of truth.
   Use these exact strings in every document, component default, and
   generated asset. Importable in JS; mirrored in readme.md for humans.
   ============================================================ */
const CRA = {
  entity: 'Civic Risk Advisory LLC',
  entityShort: 'Civic Risk Advisory',
  wordmark: 'Civic Risk Advisory',
  // set in tracked caps as the wordmark
  domain: 'civicriskadvisory.com',
  // Logo — "The Span": a Hell Gate–style bridge mark (oxblood arch, masonry
  // piers, deck). Live via the Logo component; standalone SVGs in assets/logo/.
  logo: {
    concept: 'The Span (Hell Gate bridge)',
    descriptor: 'Insurance · Policy · Resilience',
    // compact lockup sub-line
    mark: 'assets/logo/cra-mark.svg',
    // navy structure, for light bg
    markReversed: 'assets/logo/cra-mark-reversed.svg',
    // light structure, for navy bg
    lockupHorizontal: 'assets/logo/cra-lockup-horizontal.svg',
    // primary lockup
    lockupStacked: 'assets/logo/cra-lockup-stacked.svg',
    favicon: 'assets/logo/cra-favicon.svg',
    faviconSimple: 'assets/logo/cra-favicon-simple.svg'
  },
  person: 'DJ Falkson',
  // display name — NOT "Daniel (DJ) Falkson"
  credentials: 'FCAS, MAAA',
  // append to name in signatures/bylines
  nameFull: 'DJ Falkson, FCAS, MAAA',
  title: 'Founder & Principal',
  // client-facing title
  titleLegal: 'Managing Member',
  // signature blocks on contracts

  email: 'dj.falkson@civicriskadvisory.com',
  phone: '(703) 862-4045',
  linkedin: 'https://linkedin.com/in/dj-falkson-a836758',
  address: '444 E 82nd St Apt 34E, New York, NY 10028',
  founded: 'February 2026',
  jurisdiction: 'New York',
  // NY LLC

  taglines: {
    general: 'Insurance expertise applied to affordability, resilience, and public policy',
    private: 'Insurance expertise for ventures navigating risk, regulation, and scale',
    research: 'Practitioner perspective for organizations improving how insurance markets work'
  },
  // Boilerplate strings
  footerShort: 'Civic Risk Advisory LLC · dj.falkson@civicriskadvisory.com · (703) 862-4045',
  confidential: monthYear => `Civic Risk Advisory LLC · Confidential · ${monthYear}`,
  // Invoice conventions
  invoice: {
    numberFormat: 'CRA-YYYY-###',
    // e.g. CRA-2026-014
    termsRetainer: 'Net 15',
    termsProject: 'Net 30',
    lateInterest: '1.5% per month',
    bank: 'JPMorgan Chase Bank, N.A.'
  }
};
Object.assign(__ds_scope, { CRA, __ds_default_brand_constants_4c9pjr: CRA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "brand.constants.js", error: String((e && e.message) || e) }); }

// components/brand/FooterBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FooterBar — the navy footer band that closes a CRA document. A thin maroon
 * accent rule sits at the top; centered light text carries the CTA + contact.
 */
function FooterBar({
  children = "Let's talk about how I can help.  ·  dj.falkson@civicriskadvisory.com  ·  (703) 862-4045  ·  LinkedIn",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--surface-band)',
      borderTop: '2px solid var(--accent)',
      padding: '9px 24px',
      textAlign: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-regular)',
      color: 'var(--text-on-band-2)',
      letterSpacing: '0.01em'
    }
  }, children));
}
Object.assign(__ds_scope, { FooterBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/FooterBar.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wordmark — the CRA entity name in spaced, tracked capitals (IBM Plex Sans
 * SemiBold). On dark bands it is Soft Maroon; on light it is Navy. Pairs with
 * the bridge mark inside `Logo`; use alone where a mark won't fit.
 */
function Wordmark({
  tone = 'light',
  // 'light' (navy on warm bg) | 'dark' (soft maroon on navy)
  size = 'md',
  // 'sm' | 'md' | 'lg'
  as: Tag = 'div',
  style,
  ...rest
}) {
  const sizes = {
    sm: '10px',
    md: '12px',
    lg: '15px'
  };
  const color = tone === 'dark' ? 'var(--accent-soft)' : 'var(--cra-navy)';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-brand)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: sizes[size] || sizes.md,
      letterSpacing: 'var(--ls-wordmark)',
      textTransform: 'uppercase',
      color,
      lineHeight: 1,
      // spaced-caps read best with a hair of right offset to balance tracking
      paddingRight: 'var(--ls-wordmark)',
      ...style
    }
  }, rest), "Civic Risk Advisory");
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Palette (matches tokens exactly)
const NAVY = '#1B2A4A',
  MAROON = '#7A2E3B',
  LIGHT = '#DCE4EE';
const qy = (t, a, c, b) => (1 - t) * (1 - t) * a + 2 * (1 - t) * t * c + t * t * b;

/**
 * BridgeMark — the CRA mark: a Hell Gate–style steel through-arch (oxblood),
 * masonry piers, deck, and hangers. The arch springs from inside each pier and
 * emerges at the deck junction, so its feet bind flush to the towers.
 */
function BridgeMark({
  tone = 'dark',
  height = 44,
  title = 'Civic Risk Advisory',
  style,
  ...rest
}) {
  const struct = tone === 'dark' ? LIGHT : NAVY; // towers, deck, hangers
  const VW = 240,
    cxm = 120,
    deckY = 86,
    twBot = 104,
    twTop = 54,
    twW = 17,
    tx1 = 24,
    tx2 = 216;
  const yBase = twBot - 4,
    sL = tx1,
    sR = tx2,
    crown = 36,
    ctrlUp = 2 * crown - yBase;
  const hangers = [];
  for (let i = 1; i <= 9; i++) {
    const x = sL + (sR - sL) * i / 10,
      t = (x - sL) / (sR - sL),
      y = qy(t, yBase, ctrlUp, yBase);
    if (y < deckY - 3) hangers.push([+x.toFixed(1), +y.toFixed(1)]);
  }
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: `0 0 ${VW} 120`,
    height: height,
    role: "img",
    "aria-label": title,
    style: {
      display: 'block',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: `M${sL},${yBase} Q${cxm},${ctrlUp} ${sR},${yBase}`,
    fill: "none",
    stroke: MAROON,
    strokeWidth: "5"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: struct,
    strokeWidth: "1.8"
  }, hangers.map(([x, y], i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: x,
    y1: y,
    x2: x,
    y2: deckY
  }))), [tx1, tx2].map((cx, i) => /*#__PURE__*/React.createElement("g", {
    key: i,
    fill: struct
  }, /*#__PURE__*/React.createElement("rect", {
    x: cx - twW / 2,
    y: twTop,
    width: twW,
    height: twBot - twTop,
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: cx - twW / 2 - 2,
    y: twTop - 2,
    width: twW + 4,
    height: "5",
    rx: "1.5"
  }))), /*#__PURE__*/React.createElement("rect", {
    x: "12",
    y: deckY,
    width: "216",
    height: "5",
    rx: "1.5",
    fill: struct
  }));
}

/**
 * Logo — the composed CRA identity. `lockup` (mark left of wordmark) is the
 * primary. Also `mark` (bridge only), `wordmark` (type only), and `stacked`.
 */
function Logo({
  variant = 'lockup',
  tone = 'dark',
  descriptor,
  height = 44,
  style,
  ...rest
}) {
  const descColor = tone === 'dark' ? 'var(--text-on-band-2)' : 'var(--text-muted)';
  const descEl = descriptor ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-medium)',
      fontSize: '9.5px',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: descColor,
      marginTop: '5px'
    }
  }, typeof descriptor === 'string' ? descriptor : 'Insurance · Policy · Resilience') : null;
  if (variant === 'mark') return /*#__PURE__*/React.createElement(BridgeMark, _extends({
    tone: tone,
    height: height,
    style: style
  }, rest));
  if (variant === 'wordmark') return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    tone: tone,
    size: "lg"
  }), descEl);
  if (variant === 'stacked') return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(BridgeMark, {
    tone: tone,
    height: height
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    tone: tone,
    size: "md"
  }), descEl));

  // lockup — horizontal, mark-left (primary)
  const ruleColor = tone === 'dark' ? 'rgba(220,228,238,0.30)' : 'var(--divider)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '14px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(BridgeMark, {
    tone: tone,
    height: height
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '1px',
      alignSelf: 'stretch',
      background: ruleColor
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    tone: tone,
    size: "md"
  }), descEl));
}
Object.assign(__ds_scope, { BridgeMark, Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/Bullet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Bullet — a square-maroon-marker list item. When `label` is set, the label
 * (through the implicit colon) is SemiBold Navy and the rest is regular body.
 * Renders as an <li>; wrap a group in a plain <ul> with list-style:none.
 */
function Bullet({
  label,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("li", _extends({
    style: {
      position: 'relative',
      listStyle: 'none',
      paddingLeft: '17px',
      marginBottom: '7px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      top: '0.62em',
      width: 'var(--bullet-size)',
      height: 'var(--bullet-size)',
      background: 'var(--bullet)'
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-heading)'
    }
  }, label, ":", ' '), children);
}
Object.assign(__ds_scope, { Bullet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Bullet.jsx", error: String((e && e.message) || e) }); }

// components/content/ContactLine.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const GLYPH = {
  email: '\u2709',
  // ✉
  phone: '\u260E',
  // ☎
  linkedin: 'in' // LinkedIn "in" badge
};

/**
 * ContactLine — an icon + label contact row. Icons are Unicode glyphs
 * (envelope, phone) or the "in" badge for LinkedIn, matching the CRA docs.
 */
function ContactLine({
  type = 'email',
  label,
  href,
  tone = 'dark',
  // 'dark' (on navy) | 'light' (on warm bg)
  style,
  ...rest
}) {
  const color = tone === 'dark' ? 'var(--text-on-band-2)' : 'var(--text-muted)';
  const glyph = GLYPH[type] || GLYPH.email;
  const isBadge = type === 'linkedin';
  const icon = isBadge ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 14,
      height: 14,
      borderRadius: 'var(--radius-sm)',
      background: color,
      color: 'var(--surface-band)',
      fontSize: 8.5,
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1,
      letterSpacing: 0
    }
  }, "in") : /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: 12.5,
      lineHeight: 1,
      width: 14,
      textAlign: 'center'
    }
  }, glyph);
  const content = /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      fontWeight: 'var(--fw-regular)',
      color,
      letterSpacing: '0.01em'
    }
  }, icon, /*#__PURE__*/React.createElement("span", null, label));
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: {
        textDecoration: 'none',
        ...style
      }
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: style
  }, rest), content);
}
Object.assign(__ds_scope, { ContactLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ContactLine.jsx", error: String((e && e.message) || e) }); }

// components/content/WritingCredit.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * WritingCredit — a round-olive-marker list item for writing & speaking
 * credits. Smaller and quieter than a Bullet; supports an italic source /
 * venue suffix.
 */
function WritingCredit({
  children,
  source,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("li", _extends({
    style: {
      position: 'relative',
      listStyle: 'none',
      paddingLeft: '15px',
      marginBottom: '5px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 'var(--lh-snug)',
      color: 'var(--text-secondary)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      top: '0.5em',
      width: 'var(--bullet-alt-size)',
      height: 'var(--bullet-alt-size)',
      borderRadius: 'var(--radius-circle)',
      background: 'var(--bullet-alt)'
    }
  }), children, source && /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--text-muted)'
    }
  }, `, ${source}`));
}
Object.assign(__ds_scope, { WritingCredit });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/WritingCredit.jsx", error: String((e && e.message) || e) }); }

// components/layout/AccentStripe.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AccentStripe — the maroon vertical stripe that runs the full height of a CRA
 * page along its left edge. Render as the first child of a position:relative
 * document container.
 */
function AccentStripe({
  width,
  side = 'left',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      [side]: 0,
      width: width || 'var(--stripe-width)',
      background: 'var(--stripe)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { AccentStripe });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/AccentStripe.jsx", error: String((e && e.message) || e) }); }

// components/layout/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Divider — a cream hairline rule between sections. Full-width by default.
 */
function Divider({
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 'none',
      borderTop: '1px solid var(--divider)',
      margin: '14px 0',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Divider.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeader — an uppercase, tracked Navy heading preceded by a short
 * maroon left bar. The standard divider between one-pager sections.
 */
function SectionHeader({
  children,
  as: Tag = 'h2',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '9px',
      margin: '0 0 8px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-section)',
      letterSpacing: 'var(--ls-section)',
      textTransform: 'uppercase',
      color: 'var(--text-heading)',
      lineHeight: 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 'var(--section-bar-w)',
      height: 'var(--section-bar-h)',
      background: 'var(--accent)',
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/media/Headshot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Headshot — circle-cropped portrait with a white ring, per the CRA header
 * treatment. Falls back to initials on navy when no image is supplied.
 */
function Headshot({
  src,
  initials = 'DJ',
  size = 78,
  ring = 2.5,
  alt = 'Headshot',
  style,
  ...rest
}) {
  const base = {
    width: size,
    height: size,
    borderRadius: 'var(--radius-circle)',
    boxShadow: `0 0 0 ${ring}px #FFFFFF, var(--shadow-sm)`,
    flexShrink: 0,
    ...style
  };
  if (src) {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src,
      alt: alt,
      style: {
        ...base,
        objectFit: 'cover',
        display: 'block'
      }
    }, rest));
  }

  // Initials fallback — soft maroon field, light monogram
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "img",
    "aria-label": alt,
    style: {
      ...base,
      background: 'var(--accent-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: size * 0.36,
      letterSpacing: '0.04em',
      color: 'var(--text-on-band)'
    }
  }, rest), initials);
}
Object.assign(__ds_scope, { Headshot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Headshot.jsx", error: String((e && e.message) || e) }); }

// components/brand/HeaderBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * HeaderBand — the navy identity band that opens every CRA document.
 * Composes headshot, name, wordmark, tagline, and right-aligned contact.
 */
function HeaderBand({
  name = 'DJ Falkson',
  tagline,
  contacts = [],
  // [{ type: 'email'|'phone'|'linkedin', label, href }]
  headshot,
  // image url; omitted → initials fallback
  initials = 'DJ',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      background: 'var(--surface-band)',
      padding: '22px 30px',
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Headshot, {
    src: headshot,
    initials: initials,
    size: 78
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: '27px',
      color: 'var(--text-on-band)',
      lineHeight: 'var(--lh-tight)',
      marginBottom: '5px'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '9px',
      marginBottom: tagline ? '9px' : 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "mark",
    tone: "dark",
    height: 18
  }), /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    tone: "dark",
    size: "md"
  })), tagline && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontStyle: 'italic',
      fontWeight: 'var(--fw-regular)',
      fontSize: '13.5px',
      color: 'var(--text-on-band)',
      lineHeight: 'var(--lh-snug)',
      maxWidth: '46ch'
    }
  }, tagline)), contacts.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '6px',
      flexShrink: 0
    }
  }, contacts.map((c, i) => /*#__PURE__*/React.createElement(__ds_scope.ContactLine, {
    key: i,
    type: c.type,
    label: c.label,
    href: c.href,
    tone: "dark"
  }))));
}
Object.assign(__ds_scope, { HeaderBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/HeaderBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/one_pagers/OnePager.jsx
try { (() => {
/* OnePager — a full CRA capability-statement page, composed entirely from the
   design-system primitives. Reads one audience object from CRA_ONEPAGERS. */
(function () {
  const NS = window.CivicRiskAdvisoryDesignSystem_40ae19;
  const {
    HeaderBand,
    FooterBar,
    AccentStripe,
    SectionHeader,
    Divider,
    Bullet,
    WritingCredit
  } = NS;
  function OnePager({
    audience,
    contacts,
    writing,
    headshot
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: 816,
        // US Letter @ 96dpi
        minHeight: 1056,
        margin: '0 auto',
        background: 'var(--surface-page)',
        boxShadow: 'var(--shadow-lg)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement(AccentStripe, null), /*#__PURE__*/React.createElement(HeaderBand, {
      name: "DJ Falkson",
      tagline: audience.tagline,
      contacts: contacts,
      headshot: headshot,
      initials: "DJ"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '26px 44px 20px 50px',
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(SectionHeader, null, "About"), /*#__PURE__*/React.createElement("p", {
      style: bodyStyle
    }, audience.about), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(SectionHeader, null, "The Challenge"), /*#__PURE__*/React.createElement("p", {
      style: bodyStyle
    }, audience.challenge), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(SectionHeader, null, "What an Engagement Looks Like"), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: '0 0 10px',
        padding: 0
      }
    }, audience.engagement.map((e, i) => /*#__PURE__*/React.createElement(Bullet, {
      key: i,
      label: e.label
    }, e.text))), /*#__PURE__*/React.createElement("p", {
      style: {
        ...bodyStyle,
        fontStyle: 'italic',
        color: 'var(--text-muted)',
        fontSize: 'var(--fs-sm)'
      }
    }, audience.note), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(SectionHeader, null, "Selected Writing & Speaking"), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        padding: 0
      }
    }, writing.map((w, i) => /*#__PURE__*/React.createElement(WritingCredit, {
      key: i,
      source: w.source || undefined
    }, w.text)))), /*#__PURE__*/React.createElement(FooterBar, null));
  }
  const bodyStyle = {
    margin: '0 0 4px',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--fs-body)',
    lineHeight: 'var(--lh-body)',
    color: 'var(--text-body)'
  };
  window.OnePager = OnePager;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/one_pagers/OnePager.jsx", error: String((e && e.message) || e) }); }

// ui_kits/one_pagers/data.js
try { (() => {
/* CRA one-pager content — verbatim copy from the three source PDFs.
   Shared contact + writing credits; per-audience tagline, about, challenge,
   engagement list, and availability note. */
window.CRA_ONEPAGERS = function () {
  const contacts = [{
    type: 'email',
    label: 'dj.falkson@civicriskadvisory.com',
    href: 'mailto:dj.falkson@civicriskadvisory.com'
  }, {
    type: 'phone',
    label: '(703) 862-4045'
  }, {
    type: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/dj-falkson-a836758'
  }];
  const writing = [{
    text: '\u201CSurface Tension: The Growing Gap Between Flood Risk and Flood Insurance\u201D',
    source: 'Actuarial Review (Cover Story, 2026)'
  }, {
    text: '\u201CIndexing the Future: The Rise of Parametric Insurance\u201D',
    source: 'Actuarial Review (Cover Story, 2025)'
  }, {
    text: '\u201CNavigating New Urban Realities: Zoning, Housing Affordability and Insurance\u201D',
    source: 'Actuarial Review (2024)'
  }, {
    text: 'CAS Annual Meeting speaker; CAS Almost Nowhere podcast guest',
    source: ''
  }];
  return {
    contacts,
    writing,
    audiences: {
      private: {
        key: 'private',
        label: 'Private Sector',
        version: 'V1.2',
        tagline: 'Insurance expertise for ventures navigating risk, regulation, and scale',
        about: "Actuarial leader with over a decade of experience inside insurance companies, spanning pricing, portfolio strategy, regulatory engagement, and catastrophe risk across personal and commercial lines in the U.S. and Europe. Most recently built and led Lemonade's global actuarial pricing function as its first actuary, directing a team of 20+ and overseeing more than $1B in premium growth. Now advising insurance ventures and organizations through Civic Risk Advisory. Fellow of the Casualty Actuarial Society; M.S. Analytics, Georgia Tech.",
        challenge: "Insurance startups, MGAs, and specialty carriers face steep learning curves in highly regulated markets. Product concepts that look promising on paper often stall when they meet the realities of rating plan design, rate filing requirements, carrier risk appetite, and underwriting and claims operations. Whether you're launching a new program, scaling an existing book, or building out operational infrastructure, you need advisors with operating experience inside insurance companies.",
        engagement: [{
          label: 'Product & pricing strategy',
          text: 'framing product direction, rating plan structure, and pricing approach to fit actuarial, underwriting, and regulatory constraints'
        }, {
          label: 'Rate filing support',
          text: 'filing strategy, draft review, and preparation for regulator engagement'
        }, {
          label: 'Market positioning',
          text: 'shaping how your risk profile, portfolio approach, and partnership story land with carriers and reinsurance partners'
        }, {
          label: 'Catastrophe and climate risk',
          text: 'translating hazard dynamics into product and pricing implications'
        }, {
          label: 'Investor readiness',
          text: 'technical due diligence support and articulating your insurance thesis with actuarial credibility'
        }],
        note: 'Open to fractional insurance leadership, advisory board, and equity advisory roles with aligned ventures. Engagements typically retainer-based or project-scoped, with hourly arrangements for early-stage advisory.'
      },
      public: {
        key: 'public',
        label: 'Public Sector',
        version: 'V2.1',
        tagline: 'Insurance expertise applied to affordability, resilience, and public policy',
        about: 'Actuarial leader with over a decade of experience inside insurance companies, spanning pricing strategy, regulatory engagement, catastrophe risk, and portfolio management across personal and commercial lines. Founded Civic Risk Advisory to bring practitioner-grade insurance expertise into public-sector work on climate adaptation, housing affordability, and the design of regulatory and public risk-bearing programs. Sustained engagement with housing and land-use policy through civic service and independent research informs how I think about the upstream forces shaping insurance outcomes. Fellow of the Casualty Actuarial Society; M.S. Analytics, Georgia Tech; Manhattan Community Board 8 (Zoning, Development & Housing).',
        challenge: 'Public-sector leaders and policy organizations increasingly face insurance-driven crises like rising premiums, market withdrawals, and affordability pressures, but often lack internal expertise on how insurers actually price risk, allocate capital, and respond to regulatory signals. They also increasingly need to structure, vet, or procure insurance arrangements directly, from public reinsurance backstops to captives to partnerships with private carriers. Effective policy and program design requires understanding the operational realities inside the industry.',
        engagement: [{
          label: 'Insurance market analysis',
          text: 'how premiums are constructed, what drives rate cycles, and why markets harden or exit'
        }, {
          label: 'Policy and regulatory assessment',
          text: 'evaluating how proposed interventions affect insurer behavior, solvency, and market stability'
        }, {
          label: 'Public risk-bearing programs',
          text: 'design, feasibility analysis, and procurement support for public reinsurance backstops, captives, risk retention groups, and other public-sector insurance structures'
        }, {
          label: 'Climate risk and resilience',
          text: 'connecting catastrophe modeling, land-use patterns, and development decisions to insurance outcomes'
        }, {
          label: 'Research and briefing support',
          text: 'producing technically grounded analysis for policymakers, advocates, or legislative staff'
        }, {
          label: 'Stakeholder translation',
          text: 'bridging between industry, government, and advocacy audiences on insurance and affordability issues'
        }],
        note: 'Available for project-based research, ongoing advisory retainers, or embedded support within policy teams.'
      },
      research: {
        key: 'research',
        label: 'Research & Advocacy',
        version: 'V3.1',
        tagline: 'Practitioner perspective for organizations improving how insurance markets work',
        about: "Actuarial leader with over a decade of experience inside insurance companies, spanning pricing, portfolio strategy, catastrophe risk, and regulatory engagement across personal and commercial lines in the U.S. and Europe. Most recently built and led Lemonade's global actuarial pricing function as its first actuary. Now focused on the upstream forces shaping whether insurance markets remain functional, affordable, and aligned with the public interest: climate risk, land use, regulatory design, and market structure. Brings grounded operator perspective to research and advocacy organizations working to improve insurance outcomes. Fellow of the Casualty Actuarial Society; M.S. Analytics, Georgia Tech; Manhattan Community Board 8 (Zoning, Development & Housing).",
        challenge: 'Research organizations, advocacy groups, and market-design initiatives increasingly focus on insurance as a lever for climate resilience, affordability, and community protection. Effective work in this space requires grounded knowledge of how insurers price risk, respond to regulation, allocate capital, and make portfolio decisions. Bridging the gap between what the industry does and what the public interest requires takes practitioners who operate in both worlds.',
        engagement: [{
          label: 'Research collaboration',
          text: 'co-developing policy research, working papers, and grant-funded projects with insurance industry perspective and actuarial rigor'
        }, {
          label: 'Market analysis and briefings',
          text: 'producing technically grounded assessments of insurance market dynamics for non-industry audiences'
        }, {
          label: 'Convening and curriculum',
          text: 'shaping workshops, learning labs, and educational forums that bring industry practitioners into research and advocacy work'
        }, {
          label: 'Policy-to-practice translation',
          text: 'helping organizations understand how proposed reforms, regulatory changes, or new structures will interact with insurer behavior and market incentives'
        }, {
          label: 'Research and program strategy',
          text: 'shaping organizational positioning, research agendas, and strategic initiatives at the intersection of insurance, climate, and affordability'
        }],
        note: 'Available for research partnerships, project-based advisory, or ongoing collaboration.'
      }
    }
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/one_pagers/data.js", error: String((e && e.message) || e) }); }

__ds_ns.CRA = __ds_scope.CRA;

__ds_ns.FooterBar = __ds_scope.FooterBar;

__ds_ns.HeaderBand = __ds_scope.HeaderBand;

__ds_ns.BridgeMark = __ds_scope.BridgeMark;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Bullet = __ds_scope.Bullet;

__ds_ns.ContactLine = __ds_scope.ContactLine;

__ds_ns.WritingCredit = __ds_scope.WritingCredit;

__ds_ns.AccentStripe = __ds_scope.AccentStripe;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Headshot = __ds_scope.Headshot;

})();
