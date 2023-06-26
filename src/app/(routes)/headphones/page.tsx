import Product from '@/app/_components/Product'
import Menu from '@/app/_components/menu/Menu'
import axios from 'axios'
import { Suspense } from 'react'
import { checkEnviroment } from '@/app/_helpers/checkEnviroment'
import Loading from '@/app/loading'
import { IProduct } from '@/app/interfaces'


export const metadata = {
  title: 'Headphones',
}


async function getProductData() {
  const response = await axios.get(checkEnviroment().concat('/api/products/headphones'))
  return response.data
}

export default async function Headphones() {

  const headphones = await getProductData()
  const headphoneElements = headphones?.map((item: IProduct, index:number) => <Product key={item.id} item={item} index={index}/>)

  return (
    <main className="fade-in">

      <div className='bg-black '>
          <h2 className='font-bold text-3xl text-center tracking-wider uppercase text-white py-10'>Headphones</h2>
      </div>

      <Suspense fallback={<Loading/>}>     
        <div className='px-8 md:px-12 lg:px-32 mt-20 mb-52'>
          {headphoneElements}
        </div> 
      </Suspense>

      <Menu/>
      
    </main>
  )
}


