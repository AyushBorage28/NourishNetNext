import React from 'react'
import Hero from '../hero/page'
import Stats from '../stats/page'
import HowWeWork from '../howWeWork/page'
import Features from '../features/page'
import ImageSection from '../imageSection/page'
import Trial from '../trial/page'
import JoinUs from '../joinus/page'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
const Homescreen = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
   <Stats/>
   <HowWeWork/>
   <Features/>
   <ImageSection/>
   <Trial/>
   <JoinUs/>
   <Footer/>
    </div>
  )
}

export default Homescreen
