/* Civic Risk Advisory — single-page site.
   Composed from the CRA design-system primitives on
   window.CivicRiskAdvisoryDesignSystem_40ae19. Content from window.CRA_SITE. */
const { useState, useEffect, useRef } = React;
const DS = window.CivicRiskAdvisoryDesignSystem_40ae19;
const { Logo, BridgeMark, Wordmark, SectionHeader, Bullet } = DS;
const S = window.CRA_SITE;

/* ---------- helpers ---------- */
function Eyebrow({ children, onDark, style }) {
  return (
    <SectionHeader style={{ fontSize: '13px', letterSpacing: '0.16em', whiteSpace: 'nowrap', ...style, ...(onDark ? { color: 'var(--text-on-band)' } : null) }}>
      {children}
    </SectionHeader>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  });
}

/* ---------- nav ---------- */
function Nav() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    ['About', '#about-cra'],
    ['Services', '#services'],
    ['Who we work with', '#segments'],
    ['Principal', '#principal'],
  ];
  const top = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <nav className={'nav' + (solid ? ' solid' : '')}>
      <div className="wrap nav-inner">
        <div className="nav-brand" onClick={top} aria-label="Civic Risk Advisory — top">
          <span className="brand-mast">Civic Risk Advisory</span>
        </div>
        <div className="nav-links">
          {links.map(([label, href]) => (
            <a key={href} className="nav-link" href={href}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact">Get in touch</a>
        </div>
      </div>
    </nav>
  );
}

/* ---------- hero (firm-first) ---------- */
function Hero() {
  return (
    <header className="band-navy hero" id="top">
      <div className="hero-mark" aria-hidden="true">CRA</div>
      <div className="wrap">
        <div className="hero-inner">
          <div className="hero-kicker">{S.identity.descriptor}</div>
          <h1 className="hero-headline">{S.hero.headline}</h1>
          <p className="hero-sub">{S.hero.subline}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#contact">Start a conversation</a>
            <a className="btn btn-ghost" href="#services">Explore the services</a>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------- about CRA (the firm) ---------- */
function AboutCRA() {
  return (
    <section className="sec-pad" id="about-cra">
      <div className="wrap">
        <Eyebrow>About Civic Risk Advisory</Eyebrow>
        <div className="river">
          <p className="river-body">{S.aboutCRA.river.body}</p>
          <p className="river-punch">{S.aboutCRA.river.punch}</p>
        </div>
        <div className="aboutcra-valueprop">
          {S.aboutCRA.body.map((p, i) => (
            <p key={i} className="body-text">{p}</p>
          ))}
        </div>
        <div className="pillars">
          {S.aboutCRA.pillars.map((p) => (
            <div key={p.name} className="pillar reveal">
              <div className="pillar-name">{p.name}</div>
              <div className="pillar-text">{p.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- services ---------- */
function Services() {
  const [lead, ...rest] = S.services;
  return (
    <section className="band-cream sec-pad" id="services">
      <div className="wrap">
        <Eyebrow>What CRA does</Eyebrow>
        <h2 className="heading-serif" style={{ maxWidth: '20ch' }}>
          Four ways to bring actuarial judgment to your work
        </h2>

        {/* Lead card — the differentiated, build-the-thing offer */}
        <div className="svc-lead reveal">
          <div className="svc-lead-head">
            <div className="svc-lead-headline">
              <div className="svc-num">{lead.num}</div>
              <div className="svc-name svc-name-lead">{lead.name}</div>
            </div>
            <div className="svc-summary svc-summary-lead">{lead.summary}</div>
          </div>
          <ul className="svc-lead-bullets">
            {lead.bullets.map((b, i) => (
              <Bullet key={i} label={b.label} style={{ fontSize: '14px', marginBottom: 0 }}>{b.text}</Bullet>
            ))}
          </ul>
        </div>

        {/* Supporting row — working services, coequal among themselves */}
        <div className="svc-row">
          {rest.map((svc) => (
            <div key={svc.num} className="svc-card reveal">
              <div className="svc-num">{svc.num}</div>
              <div className="svc-name">{svc.name}</div>
              <div className="svc-summary">{svc.summary}</div>
              <ul style={{ marginTop: 'auto' }}>
                {svc.bullets.map((b, i) => (
                  <Bullet key={i} label={b.label} style={{ fontSize: '13.5px' }}>{b.text}</Bullet>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- segments ---------- */
function Segments() {
  return (
    <section className="band-navy sec-pad" id="segments">
      <div className="wrap">
        <Eyebrow onDark>Who we work with</Eyebrow>
        <h2 className="heading-serif" style={{ maxWidth: '24ch' }}>
          {S.segmentsHeading}
        </h2>
        <div className="seg-grid">
          {S.segments.map((seg) => (
            <div key={seg.name} className="seg-col reveal">
              <div className="seg-name">{seg.name}</div>
              <div className="seg-who">{seg.who}</div>
              <div className="seg-need">{seg.need}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- DJ Falkson: bio + experience ---------- */
function Principal() {
  return (
    <section className="sec-pad" id="principal">
      <div className="wrap">
        <Eyebrow>The principal</Eyebrow>
        <h2 className="heading-serif" style={{ maxWidth: '19ch' }}>{S.practitioner.heading}</h2>
        <div className="prac-grid">
          <div className="prac-photos">
            <figure className="prac-photo-main">
              <img src="assets/headshot.jpg" alt="DJ Falkson" />
              <figcaption className="prac-photo-cap">
                <strong>{S.identity.principal}</strong><br />
                {S.identity.title}, {S.identity.firmName}
              </figcaption>
            </figure>
          </div>
          <div>
            <p className="lead-text">{S.practitioner.lead}</p>
            <div style={{ marginTop: 20 }}>
              {S.practitioner.body.map((p, i) => (
                <p key={i} className="body-text" style={{ marginTop: i ? 16 : 0, maxWidth: '62ch' }}>{p}</p>
              ))}
            </div>
            <div className="creds-line">{S.practitioner.credentials}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- writing ---------- */
function Writing() {
  const items = S.writing.items;
  const half = Math.ceil(items.length / 2);
  const cols = [items.slice(0, half), items.slice(half)];
  const Item = ({ w }) => (
    <li className="wc-item">
      {w.href
        ? <a href={w.href} title={w.fullTitle || undefined}
             {...(w.download ? { download: true } : { target: '_blank', rel: 'noopener' })}>{w.text}</a>
        : w.text}
      {w.source && <span className="wc-src">{w.source}</span>}
    </li>
  );
  return (
    <section className="act-part" id="writing">
      <div className="wrap">
        <div className="act-rule" aria-hidden="true"></div>
        <Eyebrow>Selected writing &amp; speaking</Eyebrow>
        <h2 className="heading-serif" style={{ maxWidth: '22ch' }}>{S.writing.heading}</h2>
        <div className="writing-grid">
          {cols.map((col, ci) => (
            <ul key={ci} className="writing-list">
              {col.map((w, i) => <Item key={i} w={w} />)}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- professional & civic service ---------- */
function Service() {
  const s = S.service;
  return (
    <section className="act-part" id="service">
      <div className="wrap">
        <div className="act-rule" aria-hidden="true"></div>
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <p className="service-lead">{s.lead}</p>
        {s.award && (
          <div className="award-line">
            <span className="award-mark" aria-hidden="true"></span>
            {s.award}
          </div>
        )}
        <div className="service-groups">
          {s.groups.map((g) => (
            <div key={g.label} className="service-group">
              <div className="service-group-label">{g.label}</div>
              {g.items.map((it, i) => (
                <div key={i} className="service-item">
                  <div className="service-item-head">
                    <span className="service-item-name">{it.name}</span>
                    {it.period && <span className="service-period">{it.period}</span>}
                  </div>
                  <div className="service-detail">{it.detail}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- contact ---------- */
function ContactBand() {
  const glyphs = { email: '\u2709', phone: '\u260E', linkedin: 'in' };
  return (
    <section className="band-navy sec-pad" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <figure className="contact-photo">
            <img src="assets/headshot-alt.jpg" alt="DJ Falkson" />
            <figcaption>{S.practitioner.photoCaption}</figcaption>
          </figure>
          <div>
            <Eyebrow onDark>Get in touch</Eyebrow>
            <p className="contact-blurb" style={{ marginTop: 20 }}>{S.contactBlurb}</p>
          </div>
          <div className="contact-lines">
            {S.contacts.map((c, i) => (
              <a key={i} className="contact-line-lg" href={c.href}
                 target={c.type === 'linkedin' ? '_blank' : undefined}
                 rel={c.type === 'linkedin' ? 'noopener' : undefined}>
                <span className={'contact-glyph' + (c.type === 'linkedin' ? ' badge' : '')}>{glyphs[c.type]}</span>
                <span>{c.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- footer ---------- */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-mast">Civic Risk Advisory</div>
        <div className="footer-meta">
          Civic Risk Advisory LLC
          <span className="sep">·</span>New York, NY
          <span className="sep">·</span>
          <a href="mailto:dj.falkson@civicriskadvisory.com" style={{ color: 'var(--text-on-band-2)' }}>dj.falkson@civicriskadvisory.com</a>
          <span className="sep">·</span>(703) 862-4045
          <br/>
          <span style={{ opacity: 0.6 }}>© {new Date().getFullYear()} Civic Risk Advisory LLC. Actuarial expertise with a public-interest lens.</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- app ---------- */
function App() {
  useReveal();
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <AboutCRA />
      <Services />
      <Segments />
      <Principal />
      <Writing />
      <Service />
      <ContactBand />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
