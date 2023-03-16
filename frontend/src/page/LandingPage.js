import React from 'react'
import Populardestinations from '../components/PopularDesination'
import SpecialOffers from '../components/SpecialOffers'
import { Search } from '../components/Search'


const LandingPage = () => {
  return (
    <div>
      <div>
        <Search />
      </div>
    <Populardestinations/>
    <SpecialOffers />
    </div>
  )
}

export default LandingPage