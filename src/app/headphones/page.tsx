"use client"

import Image from 'next/image'
import { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../components/Product'


export default function Headphones() {
  const allProducts = useSelector((state: RootState) => state.products.value)
  const headphones = allProducts.filter(product => product.category === 'headphones')
  console.log(headphones)
  const headphoneElements = headphones.map(product => <Product key={product.id} product={product}/>)
  // console.log(allProducts)

  return (
    <main className="">

Headphones
     <div>{headphoneElements}</div>
      
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