import logo from '../assets/05a2d92b-fea5-49b7-8eda-e042ccd40631.jpg'

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="ft-brand">
          <img src={logo} alt="identiWARE" className="ft-logo-img" />
          <p>
            At Identity Aesthetics, we are here to meet every aesthetic treatment need
            and now, to help you own your own chapter of this story. Luxury med spa
            ownership, done right, done with you.
          </p>
        </div>

        <div className="ft-col">
          <h4>Partnership</h4>
          <a href="#services">What We Handle</a>
          <a href="#who">Provider Partnerships</a>
          <a href="#process">The Process</a>
          <a href="#brand">Our Brand</a>
          <a href="#apply">Apply Now</a>
        </div>

        <div className="ft-col">
          <h4>Identity Aesthetics</h4>
          <a href="https://713botoxme.com" target="_blank" rel="noreferrer">Main Website</a>
          <a href="https://713botoxme.com/med-spa-services/" target="_blank" rel="noreferrer">Our Services</a>
          <a href="https://713botoxme.com/locations/" target="_blank" rel="noreferrer">Locations</a>
          <a href="https://713botoxme.com/about/" target="_blank" rel="noreferrer">About Us</a>
        </div>

        <div className="ft-col">
          <h4>Contact</h4>
          <a href="tel:7132686963">713-268-6963</a>
          <a href="https://www.facebook.com/identityAestheticCenters/" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.instagram.com/identityaesthetics/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.tiktok.com/@identityaestheticcenter" target="_blank" rel="noreferrer">TikTok</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="ft-copy">© 2026 Identity Aesthetic Center LLC - All Rights Reserved</div>
        <div className="ft-socials">
          <a href="https://www.facebook.com/identityAestheticCenters/" target="_blank" rel="noreferrer" className="ft-soc" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/identityaesthetics/" target="_blank" rel="noreferrer" className="ft-soc" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@identityaestheticcenter" target="_blank" rel="noreferrer" className="ft-soc" aria-label="TikTok">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
            </svg>
          </a>
        </div>
        <div className="ft-copy">
          <a href="https://713botoxme.com/privacy-policy/" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>Privacy Policy</a>
        </div>
      </div>

      <div className="footer-powered">
        Powered by&nbsp;
        <a href="https://axistechgroup.com/" target="_blank" rel="noreferrer">AxisTechGroup</a>
      </div>
    </footer>
  )
}
