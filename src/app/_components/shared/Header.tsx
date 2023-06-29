"use client"
import React from 'react'
import Image from 'next/image' 
import Link from 'next/link'
import CartModal from '@/app/_modals/cart/CartModal'
import MenuModal from '@/app/_modals/menu/MenuModal'
import { useRouter } from 'next/navigation';
import logo from '../../../../public/assets/shared/desktop/logo.svg'
import { usePathname } from 'next/navigation';
import { useNumItemsInCart } from '@/app/_hooks/useNumItemsInCart'


export default function  Header  () {
 
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
    <header className="fade-in flex justify-between bg-black px-8 py-10 border-b border-gray md:px-12 md:gap-10 lg:px-32 lg:gap-16 sticky z-50 top-0">

      <div className=' lg:hidden'>
      <MenuModal/>
      </div>
   
      {/* audiophile logo */}
      <Link href='/'>
        <Image
          src={logo}
          alt="audiophile logo"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
        /> 
      </Link>

      {/* nav on tablet and desktop */}
      <nav className="font-bold text-white text-sm leading-6 tracking-widest uppercase text-center hidden lg:block ">
        <ul className="flex flex-col gap-3 md:flex-row">
          <li className="hover:text-orange">
            <Link href="/" 
              className={pathname == "/" ? "text-orange" : ""}>Home
            </Link>
          </li>
          <li className="hover:text-orange">
            <Link href="/headphones" 
             className={pathname == "/headphones" ? "text-orange" : ""}>Headphones
            </Link>
          </li>
          <li className="hover:text-orange">
            <Link href="/speakers" 
              className={pathname == "/speaker" ? "text-orange" : ""}>Speakers
            </Link>
          </li>
          <li className="hover:text-orange">
            <Link href="/earphones" 
              className={pathname == "/earphones" ? "text-orange" : ""}>Earphones
            </Link>
          </li>
        </ul>
      </nav>

      {/* cart icon */}
      <div className=' '>

        <div className='flex relative'>
            <div className=''>
              <CartModal/>
            </div>
           <div className='bg-orange rounded-full px-1  flex justify-center items-center absolute -top-2 -right-2'>
            <p className='text-xs font-semibold '>{useNumItemsInCart()}</p>
          </div>
        </div>
     
      </div>
   
  </header>
  </>
        
  )
}
