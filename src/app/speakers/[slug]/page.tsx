"use client"
import DisplayProduct from '@/app/sharedComponents/DisplayProduct'
import { RootState } from '@/app/redux/store'
import Image from 'next/image'
import {useSelector} from 'react-redux'
import Menu from '@/app/sharedComponents/menu/Menu'

export default function Speaker({params}) {
  const allProducts = useSelector((state: RootState) => state.products.value)
  const thisProduct = allProducts.find(product => product.slug === params.slug)
console.log(thisProduct)
  return (
    <main className="">

{/* Speaker with {params.slug} */}
     
<DisplayProduct product={thisProduct}/>
<Menu/>
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