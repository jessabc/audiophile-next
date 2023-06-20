'use client'
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { decrementProductInCart, incrementProductInCart } from '@/app/redux/features/cart/cartSlice'


export default function CartCounter({product}) {
    const [cartCount, setCartCount] = useState(product.quantity)
    const dispatch = useDispatch()

    function decrement() {
       setCartCount(prev => prev -1)
       dispatch(decrementProductInCart(product))
    }

    function increment(){
      setCartCount(prev => prev +1) ;dispatch(incrementProductInCart(product))
    }

   

  return (
    <div>
    <button onClick={decrement}>-</button>
    <input type="text" value={cartCount}  onChange={(e) => (e.target.value) }disabled/>
    <button onClick={increment}>+</button>
  </div>
  )
} 
