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

    <div className={`grid grid-cols-3 bg-gray h-12`}>

      <button 
          className='font-bold text-sm text-center text-black opacity-25 hover:text-orange'  
          onClick={decrement}>
              -
      </button>

      <input 
          className='font-bold text-sm text-center text-black bg-gray'  
          
          value={cartCount}  onChange={(e) => (e.target.value) }disabled/>

      <button 
          className='font-bold text-sm text-center text-black opacity-25 hover:text-orange' 
          onClick={increment}
      >
          +
      </button>
  </div>  

   
  //   <div>
  //   <button onClick={decrement}>-</button>
  //   <input type="text" value={cartCount}  onChange={(e) => (e.target.value) }disabled/>
  //   <button onClick={increment}>+</button>
  // </div>
  )
} 
