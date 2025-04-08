import { UseGame } from "./GameContext";

import Field from "./field";
import Scoreboard from "./Scoreboard";
import Welcome from "./Welcome";

export default function App() {
  const { playing } = useGame();
  return (
    <>
      <h1>Whack A Mole</h1>
      {playing ? (
        <>
          <Scoreboard />
          <Field />
        </>
      ) : (
        <Welcome />
      )}
    </>
  );
}
