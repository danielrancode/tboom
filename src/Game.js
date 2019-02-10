import React, { useState, useEffect } from 'react';
import Board from './Board'
import { winningLines, preVictoryPositions, isPlayerFirst, initialPosition, willLineWin, findWinningLine, findWinningSquare, isGameWon, isDraw, randomEmptySquare } from './gameLogic.js'


const Game = ({id, active}) => {

  let first = isPlayerFirst()

  const [playerFirst, setPlayerFirst] = useState(first)
  const [position, setPosition] = useState(initialPosition(first))
  const [next, setNext] = useState(first ? 'X' : 'O')
  const [previous, setPrevious] = useState('')
  const [status, setStatus] = useState('player')

  useEffect(() => {opponentMove()}, [position, next, status])


  // this function is executed when player clicks a square
  const changeGameState = (e) => {
    // get square number
    let id = e.target.id

    // if it is the player's turn to play and the square is empty: make move.
    if (status == 'player' && position[id] == null) {
      playerMove(id)
      // // create and update new 'position' array
      // let newPosition = [...position]
      // newPosition[id] = next
      //
      // // update state
      // setPosition(newPosition)
      // if (isGameWon(newPosition)) {
      //   setStatus('player-won')
      // } else if (isDraw(newPosition)) {
      //   setStatus('draw')
      // } else {
      //   setNext(next == 'X' ? 'O' : 'X')
      //   setPrevious(next == 'X' ? 'X' : 'O')
      //   setStatus('opponent')
      // }
    }
  }

  const playerMove = (squareId)  => {
    let newPosition = [...position]
    newPosition[squareId] = next
    // update position
    setPosition(newPosition)

    // updateStatus
    updateStatus(newPosition)
  }

  const updateStatus = (newPosition) => {
    if (isGameWon(newPosition)) {
      setStatus('player-won')
    } else if (isDraw(newPosition)) {
      setStatus('draw')
    } else {
      setNext(next == 'X' ? 'O' : 'X')
      setPrevious(next == 'X' ? 'X' : 'O')
      setStatus('opponent')
    }
  }


  const opponentMove = () => {
    // setTimeout(() => {
      if (status === 'opponent') {
        let winningSquare = findWinningSquare(position, next)
        let playerWinningSquare = findWinningSquare(position, previous)
        let newPosition = [...position]
        // setTimeout(() => console.log("opponentMove!", position, next, status), 1000)

        if (winningSquare >= 0 ) {

          console.log("winning square found!")
          newPosition[winningSquare] = next

          setPosition(newPosition)
          setStatus('opponent-won')

        } else if (playerWinningSquare >= 0 ) {

          console.log("Watch out! player winning square found!")
          newPosition[playerWinningSquare] = next

          setPosition(newPosition)
          setNext(previous)
          setStatus(isDraw(newPosition) ? 'draw' : 'player')

        } else {
          newPosition[randomEmptySquare(newPosition)] = next
          setPosition(newPosition)
          setNext(previous)
          setPrevious(next)
          setStatus(isDraw(newPosition) ? 'draw' : 'player')
        }
      }
    // }, 1000)
  }

  return (<Board
            id={id}
            playerFirst={playerFirst}
            position={position}
            next={next}
            previous={previous}
            status={status}
            changeGameState={changeGameState}
            active={active}
          />)
}

export default Game;
