import React, { useCallback, useState } from 'react'

const ExpensiveComponents = () => {

let [inputText , setInputText] = useState("");
let [ count , setCount] = useState(0);

//function ki re-creation ko stop krny ky lia useCallback ko use krty hy
let expensiveFunction = useCallback(()=>{
    let result =  0;
    for(let i = 0; i <100000; i++){
        result += i
    }
    return result
}
,[count]) 
  return (
    <div>
      <p>Expensive calculation result: {expensiveFunction()}</p>
      <input type="text"
      value={inputText}
      onChange={(e)=> setInputText(e.target.value)} />
      <br />
      <br />
      <button onClick={()=>setCount(count+1)}>
        count {count}
      </button>
    </div>
  )
}

export default ExpensiveComponents
