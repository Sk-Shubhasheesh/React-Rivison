import React from 'react'
import "./UserCart.css"
export const UserCart = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p id='user-name'>{props.name}</p>
        <img id='user-img' src='https://images.unsplash.com/photo-1604238402313-646410b74459?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='shubh' />
        <p id='user-desc'>{props.desc}</p>

    </div>
  )
}
