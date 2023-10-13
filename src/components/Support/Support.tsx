'use client'
import React from 'react'
import styles from "./support.module.css"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Donation from "@/assets/WebP/donationImage.webp"
import Together from "@/assets/Images/togetherImage.jpg"
import Activities from "@/assets/Images/activities.jpg"
export default function Support() {
  return (
 <section id="support" className='z-[-1] bg-[rgb(39,37,37)] overflow-hidden border-t-[.8px] border-[rgb(82,77,77)]  py-[40px] px-[15px]'>

<div className={`container`}>
<motion.h1
initial={{opacity:0, x:-30}}
whileInView={{opacity:1, x: 0}}
viewport= {{once:true}} 
 className={styles.headerText}>Support Our Mission</motion.h1>

<motion.p
initial={{opacity:0, x:-30}}
whileInView={{opacity:1, x: 0}}
viewport= {{once:true}} 
 className={styles.text}>Your support can make all the difference in the lives of those we serve. Consider making a donation or volunteering your time to support 
AFEN&apos;s mission to combat hunger and improve food security across Nigeria.</motion.p>


<div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-6 mt-5 grid-rows-auto mx-auto'>
<div className='md:ml-auto mx-auto'>
<Image src={Donation} alt='donate' className=' h-[auto] rounded-xl aspect-video' width={500} height={350} />

<h1 className={styles.subtitle}>Donate</h1>

<p className={styles.text}>Your donation can help provide fresh, nutritious food to communities in need across Nigeria.</p>
</div>



<div className='md:ml-auto mx-auto'>
<Image src={Activities} alt='together' className='rounded-xl h-[auto]  aspect-video' width={500} height={350} />

<h1 className={styles.subtitle}>Volunteer</h1>

<p className={styles.text}>Join our team of dedicated volunteers and make a difference in the lives of those we serve.</p>
</div>





<div className='md:ml-auto mx-auto'>
<Image src={Together} alt='activities' className='h-[auto] rounded-xl aspect-video' width={500} height={350} />

<h1 className={styles.subtitle}>Get Involved</h1>

<p className={styles.text}>Partner with us to help support our mission to improve food security, nutrition, and economic development across Nigeria.</p>
</div>


</div>



</div>
 </section>
  )
}