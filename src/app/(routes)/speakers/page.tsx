import Product from '@/app/_components/product/Product'
import Menu from '@/app/_components/menu/Menu'
import { Suspense } from 'react'
import axios from 'axios'
import { useCheckEnviroment } from '@/app/_hooks/useCheckEnviroment'
import Loading from '@/app/loading'
import { IProduct } from '@/app/interfaces'


export const metadata = {
  title: 'Speakers'
}


async function getProductData() {
  const response = await axios.get(useCheckEnviroment().concat('/api/products/speakers'))
  return response.data
}


export default async function Speakers() {
    
  const speakers = await getProductData()

  const speakerElements = speakers?.map((item: IProduct, index: number) => <Product key={item.id} item={item} index={index}/>)

  return (
    <main className="fade-in">

      <div className='bg-black '>
          <h2 className='font-bold text-3xl text-center tracking-wider uppercase text-white py-10'>Speakers</h2>
      </div>

      <Suspense fallback={<Loading/>}>
        <div className='px-8 md:px-12 lg:px-32 mt-20 mb-52'>
          {speakerElements}
        </div> 
      </Suspense >

      <Menu/> 
          
    </main>
  ) 
}
