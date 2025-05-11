export const GameCard = ({ card, index, handleChange }) => {
  return card.isFlipped ? (
    <div className="game-card flipped">
      <h4>{card.name.toUpperCase()}</h4>
      <img src={card.imageUrl} width="100px" height="100px"></img>
    </div>
  ) : (
    <div className="game-card unflipped" onClick={() => handleChange(index)}>
      <h4>?</h4>
    </div>
  );
};

export default GameCard;
