import React,{useEffect, useState} from 'react';
import './App.css';
import Componet from './Componet';
const initialState = ["","","","","","","","","",];

function App() {
  const [gameState, setGameState] = useState(initialState);
  const [xterm, setXterm] = useState(false);
  const onSquareClicked = (index) =>{
    let strings = Array.from(gameState);
    strings[index] = xterm ? "X" : "0";
    setGameState(strings);
    setXterm(!xterm);
  }
  useEffect(()=>{
    const Winner = checkWinner();
    if(Winner){
      setTimeout(()=>{
      alert(`congratulations ! ${Winner} has won the Game!`)
      },0.500)
      setTimeout(()=>{
        setGameState(initialState);
      },1000)
    }
  },[gameState])
  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Tik Toe game 2022</p>
        <div className='row'>
         <Componet className="b-bottom-right" State ={gameState[0]} onClick={() => onSquareClicked(0)}/>
         <Componet className="b-bottom-right" State ={gameState[1]} onClick={() => onSquareClicked(1)}/>
         <Componet className="b-bottom" State ={gameState[2]} onClick={() => onSquareClicked(2)}/>
        </div>
        <div className='row'>
        <Componet className="b-bottom-right" State ={gameState[3]} onClick={() => onSquareClicked(3)}/>
         <Componet className="b-bottom-right" State ={gameState[4]} onClick={() => onSquareClicked(4)}/>
         <Componet className="b-bottom" State ={gameState[5]} onClick={() => onSquareClicked(5)}/>
        </div>
        <div className='row'>
        <Componet className="b-right" State ={gameState[6]} onClick={() => onSquareClicked(6)}/>
         <Componet className="b-right" State ={gameState[7]} onClick={() => onSquareClicked(7)}/>
         <Componet State ={gameState[8]} onClick={() => onSquareClicked(8)}/>
        </div>
        <div>
          <button className='btn' onClick={()=> setGameState(initialState)}>Clear game</button>
        </div>
        
      </header>
    </div>
  );
}

export default App;
