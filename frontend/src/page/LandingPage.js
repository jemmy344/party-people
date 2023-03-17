import React from 'react'
import Populardestinations from '../components/PopularDesination'
import SpecialOffers from '../components/SpecialOffers'
import { Search } from '../components/Search'
import Footer from '../components/Footer'


const LandingPage = () => {
  return (
    <div>
      <div>
        <Search />
      </div>
    <Populardestinations/>
    <SpecialOffers />
    <Footer />
    </div>
  )
}

export default LandingPage