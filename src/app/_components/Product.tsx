





'use client'
import React, { useState } from 'react'
import { Product } from '../interfaces'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FadeInBottomSection } from '../_animations/FadeInBottomSection'
import Counter from './Counter'



// interface Props {
//     product: Product
// }

export default function Product({item, index} ) {
const router = useRouter()


const {category, name, description, image, slug} = item
   

    const oddIndex = index % 2 === 1

    // const routeChange = () => { 
    //   router.push(`/${product.category}/${product.slug})
    // }
   

    return (
        <FadeInBottomSection>
          <div className="mb-28 flex flex-col gap-5 justify-center items-center lg:flex-row lg:gap-10">
              <div className={`lg:w-1/2 ${oddIndex ? 'lg:order-1' : null}`}>
              <Image
                src={`/${image.mobile}`}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto md:hidden lg:hidden rounded-lg"
                alt={`${name} image`} 
                />
                 <Image
                src={`/${image.tablet}`}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto hidden md:block lg:hidden rounded-lg"
                alt={`${name} image`} 
                />
                 <Image
                src={`/${image.desktop}`}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto hidden md:hidden lg:block rounded-lg"
                alt={`${name} image`} 
                />
                  {/* <img src={image.mobile} alt={`${name} image`} className="md:hidden lg:hidden rounded-lg"/> */}
                  {/* <img src={image.tablet} alt={`${name} image`}  className="hidden md:block lg:hidden rounded-lg" />
                  <img src={image.desktop} alt={`${name} image`}  className="hidden md:hidden lg:block rounded-lg"/>   */}
              </div>
          
              <div className=" flex flex-col gap-5 justify-center items-center lg:w-1/2 lg:items-start">
                  {item.new && 
                  <p className='text-sm text-center tracking-widest uppercase text-orange '>new product</p>}
                  <p className="font-bold text-3xl text-center tracking-wider uppercase text-black md:text-4xl md:px-40 lg:text-left lg:p-0">{name}</p>
                  <p className='  font-semibold leading-6 text-center text-black  opacity-50 md:px-20 lg:text-left lg:p-0'>{description}</p>
                  <button  
                      className='font-bold text-sm leading-5 tracking-wide uppercase text-white bg-orange w-40 h-12 hover:bg-lightOrange'  
                      onClick={()=>router.push(`/${item.category}/${item.slug}`)}>see product
                  </button> 
                
              </div>
            
          </div>
          </FadeInBottomSection>
  )
}





    
   