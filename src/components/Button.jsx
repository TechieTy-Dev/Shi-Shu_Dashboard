import React from 'react'
import {useStateContext} from '../context/ContextProvider'

const Button = ({ icon, bgColor, borderRadius, bgHoverColor, size, text,  width}) => {
  const { setIsClicked, initialState} = useStateContext();

  return (
    <button type="button" onClick={() => setIsClicked(initialState)} style={{ backgroundColor: bgColor, borderRadius}} className={` text-white rounded-xl text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}> 
      {icon} {text}
    </button>
  )
}



export default Button