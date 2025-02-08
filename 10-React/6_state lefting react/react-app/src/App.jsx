import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
let [active, setIsActive] = useState(0);

  return (
    <>
 <h1> My Parent contaer</h1>
 <Card
  title = "Para 1"
  isActive = {active === 0} 
  onShow = {()=>setIsActive(0)}
 />
<Card
  title = "Para 2"
  isActive = {active === 1} 
  onShow = {()=>setIsActive(1)}
 />

    </>
  )
}

export default App
