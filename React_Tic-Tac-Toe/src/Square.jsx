export default function Square({ value, onSquareClick }) {
  return (
    <button className="square-button" onClick={onSquareClick}>
      {value}
    </button>
  );
}
