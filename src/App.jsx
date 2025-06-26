import React from 'react'
import Navbar from './components/navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import ProjectShowcase from './components/ProjectShowcase.jsx'
import AdAgencyPackages from './components/AdAgencyPackages.jsx'
import Team from './components/Team.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faq from './components/Faq.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div className='overflow-x-hidden bg-orange-50 text-emerald-950 antialiased'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ProjectShowcase />
      <AdAgencyPackages />
      <Team />
      <Testimonials />
      <Faq />
      <ContactForm />
      <Footer/>
    </div>
  )
}

export default App
