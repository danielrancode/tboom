import React, { useState } from 'react'

const Board = ({active}) => {

  const [selectedSquare, setSelectedSquare] = useState(1)


  return (
    <div className={active ? "board" : "board hidden"}>
      <div className="row">
        <div className="square s1">
          1
        </div>
        <div className="square s2">
          2
        </div>
        <div className="square s3">
          3
        </div>
      </div>
      <div className="row">
        <div className="square s4">
          4
        </div>
        <div className="square s5">
          5
        </div>
        <div className="square s6">
          6
        </div>
      </div>
      <div className="row">
        <div className="square s7">
          7
        </div>
        <div className="square s8">
          8
        </div>
        <div className="square s9">
          9
        </div>
      </div>
    </div>
  )
}


export default Board
