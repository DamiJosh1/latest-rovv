// src/pages/cities/index.tsx

import Footer from '../sections/Footer'
import Header from '../../layout/Header'
import CitiesSection from './CitiesSection'
import AbujaSection from './AbujaSection'
import LagosSection from './LagosSection'



export default function Cities() {
    return (
        <div >
            <Header />
            <CitiesSection />
            <LagosSection />
            <AbujaSection />
            <Footer />
            
        </div>
    )
}