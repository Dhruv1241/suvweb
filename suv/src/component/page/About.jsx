import React from 'react'
import HeroSection from '../herosection/HeroSection'
export default function About() {
    const data = {
        name: 'E-commerce Store'
    }
  return (
    <div>
      <HeroSection data={data}/>
    </div>
  )
}
