"use client"
import React, { useState } from 'react'

export default function Counter({count, setCount}) {
    


    return (
      <div className={`grid grid-cols-3 bg-gray h-12`}>

      <button 
          className='font-bold text-sm text-center text-black opacity-25 hover:text-orange'  
          onClick={()=>setCount(prev => prev - 1)}>
              -
      </button>

      <input 
          className='font-bold text-sm text-center text-black bg-gray'  
          value={count}  
          onChange={(e)=>setCount(Number(e.target.value))} disabled
      />

      <button 
          className='font-bold text-sm text-center text-black opacity-25 hover:text-orange' 
          onClick={()=>setCount(prev => prev + 1)}
      >
          +
      </button>
  </div>  
        // <div>
        //   <button onClick={()=>setCount(prev => prev - 1)}>-</button>
        //   <input type="text" value={count} onChange={(e)=>setCount(Number(e.target.value))} disabled/>
        //   <button onClick={()=>setCount(prev => prev + 1)}>+</button>
        // </div>
      )
}
