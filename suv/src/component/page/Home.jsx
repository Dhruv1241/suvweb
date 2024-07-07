import React from 'react'
import HeroSection from '../herosection/HeroSection'
import Service from '../herosection/Services'
import Trusted from '../herosection/Trusted'

export default function Home() {
    
    const data = {
        name: 'ShopNow'
    }
  return (
    <div>
      <HeroSection data={data}/>
      <Service/>
      <Trusted/>

    </div>
  )
}
