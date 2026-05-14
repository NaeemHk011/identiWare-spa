import heroImg from '../assets/hero-office.jpeg'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-orb1" />
      <div className="hero-orb2" />

      <div className="hero-left">
        <div className="hero-eyebrow">
          <div className="eyebrow-dot" />
          Turnkey Med Spa System for Physicians, NPs &amp; PAs
        </div>

        <h1 className="hero-h1">
          From Practitioner<br />
          <span className="accent">to Owner.</span><br />
          <span className="thin">The Turnkey Cure for Med Spa Ownership.</span>
        </h1>

        <p className="hero-desc">
          identiWARE is Identity Aesthetics' elite partnership program built exclusively for
          Physicians, Nurse Practitioners, and Physician Assistants ready to escape provider
          burnout and step into ownership. Clinical protocols, compliance documentation, and
          every operational system   handled. Your license is your key. We build the machine.
        </p>

        <div className="hero-btns">
          <a href="#apply" className="btn-primary">Apply for Partnership →</a>
          <a href="#services" className="btn-ghost">See How It Works</a>
        </div>

        <div className="hero-stats">
          <div>
            <div className="hstat-num">5+</div>
            <div className="hstat-lbl">TX Locations</div>
          </div>
          <div className="hstat-div" />
          <div>
            <div className="hstat-num">100%</div>
            <div className="hstat-lbl">Turnkey Package</div>
          </div>
          <div className="hstat-div" />
          <div>
            <div className="hstat-num">$22B</div>
            <div className="hstat-lbl">Industry Size</div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img
          className="hero-img"
          src={heroImg}
          alt="IdentiWare by Identity Aesthetics — Luxury Med Spa"
        />
        <div className="hero-overlay" />

        <div className="hero-card1">
          <div className="hero-card1-icon">🏥</div>
          <div className="hero-card1-title">Clinical-Grade Turnkey</div>
          <div className="hero-card1-sub">Protocols, compliance &amp; buildout   covered</div>
        </div>

        <div className="hero-card2">
          <div className="hc2-stars">★★★★★</div>
          <div className="hc2-label">Trusted Across Texas</div>
          <div className="hc2-sub">5+ Luxury Locations Open</div>
        </div>
      </div>
    </div>
  )
}
