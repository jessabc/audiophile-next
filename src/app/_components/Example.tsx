"use client"
import React, { useState } from 'react'
import Counter from './Counter'
import Image from 'next/image'
import ItemAddedModal from '../_modals/itemAdded/ItemAddedModal'
import OtherProductYouMayLike from './OtherProductYouMayLike'

export default function Example({product}) {
    const [count,setCount] = useState(0)

    const {image, name, description, price, features, includes, gallery, others} = product

    const featuresEl = features?.split('\n\n').map((paragraph: string, index:number) => <p key={index} className="mb-3">{paragraph}</p>)

    const youMayAlsoLikeElements = others?.map((product, index) => <OtherProductYouMayLike key={index} product={product} />)

    function goBack() {
        router.back()
        setTimeout(() => {
            window.scrollTo(0,0)
        },100)
       
   }

   function addToCart() {
 
    
    
   } 
   

  return (
    <div className='bg-yellow-200 mb-10'>
        <button type='button' className=" fade-in font-medium text-black opacity-50 py-5" onClick={goBack}>
    Go Back
 </button>

 <Image
                src={`/${image.mobile}`}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto md:hidden lg:hidden"
                alt={`${name} image`} 
                />

<p className="font-bold text-2xl tracking-wide pr-40 md:text-4xl">{name}</p>
                <p className="font-medium leading-6 text-black opacity-50">{description}</p>
                <p className="font-bold text-lg  uppercase text-black"> $ {(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(price))}</p>

<div className='mb-5'>
   <Counter count={count} setCount={setCount}/> 
</div>

<ItemAddedModal addToCart={addToCart}
                    productName={product.name}/>
                    

                   
                        <p className=' font-bold text-2xl tracking-wide uppercase text-black md:text-3xl'>Features:</p>
                        <div className="font-medium leading-6 text-black opacity-50 lg:pr-10">
                            {featuresEl}
                        </div>

                        <div className="fade-in flex flex-col gap-5 mt-10 mb-20 md:flex-row lg:flex-col ">
                    <p className=' font-bold text-2xl tracking-wide uppercase text-black md:text-3xl md:w-1/2 lg:w-full'>in the box</p>
                    <ul className="list-none md:w-1/2 lg:w-full">
                        {includes.map((item, index) => 
                        <li key={index} className="my-2 lg:mt-0 lg:mb-5">
                            <span className="font-bold text-orange">{item?.quantity}x </span>  
                            <span className="font-medium text-black opacity-50 ml-2"> {item?.item}</span>
                        </li>)}
                    </ul>
                </div>

                <Image
                src={`/${gallery?.first.mobile}`}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto rounded-lg"
                alt={`${name} image`} 
                />
 <div className="md:flex md:gap-5" >
                    {youMayAlsoLikeElements}   
                </div>
    </div>
  )
}
