import React from 'react'

const Card = (props) => {
  console.log(props)
  return (
    <div>
      {props.children}
      {/* <h1>hello how are you!</h1> */}
    </div>
  )
}

export default Card
