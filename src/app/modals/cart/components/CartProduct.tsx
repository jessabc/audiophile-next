import React from 'react'
import Counter from '../../../components/Counter'
import CartCounter from './CartCounter'

export default function CartProduct({product}) {
  return (
    <div>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <CartCounter product={product}/>
    </div>
  )
}

