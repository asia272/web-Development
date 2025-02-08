import React, { useState } from 'react'
import ColorChangBox from "./ColorChangBox" 
import "./EventCountBox.css"
const EventCountBox = () => {
    let [eventCount, setEventCount] = useState(0)
 
let handleEventCount = ()=>{
    setEventCount(eventCount+1)
    console.log(eventCount)
}
let randomColor = ()=>{
  let red = Math.floor(Math.random()*255)
  let green = Math.floor(Math.random()*255)
  let blue = Math.floor(Math.random()*255)
  return `rgb(${red},${green},${blue})`
}
let colorChange = ()=>{
 return document.querySelector("body").style.backgroundColor = randomColor()
}

  return (
    <div onClick={handleEventCount} className='eventCountBox'>
      <h1>Hello i am event count box</h1>
      <ColorChangBox colorChange={colorChange}/>
    <br /><br /><br />
    <p>Total Event count is : {eventCount}</p>
    </div>
  )
}

export default EventCountBox
