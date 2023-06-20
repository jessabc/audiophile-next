
'use client'
import React from 'react'
import { Product } from '../interfaces'
import Image from 'next/image'
import { useRouter } from 'next/navigation'



interface Props {
    product: Product
}

export default function Product({product} : Props) {
const router = useRouter()


  return (
    <div>
        <Image
          className="w-full h-auto"
          src={`/${product.image.desktop}`}
          alt={`image of ${product.name}`}
          width="0"
          height="0"
          sizes="100vw"
         
          
        /> 
         {/* <Image
          className="w-full h-auto"
          src={`/${product.image.tablet}`}
          alt={`image of ${product.name}`}
          width="0"
          height="0"
          sizes="100vw"
         
          
        /> 
        <Image
          className="w-full h-auto"
          src={`/${product.image.mobile}`}
          alt={`image of ${product.name}`}
          width="0"
          height="0"
          sizes="100vw"
         
          
        />  */}
        
        <p className='font-bold'>{product.name}</p>
        <p>{product.description}</p>
      
        <button type="button" onClick={() => router.push(`/${product.category}/${product.slug}`)}>
      see product
    </button>
    </div>
  )
}
