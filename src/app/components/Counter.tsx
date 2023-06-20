"use client"
import React, { useState } from 'react'

export default function Counter({count, setCount}) {
    


    return (
        <div>
          <button onClick={()=>setCount(prev => prev - 1)}>-</button>
          <input type="text" value={count} onChange={(e)=>setCount(Number(e.target.value))} disabled/>
          <button onClick={()=>setCount(prev => prev + 1)}>+</button>
        </div>
      )
}
