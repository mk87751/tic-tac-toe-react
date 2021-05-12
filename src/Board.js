import Square from "./Square";
import React, { useState } from "react";
import "./Board.css";
import userEvent from "@testing-library/user-event";
function Board() {
  const [player, setPlayer] = useState("X");
  return (
    <div className="board">
      <div className="board-row">
        <p>Next Player: </p>
        <p> {player}</p>
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

export default Board;
