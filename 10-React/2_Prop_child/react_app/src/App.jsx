import Card from './components/Card'
import Button from './components/Button'
import './App.css'

function App() {
  let btnHandler = ()=>{
    console.log("btn is clicked now")
  }
  return (
    <>
      <div>
        <Button btnClick = {btnHandler}/>
      <Card name ="Asia Aulakh">
        <h4>Hello how are you guys what heppen</h4> 
      </Card>
      </div>
    </>
  )
}

export default App
