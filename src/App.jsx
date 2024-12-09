import Player from "./components/player";
import GameBoard from "./components/Gameboard";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handelSelectedSqr() {
    setActivePlayer((CurrentPlayer) => (CurrentPlayer === "X" ? "O" : "X"));
  }
  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="player2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSqr={handelSelectedSqr}
          activePlayerSymbole={activePlayer}
        />
      </div>
    </>
  );
}

export default App;
