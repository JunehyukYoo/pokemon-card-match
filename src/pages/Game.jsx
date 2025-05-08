import { DIFFICULTY } from "../data";
import { useState, useEffect } from "react";

export const Game = ({ difficulty, handleChange, cards }) => {
  const [score, setScore] = useState(0);
  const diffObj = DIFFICULTY.find((diff) => (diff.difficulty = difficulty));
  const [finished, setFinished] = useState(false);
  const [toDisplay, setToDisplay] = useState(null);
  console.log(diffObj);
  console.log(cards);

  return (
    <div>
      {finished ? (
        <div>You Finished!</div>
      ) : (
        <div>
          The difficulty is {difficulty} <br />
          Score is {score}
          <button onClick={() => setScore((prev) => prev + 1)}>Add</button>
          <button onClick={() => handleChange("")}>Back</button>
        </div>
      )}
    </div>
  );
};

export default Game;
