const steps = [
  {
    num: '1',
    img: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=400&q=80&fit=crop&crop=face',
    title: 'Discovery Call',
    text: 'A private, zero-pressure strategy consultation. We learn your goals, market, vision, and capital position — and you learn exactly how identiWARE can work for you.',
  },
  {
    num: '2',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80&fit=crop',
    title: 'Partnership Agreement',
    text: 'We craft a custom deal structure — equity partner, franchise, or co-investment model — designed around your situation, your goals, and your long-term vision.',
  },
  {
    num: '3',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80&fit=crop',
    title: 'Site & Full Buildout',
    text: 'Location scouted and secured. Lease negotiated on your behalf. Construction and luxury buildout executed to Identity Aesthetics standards. Turnkey and ready.',
  },
  {
    num: '4',
    img: 'https://images.unsplash.com/photo-1560750133-c4ca1c0f7c7d?w=400&q=80&fit=crop&crop=face',
    title: 'Training & Grand Opening',
    text: 'Staff fully trained, booking systems live, marketing campaigns launched. We stand beside you on opening day — because your success is our success.',
  },
]

export default function Process() {
  return (
    <section className="process-sec" id="process">
      <div className="process-inner">
        <div className="sec-head reveal" style={{ maxWidth: 620, margin: '0 auto 0' }}>
          <div className="sec-tag">The Journey</div>
          <h2 className="sec-h2">From First Call to <em>Grand Opening</em></h2>
          <p className="sec-p">
            Four clear, guided steps from your initial consultation to the moment you unlock
            your own luxury med spa. Our team holds your hand through every one.
          </p>
        </div>

        <div className="process-steps">
          <div className="process-line" />
          {steps.map((s, i) => (
            <div className={`pstep reveal d${i + 1}`} key={s.num}>
              <div className="pstep-circle">
                <img src={s.img} alt={s.title} loading="lazy" />
                <div className="pstep-badge">{s.num}</div>
              </div>
              <div className="pstep-title">{s.title}</div>
              <p className="pstep-text">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
