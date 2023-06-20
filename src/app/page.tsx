"use client"

import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './redux/store'
import { setAllProducts } from './redux/features/products/productsSlice'


export default function Home() {

  // const [allProductData, setAllProductData] = useState([])
  // console.log(allProductData)

  // const allProducts = useSelector((state: RootState) => state.products.value)
  const dispatch = useDispatch()
 


  useEffect(() => {
    const getProductData = async () => {
  
      try {
        const response = await axios.get('/data.json');
        
        // setAllProductData(response.data) 
        dispatch(setAllProducts(response.data))
      } catch (error) {
        console.error(error);
      }
    }

    getProductData()
  },[])


  return (
   
    <main className="">

      home

     
     <nav className='flex flex-col bg-orange-500'>
      <Link href='/headphones'>headphones</Link>
      <Link href='/speakers'>speakers</Link>
      <Link href='/earphones'>earphones</Link>
     </nav>
        
      
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