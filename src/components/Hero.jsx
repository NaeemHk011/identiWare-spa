export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-orb1" />
      <div className="hero-orb2" />

      <div className="hero-left">
        <div className="hero-eyebrow">
          <div className="eyebrow-dot" />
          Complete Med Spa Ownership System
        </div>

        <h1 className="hero-h1">
          Stop Dreaming.<br />
          <span className="accent">Start Owning.</span><br />
          <span className="thin">We Handle Everything.</span>
        </h1>

        <p className="hero-desc">
          identiWARE is Identity Aesthetics' elite partnership program engineered to transform
          ambitious operators into luxury med spa owners. From lease negotiation to grand opening,
          every detail is handled. Proven across Texas. Open to you.
        </p>

        <div className="hero-btns">
          <a href="#apply" className="btn-pink">Apply for Partnership →</a>
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
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1000&q=90&fit=crop"
          alt="Luxury Med Spa Interior"
        />
        <div className="hero-overlay" />

        <div className="hero-card1">
          <div className="hero-card1-icon">💆‍♀️</div>
          <div className="hero-card1-title">Turnkey Ownership</div>
          <div className="hero-card1-sub">Lease to launch — every detail covered</div>
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
