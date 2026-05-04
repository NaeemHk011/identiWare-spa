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
          <a href="#who">Who It's For</a>
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
          <a href="https://www.facebook.com/identityAestheticCenters/" target="_blank" rel="noreferrer" className="ft-soc" aria-label="Facebook">f</a>
          <a href="https://www.instagram.com/identityaesthetics/" target="_blank" rel="noreferrer" className="ft-soc" aria-label="Instagram">ig</a>
          <a href="https://www.tiktok.com/@identityaestheticcenter" target="_blank" rel="noreferrer" className="ft-soc" aria-label="TikTok">tt</a>
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
