
import { useState } from 'react';
import './App.css';
import Board from "./components/Board/Board"

function App() {

const [board,setBoard]=useState(Array(9).fill());
const [xIsPlaying,setXIsPlaying]=useState(true);

const handleBoxClick=(boxId)=>{
  const updatedBoard=board.map((value,id)=>{
    if (id===boxId){

      return xIsPlaying==true ? "X":"O";
    }else{
      return value ;
    }
  })
  setBoard(updatedBoard)
  setXIsPlaying(!xIsPlaying);
}

  return (
    <div className="App">
     <Board board={board} onClick={handleBoxClick} />

    </div>
  );
}

export default App;
