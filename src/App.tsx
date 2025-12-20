import {Routes, Route} from 'react-router-dom'

import HomePage from './components/pages/index.tsx'
import GetToKnowRovvPage from './components/pages/get-to-know-rovv/index.tsx'
import Cities from './components/pages/cities/index.tsx'
import Fleet from './components/pages/fleet-management/index.tsx'
import Partnership from './components/pages/partnership/index.tsx'
import Sustainability from './components/pages/sustainability/index.tsx'
import Drive from './components/pages/drive/index.tsx'
import FAQs from './components/pages/faqs/index.tsx'
import HowItWork from './components/pages/how-it-works/index.tsx'
import Privacy from './components/pages/privacy-policy/index.tsx'
import TermsAndCondition from './components/terms&condition/TermsAndCondition.tsx'


function App () {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/get-to-know-rovv' element={<GetToKnowRovvPage />} />
      <Route path='/cities' element={<Cities />} />
      <Route path='/fleet-management' element={<Fleet />} />
      <Route path='/partnership' element={<Partnership />} />
      <Route path='/sustainability' element={<Sustainability />} />
      <Route path='/drive' element={<Drive />} />
      <Route path='/faqs' element={<FAQs />} />
      <Route path='/how-it-works' element={<HowItWork />} />
      <Route path='/privacy-policy' element={<Privacy />} />
      <Route path='/terms&condition' element={<TermsAndCondition />} />
      
      

      
    </Routes>
  )
}

export default App