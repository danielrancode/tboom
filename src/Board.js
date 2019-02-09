import React, { useState } from 'react'

const Board = ({id, active, gameState, changeGameState}) => {
  const { position, status } = gameState

  const [selectedSquare, setSelectedSquare] = useState(1)

  return (
    <div
      className={` ${active ? "board" : "board hidden"}
      ${status}`}
      onClick={changeGameState}
    >
      <div className="row">
        <div className="square s0">
          {position[0]}
        </div>
        <div className="square s1">
          {position[1]}
        </div>
        <div className="square s2">
          {position[2]}
        </div>
      </div>
      <div className="row">
        <div className="square s3">
          {position[3]}
        </div>
        <div className="square s4">
          {position[4]}
        </div>
        <div className="square s5">
          {position[5]}
        </div>
      </div>
      <div className="row">
        <div className="square s6">
          {position[6]}
        </div>
        <div className="square s7">
          {position[7]}
        </div>
        <div className="square s8">
          {position[8]}
        </div>
      </div>
    </div>
  )
}


export default Board
