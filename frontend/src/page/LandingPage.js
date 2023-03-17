import React from 'react'
import Populardestinations from '../components/PopularDesination'
import SpecialOffers from '../components/SpecialOffers'
import { Search } from '../components/Search'
import Header from '../components/Header'
import Footer from '../components/Footer'



const LandingPage = () => {
  return (
    <div>
      <Header/>
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