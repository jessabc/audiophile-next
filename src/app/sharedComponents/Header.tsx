"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CartModal from '../modals/cart/CartModal'

export const Header = () => {
 

  
  
  return (
    <>
    <header className="fade-in flex justify-between bg-black px-8 py-10 border-b border-gray md:px-12 md:justify-start md:gap-10 lg:px-32 lg:gap-16">

      {/* hamburger on small screen */}
      <button 
        className="lg:hidden" 
       
      >
        <Image
          className=""
          src="/assets/shared/tablet/icon-hamburger.svg"
          alt="hamburger icon"
          width={16}
          height={15}
          
        /> 
      </button>

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
      {/* <nav className="font-bold text-white text-sm leading-6 tracking-widest uppercase text-center hidden lg:block ">
        <ul className="flex flex-col gap-3 md:flex-row">
          <li className="hover:text-orange">
            <NavLink to="/" 
              className={({ isActive }) =>isActive ? 'text-orange' : undefined}>Home
            </NavLink>
          </li>
          <li className="hover:text-orange">
            <NavLink to="/headphones" 
              className={({ isActive }) => isActive ? 'text-orange' : undefined}>Headphones
            </NavLink>
          </li>
          <li className="hover:text-orange">
            <NavLink to="/speakers" 
              className={({ isActive }) => isActive ? 'text-orange' : undefined}>Speakers
            </NavLink>
          </li>
          <li className="hover:text-orange">
            <NavLink to="/earphones" 
              className={({ isActive }) => isActive ? 'text-orange' : undefined}>Earphones
            </NavLink>
          </li>
        </ul>
      </nav> */}

      {/* cart icon */}
    <CartModal/>

   
  </header>
  </>
        
 
  )
}
