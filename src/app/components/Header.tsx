"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CartModal from '../modals/cart/CartModal'

export const Header = () => {
 

  
  
  return (
    <div className='bg-blue-500 flex justify-between h-20 items-center'>
        
        <Image
          className=""
          src="/assets/shared/tablet/icon-hamburger.svg"
          alt="hamburger icon"
          width={16}
          height={15}
          
        /> 

    <Link href='/'>
     <Image
          className=""
          src="/assets/shared/desktop/logo.svg"
          alt="hamburger icon"
          width={143}
          height={25}
          
        /> 
    </Link>
       

  {/* <Image
          className=""
          src="/assets/shared/desktop/icon-cart.svg"
          alt="hamburger icon"
          width={23}
          height={20}
          
        />  */}
        <CartModal/>



        
        
    
    
    
    </div>
  )
}
