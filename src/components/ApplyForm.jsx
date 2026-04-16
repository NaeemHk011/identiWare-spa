export default function ApplyForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for applying! Our team will reach out within 48 hours for your private discovery call.')
  }

  return (
    <section className="apply-sec" id="apply">
      <div className="apply-inner">
        <div className="apply-img reveal">
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=85&fit=crop"
            alt="Luxury Med Spa Consultation"
          />
          <div className="apply-img-overlay" />
          <div className="apply-img-text">
            <h3>Let's Build<br />Yours Together</h3>
            <p>We respond within 48 hours — no pressure, pure strategy.</p>
          </div>
        </div>

        <div className="reveal d2">
          <div className="sec-tag">Apply for Partnership</div>
          <h2 className="sec-h2" style={{ textAlign: 'left', marginBottom: '0.8rem' }}>
            Your Story Starts<br /><em>With One Form</em>
          </h2>
          <p className="sec-p" style={{ marginBottom: '2.2rem' }}>
            Complete the short application below and a member of our team will contact
            you within 48 hours for a private, no-obligation discovery consultation.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="Jane" required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Smith" required />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="jane@example.com" required />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="(713) 000-0000" required />
            </div>

            <div className="form-group">
              <label>I am a...</label>
              <select required defaultValue="">
                <option value="" disabled>Select your role</option>
                <option>Operator / Entrepreneur</option>
                <option>Licensed Esthetician</option>
                <option>Investor / Co-Founder</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>City &amp; State of Interest</label>
              <input type="text" placeholder="Houston, TX" required />
            </div>

            <button type="submit" className="form-submit">
              Submit My Application →
            </button>

            <p className="form-note">
              Or call us directly:&nbsp;
              <a href="tel:7132686963">713-268-6963</a>
              &nbsp;·&nbsp;
              <a href="https://713botoxme.com" target="_blank" rel="noreferrer">713botoxme.com</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
