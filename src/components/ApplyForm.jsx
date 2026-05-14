import { useEffect } from 'react'

export default function ApplyForm() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://link.webtechs.dev/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
  }, [])

  return (
    <section className="apply-sec" id="apply">
      <div className="apply-heading reveal">
        <div className="sec-tag">Apply for Partnership</div>
        <h2 className="sec-h2" style={{ marginBottom: '0.8rem' }}>
          Your Story Starts<br /><em>With One Form</em>
        </h2>
        <p className="sec-p" style={{ marginBottom: '2.8rem' }}>
          Complete the short application below and a member of our team will contact
          you within 48 hours for a private, no-obligation discovery consultation.
        </p>
      </div>

      <div className="apply-inner">
        <div className="apply-img reveal">
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=85&fit=crop"
            alt="Luxury Med Spa Consultation"
          />
          <div className="apply-img-overlay" />
          <div className="apply-img-text">
            <h3>Let's Build<br />Yours Together</h3>
            <p>We respond within 48 hours   no pressure, pure strategy.</p>
          </div>
        </div>

        <div className="reveal d2">
          <div className="ghl-form-wrapper">
            <iframe
              src="https://link.webtechs.dev/widget/booking/dCOrw8hwDeBTY0IyuF4k"
              style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }}
              id="msgsndr-calendar"
              scrolling="no"
              title="Book a Partnership Call"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
