import React, { useContext } from 'react'
import { creatTheme } from './App' 


const BoxC = () => {
let Theme = useContext(creatTheme)

const toggle = () => {
    Theme.setisTheme(Theme.isTheme ? false : true);
    console.log("color reset");
  };
  

  return (
    <div>
        <button onClick={toggle}>
            Change theme
        </button>
      <h1>Hello i am asia  {Theme.theme} </h1>
    </div>
  )
}

export default BoxC
