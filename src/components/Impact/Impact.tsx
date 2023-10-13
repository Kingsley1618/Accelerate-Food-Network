'use client'
import React from 'react'
import { motion } from "framer-motion";
import styles from "./impact.module.css"
export default function Impact() {
 
  return (
 <section id="impact" className='z-[-1] bg-[rgb(39,37,37)] border-t-[.8px] border-[rgb(82,77,77)]  md:py-[60px] py-[40px] px-[15px]'>
<div className={`container`}>
<h1 className={styles.headerText}>Improving Lives, One Meal at a Time</h1>

<p className={styles.text}>At AFEN, we are committed to improving the lives of those we serve, one meal at a time. By providing access to healthy and nutritious food, we are making a positive 
impact on the health, wellbeing, and economic stability of communities across Nigeria.</p>


<motion.div
initial={{opacity:0, y:30}}
whileInView={{opacity:1, y:0}}
viewport= {{once:true}}
 className='flex flex-wrap md:flex-row gap-y-4 flex-col justify-between gap-x-5 mt-5'>
<motion.div
initial={{opacity:0, y:30}}
whileInView={{opacity:1, y:0}}

viewport= {{once:true}} className='flex-1 bg-[rgb(17,0,128)] p-[15px] rounded-md h-[auto]' >
<h1 className='text-[1.4rem] text-white font-bold'>Community Engagement</h1>
<p className='text-white text-[1.1rem] mt-5'>We provide a platform for community engagement, facilitating dialogue and collaboration across different sectors and stakeholders.</p>
</motion.div>

<motion.div
initial={{opacity:0, y:30}}
whileInView={{opacity:1, y:0}}
transition={{delay:0.2}}
 viewport= {{once:true}} className='flex-1 bg-[rgb(17,0,128)] p-[15px] rounded-md h-[auto]'>
<h1  className='text-[1.3rem] text-white font-bold'>Social Impact</h1>
<p className='text-white text-[1.1rem] mt-5'>Through our programs and initiatives, we are able to create positive social impact, supporting economic development, and community building across Nigeria.</p>
</motion.div>

<motion.div
initial={{opacity:0, y:30}}
whileInView={{opacity:1, y:0}}
transition={{delay:0.3}}
 viewport= {{once:true}} className='flex-1 bg-[rgb(17,0,128)] p-[15px] rounded-md h-[auto]'>
<h1  className='text-[1.3rem] text-white font-bold'>Food for All</h1>
<p className='text-white text-[1.1rem] mt-5'>Our ultimate goal is to provide access to safe, healthy, and nutritious food to everyone across Nigeria,
 making a positive impact on the lives and wellbeing of millions of people.</p>
</motion.div>


</motion.div>
</div>


 </section>
  )
}
