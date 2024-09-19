
import { useState } from 'react'
import './App.css'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'

function App() {
  const [isLoggedIn,setLoggedIn] = useState(false);

  //condition rendering usin ternary operator
  return(
    <div>
      {isLoggedIn ? <LogoutBtn/>:<LoginBtn/>}
    </div>
  )


  // Conditional rendering using if else
  // if(isLoggedIn){
  //   return(
  //     <LoginBtn />
  //   )
  // } else{
  //   return (
  //     <LoginBtn/>
  //   )
  // }

}

export default App
