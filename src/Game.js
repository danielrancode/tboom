import React, { useState } from 'react';
import MetaBoard from './MetaBoard'

const Game = () => {

  const [player, setPlayer] = useState("Akiva")
  const [score, setScore] = useState(0)

  return <MetaBoard />
}

export default Game;
