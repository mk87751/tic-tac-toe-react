import Square from "./Square";
import React, { useState } from "react";
import "./Board.css";
function Board() {
  // const initialSquares = [null, null, null, null, null, null, null, null, null];
  const initialSquares = Array(9).fill(null);
  const [square, setSquare] = useState(initialSquares);
  const [xIsNext, setXISNext] = useState(true);

  const onclickEventHandler = (i) => {
    const newSquare = [...square];

    const winnerDeclared = Boolean(caluclateWinner(newSquare));
    const squareFilled = Boolean(newSquare[i]);

    if (winnerDeclared || squareFilled) {
      return;
    }
    newSquare[i] = xIsNext ? "X" : "O";
    setSquare(newSquare);
    setXISNext(!xIsNext);
  };
  const renderSquare = (i) => {
    return (
      <Square value={square[i]} onClickEvent={() => onclickEventHandler(i)} />
    );
  };
  const winner = caluclateWinner(square);
  const status = winner
    ? `Winner: ${winner}`
    : `Next Player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="board">
      <div className="board-row">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function caluclateWinner(square) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
}

export default Board;
