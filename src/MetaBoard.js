import React, { useState } from 'react'
import Game from './Game.js'

const MetaBoard = ({score, level, attack, gameIds, gameDelays}) => {

  const [selected, setSelected] = useState(null)

  const handleKeyDown = (e) => {
    e.preventDefault()
    console.log(e)
    switch (e.keyCode) {
      case 40: 
        break
      case 38:
        break
      case 39:
        break
      case 37:
        break
      case 90:
        break
      case 87:
        break
      case 83:
        break
      case 65:
        break
      default:
        break
    }
    setSelected(e.keyCode)
  }


  document.addEventListener('keydown', handleKeyDown)


  return (
    <div className="meta-board" >
      <div className="meta-row">
        <Game id="0" active={gameIds.includes(1)} delay={gameDelays[1]}/>
        <Game id="1" active={gameIds.includes(2)} delay={gameDelays[2]}/>
        <Game id="2" active={gameIds.includes(3)} delay={gameDelays[3]}/>
      </div>
      <div className="meta-row">
        <Game id="3" active={gameIds.includes(4)} delay={gameDelays[4]}/>
        <Game id="4" active={gameIds.includes(5)} delay={gameDelays[5]}/>
        <Game id="5" active={gameIds.includes(6)} delay={gameDelays[6]}/>
      </div>
      <div className="meta-row">
        <Game id="6" active={gameIds.includes(7)} delay={gameDelays[7]}/>
        <Game id="7" active={gameIds.includes(8)} delay={gameDelays[8]}/>
        <Game id="8" active={gameIds.includes(9)} delay={gameDelays[9]}/>
      </div>
    </div>
  )
}

export default MetaBoard


// const [selectedBoard, setSelectedBoard] = useState(1)
