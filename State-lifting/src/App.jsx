
import { useState } from 'react'
import './App.css'
import Cart from './components/Cart'

function App() {
  // create state
  //manage state
  //change state
  //sabhi child me state ko sync krwadunga

  const[name,setName] = useState('');

  return (
   <div>
      <Cart title="Card1" name={name} setName={setName}/>
      <Cart title="Card2" name={name} setName={setName}/>
      {/* <p>I am inside parent component and value of name is: {name}</p> */}
   </div>
   
  )
}

export default App
