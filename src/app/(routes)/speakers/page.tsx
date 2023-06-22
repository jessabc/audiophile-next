"use client"
import Image from 'next/image'
import { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../sharedComponents/Product'
import Menu from '../sharedComponents/menu/Menu'

export default function Speakers() {
    const allProducts = useSelector((state: RootState) => state.products.value)
  const speakers = allProducts.filter(product => product.category === 'speakers')

  const speakerElements = speakers.map((item, index) => <Product key={item.id} item={item}/>)
  return (
    <main className="">
<div className='bg-black '>
                <h2 className='font-bold text-3xl text-center tracking-wider uppercase text-white py-10'>Speakers</h2>
            </div>

            <div className='px-8 md:px-12 lg:px-32 mt-20 mb-52'>
              
                
     {speakerElements}
            </div> 
 

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