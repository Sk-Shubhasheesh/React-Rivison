import React from 'react'
import { useState } from 'react'
import'./Counter.css'
export const Counter = () => {
    const [count,setCount] = useState(0)
  return (
    <div className='counter-container'>
        <p id='para'>You have cicked {count} times</p>
        <button id='button' onClick={() =>{setCount(count+1)}}>Click me</button>

    </div>
  )
}
