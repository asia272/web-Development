import React, { useEffect, useState } from 'react'

const TimerComponent = () => {
    let [second,setSecond] = useState(0);

useEffect(()=>{
    let clearId = setInterval(()=>{
        setSecond(preSecond => preSecond+1)
    },1000)
   return(()=>{
    clearInterval(clearId)
   })
})
  return (
    <div>
      <h3>Second is: {second}</h3>
    </div>
  )
}

export default TimerComponent
