/* Civic Risk Advisory — website content.
   Copy derives from CRA brand materials (Strategy on a Page v2, Offerings
   Reference v2, one-pagers, bio blurbs). Single source of truth for the site.
   Voice: firm / third-person for firm-level sections; first-person "I" for
   DJ's bio and civic work. Value prop uses the "river of risk" framing:
   CRA works BOTH ends of the system, never one side of an adversarial line.
   Em-dashes used sparingly, for hard asides only. No dollar figures (pricing
   is internal). */
window.CRA_SITE = (function () {
  return {
    identity: {
      firmName: 'Civic Risk Advisory',
      entity: 'Civic Risk Advisory LLC',
      principal: 'DJ Falkson, FCAS',
      credentials: 'FCAS, MAAA',
      title: 'Founder & Principal',
      descriptor: 'Insurance · Policy · Resilience',
    },

    contacts: [
      { type: 'email', label: 'dj.falkson@civicriskadvisory.com', href: 'mailto:dj.falkson@civicriskadvisory.com' },
      { type: 'phone', label: '(703) 862-4045', href: 'tel:+17038624045' },
      { type: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/dj-falkson-a836758' },
    ],

    // ---- Hero (firm-first) ----
    hero: {
      headline: 'Insurance expertise applied to affordability, resilience, and public policy.',
      subline:
        'Civic Risk Advisory brings the judgment of a working actuary to governments, research organizations, ventures, and carriers alike: the institutions making consequential decisions about risk.',
    },

    // ---- About CRA (the firm) — the river of risk ----
    aboutCRA: {
      river: {
        body:
          'Picture a river of risk. Upstream, it\u2019s fed by how people actually live: where they build, how they get around, the businesses they run, all shaped by policy that channels money and permission toward some choices and away from others. Downstream, the insurance system meets that risk and has to handle it, carriers and public programs alike pricing, pooling, and financing what\u2019s already flowing toward them.',
        punch:
          'Civic Risk Advisory is the bridge across, and the vantage point above: built to see the whole system at once, from the choices that generate the risk to the machinery built to carry it.',
      },
      body: [
        'A carrier raising rates or leaving a market is usually reading the underlying risk correctly, not playing the villain. The leverage sits upstream, in the conditions generating that risk, and downstream, in getting the numbers right once it arrives.',
        'A career spent pricing and building inside real carriers, now applied toward helping governments and research organizations see what\u2019s actually driving rising costs and shrinking coverage, and helping carriers, MGAs, and mutuals get their own numbers right.',
      ],
      pillars: [
        { name: 'From inside the industry', text: 'Launched, priced, and managed insurance products from inside the industry. This is operator judgment, not the view from outside.' },
        { name: 'Fluent upstream and downstream', text: 'Versed in the built environment that shapes where risk accumulates, and in the insurance ecosystem that manages it once it arrives.' },
        { name: 'At home in both rooms', text: 'Equally at ease defending a rate filing before a regulator and testifying at a city council hearing.' },
      ],
    },

    // ---- The four CRA offerings (from Offerings Reference v2) ----
    services: [
      {
        num: '01',
        name: 'Program, policy & reform design',
        summary:
          'Standing up or evaluating institutional structures: a public risk-bearing program, a reform an advocacy group is pushing, or a new insurance entity.',
        bullets: [
          { label: 'Market-failure assessment', text: 'why a segment is hardening, and whether a new program is even the right lever versus mitigation incentives, land-use reform, or rate flexibility.' },
          { label: 'Structural framing', text: 'for a risk-bearing program (e.g. captive, reinsurance backstop, RRG), including whether design and pricing will be sustainable or need subsidy.' },
          { label: 'RFP-ready design', text: 'go to the market with confidence: a governance model, operating model, and procurement-ready specification.' },
          { label: 'Reform evaluation', text: 'testing whether a proposed change achieves its goal without destabilizing the market it is meant to fix.' },
        ],
      },
      {
        num: '02',
        name: 'Core actuarial services',
        summary:
          'Reserving, pricing, and portfolio work for carriers, MGAs, and mutuals, from an actuary who led pricing at scale and works across the full actuarial toolkit.',
        bullets: [
          { label: 'Reserving', text: 'unpaid loss and LAE estimates and Statements of Actuarial Opinion that hold up to auditors, regulators, and boards.' },
          { label: 'Rate adequacy and filings', text: 'indications and filing support, plus model-based segmentation to sharpen risk selection with defensible numbers.' },
          { label: 'Portfolio profitability and growth', text: 'loss ratio, retention, and renewal analysis, including models that flag lapse and adverse development before they hit results.' },
          { label: 'Forecasts planning can rest on', text: 'profitability review built for annual planning and board reporting.' },
        ],
      },
      {
        num: '03',
        name: 'Fractional actuarial function',
        summary:
          'Senior actuarial capacity, embedded and ongoing, for organizations that need one without a full-time hire. Not just advice: the technical work gets done.',
        bullets: [
          { label: 'For agencies and programs', text: 'standing actuarial oversight, rate and program review, and the vendor and RFP evaluation a public entity needs to buy insurance intelligently.' },
          { label: 'For carriers and mutuals', text: 'recurring reserve reviews, rate monitoring, and portfolio work on a set cadence, rather than scoped fresh each quarter.' },
          { label: 'For research teams', text: 'an embedded methodology reviewer and a named practitioner your published work can stand behind.' },
          { label: 'For ventures', text: 'senior pricing leadership to build and file a rating plan and stand up the insurance function itself.' },
        ],
      },
      {
        num: '04',
        name: 'Research & analytical briefings',
        summary:
          'Written deliverables that translate market dynamics for a specific audience, built to survive scrutiny.',
        bullets: [
          { label: 'Decision-grade briefs', text: 'what a proposed intervention will do to insurer behavior, cost, and availability.' },
          { label: 'Working papers', text: 'written to hold up to actuaries and policy audiences at once.' },
          { label: 'Investor & diligence briefs', text: 'an independent read on whether an insurance thesis holds, for a founder or VC.' },
          { label: 'Commissioned analysis', text: 'market-sizing, peril dynamics, and fairness-in-ratemaking review.' },
        ],
      },
    ],

    // ---- Who we work with (four buyers) ----
    segmentsHeading: 'Public agencies, research teams, ventures, and the carriers pricing the risk.',
    segments: [
      {
        name: 'Public sector',
        who: 'City and state agencies, government-adjacent entities, and bodies standing up new insurance functions.',
        need:
          'Leaders facing rising premiums, market withdrawals, and affordability pressure, who need to understand how insurers price risk and how to structure, vet, or procure insurance arrangements directly.',
      },
      {
        name: 'Research & advocacy',
        who: 'Think tanks, foundations, and mission-driven organizations using insurance as a lever for resilience and affordability.',
        need:
          'Teams that need grounded knowledge of how insurers behave, plus a named practitioner who works credibly in both the industry and the public-interest worlds.',
      },
      {
        name: 'Insurtechs & ventures',
        who: 'Insurtechs, MGAs, proptechs, parametric startups, and the VCs backing them.',
        need:
          'Ventures navigating rating-plan design, filing, carrier appetite, and underwriting reality, who need an advisor with real operating experience inside insurance companies.',
      },
      {
        name: 'Established carriers & mutuals',
        who: 'Carriers, MGAs, and mutuals that need core actuarial support without a full-time hire.',
        need:
          'Teams that need reserving, rate work, or portfolio review handled by an experienced actuary, on a scoped project or a standing cadence.',
      },
    ],

    // ---- DJ Falkson: bio + experience combined (first person) ----
    practitioner: {
      heading: 'Grounded in risk. Applied to the public interest.',
      lead:
        'Insurance was not exactly the original plan. I studied economics and statistics at the University of Virginia with a public policy focus, including an internship at a think tank. Ahead loomed a minimum five-year stint in graduate school to stake out a career in academia and policy research. I chose a different path: a minimum five-year stint studying for actuarial exams while learning the craft inside property-casualty insurance carriers.',
      body: [
        'The craft carried me through the full range of the industry. At State Farm, the country\u2019s largest insurer, I started out pricing and rebuilding rating plans for boatowners and small-business insurance, and ended up shepherding hundreds of filings through demanding regulatory environments. My final years there were spent on an increasingly challenging homeowners book, as climate-driven wildfire, hurricane, and convective storm losses began threatening communities in ways the industry had not seen before. Along the way I sharpened my technical foundation, began managing a team, and earned my Fellowship in the Casualty Actuarial Society.',
        'A move to New York City broadened the work into commercial and specialty lines at Aspen, where as AVP and Product Actuary I priced and reserved the commercial property and program business, including substantial public-entity accounts. I also completed an M.S. in Analytics, deepening my grounding in applied data science and modern tooling.',
        'I then joined Lemonade as the company\u2019s first actuary, building the global pricing function from scratch: hiring and leading a team of twenty-plus across the US and Europe, righting the trajectory of a struggling homeowners book, launching US auto with telematics rating from a blank page, pricing the UK and France entries that became the core of the European offering, scaling pet into the company\u2019s largest line, and steering more than $1B in premium growth through a tumultuous hard market and heavy catastrophe years. That period spanned hundreds of rate filings, the buildout of scalable, disciplined processes, and a team culture of rigor and learning.',
        'Outside the office, I was drawn into the public policy fights over New York\u2019s ballooning housing costs and strained transportation infrastructure, first as an advocate, then through a seat on my community board and a growing body of writing. That work began converging with a longstanding professional concern: what actually generates the risk, unaffordability, and unavailability straining P&C insurance markets. Do policymakers understand how decisions about where and what people can build shape insurance risk downstream? Do insurers understand why construction keeps happening in the riskiest places? A small set of people examine the full system this way, and an even smaller number of them are actuaries that have the technical and operational background to trace how risk flows through it.',
        'I founded Civic Risk Advisory to put that combination to work: for governments and researchers confronting affordability and availability, for ventures building new insurance products, and for carriers, MGAs, and mutuals that need experienced hands on reserving, pricing, and portfolio work. The craft is the same one I have practiced from the start. What has changed is where it gets applied.',
      ],
      credentials:
        'Fellow of the Casualty Actuarial Society (FCAS) · Member, American Academy of Actuaries (MAAA) · M.S. Analytics, Georgia Tech',
      photoCaption: 'Same calculator since 2012.',
    },

    // ---- Experience — retained for a future /about page; the career strip was
    //      removed from the live Principal act (the six-paragraph narrative now
    //      traces the same State Farm → Aspen → Lemonade → CRA arc in prose). ----
    experienceIntro: 'Personal and commercial lines, the U.S. and Europe, the largest incumbent and the upstart disruptor both.',
    experience: [
      { org: 'Civic Risk Advisory', role: 'Founder & Principal', period: '2026\u2013', note: 'Independent actuarial advisory at the intersection of insurance, public policy, and urban risk.' },
      { org: 'Lemonade', role: 'First Actuary · Global Actuarial Pricing', period: '', note: 'Built and led the global actuarial function from zero: a team of 20+ across multiple lines and geographies, overseeing $1B+ in premium growth. Now applying that build-from-zero experience to public entities standing up insurance functions of their own.' },
      { org: 'Aspen Insurance', role: 'Specialty Commercial Carrier', period: '', note: 'Pricing and portfolio work across specialty commercial lines.' },
      { org: 'State Farm', role: 'The largest insurer in the U.S.', period: '', note: 'Foundational personal-lines pricing and analytics at the country\u2019s largest incumbent.' },
    ],

    // ---- Writing & speaking — single ordered list, led by subject (most
    //      insurance-meets-policy first), venue-agnostic. Target state is the
    //      two-audience labeled split (see git history); reintroduce once
    //      policy-side writing is deep enough to balance it. ----
    writing: {
      heading: 'Writing at the seam between insurance and policy.',
      items: [
        { text: '\u201CSurface Tension: The Growing Gap Between Flood Risk and Flood Insurance\u201D', source: 'Actuarial Review · cover story, 2026', href: 'https://digital.casact.org/issue/march-april-2026/surface-tension/' },
        { text: '\u201CNavigating New Urban Realities: Zoning, Housing Affordability and Insurance\u201D', source: 'Actuarial Review, 2024', href: 'https://ar.casact.org/navigating-new-urban-realities-zoning-housing-affordability-and-insurance/' },
        { text: '\u201CSafe Streets Are the Best Way to Bring Down Insurance Costs\u201D', fullTitle: 'Ask an Insurance Industry Insider: Safe Streets are the Best Way to Bring Down Insurance Costs', source: 'Streetsblog NYC · April 2026', href: 'https://nyc.streetsblog.org/2026/04/15/ask-an-insurance-industry-insider-safe-streets-are-the-best-way-to-bring-down-insurance-costs' },
        { text: '\u201CIndexing the Future: The Rise of Parametric Insurance and Its Expanding Ecosystem\u201D', source: 'Actuarial Review · cover story, 2025', href: 'https://ar.casact.org/indexing-the-future-the-rise-of-parametric-insurance-and-its-expanding-ecosystem/' },
        { text: 'On zoning, housing, and insurance', source: 'CAS Almost Nowhere podcast', href: 'https://open.spotify.com/episode/3Qjr1N8xuTFl8oNt5AXEYW?si=53fc15ebf042480d' },
        { text: '\u201CZoning, Risk, and the Shape of Insurance\u201D', source: 'Speaker · CAS Annual Meeting · slides (PDF)', href: 'assets/DJ-Falkson-Zoning-Slides.pdf', download: true },
      ],
    },

    // ---- Professional & civic service (both ends of the river) ----
    service: {
      eyebrow: 'Professional & civic service',
      lead:
        'Beyond client work, sustained service to the profession and to the public: helping set the standards actuaries are measured against, and engaging in the policy that shapes risk on the ground.',
      award: '2026 CAS Above and Beyond Achievement Award',
      groups: [
        {
          label: 'To the profession',
          items: [
            { name: 'CAS Syllabus & Examination Committee', period: '', detail: 'Wrote, graded, and chaired Exam 6-US, the regulation and financial-reporting exam every U.S. casualty actuary has to pass.' },
            { name: 'CAS Actuarial Review Working Group', period: '', detail: 'Write and edit for the profession\u2019s bi-monthly magazine, translating technical developments for a working-actuary audience.' },
            { name: 'CAS Artificial Intelligence Working Group', period: '', detail: 'Lead and contribute to research on how AI is reshaping actuarial practice, including funded research and open-source tools.' },
          ],
        },
        {
          label: 'To the public',
          items: [
            { name: 'Manhattan Community Board 8', period: '', detail: 'Member of the Zoning, Development & Housing and Transportation committees.' },
            { name: 'New York State Democratic Committee', period: '', detail: 'Elected member, engaged in local party organization and civic life.' },
          ],
        },
      ],
    },

    contactBlurb:
      'Whether you are standing up a new insurance function, evaluating a program or reform, or need core actuarial work handled without a full-time hire, let\u2019s talk.',
  };
})();
