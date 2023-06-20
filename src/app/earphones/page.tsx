"use client"

import Image from 'next/image'
import { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../components/Product'

export default function Earphones() {
   const allProducts = useSelector((state: RootState) => state.products.value)
 
  const earphones = allProducts.filter(product => product.category === 'earphones')
  console.log(earphones)
  const earphoneElements = earphones.map(product => <Product key={product.id} product={product}/>)
  return (
    <main className="">

Earphones
     {earphoneElements}
        
      
    </main>
  )
}
{/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}