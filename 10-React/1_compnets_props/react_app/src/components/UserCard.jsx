import React from 'react'
import "./UserCard.css"
import img from "../assets/images.jpeg"
const UserCard = ({info}) => {
  return (
    <div className='user-card'>
      <p>{info.name}</p>
      <img src={img} alt="girl_img" />
      <p>{info.des}</p>
    </div>
  )
}

export default UserCard
