import React, { useRef } from 'react'



//By using useRef we can dirctly access Dom element
//Steps:
//1: Create ref
//2: link ref with target element 
//3: acces ref 

const MyComponent = () => {
    const btnRef = useRef(0);

    console.log(btnRef.current)
  return (

    <div>
      <button ref={btnRef}>Click me</button>
    </div>
  )
}

export default MyComponent;
