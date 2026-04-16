const pills = [
  '✓ Botox Cosmetic', '✓ Juvéderm', '✓ Restylane',
  '✓ Sculptra', '✓ Radiesse', '✓ Epionce',
  '✓ Skin Script', '✓ LASEMD Ultra', '✓ Velashape III',
  '✓ Hydrafacial', '✓ VI Peel', '✓ Kybella',
]

export default function BrandSection() {
  return (
    <section className="brand-sec" id="brand">
      <div className="brand-inner">
        <div className="brand-img-col reveal">
          <div className="brand-img-grid">
            <div className="bi1">
              <img
                src="https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&q=85&fit=crop"
                alt="Luxury Spa Room"
              />
            </div>
            <div className="bi2">
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80&fit=crop"
                alt="Aesthetic Treatment"
              />
            </div>
            <div className="bi3">
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80&fit=crop"
                alt="Spa Products"
              />
            </div>
          </div>
          <div className="brand-float-badge">
            <div className="bfb-icon">🌸</div>
            <div className="bfb-text">
              <div className="t">Identity Aesthetics</div>
              <div className="s">The Art of Refined Beauty</div>
            </div>
          </div>
        </div>

        <div className="reveal d2">
          <div className="sec-tag">Backed By Identity Aesthetics</div>
          <h2 className="sec-h2" style={{ textAlign: 'left' }}>
            A Brand Already <em>Trusted</em><br />Across Texas
          </h2>
          <p className="sec-p" style={{ marginBottom: '1.4rem' }}>
            When you partner through identiWARE, you don't build from scratch. You inherit years
            of brand equity, a loyal client base, relationships with premier medical suppliers,
            and proven clinical protocols — tested across 5 thriving Texas markets.
          </p>
          <p className="sec-p" style={{ marginBottom: '1.8rem' }}>
            The playbook is written. The brand is trusted. The supply chain is negotiated.
            You step in and execute — backed by everything we've already built.
          </p>
          <div className="brand-pills">
            {pills.map((p) => (
              <span className="brand-pill" key={p}>{p}</span>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem' }}>
            <a href="#apply" className="btn-pink">Become a Partner →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
