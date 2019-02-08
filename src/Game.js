import React, { useState, useEffect } from 'react';
import Board from './Board'

const Game = ({active}) => {

  const [gameState, setGameState] = useState({
    color: 'green'
  })

  // useEffect(() => console.log(gameState.color))

  const changeGameState = (e) => {
    console.log("target", e.target)
    // setGameState({...gameState, color: gameState.color == 'red' ? 'green' : 'red'})
  }


  return <Board changeGameState={changeGameState} gameState={gameState} active={active}/>
}

export default Game;
