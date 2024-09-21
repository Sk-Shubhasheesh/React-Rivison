
import './App.css'

function App() {
  function handleClick(){
    alert("I am Clicked")

  }
  function handleMouseOver(){
    alert("para ke uper mouse leke aaye ho")
  }

  function handleInputChange(e){
    // console.log("Input me value chnage hui ha");
    console.log("Value till now:",e.target.value);
  }

  function handeSubmit(e){
    e.preventDefault();
    // i am writing my writing custome behaviour
    alert("Form submit kr du kya")
  }

  return (
   <div>

     {/* <p onMouseOver={handleMouseOver} style={{border:"2px solid black"}}>I am para</p>
     <button onClick={handleClick}>Click me</button> */}

     {/* <form onSubmit={handeSubmit}>
      <input type='text' on onChange={handleInputChange} />
      <button type='submit'>Submit</button>

     </form> */}


     <button onClick={()=>alert("Button click hua h")}>Click me</button>


   </div>
  )
}

export default App
