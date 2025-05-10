import Sidebar from "../components/Sidebar";
import GameMode from "../components/GameMode";
import { DIFFICULTY } from "../data";
import "../styles/Accordion.css";

export const Accordion = ({ onSelect }) => {
  return (
    <div className="accordion">
      <Sidebar />
      {DIFFICULTY.map((diff) => (
        <GameMode key={diff.id} diff={diff} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default Accordion;
