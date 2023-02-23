import "./Card.css";

function Card({ word, definition }) {
  return (
    <div className="card-word">
      <h3>{word}</h3>
      <p>{definition}</p>
    </div>
  );
}

export default Card;
