import React from 'react'
import "../Box/Box.css"
const Box = ({value,key,onClick}) => {
  return (
    <button key={key} className='box' onClick={onClick}>{value}</button>
  )
}

export default Box