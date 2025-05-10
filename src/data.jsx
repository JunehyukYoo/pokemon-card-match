import bulbasaur from "/src/assets/bulbasaur.svg";
import pikachu from "/src/assets/pikachu.png";
import charizard from "/src/assets/charizard.svg";
export const DIFFICULTY = [
  {
    diff: "easy",
    cards: "8",
    id: crypto.randomUUID(),
    img: bulbasaur,
  },
  { diff: "medium", cards: "12", id: crypto.randomUUID(), img: pikachu },
  { diff: "hard", cards: "16", id: crypto.randomUUID(), img: charizard },
];
