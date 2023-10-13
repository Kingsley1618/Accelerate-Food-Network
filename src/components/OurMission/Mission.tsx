'use client'
import React from "react"
import { motion } from "framer-motion";
import styles from "./Mission.module.css"
export default function Mission() {
 
  return (
 <section id="mission" className='z-[-1] bg-[rgb(39,37,37)] border-t-[.8px] border-[rgb(82,77,77)]   py-[40px] px-[15px]'>
<div className={`container`}>
<motion.h1
 initial={{ opacity: 0, y: 50}}
 whileInView={{ opacity: 1, y: 0}}
 transition={{ duration: 0.5 }}
 viewport= {{once:true}}
  className={styles.headerText}>Our Mission: Serving Communities Across Nigeria</motion.h1>

<motion.p
initial={{ opacity: 0, y: 50}}
whileInView={{ opacity: 1, y: 0}}
transition={{ duration: 0.5 }}
viewport= {{once:true}}
className={styles.text}>At AFEN, our mission is to facilitate access to safe, healthy, and nutritious food across Nigeria. We believe that no one should go hungry, and we
     are committed to making a difference in the lives of those who need it most.</motion.p>


<motion.div
initial='hidden'
whileInView='visible'
 className='flex flex-wrap md:flex-row gap-y-4 flex-col justify-between gap-x-5 mt-5'>
<motion.div
initial={{opacity:0, y:30}}
whileInView={{opacity:1, y:0}}

 viewport= {{once:true}} className='flex-1 bg-[rgb(17,0,128)] p-[15px] rounded-md h-[auto]' >
<h1 className='text-[1.3rem] text-white font-bold'>Food Security for All</h1>
<p className='text-white mt-5'>We strive to create a Nigeria where everyone is food-secure, ensuring that no one goes to bed hungry.</p>
</motion.div>

<motion.div
initial={{opacity:0, y:30}}
whileInView={{opacity:1, y:0}}
transition={{delay:0.2}}
 viewport= {{once:true}} className='flex-1 bg-[rgb(17,0,128)] p-[15px] rounded-md h-[auto]'>
<h1  className='text-[1.3rem] text-white font-bold'>Empowering Small Producers</h1>
<p className='text-white mt-5'>By providing support to small farmers and producers, we are able to create a more sustainable food system while improving livelihoods.</p>
</motion.div>

<motion.div
initial={{opacity:0, y:30}}
whileInView={{opacity:1, y:0}}
transition={{delay:0.3}}
 viewport= {{once:true}} className='flex-1 bg-[rgb(17,0,128)] p-[15px] rounded-md h-[auto]'>
<h1  className='text-[1.3rem] text-white font-bold'>Collaboration and Partnership</h1>
<p className='text-white mt-5'>We believe that by working together with partners and collaborators, we can create a stronger, 
    more resilient food system that is better equipped to tackle the challenges of the future.</p>
</motion.div>


</motion.div>
</div>


 </section>
  )
}
