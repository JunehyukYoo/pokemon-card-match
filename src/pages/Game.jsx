import { DIFFICULTY } from "../data";
import { useState, useEffect } from "react";

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
  return (
    <div>
      {finished ? (
        <div>You Finished!</div>
      ) : (
        <div>
          {selection &&
            selection.map((card) => (
              <div key={card.name} style={{ backgroundImage: card.url }}>
                {card.name}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Game;
