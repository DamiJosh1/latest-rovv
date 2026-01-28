import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import Preloader from './components/preloader/Preloader.tsx'

// src/components/pages/Index.tsx
import Header from '../../components/layout/Header'
import Hero from './sections/Hero'
import Testimonial from './sections/TestimonialSection'
import Service from './sections/ServiceSection'
import Download from './sections/DownloadSection'
import Footer from './sections/Footer'
import NewsSection from './sections/News'
import CarsSection from './sections/Cars'


{/* At the very end */}


function App() {

    const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Hidden timer
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 2500)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    }
    else{
      window.addEventListener('load', handleLoad)
    }

    return () => window.removeEventListener('load', handleLoad)
  },[])



  return (
    <>

      <AnimatePresence mode="wait">
        {loading && <Preloader />}
      </AnimatePresence>

  return (
    <>
     <Header />
    <Hero />
    <CarsSection />
    <Service />
    <Testimonial />
    <Download />
    <NewsSection/>
    <Footer />
    
   
    {/* Next sections go here */}
    </>

  )
}

export default App

