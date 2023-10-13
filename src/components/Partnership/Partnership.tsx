'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from "./Partnership.module.css"
export default function Partnership() {
 
  return (
  <section  id="partnership" className='z-[-1] bg-[rgb(12,12,12)] py-[40px] px-[15px] border-t-[.8px] border-[rgb(82,77,77)]'>
<motion.div
initial={{ opacity: 0}}
whileInView={{ opacity: 1}}
transition={{ duration: 0.5 }}
viewport={{once:true}}
className='border-[.8px] bg-[rgb(39,37,37)] max-w-[1000px] w-[100%] mx-auto border-[rgb(82,77,77)] rounded-2xl md:py-[40px] md:px-[40px] px-[10px] py-[20px]'>

<motion.h1
 initial={{ opacity: 0, y: 50}}
 whileInView={{ opacity: 1, y: 0}}
 transition={{ duration: 0.5 }}
 viewport= {{once:true}} 
className={styles.headerText}>Our Partnership with Training Firms for Poultry Production</motion.h1>

<motion.p
 initial={{ opacity: 0, y: 50}}
 whileInView={{ opacity: 1, y: 0}}
 transition={{ duration: 0.5 }}
 viewport= {{once:true}} 
 className={styles.text}>One of our key initiatives is to partner with training firms to help develop the skills and knowledge required for effective poultry production. We believe that this is a crucial step in ensuring that our communities have access
     to fresh, high-quality eggs and meat, which are essential sources of protein.</motion.p>



<motion.div
className='flex justify-between mt-[30px] gap-x-6 md:flex-row flex-col md:gap-y-0 gap-y-6'

>
<motion.div
initial={{opacity:0, y:0}}
whileInView={{opacity:1, y:1}}

 viewport= {{once:true}} className='flex-1' >
<h1 className={styles.subtitle}>Improved Livelihoods</h1>
<p className={styles.text}>Through our training programs, participants are equipped with the skills they need to raise healthy and 
    productive birds, which can be sold for a profit or used to supplement their own diets.</p>
</motion.div>

<motion.div
initial={{opacity:0, y:30}}
whileInView={{opacity:1, y:0}}
transition={{delay:0.2}}
 viewport= {{once:true}} className='flex-1'>
<h1 className={styles.subtitle}>Higher Quality Products</h1>
    
    <p className={styles.text}>Our training programs focus on animal welfare, disease prevention, and best practices for feed and water management, helping
         to ensure the production of high-quality, safe and healthy products for consumers.</p>
</motion.div>



<motion.div
initial={{opacity:0, y:30}}
whileInView={{opacity:1, y:0}}
transition={{delay:0.3}}
 viewport= {{once:true}} className='flex-1'>

    <h1 className={styles.subtitle}>Increased Food Security</h1>

    <p className={styles.text}>By empowering individuals to raise poultry, we are contributing to the overall food supply,
         helping to improve food security and reduce dependency on imported products.</p>
</motion.div>


</motion.div>
</motion.div>

  </section>
  )
}
