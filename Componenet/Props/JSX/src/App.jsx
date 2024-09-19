import { UserCart } from "./components/UserCart"

function App() {
  return (
  <div className="container">
    <UserCart name="Shubhu" desc="Desc1" style={{"border-radius":"10px"}} />
    <UserCart name="Maharana Pratap" desc="Desc2" />
    <UserCart name="PrithviRaj" desc="Desc3" />
  </div>
  )
}

export default App
