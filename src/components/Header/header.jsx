import styles from "./header.module.css"
import React from 'react'
import {FaBarsStaggered} from "react-icons/fa6"
import Link from 'next/link'
export default function Header() {


  return (
   <>

<nav className="flex justify-between gap-x-5 fixed top-0 left-0 bg-white w-[100%] min-h-[7.2vh] z-10 px-5 items-center">
<h1 className="text-[black] font-bold text-[1.2rem]">AcceleratedFoodNetwork</h1>


<ul className="md:flex hidden gap-x-8 items-center text-[1rem] hidden">
<Link href="/#mission" className={styles.link}><li>Our Mission</li></Link>

<Link href="/#vision" className={styles.link}><li>Our Vision</li></Link>

<Link href="/#support" className={styles.link}><li>Support Us</li></Link>


</ul>

<FaBarsStaggered className="md:hidden flex cursor-pointer text-[25px]"/>


 </nav>
 </>
  )
}
