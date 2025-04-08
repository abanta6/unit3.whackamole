import { createContext, useContext, useEffect, useState } from "react";

const NUM_HOLES = 9;

const GameContext = createContext();

export function GameProvider({ children }) {
  const [field, setField] = useState(makeField());
  const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(false);

  const whack = () => {
    setField(makeField(field));
    setScore(score + 1);
  };

  const start = () => {
    setScore(0);
    setField(makeField());
    setPlaying(true);
  };

  const stop = () => {
    setPlaying(false);
  };

  const value = {
    field,
    score,
    playing,
    whack,
    start,
    stop,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("Game context must be used within GameProvider.");
  return context;
}

function makeField(field = []) {
  const newField = Array(NUM_HOLES).fill(false);
  let mole = Math.floor(Math.random() * NUM_HOLES);

  while (field[mole]) {
    mole = Math.floor(Math.random() * NUM_HOLES);
  }

  newField[mole] = true;
  return newField;
}
