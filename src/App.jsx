import { useEffect } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WaveDivider from './components/WaveDivider'
import Services from './components/Services'
import WhoSection from './components/WhoSection'
import Process from './components/Process'
import BrandSection from './components/BrandSection'
import OfferBanner from './components/OfferBanner'
import QuoteSection from './components/QuoteSection'
import ApplyForm from './components/ApplyForm'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.07 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />

      {/* Hero → Services */}
      <WaveDivider topColor="var(--bg)" bottomColor="var(--bg2)" />

      <Services />

      {/* Services → Who */}
      <WaveDivider topColor="var(--bg2)" bottomColor="var(--bg)" flip />

      <WhoSection />

      {/* Who → Process */}
      <WaveDivider topColor="var(--bg)" bottomColor="var(--bg2)" />

      <Process />

      {/* Process → Brand */}
      <WaveDivider topColor="var(--bg2)" bottomColor="var(--bg)" flip />

      <BrandSection />

      <OfferBanner />

      <QuoteSection />

      <ApplyForm />

      <Footer />
    </>
  )
}
