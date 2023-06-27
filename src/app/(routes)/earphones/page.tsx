import Product from '@/app/_components/product/Product'
import Menu from '@/app/_components/menu/Menu'
import axios from 'axios'
import { Suspense } from 'react'
import { useCheckEnviroment } from '@/app/_hooks/useCheckEnviroment'
import { IProduct } from '@/app/interfaces'
import Loading from '@/app/loading'


export const metadata = {
  title: 'Earphones',
}


async function getProductData() {
  const response = await axios.get(useCheckEnviroment().concat('/api/products/earphones'))
  return response.data
}


export default async function Earphones() {
    
  const earphones = await getProductData()

  const earphoneElements =  earphones.map((item: IProduct, index: number) => <Product key={item.id} item={item} index={index}/>)

  return (
    <main className="fade-in">

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
