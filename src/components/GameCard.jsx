export const GameCard = ({ card }) => {
  return (
    <div className="game-card">
      <h4>{card.name.toUpperCase()}</h4>
      <img src={card.imageUrl} width="100px" height="100px"></img>
    </div>
  );
};

export default GameCard;
