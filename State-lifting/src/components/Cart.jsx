import React from 'react'

export default function Cart(props) {
  return (
    <div>
        <input type='text' onChange={(e)=> props.setName(e.target.value)}/>
        <p>Name State vaiable ki value inside {props.title}:{props.name}</p>
    </div>
  )
}
