import React from 'react'
import "./Card.css"

const Card = ({isActive,onShow, title}) => {
  return (
    <div className='card'>
 <h3>{title}</h3> 
 {isActive ?  
 <p>my name is asia</p>: 
  <button onClick={onShow}>show </button>}
</div>
  )     
}

export default Card
