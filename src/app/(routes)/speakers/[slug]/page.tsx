"use client"
import DisplayProduct from '@/app/_components/DisplayProduct'
import { RootState } from '@/app/_redux/store'
import Image from 'next/image'
import {useSelector} from 'react-redux'
import Menu from '@/app/_components/menu/Menu'
import { Suspense, useEffect, useState } from 'react'
import axios from 'axios'
import { checkEnviroment } from '@/app/_helpers/checkEnviroment'
import Loading from '@/app/loading'
import Counter from '@/app/_components/Counter'
import Example from '@/app/_components/Example'

export async function generateMetadata({ params }) {

  return {
    title: params.slug,
  }
}
async function getProductData(params) {
  const response = await axios.get(checkEnviroment().concat(`/api/products/speakers/${params.slug}`))
  return response.data
}

export default async function Speaker({params}) {
  // const allProducts = useSelector((state: RootState) => state.products.value)
  // const thisProduct = allProducts.find(product => product.slug === params.slug)
  const thisProduct = await getProductData(params)

  // const [thisProduct, setThisProduct] = useState()
 
  // useEffect(() => { 
  //   const getProductData = async () => {
  //     try {
  //       const response = await axios.get(`/api/products/speakers/${params.slug}`);
     
  //       setThisProduct(response.data)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   } 
  //   getProductData()
  // },[])
  
  return (

    <main className="">

     {/* <DisplayProduct product={thisProduct} /> */}
   <Example  product={thisProduct}/>
 
    <Menu />
  
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