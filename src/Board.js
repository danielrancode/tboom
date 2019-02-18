import React from 'react'

const Board = ({ id, active, playerFirst, position, next, status, time, play, selectedSquare }) => {
// console.log("board rendered")
  return (
    <div
      className={` ${active ? "board" : "board hidden"}
      ${status}
      n${time}`}
      onClick={play}
    >
    {time}
      <div className="row">
        <div id="0" className={`square s0 ${selectedSquare === 0 && 'isSelected'}`}>
          {position[0]}
        </div>
        <div id="1" className={`square s1 ${selectedSquare === 1 && 'isSelected'}`}>
          {position[1]}
        </div>
        <div id="2" className={`square s2 ${selectedSquare === 2 && 'isSelected'}`}>
          {position[2]}
        </div>
      </div>
      <div className="row">
        <div id="3" className={`square s3 ${selectedSquare === 3 && 'isSelected'}`}>
          {position[3]}
        </div>
        <div id="4" className={`square s4 ${selectedSquare === 4 && 'isSelected'}`}>
          {position[4]}
        </div>
        <div id="5" className={`square s5 ${selectedSquare === 5 && 'isSelected'}`}>
          {position[5]}
        </div>
      </div>
      <div className="row">
        <div id="6" className={`square s6 ${selectedSquare === 6 && 'isSelected'}`}>
          {position[6]}
        </div>
        <div id="7" className={`square s7 ${selectedSquare === 7 && 'isSelected'}`}>
          {position[7]}
        </div>
        <div id="8" className={`square s8 ${selectedSquare === 8 && 'isSelected'}`}>
          {position[8]}
        </div>
      </div>
    </div>
  )
}

export default Board


// const [selectedSquare, setSelectedSquare] = useState(1)
