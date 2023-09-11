import React from 'react'
import "./Board.css"
import Box from "../Box/Box"
const Board = ({board,onClick,id}) => {
  return (
    <div className='board'>
        {board.map((item,id)=>(
              <Box id={id} value={item} onClick={()=>onClick(id)} /> 

        ))}
      
     
    </div>
  )
}

export default Board