import React from 'react'
import styles from "./vision.module.css"
export default function Vision() {
  return (
  <section  id="vision" className='bg-[rgb(39,37,37)] py-[40px] px-[15px] border-t-[.8px] border-[rgb(82,77,77)]'>
<div className=' max-w-[1000px] w-[100%] mx-auto rounded-2xl md:py-[40px] md:px-[40px] px-[10px] py-[20px]'>
<h1 className={styles.headerText}>Our Vision for the Future</h1>

<p className={styles.text}>Our vision for the future is a Nigeria where everyone has access to safe, healthy, and nutritious food, regardless of income or location. We believe in creating a more resilient, sustainable 
food system that supports small producers while ensuring adequate nutrition for all.</p>



<div className='flex justify-between mt-[30px] gap-x-5 md:flex-row flex-col md:gap-y-0 gap-y-6'>
<div className='flex-1'>
<h1 className={styles.subtitle}>Innovative Solutions</h1>
<p className={styles.text}>We strive to implement innovative solutions to address food insecurity and malnutrition, leveraging technology and community partnerships to create positive change.</p>
</div>

<div className='flex-1'>
<h1 className={styles.subtitle}>Empowering Communities</h1>
    
    <p className={styles.text}>We believe that empowering communities is key to creating a more sustainable and equitable food system, and we are committed
     to working with individuals and organizations across Nigeria to achieve this goal.</p>
</div>



<div className='flex-1'>

    <h1 className={styles.subtitle}>Advocacy and Education</h1>

    <p className={styles.text}>We recognize that advocacy and education are crucial elements in creating a more sustainable and equitable food system,
     and we are committed to raising awareness and promoting change at all levels of society.</p>
</div>


</div>
</div>

  </section>
  )
}
