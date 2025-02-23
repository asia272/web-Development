import { useCallback, useState } from 'react'
import Childcomponent from './components/Childcomponent'
import ExpensiveComponents from './components/ExpensiveComponents'

function App() {
// let [count , setCount] = useState(0);

//   let handleClick = useCallback(()=>{// for freezing function 
//     setCount(count+1)            //if function use same values to avoid unessary re-randring
//   },[count])

  return (
    <>
      <div>
        {/* <h1>hello</h1>
        <button onClick={handleClick}>
          increment: {count} 
        </button>
        <br />
        <br />
        <Childcomponent 
        btnName= "click me"
        handleCli
        ck={handleClick}
        /> */}
        <ExpensiveComponents/>
      </div>
    </>
  )
}

export default App
