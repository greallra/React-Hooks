import React, { useContext, useState, useEffect } from 'react';
//CUSTOM HOOK
//can be resused in other components
const useMousePosition = () =>{
    //we store state as object when values getting updates are updated together
    const [position, setPosition] = useState({x: 0, y: 0});
    //stop the re render loop with use effect
    useEffect(()=>{
      console.log("test");
      const handleMouseMove = document.addEventListener('mousemove', (e)=>{
        setPosition({
          x: e.pageX,
          y: e.pageY,
        })
        //cleanup to remove event
        return () =>{
          document.removeEventListener('mousemove',handleMouseMove)
        }
      },[])
    })
   
  
    return position;
  }
  export default useMousePosition;