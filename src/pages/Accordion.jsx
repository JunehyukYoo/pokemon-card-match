import Sidebar from "../components/Sidebar";
import GameMode from "../components/GameMode";
import bulbasaur from "../assets/bulbasaur.svg";
import "../styles/Accordion.css";

export const Accordion = () => {
  const DIFFICULTY = [
    {
      diff: "easy",
      cards: "6",
      id: crypto.randomUUID(),
      img: bulbasaur,
    },
    { diff: "medium", cards: "10", id: crypto.randomUUID(), img: bulbasaur },
    { diff: "hard", cards: "14", id: crypto.randomUUID(), img: bulbasaur },
  ];
  return (
    <div className="accordion">
      <Sidebar />
      {DIFFICULTY.map((diff) => (
        <GameMode key={diff.id} diff={diff} />
      ))}
    </div>
  );
};

export default Accordion;
