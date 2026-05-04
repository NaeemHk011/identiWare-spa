import { useState, useEffect } from 'react'
import logo from '../assets/identi wear - Logo Design - FF.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="nav" style={{ boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.5)' : 'none' }}>
      <div className="nav-inner">
        <div className="nav-brand">
          <img src={logo} alt="identiWARE" className="nav-logo-img" />
        </div>

        <div className="nav-links">
          <a href="#services">What We Handle</a>
          <a href="#who">Who It's For</a>
          <a href="#process">The Process</a>
          <a href="#brand">Our Brand</a>
          <a href="#apply" className="nav-cta">Book Appointment →</a>
        </div>

        <div className="nav-hamburger" role="button" aria-label="Menu">
          <span /><span /><span />
        </div>
      </div>
    </nav>
  )
}
