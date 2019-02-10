import React, { useState } from 'react'

const Board = ({id, active, playerFirst, position, next, status, play}) => {

  return (
    <div
      className={` ${active ? "board" : "board hidden"}
      ${status}`}
      onClick={play}
    >
      <div className="row">
        <div id="0" className="square s0">
          {position[0]}
        </div>
        <div id="1" className="square s1">
          {position[1]}
        </div>
        <div id="2" className="square s2">
          {position[2]}
        </div>
      </div>
      <div className="row">
        <div id="3" className="square s3">
          {position[3]}
        </div>
        <div id="4" className="square s4">
          {position[4]}
        </div>
        <div id="5" className="square s5">
          {position[5]}
        </div>
      </div>
      <div className="row">
        <div id="6" className="square s6">
          {position[6]}
        </div>
        <div id="7" className="square s7">
          {position[7]}
        </div>
        <div id="8" className="square s8">
          {position[8]}
        </div>
      </div>
    </div>
  )
}

export default Board


// const [selectedSquare, setSelectedSquare] = useState(1)
