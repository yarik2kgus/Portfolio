import { useState } from "react";
import "./App.css";
import Board from "./Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]); // Initialize history with the first state of squares (9 null values)
  const [currentMove, setCurrentMove] = useState(0); // Track the current move define on which move the game is currently looking user  at
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove]; // Get the current squares from the history array

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; // Create a new history array with the current move and the next squares +1 because last move is not included with slise method
    setHistory(nextHistory); // Update history with the new history array
    setCurrentMove(nextHistory.length - 1); // Set the current move number to the last move in the new history -1 because length starts from 1
  }

  function jumpTo(nextMove) {
    // Function to jump to a specific move
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button className="move-button" onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  }); // Map through history to create a list of moves

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
