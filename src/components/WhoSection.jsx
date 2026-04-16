const cards = [
  {
    icon: '🏢',
    title: 'Operators & Entrepreneurs',
    text: 'You have the drive, the capital, and the vision. What you need is a replicable system that eliminates guesswork. identiWARE delivers full infrastructure, supply chains, and strategic backing — so you can lead, not figure things out.',
  },
  {
    icon: '✨',
    title: 'Licensed Estheticians',
    text: 'You have mastered the craft. Now step into ownership. Build real equity in your own luxury space, operate under a brand clients already trust across Texas, and serve your clients at a level that reflects your true expertise.',
  },
  {
    icon: '📈',
    title: 'Investors & Co-Founders',
    text: 'The medical aesthetics industry is a $22 billion and growing market. Partner with a brand that has real locations, real revenue, and a structured co-ownership model designed to protect and multiply your investment.',
  },
]

export default function WhoSection() {
  return (
    <section className="who-sec" id="who">
      <div className="who-inner">
        <div className="who-img-wrap reveal">
          <div className="who-img-main">
            <img
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=85&fit=crop"
              alt="Luxury Med Spa Owner"
            />
          </div>
          <div className="who-img-accent">
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&q=80&fit=crop"
              alt="Spa Treatment"
            />
          </div>
          <div className="who-badge">
            <span className="n">100%</span>
            <span className="l">Done For You</span>
          </div>
        </div>

        <div className="reveal d2">
          <div className="sec-tag">Ideal Partners</div>
          <h2 className="sec-h2" style={{ textAlign: 'left', marginBottom: '0.8rem' }}>
            Who Is <em>identiWARE</em><br />Built For?
          </h2>
          <p className="sec-p" style={{ marginBottom: 0 }}>
            Three types of high-achieving people who are ready to own a luxury med spa
            — and smart enough to do it with the right system behind them.
          </p>
          <div className="who-cards">
            {cards.map((c) => (
              <div className="who-card" key={c.title}>
                <div className="who-card-icon">{c.icon}</div>
                <div>
                  <div className="who-card-title">{c.title}</div>
                  <p className="who-card-text">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
