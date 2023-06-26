"use client"
import DisplayProduct from '@/app/_components/DisplayProduct'
import { RootState} from '@/app/_redux/store'
import Image from 'next/image'
import {useSelector} from 'react-redux'
import Menu from '@/app/_components/menu/Menu'
import { Suspense, useEffect, useState } from 'react'
import axios from 'axios'
import { checkEnviroment } from '@/app/_helpers/checkEnviroment'
import Loading from '@/app/loading' 
export async function generateMetadata({ params }) {
  return {
    title: params.slug.toUpperCase(),
  }
}
async function getProductData(params) {
  const response = await axios.get(checkEnviroment().concat(`/api/products/earphones/${params.slug}`))
  console.log('fetched')
  return response.data
}


export default async function Earphone({params}) {

  const thisProduct = await getProductData(params)
  console.log('render')
  // const allProducts = useSelector((state: RootState) => state.products.value)
  // const thisProduct = allProducts.find(product => product.slug === params.slug)
  
  // const [thisProduct, setThisProduct] = useState(null)
 
  // useEffect(() => { 
  //   console.log('argh')
  //   const getThisProductData = async () => {
  //     try {
  //       const response = await axios.get(`/api/products/earphones/${params.slug}`);
     
  //       setThisProduct(response.data)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   } 
  //   getThisProductData()
  // },[])

  return (
    <main className="">

      {/* earphones with {params.slug} */}
      {/* <Suspense fallback={<Loading/>}> */}
              {thisProduct && <DisplayProduct product={thisProduct}/>}
      {/* </Suspense>    */}

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