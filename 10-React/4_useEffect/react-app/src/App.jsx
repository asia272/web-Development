import { useState } from 'react'

import './App.css'
import DataFetcher from './DataFetcher'
import TimerComponent from './TimerComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
    {/* <DataFetcher/> */}
    <TimerComponent/>
      </div>
  
    </>
  )
}

export default App
