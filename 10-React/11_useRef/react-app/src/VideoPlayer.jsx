import React from 'react'
import { useState, useRef } from 'react';

//In this example we dirctly access vidou element by
// using it refrence and then manipulate it
const VideoPlayer = () => {

    let[play ,setPlay] = useState(false);
    const vidouRef= useRef(null);

let handleClick = ()=>{
    setPlay(!play)
    if(!play){
        vidouRef.current.play()
    }else{
        vidouRef.current.pause()
    }
}
  return (
    <div>
 <h3>Example useRef</h3>
      <button onClick={handleClick}>
        {play?"Play":"Pasue"}
      </button>
      <br />
      <br />
      <video
        width="250"
        ref={vidouRef}
      >
      <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
       type="video/mp4" />
    </video>


    </div>
  )
}

export default VideoPlayer
