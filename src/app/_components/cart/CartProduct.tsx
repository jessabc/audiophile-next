import React from 'react'
import CartCounter from './CartCounter'
import CartItem from './CartItem'
import { ProductInCart } from '@/app/interfaces'

interface Props {
  product: ProductInCart
}

export default function CartProduct({product}: Props) {

  return (
    <div className="grid grid-cols-5 gap-3 items-center mb-4">

      <CartItem product={product}/>
  
      <div className="col-span-2">
      <CartCounter product={product}/>
      </div>
    
    </div>
 
  )
}

