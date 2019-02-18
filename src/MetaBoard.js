import React, { useState, useEffect } from 'react'
import Game from './Game.js'

const MetaBoard = ({ score, level, attack, gameIds, gameDelays }) => {

  const [selectedBoard, setSelectedBoard] = useState(gameIds[0])
  // const [selectedSquare, setSelectedSquare] = useState(0)

  useEffect(() => console.log("effect"), [selectedBoard])

  // useEffect(() => selectSquare, [selected])
  // const navigate = (action) => {
  //   console.log("hit")
  //   if (action === 'squareDown') {
  //     let newSquare = (selectedSquare + 3) % 9
  //     return setSelectedSquare(newSquare)
  //   }
  // }

    const changeSelectedBoard = (board) => {
      return (board + 3) % 9
      //     return setSelectedSquare(newSquare)
      // setSelectedBoard(newBoard)
    }


  const handleKeyDown = (e) => {
    switch (e.keyCode) {
      case 40:
      e.preventDefault()
      let board = selectedBoard
      let newBoard = changeSelectedBoard(board)
      setSelectedBoard(newBoard)

        break
      case 38:
      e.preventDefault()


        break
      case 39:
      e.preventDefault()


        break
      case 37:
      e.preventDefault()


        break
      case 90:
      e.preventDefault()


        break
      case 87:
      e.preventDefault()


        break
      case 83:
      e.preventDefault()


        break
      case 65:
      e.preventDefault()


        break
      default:
        break
    }
  }


  document.addEventListener('keydown', handleKeyDown)
  console.log("eventListenter added")

  return (
    <div className="meta-board" >
      <div className="meta-row">
        <Game id="0" active={gameIds.includes(0)} delay={gameDelays[0]} />
        <Game id="1" active={gameIds.includes(1)} delay={gameDelays[1]} />
        <Game id="2" active={gameIds.includes(2)} delay={gameDelays[2]} />
      </div>
      <div className="meta-row">
        <Game id="3" active={gameIds.includes(3)} delay={gameDelays[3]} />
        <Game id="4" active={gameIds.includes(4)} delay={gameDelays[4]} />
        <Game id="5" active={gameIds.includes(5)} delay={gameDelays[5]} />
      </div>
      <div className="meta-row">
        <Game id="6" active={gameIds.includes(6)} delay={gameDelays[6]} />
        <Game id="7" active={gameIds.includes(7)} delay={gameDelays[7]} />
        <Game id="8" active={gameIds.includes(8)} delay={gameDelays[8]} />
      </div>
    </div>
  )
}

export default MetaBoard


// const [selectedBoard, setSelectedBoard] = useState(1)
