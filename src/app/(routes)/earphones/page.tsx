"use client"
import Product from '@/app/_components/product/Product'
import Menu from '@/app/_components/menu/Menu'
import { Suspense } from 'react'
import { IProduct } from '@/app/interfaces'
import Loading from '@/app/loading'
import Head from 'next/head'
import { Metadata } from 'next'
import useGetProducts from '@/app/_hooks/useGetProducts'

 
export default  function Earphones() {
    
  const products =  useGetProducts()

  const earphones = products.filter(item => item.category === 'earphones')

  const earphoneElements =  earphones.map((item: IProduct, index: number) => <Product key={item.id} item={item} index={index}/>)

  return (
    <main className="fade-in">
    <Head>
    <title>Earphones</title>
    
  </Head>

      <div className='bg-black '>
        <h2 className='font-bold text-3xl text-center tracking-wider uppercase text-white py-10'>Earphones</h2>
      </div>

      <Suspense fallback={<Loading/>}>
        <div className='px-8 md:px-12 lg:px-32 mt-20 mb-52'>
          {earphoneElements}
        </div> 
      </Suspense >

      <Menu/>
      
    </main>
  )
}
