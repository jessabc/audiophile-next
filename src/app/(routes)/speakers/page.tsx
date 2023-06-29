"use client"
import Product from '@/app/_components/product/Product'
import Menu from '@/app/_components/menu/Menu'
import { IProduct } from '@/app/interfaces'
import useGetProducts from '@/app/_hooks/useGetProducts'


export default  function Speakers() {
    
  const products =  useGetProducts()

  const speakers = products.filter(item => item.category === 'speakers')

  const speakerElements = speakers?.map((item: IProduct, index: number) => <Product key={item.id} item={item} index={index}/>)

  return (
    <main className="fade-in">

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
