"use client"
import React from 'react'

interface Props {
  count: number,
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function Counter({count, setCount}: Props) {
    
  function decrement() {
      if(count > 0) {
        setCount(prev => prev -1)
      }
  }

  function increment(){
    setCount(prev => prev +1) 
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
          value={count}  
          onChange={(e)=>setCount(Number(e.target.value))} disabled
      />

      <button 
          className='font-bold text-sm text-center text-black opacity-25 hover:text-orange' 
          onClick={increment}
      >
          +
      </button>
    </div>  
     
  )
}
