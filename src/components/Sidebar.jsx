import "../styles/Sidebar.css";
import pokemonLogo from "../assets/pokemon.svg";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={pokemonLogo} alt="Pokemon Logo" className="sidebar-logo" />
      <h1>Card Matching Game</h1>
      <div className="sidebar-hover">
        <h2>How to Play</h2>
        <p>
          The objective of the game is to find all pairs of matching cards. Each
          card has a Pokemon on it, and there are two cards for each Pokemon.
          Match the cards with the same Pokemon. The game ends when all cards
          are matched. Click on a card to flip it.
        </p>
        <p>Try to match all cards in the least number of moves!</p>
        <p>Good luck!</p>
      </div>
    </div>
  );
};

export default Sidebar;
