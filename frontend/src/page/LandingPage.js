import React from 'react'
import Populardestinations from '../components/PopularDesination'
import SpecialOffers from '../components/SpecialOffers'
import { Search } from '../components/Search'
import Header from '../components/Header'


const LandingPage = () => {
  return (
    <div>
      <Header/>
      <div>
        <Search />
      </div>
    <Populardestinations/>
    <SpecialOffers />
    </div>
  )
}

export default LandingPage