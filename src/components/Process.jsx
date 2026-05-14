const steps = [
  {
    num: '01',
    icon: '🩺',
    title: 'Licensed Provider',
    sub: 'You bring the credential',
  },
  {
    num: '02',
    icon: '🤝',
    title: 'Partnership Agreement',
    sub: 'MSO-compliant deal built for you',
  },
  {
    num: '03',
    icon: '🏗️',
    title: 'Turnkey Build-Out',
    sub: 'Location, lease & construction',
  },
  {
    num: '04',
    icon: '📋',
    title: 'Clinical Training',
    sub: 'Protocols & compliance ready',
  },
  {
    num: '05',
    icon: '🥂',
    title: 'Grand Opening',
    sub: 'We stand beside you on day one',
  },
  {
    num: '06',
    icon: '👑',
    title: 'Owner / CEO',
    sub: 'Freedom. Equity. Your chapter.',
    final: true,
  },
]

export default function Process() {
  return (
    <section className="process-sec" id="process">
      <div className="process-inner">
        <div className="sec-head reveal" style={{ maxWidth: 620, margin: '0 auto 0' }}>
          <div className="sec-tag">The Provider Roadmap</div>
          <h2 className="sec-h2">From Licensed Provider<br />to <em>Owner / CEO</em></h2>
          <p className="sec-p">
            Six clear milestones from your first consultation to the moment you unlock
            a finished, operating luxury med spa. Your license starts it. We complete it.
          </p>
        </div>

        <div className="roadmap-h reveal d2">
          {/* SVG wavy connecting line */}
          <svg className="roadmap-svg" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M 100,30 C 150,10 200,50 250,30 C 300,10 350,50 400,30 C 450,10 500,50 550,30 C 600,10 650,50 700,30 C 750,10 800,50 850,30 C 900,10 950,50 1000,30 C 1050,10 1100,50 1150,30"
              fill="none"
              stroke="var(--teal)"
              strokeWidth="2.5"
              strokeOpacity="0.35"
              strokeLinecap="round"
            />
          </svg>

          <div className="roadmap-steps">
            {steps.map((s, i) => (
              <div className={`rh-step reveal d${i + 1}${s.final ? ' rh-final' : ''}`} key={s.num}>
                <div className="rh-num">{s.num}</div>
                <div className="rh-circle">
                  <span className="rh-icon">{s.icon}</span>
                </div>
                <div className="rh-title">{s.title}</div>
                <div className="rh-sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
