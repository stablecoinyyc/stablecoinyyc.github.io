// app.jsx — Stablecoins & Agentic AI · Industry Brief (Calgary, 2026)
const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#1F3DEB",
  "denseHero": false
}/*EDITMODE-END*/;

// ─────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav className="nav" data-screen-label="nav">
      <div className="nav-inner">
        <div className="nav-mark">
          <span className="dot" />
          Stablecoins <em>&amp; agentic AI</em> · Calgary
        </div>
        <div className="nav-meta">July 28, 2026 · By invitation</div>
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" data-screen-label="hero">
      <div className="wrap">
        <div className="hero-eyebrow">
          <span className="pill">A One-Day Industry Brief</span>
          <span>University of Calgary · IEEE</span>
        </div>

        <h1>
          Training talents <span className="amp">for the</span> era of <em>stablecoins</em> <span className="amp">&amp;</span> <em>agentic AI</em>.
        </h1>

        <p className="hero-sub">
          A closed-door working session to shape a Canadian{" "}
          <em>training consortium</em> &mdash; pairing university researchers
          with the banks, fintechs, and AI companies who will define the next
          decade of how money and software actually move.
        </p>

        <dl className="meta">
          <div>
            <dt>Date</dt>
            <dd><b>Tuesday, July 28</b><span className="sub">2026</span></dd>
          </div>
          <div>
            <dt>Hours</dt>
            <dd><b>09:00 — 17:00</b><span className="sub">Mountain Time</span></dd>
          </div>
          <div>
            <dt>Venue</dt>
            <dd><b>Indigo Meeting Room</b><span className="sub">Alt Hotel · University District</span></dd>
          </div>
          <div>
            <dt>Purpose</dt>
            <dd>Form a <em>training</em><span className="sub">consortium</span></dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
function About() {
  return (
    <section className="band" data-screen-label="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="section-num">§ 01 — Brief</div>
          <p className="about-body">
            Two technologies are rewriting the rails of finance and software at
            the same time. The graduates who can do <em>both</em> &mdash;
            cryptography and machine learning, market microstructure and
            autonomous systems &mdash; will define the next decade. We&rsquo;re
            assembling the partners who will train them.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
function Themes() {
  const themes = [
    { n: "01", t: "Settlement", h: <>Stablecoin <em>market microstructure</em> &amp; on-chain settlement.</>, p: "PSP flows, liquidity fragmentation, and cross-rail arbitrage in a 24/7 dollar-token world." },
    { n: "02", t: "Trust",      h: <>Cryptography for <em>auditability</em> and programmable compliance.</>, p: "ZK proofs, MPC, attested computation — engineered for regulators, not whitepapers." },
    { n: "03", t: "Autonomy",   h: <>Agentic AI <em>under constraint</em> — tool-use, planning, safe deployment.</>, p: "Agents that book, transact, escalate and revert — with provenance and guardrails." },
    { n: "04", t: "Markets",    h: <>Agents trading agents: multi-agent <em>economies</em>.</>, p: "Simulation labs, market-making testbeds, and policy work for when most counterparties are models." },
    { n: "05", t: "Risk",       h: <>AML, fraud &amp; agentic <em>threat</em> modelling.</>, p: "Adversarial agents are coming faster than red teams. We train the defenders." },
    { n: "06", t: "Policy",     h: <>Regulation, <em>governance</em> &amp; the public-interest stack.</>, p: "Policy-fluent technologists embedded with regulators and standards bodies." },
  ];
  return (
    <section className="band" data-screen-label="themes">
      <div className="wrap">
        <div className="section-head">
          <div className="section-num">§ 02 — Themes</div>
          <h2 className="section-title">Six research lanes we&rsquo;ll <em>train against</em>.</h2>
        </div>
        <div className="themes">
          <div />
          <div className="themes-list">
            {themes.map(th => (
              <article className="theme" key={th.n}>
                <div className="theme-num">Lane {th.n} · {th.t}</div>
                <h3>{th.h}</h3>
                <p>{th.p}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
function Partners() {
  const rows = [
    { name: "University of Calgary", role: "Academic lead", confirmed: true },
    { name: "IEEE", role: "Co-convener", confirmed: true },
    { name: "Open seat — Canadian bank / PSP", role: "Industry partner", confirmed: false },
    { name: "Open seat — AI infrastructure", role: "Industry partner", confirmed: false },
    { name: "Open seat — cryptography lab", role: "Research partner", confirmed: false },
    { name: "Open seat — regulator / observer", role: "Public partner", confirmed: false },
  ];
  return (
    <section className="band" data-screen-label="partners">
      <div className="wrap">
        <div className="section-head">
          <div className="section-num">§ 03 — Consortium</div>
          <h2 className="section-title">The room, <em>as of today</em>.</h2>
        </div>

        <div className="partners-grid">
          <div />
          <div className="partners-body">
            <p className="partners-lead">
              A training program is the sum of the people committed to it.
              Here are the seats we walk in with on July 28 &mdash; and the
              ones we&rsquo;re looking to close in the room.
            </p>

            <div className="partners-list">
              {rows.map((r, i) => (
                <div key={i} className={`partner-row ${r.confirmed ? "" : "open"}`}>
                  <b>{r.name}</b>
                  <span className="role">{r.confirmed ? "Confirmed" : "Inquire"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
function Location() {
  return (
    <section className="band" data-screen-label="location">
      <div className="wrap">
        <div className="section-head">
          <div className="section-num">§ 04 — Place</div>
          <h2 className="section-title">Calgary. <em>University District</em>.</h2>
        </div>

        <div className="loc-grid">
          <div className="loc-info">
            <h3 className="loc-name">Indigo Meeting Room<br/><em>Alt Hotel Calgary</em></h3>
            <div className="loc-addr">
              <b>482 McLaurin St NW</b>
              Calgary, Alberta · T3B 2X9<br/>
              Canada
            </div>
            <dl className="loc-detail">
              <div><dt>From YYC</dt><dd>~15 min by car</dd></div>
              <div><dt>From U of C</dt><dd>10 min on foot</dd></div>
              <div><dt>Nearest LRT</dt><dd>Brentwood · 6 min</dd></div>
              <div><dt>Room hold</dt><dd>09:00 — 18:00 MDT</dd></div>
            </dl>
          </div>
          <div className="loc-map" aria-label="Map: Alt Hotel Calgary, University District">
            <div className="lp-coord">51.078° N&nbsp;&nbsp;114.137° W</div>
            <div className="loc-map-pin">
              <div className="marker" />
              <div className="label">Indigo Meeting Room</div>
            </div>
            <div className="lp-meta">
              <span><b>YYC</b>&nbsp;&nbsp;Calgary, Alberta</span>
              <span>July 28 · 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
function Foot() {
  return (
    <footer className="foot" data-screen-label="footer">
      <div className="foot-grid">
        <div>
          <div className="foot-mark">Stablecoins <em>&amp;</em><br/>Agentic AI &mdash; Calgary.</div>
          <p>
            An information page for an invitational working brief.
            <span>July 28, 2026 · Calgary, Alberta.</span>
          </p>
        </div>
        <div>
          <h4>Convened by</h4>
          <p>
            <b>University of Calgary</b>
            <span>Schulich School of Engineering<br/>Faculty of Science</span>
          </p>
          <p style={{ marginTop: 16 }}>
            <b>IEEE</b>
            <span>Northern Canada Section</span>
          </p>
        </div>
        <div>
          <h4>Inquiries</h4>
          <p>
            <a href="mailto:hello@stablecoin-agents.ca">hello@stablecoin-agents.ca</a>
            <span>Program office</span>
          </p>
          <p style={{ marginTop: 16 }}>
            <a href="mailto:partners@stablecoin-agents.ca">partners@stablecoin-agents.ca</a>
            <span>Partnership desk</span>
          </p>
        </div>
      </div>
      <div className="foot-meta">
        <span>© 2026 University of Calgary · IEEE NCS</span>
        <span>v1.0 · 2026.07.28 · Calgary</span>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", t.accent);
  }, [t.accent]);

  const ACCENTS = [
    "#1F3DEB", // cobalt
    "#0E0F11", // ink (monochrome)
    "#C2410C", // burnt amber
    "#15803D", // forest
    "#7C3AED", // violet
  ];

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Themes />
      <Partners />
      <Location />
      <Foot />

      <TweaksPanel>
        <TweakSection label="Accent" />
        <TweakColor
          label="Color"
          value={t.accent}
          options={ACCENTS}
          onChange={(v) => setTweak("accent", v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
