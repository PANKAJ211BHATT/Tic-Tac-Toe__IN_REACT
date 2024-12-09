import { useState } from "react";

const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSqr, activePlayerSymbole }) {
  const [gameBoard, setgameBoard] = useState(initalGameBoard);

  function handleGameboard(indexRow, colIndex) {
    setgameBoard((prevGameBoard) => {
      const updateBoard = prevGameBoard.map((innerArray) => [...innerArray]);
      updateBoard[indexRow][colIndex] = activePlayerSymbole;
      return updateBoard;
    });
    onSelectSqr();
  }

  return (
    <>
      <ol id="game-board">
        {gameBoard.map((row, indexRow) => (
          <li key={indexRow}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button onClick={() => handleGameboard(indexRow, colIndex)}>
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
