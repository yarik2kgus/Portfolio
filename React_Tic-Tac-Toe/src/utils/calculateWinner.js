export function calculateWinner(squares) {
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; // Destructure the line array into a, b, and c
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // Check if the squares at positions a, b, and c are not null and are equal
      return squares[a];
    }
  }
  return null;
}
// The calculateWinner function checks all possible winning combinations of squares in a tic-tac-toe game.
// It takes an array of squares as input, which represents the current state of the game board.
