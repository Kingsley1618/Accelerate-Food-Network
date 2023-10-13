'use client'
import React from 'react'
import styles from "./AboutUs.module.css"
import Market from "@/assets/Images/Market.jpg"
import { motion } from "framer-motion"
import Image from 'next/image'



export default function AboutUs() {
  return (
    <section id="aboutus" className='overflow-hidden bg-[rgb(39,37,37)] py-[40px] px-[15px] z-[-1] mt-8'>
    <div className={`container flex md:flex-row flex-col justify-between gap-x-8`}>

<div className='flex-1'>
    <motion.h1 initial={{ opacity: 0, x: -50}}
whileInView={{ opacity: 1, x: 0}}
transition={{ duration: 0.5 }}
viewport={{once:true}} className={styles.headerText}>Food Security in Nigeria: Our Commitment to Improving Lives</motion.h1>

    <motion.p
    initial={{ opacity: 0, x: -50}}
    whileInView={{ opacity: 1, x: 0}}
    transition={{ duration: 0.5 }}
    viewport={{once:true}}
    className={`${styles.text}`}>Welcome to Accelerated Food Exchange Network (AFEN), a non-profit organization that is dedicated to providing food services to low-income earners in Nigeria. Our mission is to make nutritious meals available to everyone, regardless of income. Join us in the fight against
         hunger by making a donation or volunteering your time today.</motion.p>
</div>

<motion.div
initial={{ opacity: 0, scale: 0 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ type: 'spring', damping: 10, stiffness: 100,duration: 0.5 }}
viewport={{once:true}}
className='flex-1 md:mt-0 mt-7 flex items-center'>
<Image src={Market} className='w-[100%] max-w-[500px]  block md:ml-auto mx-auto rounded-md h-[auto]' alt='market' width={700} height={400} loading='lazy' />

</motion.div>

    </div>
    </section>
  )
}

