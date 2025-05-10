import { DIFFICULTY } from "../data";
import { useState, useEffect } from "react";
import GameCard from "../components/GameCard";
import "../styles/Game.css";

const CARD_NUM = {
  easy: 8,
  medium: 12,
  hard: 16,
};

export const Game = ({ difficulty, handleChange, cards }) => {
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [toDisplay, setToDisplay] = useState(null);

  const selection = cards.slice(0, CARD_NUM[difficulty]);
  console.log(cards);
  return (
    <div>
      {finished ? (
        <div>You Finished!</div>
      ) : (
        <div className="game-card-container">
          {selection &&
            selection.map((card, idx) => <GameCard key={idx} card={card} />)}
        </div>
      )}
    </div>
  );
};

export default Game;
