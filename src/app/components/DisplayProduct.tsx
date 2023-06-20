"use client"
import React, {useState} from 'react'
import { Product } from '../interfaces'
import Counter from './Counter'
import {useDispatch, useSelector} from 'react-redux'
import { addProductToCart, updateProductQuantityInCart } from '../redux/features/cart/cartSlice'

interface Props {
    product: Product
}

export default function DisplayProduct({product}: Props) {

    const [count, setCount] = useState(0)
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.value)
    console.log(cart)

   function addToCart() {
 
    const productAlreadyInCart = cart.length > 0 ? cart.find(cartProduct => cartProduct.slug === product.slug) : null
  
    // console.log(productAlreadyInCart)
    if(productAlreadyInCart) {
        const updatedCart = cart.map(cartProduct => cartProduct.slug === product.slug ? {...product, quantity: count} : product)
        dispatch(updateProductQuantityInCart(updatedCart))
    } else {
        dispatch(addProductToCart({...product, quantity: count}))
    }
    
   }
    
  return (
    <div>
        
        <p>{product.name}</p>
        <p>${product.price}</p>
        <Counter count={count} setCount={setCount}/>
        <button onClick={addToCart}>add to cart</button>
    </div>
  )
}
