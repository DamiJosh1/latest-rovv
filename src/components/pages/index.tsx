// src/components/pages/Index.tsx
import Header from '../layout/Header'
import Hero from './sections/Hero'
import Testimonial from './sections/TestimonialSection'
import Service from './sections/ServiceSection'
import Download from './sections/DownloadSection'
import Footer from './sections/Footer'
import NewsSection from './sections/News'


{/* At the very end */}


function App() {

  return (
    <>
     <Header />
    <Hero />
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
