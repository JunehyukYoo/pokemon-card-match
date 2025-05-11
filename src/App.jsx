import { useState, useEffect } from "react";
import { Accordion } from "./pages/Accordion";
import { Game } from "./pages/Game.jsx";
import "./App.css";

function App() {
  const [difficulty, setDifficulty] = useState("");
  const [cards, setCards] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const selectDifficulty = (e) => {
    const selectedDifficulty = e.target.parentElement.className.split("-")[1];
    setDifficulty(selectedDifficulty);
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function loadData() {
      try {
        const offset = Math.floor(Math.random() * 1282);
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`,
          { signal }
        );
        if (!res.ok) throw new Error(`Pokémon fetch failed (${res.status})`);
        const { results } = await res.json();
        const enriched = await Promise.all(
          results.map(async (poke) => {
            const pokeapi = await fetch(poke.url, { signal });
            if (!pokeapi.ok) {
              throw new Error(`Retrieve pokemon data aerror for ${poke.name}`);
            }
            const pokeData = await pokeapi.json();
            const imageUrl =
              pokeData.sprites.other["official-artwork"].front_default;
            return { ...poke, imageUrl };
          })
        );

        setCards(enriched);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    loadData();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (error) {
      console.log(`Error: ${error}`);
    }
  }, [error]);

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : difficulty === "" ? (
        <div className="App">
          <Accordion onSelect={selectDifficulty} />
        </div>
      ) : (
        <Game
          difficulty={difficulty}
          handleChange={[setDifficulty]}
          cards={cards}
        />
      )}
    </>
  );
}

export default App;
