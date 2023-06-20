"use client"
import Image from 'next/image'
import { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../components/Product'

export default function Speakers() {
    const allProducts = useSelector((state: RootState) => state.products.value)
  const speakers = allProducts.filter(product => product.category === 'speakers')

  const speakerElements = speakers.map(product => <Product key={product.id} product={product}/>)
  return (
    <main className="">

Speakers
     {speakerElements}
        
      
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