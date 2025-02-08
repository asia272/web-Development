import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from './features/counter/counterSlice'
import './App.css'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0);

let handelIncrement = ()=>{
  dispatch(increment())
}
let handelDecrement = ()=>{
  dispatch(decrement())
}
let handelAmount = ()=>{
  console.log(amount)
  dispatch(incrementByAmount(amount))
  setAmount("")
}
  return (
    <>
     <div>
           <h2>React Redux</h2>
      <button onClick={handelIncrement}>
        Increment
      </button>
      <br />
      <br />
      <p>{count}</p>
      <br />
      <br />
      <button onClick={handelDecrement}>
        decrement
      </button>
      <br />
      <br />
      <input type="text"
      value={amount}
      onChange={(e)=> setAmount(e.target.value)} />
      <button onClick={handelAmount}>Amount</button>
     </div>
    </>
  )
}

export default App
