import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [PlayerName, setPlayerName] = useState(initialName);
  const [isEditing, setisEditing] = useState(false);

  function clickHandel() {
    setisEditing((editing) => !editing);
  }
  function handelnameChange(event) {
    setPlayerName(event.target.value);
  }

  let EditableName = <span className="player-name">{PlayerName}</span>;

  if (isEditing) {
    EditableName = (
      <input
        type="text"
        required
        value={PlayerName}
        onChange={handelnameChange}
      />
    );
  }
  return (
    <li>
      <span className="player">
        {EditableName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={clickHandel}>{isEditing ? "SAVE" : "EDIT"}</button>
    </li>
  );
}
