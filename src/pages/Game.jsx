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
  const [turn, setTurn] = useState(0);

  const originalCards = cards.slice(0, CARD_NUM[difficulty]).map((card) => ({
    ...card,
    isCopy: false,
    isFlipped: false,
  }));
  const copyCards = originalCards.map((card) => ({
    ...card,
    isCopy: true,
    isFlipped: false,
  }));

  const select = [...originalCards, ...copyCards].sort(
    () => Math.random() - 0.5
  );

  const [selection, setSelection] = useState(select);
  console.log(selection);

  return (
    <div>
      <div>
        <button onClick={() => handleChange[0]("")}>Back</button>
        <p>Turn is {turn}</p>
      </div>
      {finished ? (
        <div>You Finished!</div>
      ) : (
        <div className="game-card-container">
          {selection &&
            selection.map((card, idx) => (
              <GameCard
                key={idx}
                index={idx}
                card={card}
                handleChange={[setSelection, setTurn]}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Game;
