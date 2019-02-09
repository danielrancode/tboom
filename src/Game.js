import React, { useState, useEffect } from 'react';
import Board from './Board'
import { winningLines, preVictoryPositions, isPlayerFirst, initialPosition, willLineWin, findWinnindLine, findWinningSquare, isGameWon, isDraw, randomEmptySquare } from './gameLogic.js'


const Game = ({id, active}) => {

  // const [gameState, setGameState] = useState({
  //   playerFirst: isPlayerFirst,
  //   position: initialPosition(isPlayerFirst),
  //   next: isPlayerFirst ? 'X' : 'O',
  //   status: 'ticking'
  // })

  let first = isPlayerFirst()

  const [playerFirst, setPlayerFirst] = useState(first)
  const [position, setPosition] = useState(initialPosition(first))
  const [next, setNext] = useState(first ? 'X' : 'O')
  const [status, setStatus] = useState('player')

  useEffect(() => {opponentMove()}, [position, next, status])

  const changeGameState = (e) => {

    let id = e.target.id

    if (status == 'player' && position[id] == null) {
      let newPosition = [...position]
      newPosition[id] = next
      // console.log(newPosition)
      // put in move
      setPosition(newPosition)
      setNext(next == 'X' ? 'O' : 'X')
      setStatus('opponent')
    }


  }


  const opponentMove = () => {
    // setTimeout(() => console.log("opponentMove!", position, next, status), 1000)
    console.log("opponentMove!", position, next, status)

    // let winningSquare = findWinningSquare(position, newNext)
    // let playerWinningSquare = findWinningSquare(position, oldNext)
    //
    // if (winningSquare >= 0 ) {
    //   console.log("a")
    //   delay(() => {
    //     position[winningSquare] = newNext
    //
    //     setGameState({
    //     ...gameState,
    //     position: position,
    //     status: 'opponent-won'
    //   })
    // })
    // } else if (playerWinningSquare >= 0 ) {
    //   delay(() => {
    //     position[playerWinningSquare] = newNext
    //
    //     setGameState({
    //       ...gameState,
    //       position: position,
    //       next: oldNext,
    //       status: isDraw(position) ? 'draw' : 'player'
    //     })
    //   })
    // } else if (isGameWon(position)) {
    //   setGameState({
    //     ...gameState,
    //     position: position,
    //     status: "player-won"
    //   })
    //   console.log("You won!")
    // } else if (isDraw(position)) {
    //   console.log("draw")
    //   setGameState({
    //     ...gameState,
    //     position: position,
    //     status: "draw"
    //   })
    // } else {
    //   delay(() => {
    //     position[randomEmptySquare(position)] = newNext
    //     setGameState({
    //     ...gameState,
    //     position: position,
    //     next: oldNext
    //   })})
    // }
  }

  return (<Board
            id={id}
            playerFirst={playerFirst}
            position={position}
            next={next}
            status={status}
            changeGameState={changeGameState}
            active={active}
          />)
}

export default Game;
