
import AboutUs from '@/components/AboutUs/AboutUs'
import Impact from '@/components/Impact/Impact'
import Nutrition from '@/components/Nutrition/Nutrition'
import Mission from '@/components/OurMission/Mission'
import Partnership from '@/components/Partnership/Partnership'
import Support from '@/components/Support/Support'
import Vision from '@/components/Vision/Vision'
import Header from "@/components/Header/header"
import Image from 'next/image'
export default function Home() {
 

  return (
    <>
    <Header />
    <AboutUs />
    
    <Partnership />

    <Mission />

    <Nutrition />

<Vision />

<Impact />

<Support />
    </>
  )
}
