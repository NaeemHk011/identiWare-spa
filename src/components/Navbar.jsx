import { useState, useEffect } from 'react'
import logo from '../assets/identi wear - Logo Design - FF.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="nav" style={{ boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.5)' : 'none' }}>
      <div className="nav-inner">
        <div className="nav-brand">
          <img src={logo} alt="identiWARE" className="nav-logo-img" />
        </div>

        <div className={`nav-links${menuOpen ? ' nav-links-open' : ''}`}>
          <a href="#services" onClick={closeMenu}>What We Handle</a>
          <a href="#who"      onClick={closeMenu}>Provider Partnerships</a>
          <a href="#process"  onClick={closeMenu}>The Process</a>
          <a href="#brand"    onClick={closeMenu}>Our Brand</a>
          <a href="#apply" className="nav-cta" onClick={closeMenu}>Book Appointment →</a>
        </div>

        <div
          className={`nav-hamburger${menuOpen ? ' nav-hamburger-open' : ''}`}
          role="button"
          aria-label="Menu"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span /><span /><span />
        </div>
      </div>
    </nav>
  )
}
