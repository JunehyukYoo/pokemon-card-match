import { useState } from "react";
import { Accordion } from "./pages/Accordion";
import "./App.css";

function App() {
  const [difficulty, setDifficulty] = useState("");
  const selectDifficulty = (e) => {
    const selectedDifficulty = e.target.parentElement.className.split("-")[1];
    console.log(selectedDifficulty);
    setDifficulty(selectedDifficulty);
  };

  const numberCards = {
    easy: 8,
    medium: 12,
    hard: 16,
  };

  return (
    <>
      {difficulty === "" ? (
        <div className="App">
          <Accordion onSelect={selectDifficulty} />
        </div>
      ) : (
        <div className="game-container">
          <h1>Game</h1>
          <p>Difficulty: {difficulty}</p>
          <button onClick={() => setDifficulty("")}>Back</button>
          {/* Add your game components here */}
        </div>
      )}
    </>
  );
}

export default App;
