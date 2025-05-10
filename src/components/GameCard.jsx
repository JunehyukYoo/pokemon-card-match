export const GameCard = ({ card, index, handleChange }) => {
  const [setSelection, setTurn] = handleChange;
  const handleFlip = () => {
    setSelection((prev) =>
      prev.map((c, i) => (i === index ? { ...c, isFlipped: !c.isFlipped } : c))
    );
    setTurn((t) => t + 1);
  };

  return card.isFlipped ? (
    <div className="game-card flipped">
      <h4>{card.name.toUpperCase()}</h4>
      <img src={card.imageUrl} width="100px" height="100px"></img>
    </div>
  ) : (
    <div className="game-card unflipped" onClick={handleFlip}>
      <h4>?</h4>
    </div>
  );
};

export default GameCard;
