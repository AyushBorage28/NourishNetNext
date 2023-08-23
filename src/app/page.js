

import Image from 'next/image'
import styles from './page.module.css'
import Hero from './hero/page'
import Stats from './stats/page'
import HowWeWork from './howWeWork/page'
import Features from './features/page'
import ImageSection from './imageSection/page'
import Trial from './trial/page'

export default function Home() {
  return (
   <>
   <Hero/>
   <Stats/>
   <HowWeWork/>
   <Features/>
   <ImageSection/>
   <Trial/>
   </>
  )
}
