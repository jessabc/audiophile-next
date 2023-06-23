"use client"

import Image from 'next/image'
import { RootState } from '@/app/_redux/store'
import { useSelector, useDispatch } from 'react-redux'
import Product from '@/app/_components/Product'
import Menu from '@/app/_components/menu/Menu'
import axios from 'axios'
import { useEffect, useState } from 'react'


export default function Headphones() {
  // const allProducts = useSelector((state: RootState) => state.products.value)
  // const headphones = allProducts.filter(product => product.category === 'headphones')
const [headphones, setHeadphones] = useState([])
  useEffect(() => { 
    const getProductData = async () => {
      try {
        const response = await axios.get('/api/products/headphones');
        setHeadphones(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    getProductData()
  },[])
   
  const headphoneElements = headphones?.map((item, index) => <Product key={item.id} item={item}/>)
 
  return (
    <main className="">
      <div className='bg-black '>
          <h2 className='font-bold text-3xl text-center tracking-wider uppercase text-white py-10'>Headphones</h2>
      </div>

      <div className='px-8 md:px-12 lg:px-32 mt-20 mb-52'>
        {headphoneElements}
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