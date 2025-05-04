import "../styles/GameMode.css";

export const GameMode = ({ diff }) => {
  console.log(diff.img);
  return (
    <div className={`gamemode-${diff.diff}`}>
      <div
        className={`card-${diff.diff}`}
        style={{ backgroundImage: `url(${diff.img})` }}
      >
        <b></b>
        <div className={"content"}>
          <p className={"title"}>
            {diff.diff}
            <br />
            <span>{diff.cards} distinct cards</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameMode;
