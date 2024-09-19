
import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Cart from './components/Cart'

function App() {
 const [count,setCount] = useState(0);

 function handleClick(){
  setCount(count+1);
 }

  return (
   <div>
    
    {/* <Cart name="Shubhasheesh" >
      
      // Props as children


      <h1>Best React Revision</h1>
      <p>Trying to be consistent in this</p>
      <p>Wil complete the course soon</p>
    </Cart> */}

      {/* Props as Function */}

      <Button handleClick={handleClick} text="click me">
        <h1>{count}</h1>
        </Button>


   </div>
  )
}

export default App
