'use client'
import React from 'react'
import styles from "./Nutrition.module.css"
import Image from 'next/image'
import { motion } from 'framer-motion'
import Fruits from "@/assets/WebP/fruitsImage.webp"
import ElderlyNutrition from "@/assets/Images/Elderly-nutrition.jpg"
import ChildNutrient from "@/assets/WebP/organic-banana.webp"
export default function Nutrition() {
  return (
 <section id="Nutrition" className='bg-[rgb(39,37,37)] border-t-[.8px] border-[rgb(82,77,77)]  py-[40px] px-[15px]'>

<div className={`container`}>
<h1 className={styles.headerText}>The Importance of Nutrition and Health</h1>

<p className={styles.text}>At AFEN, we believe that good nutrition is the cornerstone of good health, and that access to healthy and nutritious food is a basic human right. We are committed to helping
 individuals and communities across Nigeria to improve their diets and overall health..</p>


<motion.div

 
className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-6 mt-5 grid-rows-auto mx-auto'>
<motion.div
initial={{opacity:0, scale:0}}
whileInView={{opacity:1, scale:1}}

 viewport= {{once:true}} className=''>
<Image src={Fruits} alt='fruit' className=' h-[auto] rounded-xl aspect-video' width={500} height={350} />

<h1 className={styles.subtitle}>Healthy Eating Habits</h1>

<p className={styles.text}>We provide guidance on healthy eating habits and encourage the consumption of whole, fresh foods to improve overall health and wellbeing.</p>
</motion.div>



<motion.div
initial={{opacity:0, scale:0}}
whileInView={{opacity:1, scale:1}}
transition={{delay:0.2}}
 viewport= {{once:true}} className=''>
<Image src={ChildNutrient} alt='fruit' className='rounded-xl h-[auto]  aspect-video' width={500} height={350} />

<h1 className={styles.subtitle}>Child Nutrition</h1>

<p className={styles.text}>We work with families to ensure that children have access to healthy and nutritious foods, helping to improve their physical and cognitive development.</p>
</motion.div>





<motion.div
initial={{opacity:0, scale:0}}
whileInView={{opacity:1, scale:1}}
transition={{delay:0.3}}
 viewport= {{once:true}} className=''>
<Image src={ElderlyNutrition} alt='fruit' className='h-[auto] rounded-xl aspect-video' width={500} height={350} />

<h1 className={styles.subtitle}>Elderly Health</h1>

<p className={styles.text}>We provide support to elderly individuals and those with chronic health conditions, ensuring they have access to a healthy and balanced diet, which is crucial to managing their conditions.</p>
</motion.div>


</motion.div>



</div>
 </section>
  )
}
