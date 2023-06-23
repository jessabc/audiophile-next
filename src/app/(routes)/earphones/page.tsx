"use client"

import Image from 'next/image'
import { RootState } from '../../_redux/store'
import { useSelector, useDispatch } from 'react-redux'
import Product from '@/app/_components/Product'
import Menu from '@/app/_components/menu/Menu'
import axios from 'axios'
import { useEffect, useState } from 'react'



export default async function Earphones() {
 
  // const allProducts = useSelector((state: RootState) => state.products.value)
  // const earphones = allProducts.filter(product => product.category === 'earphones')
 
  const [earphones, setearphones] = useState([])
  useEffect(() => { 
    const getProductData = async () => {
      try {
        const response = await axios.get('/api/products/earphones');
        setearphones(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    getProductData()
  },[])
   
 
  const earphoneElements =  earphones.map((item, index) => <Product key={item.id} item={item}/>)

  return (
    <main className="">
      <div className='bg-black '>
            <h2 className='font-bold text-3xl text-center tracking-wider uppercase text-white py-10'>Earphones</h2>
        </div>

        <div className='px-8 md:px-12 lg:px-32 mt-20 mb-52'>
          {earphoneElements}
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