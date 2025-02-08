import React from 'react'

const ColorChangBox = ({colorChange}) => {
  return (
    <div>
      <button onClick={(e)=>{
        e.stopPropagation
        colorChange()
      }
      }
      >Color change</button>
    </div>
  )
}

export default ColorChangBox
