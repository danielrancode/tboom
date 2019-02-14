import React, { useState } from 'react';
import MetaBoard from './MetaBoard'
import { randFromOneTo, randFromZeroTo, selectRandomNums } from './helpers.js'

const MetaGame = ({player}) => {

  const gameIds = selectRandomNums(randFromOneTo(9))
  const gameDelays = []
  gameIds.forEach(id => gameDelays[id] = randFromOneTo(5000))

  // gameIds.map(gameId => { return {[gameId]: randFromOneTo(3000)}})

  const [score, setScore] = useState(0)
  const [level, setLevel] = useState(1)
  const [attack, setAttack] = useState(1)

  return (
    <MetaBoard
      score={score}
      level={level}
      attack={attack}
      gameIds={gameIds}
      gameDelays={gameDelays}
    />
  )

}

export default MetaGame;


  // const [score, setScore] = useState(0)
  // const [level, setLevel] = useState(1)
  // const [attack, setAttack] = useState(1)


  // *************** meta-game logic

  // const runAttack = (maxInterval = 3000, bombCount = randFromOneTo(9)) => {
  //
  //   if (attack > 5) {
  //     level++
  //     attack = 1
  //     // runGame()
  //   }
  //
  //   const bombs = selectRandomNums(bombCount)
  //
  //   // ids.forEach((id) => {
  //   //   setTimeout(() => bomb(id), randFromOneTo(maxInterval))
  //   // })
  //
  // }
