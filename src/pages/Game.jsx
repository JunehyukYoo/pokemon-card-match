import { useState, useEffect } from "react";
import GameCard from "../components/GameCard";
import "../styles/Game.css";

const CARD_NUM = {
  easy: 8,
  medium: 12,
  hard: 16,
};

export const Game = ({ difficulty, handleChange, cards }) => {
  // General game info
  const [score, setScore] = useState(0);
  const [turn, setTurn] = useState(0);

  // Game Logic
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // Select cards randomly
  const [selection, setSelection] = useState(() => {
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
    const shuffle = (arr) => {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };
    return shuffle([...originalCards, ...copyCards]);
  });

  // On choice update
  useEffect(() => {
    const nextTurn = () => {
      setTurn((t) => t + 1);
      setFirstChoice(null);
      setSecondChoice(null);
      setDisabled(false);
    };

    if (firstChoice !== null && secondChoice !== null) {
      setDisabled(true);
      const first = selection[firstChoice];
      const second = selection[secondChoice];

      if (first.name === second.name) {
        setScore((s) => s + 1);
        nextTurn();
      } else {
        setTimeout(() => {
          setSelection((prev) =>
            prev.map((c, i) =>
              i === firstChoice || i === secondChoice
                ? { ...c, isFlipped: false }
                : c
            )
          );
          nextTurn();
        }, 1000);
      }
    }
  }, [firstChoice, secondChoice, selection]);

  // Finishing game logic
  useEffect(() => {
    if (score === CARD_NUM[difficulty]) {
      alert(`You won in ${turn} turns!`);
    }
  }, [score]);

  const handleCardClick = (idx) => {
    // clicking disabled OR if you click an already flipped/matched card: ignore
    if (disabled || selection[idx].isFlipped) return;

    setSelection((prev) =>
      prev.map((c, i) => (i === idx ? { ...c, isFlipped: true } : c))
    );

    // record first or second choice
    firstChoice === null ? setFirstChoice(idx) : setSecondChoice(idx);
  };

  console.log(selection);

  return (
    <div className="game-container">
      <div className="game-header">
        <button onClick={() => handleChange[0]("")}>Back</button>
        <h1>{difficulty.toUpperCase()}</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <p>Turn: {turn}</p>
          <p>Score: {score}</p>
        </div>
      </div>

      <div className="game-card-container">
        {selection &&
          selection.map((card, idx) => (
            <GameCard
              key={idx}
              index={idx}
              card={card}
              handleChange={handleCardClick}
            />
          ))}
      </div>
    </div>
  );
};

export default Game;
