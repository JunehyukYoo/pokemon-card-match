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
  return (
    <>
      {difficulty === "" ? (
        <div className="App">
          <Accordion onSelect={selectDifficulty} />
        </div>
      ) : (
        <div onClick={() => setDifficulty("")}>You chose {difficulty}</div>
      )}
    </>
  );
}

export default App;
