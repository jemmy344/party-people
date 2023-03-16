import React from 'react'
import Populardestinations from '../components/PopularDesination'
import { Search } from '../components/Search'


const LandingPage = () => {
  return (
    <div>
      <div>
        <Search />
      </div>
    <Populardestinations/>
    </div>
  )
}

export default LandingPage