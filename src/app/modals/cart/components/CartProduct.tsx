import React from 'react'
import Counter from '../../../sharedComponents/Counter'
import CartCounter from './CartCounter'
import CartItem from './CartItem'

export default function CartProduct({product}) {
  return (
    <div className="grid grid-cols-5 gap-3 items-center mb-4">

<CartItem product={product}/>
  
    <div className="col-span-2">
    <CartCounter product={product}/>
    </div>
    
</div>
    // <div>
    //     <p>{product.name}</p>
    //     <p>{product.price}</p>
    //     <CartCounter product={product}/>
    // </div>
  )
}

