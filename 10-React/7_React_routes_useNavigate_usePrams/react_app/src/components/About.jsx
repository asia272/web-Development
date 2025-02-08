import React from 'react'
import { useNavigate } from 'react-router-dom'


const About = () => {
  let navigate = useNavigate()

  let gotoContact = () =>{
    navigate("/contact")
  }
// if wa want explicty go to another page
  return (
    <div>
      <h1>I am full stack web developer!</h1>
      <button onClick={gotoContact}>Go Contact</button>
    </div>
  )
}

export default About
