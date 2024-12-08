import Player from "./components/player";
import GameBoard from "./components/Gameboard";
function App() {
  return (
    <>
      <div id="game-container">
        <ol id="players">
          <Player initialName="player1" symbol="X" />
          <Player initialName="player2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </>
  );
}

export default App;
