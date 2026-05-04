const services = [
  {
    num: '01',
    icon: '🏢',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80&fit=crop',
    title: 'Premium Lease Negotiations',
    text: 'We scout high-traffic, high-margin locations then negotiate every clause of your commercial lease to secure favorable terms, tenant incentives, and long-term protection. You never sit across from a landlord alone.',
  },
  {
    num: '02',
    icon: '🔨',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80&fit=crop',
    title: 'End-to-End Construction',
    text: 'Our vetted construction partners specialize in medical-grade luxury buildouts ADA-compliant, OSHA-ready, and built to the exacting standards of Identity Aesthetics across every single project.',
  },
  {
    num: '03',
    icon: '✨',
    img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&q=80&fit=crop',
    title: 'Luxury Interior Buildout',
    text: 'Every treatment room, reception area, and consultation suite is designed with our signature luxury aesthetic. Equipment sourced, furnishings curated, ambiance crafted from concept to champagne-pop opening day.',
  },
  {
    num: '04',
    icon: '⚙️',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80&fit=crop',
    title: 'Complete Operating System',
    text: 'Booking infrastructure, staff training manuals, clinical protocols, compliance documentation, and a full marketing playbook. The entire engine of a successful med spa installed and ready to run on day one.',
  },
  {
    num: '05',
    icon: '💰',
    img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=700&q=80&fit=crop',
    title: 'Flexible Financing Access',
    text: 'Tap into our exclusive lending network built for aesthetic ventures. We structure your capital stack SBA loans, equipment financing, and equity bridges so the only thing standing between you and launch is a signature.',
  },
  {
    num: '06',
    icon: '🤝',
    img: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=700&q=80&fit=crop',
    title: 'Bespoke Deal Structuring',
    text: 'Equity partnership, franchise model, or co-investment we architect arrangements that align incentives and maximize upside for both parties. No cookie-cutter contracts. Every deal is crafted for long-term success.',
  },
]

export default function Services() {
  return (
    <section className="services-sec" id="services">
      <div className="sec-head reveal">
        <div className="sec-tag">The Full Package</div>
        <h2 className="sec-h2">Six Things We <em>Handle For You</em></h2>
        <p className="sec-p">
          From the moment you commit to partnership, every complex, time-consuming, high-stakes
          element of opening a luxury med spa is managed by our team. We have done this five times.
          The system is proven, refined, and ready.
        </p>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div key={s.num} className={`srv-card reveal d${(i % 3) + 1}`}>
            <div className="srv-img">
              <img src={s.img} alt={s.title} loading="lazy" />
              <div className="srv-img-overlay" />
              <div className="srv-num">{s.num}</div>
            </div>
            <div className="srv-body">
              <div className="srv-icon">{s.icon}</div>
              <div className="srv-title">{s.title}</div>
              <p className="srv-text">{s.text}</p>
              <a href="#apply" className="srv-link">
                Become a Partner <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
