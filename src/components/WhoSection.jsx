import physicianImg from '../assets/physician-entrepreneur.jpg'
import nurseImg from '../assets/nurse-practitioner.jpg'

const cards = [
  {
    icon: '🩺',
    title: 'Physicians & MDs',
    text: 'You spent years mastering medicine   not managing contractors, compliance paperwork, or lease negotiations. identiWARE hands you a finished, operating luxury med spa so you can practice at the top of your license and lead as an owner, not an administrator.',
  },
  {
    icon: '💉',
    title: 'Nurse Practitioners (NPs)',
    text: 'Your NP license is your most powerful business asset. IdentiWARE wraps it in a complete operating system   clinical protocols, MSO structure, staffing, and a luxury brand already trusted across Texas. You bring the credential. We bring everything else.',
  },
  {
    icon: '🏥',
    title: 'Physician Assistants (PAs)',
    text: 'PAs are among the most capable providers in aesthetics   yet administrative barriers keep too many from owning their practice. IdentiWARE eliminates every one of those barriers with done-for-you buildouts, compliance documentation, and bespoke deal structuring designed around your legal and financial needs.',
  },
]

export default function WhoSection() {
  return (
    <section className="who-sec" id="who">
      <div className="who-inner">
        <div className="who-img-wrap reveal">
          <div className="who-img-main">
            <img
              src={physicianImg}
              alt="Physician Entrepreneur — Licensed Provider Becoming Med Spa Owner"
            />
          </div>
          <div className="who-img-accent">
            <img
              src={nurseImg}
              alt="Nurse Practitioner in Clinical Setting"
            />
          </div>
          <div className="who-badge">
            <span className="n">100%</span>
            <span className="l">Done For You</span>
          </div>
        </div>

        <div className="reveal d2">
          <div className="sec-tag">Provider Partnerships</div>
          <h2 className="sec-h2" style={{ textAlign: 'left', marginBottom: '0.8rem' }}>
            Built for the <em>Licensed Provider</em><br />Ready to Own.
          </h2>
          <p className="sec-p" style={{ marginBottom: 0 }}>
            Three types of licensed medical professionals who are ready to step from practitioner
            to owner   with a turnkey system that handles every barrier between them and their med spa.
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
