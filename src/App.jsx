import Player from "./components/player";
function App() {
  return (
    <>
      <div id="game-container">
        <ol id="players">
          <Player initialName="player1" symbol="X" />
          <Player initialName="player2" symbol="O" />
        </ol>
      </div>
    </>
  );
}

export default App;
