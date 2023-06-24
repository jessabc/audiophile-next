"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CartModal from '@/app/_modals/cart/CartModal'
import MenuModal from '@/app/_modals/menu/MenuModal'
import { useRouter } from 'next/navigation';
import useWindowSize from '@/app/_hooks/useWindowSize'

export default function  Header  () {
 
  const router = useRouter();
  const { width } = useWindowSize();
  
  return (
    <>
    <header className="fade-in flex justify-between bg-black px-8 py-10 border-b border-gray md:px-12 md:gap-10 lg:px-32 lg:gap-16">

      {/* hamburger on small screen */}
      {/* <button 
        className="lg:hidden" 
       
      >
        <Image
          className=""
          src="/assets/shared/tablet/icon-hamburger.svg"
          alt="hamburger icon"
          width={16}
          height={15}
          
        /> 
      </button> */}
      {width < 1024 &&
           <MenuModal/>
      
      }
   

      {/* audiophile logo */}
      <Link href='/'>
     <Image
          className=""
          src="/assets/shared/desktop/logo.svg"
          alt="logo icon"
          width={143}
          height={25}
          
        /> 
    </Link>

      {/* nav on tablet and desktop */}
      <nav className="font-bold text-white text-sm leading-6 tracking-widest uppercase text-center hidden lg:block ">
        <ul className="flex flex-col gap-3 md:flex-row">
          <li className="hover:text-orange">
            <Link href="/" 
              className={router.pathname == "/" ? "text-orange" : ""}>Home
            </Link>
          </li>
          <li className="hover:text-orange">
            <Link href="/headphones" 
             className={router.pathname == "/headphones" ? "text-orange" : ""}>Headphones
            </Link>
          </li>
          <li className="hover:text-orange">
            <Link href="/speakers" 
              className={router.pathname == "/speaker" ? "text-orange" : ""}>Speakers
            </Link>
          </li>
          <li className="hover:text-orange">
            <Link href="/earphones" 
              className={router.pathname == "/earphones" ? "text-orange" : ""}>Earphones
            </Link>
          </li>
        </ul>
      </nav>

      {/* cart icon */}
    <CartModal/>

   
  </header>
  </>
        
 
  )
}
