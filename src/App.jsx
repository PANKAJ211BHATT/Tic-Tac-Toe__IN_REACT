import Player from "./components/player";
function App() {
  return (
    <>
      <div id="game-container">
        <ol id="players">
          <Player />
          <Player />
        </ol>
      </div>
    </>
  );
}

export default App;
