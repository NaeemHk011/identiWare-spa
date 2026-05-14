const rows = [
  {
    problem: 'Compliance headaches & regulatory minefields',
    cure: 'Clinical Protocols & Compliance Documentation   fully implemented',
  },
  {
    problem: 'Staffing nightmares & constant turnover',
    cure: 'Complete Operating System with trained staff & management manuals',
  },
  {
    problem: 'Construction chaos & buildout delays',
    cure: 'Done-For-You Turnkey Buildout   medical-grade, champagne-pop ready',
  },
  {
    problem: 'MSO / legal complexity for licensed providers',
    cure: 'Bespoke Deal Structuring   MSO-compliant, physician-designed',
  },
  {
    problem: 'Provider burnout & administrative overwhelm',
    cure: 'Freedom of Practice   you lead clinically, we run the business',
  },
]

export default function PainSolution() {
  return (
    <section className="pain-sec">
      <div className="pain-inner">
        <div className="sec-head reveal" style={{ maxWidth: 680, margin: '0 auto 3.5rem' }}>
          <div className="sec-tag">The Cure vs. The Alternative</div>
          <h2 className="sec-h2">
            What Providers Face <em>Alone</em>  <br />and What identiWARE Delivers
          </h2>
          <p className="sec-p">
            Every barrier standing between a licensed provider and med spa ownership
            has a solution. We built it. You unlock it.
          </p>
        </div>

        <div className="pain-table reveal d2">
          <div className="pain-table-head">
            <div className="pain-col-label pain-problem-label">⚠ The Problem (Alone)</div>
            <div className="pain-divider-head" />
            <div className="pain-col-label pain-cure-label">✦ The Cure (identiWARE)</div>
          </div>

          {rows.map((row, i) => (
            <div className={`pain-row reveal d${(i % 4) + 1}`} key={i}>
              <div className="pain-problem">
                <span className="pain-x">✕</span>
                {row.problem}
              </div>
              <div className="pain-arrow">→</div>
              <div className="pain-cure">
                <span className="pain-check">✓</span>
                {row.cure}
              </div>
            </div>
          ))}
        </div>

        <div className="pain-badge-row reveal d3">
          <div className="pain-badge">5+ Active TX Locations</div>
          <div className="pain-badge">100% Done-For-You</div>
          <div className="pain-badge">MSO-Compliant Structures</div>
          <div className="pain-badge">48hr Response Guarantee</div>
        </div>
      </div>
    </section>
  )
}
