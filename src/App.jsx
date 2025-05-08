import { useState, useEffect } from "react";
import { Accordion } from "./pages/Accordion";
import { Game } from "./pages/Game.jsx";
import "./App.css";

function App() {
  const MAX_CARDS = 16;
  const [difficulty, setDifficulty] = useState("");
  const [cards, setCards] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const selectDifficulty = (e) => {
    const selectedDifficulty = e.target.parentElement.className.split("-")[1];
    console.log(selectedDifficulty);
    setDifficulty(selectedDifficulty);
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchData(url) {
      try {
        const response = await fetch(url, {
          signal,
        });
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const json = await response.json();
        setCards(json);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    const offset = Math.floor(Math.random() * 1282);
    fetchData(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);

    return () => controller.abort();
  }, []);

  // useEffect(() => {
  //   const abortController = new AbortController();
  //   const signal = abortController.signal;

  //   async function loadData() {
  //     try {
  //       // 1) fetch Pokémon list
  //       const offset = Math.floor(Math.random() * 1282);
  //       const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`, { signal })
  //       if (!res.ok) throw new Error(`Pokémon fetch failed (${res.status})`)
  //       const { results } = await res.json()

  //       // 2) for each Pokémon, pass the same signal
  //       const enriched = await Promise.all(
  //         results.map(async (poke) => {
  //           const q   = encodeURIComponent(poke.name)
  //           const url = `${GIPHY_SEARCH}?api_key=${GIPHY_API_KEY}&q=${q}&limit=1`
  //           const gifRes = await fetch(url, { signal })
  //           if (!gifRes.ok) throw new Error(`Giphy error for ${poke.name}`)
  //           const gifJson = await gifRes.json()
  //           const imageUrl = gifJson.data[0]?.images?.downsized_medium?.url ?? null
  //           return { ...poke, imageUrl }
  //         })
  //       )

  //       setPokemons(enriched)
  //     } catch (err) {
  //       if (err.name !== 'AbortError') {
  //         setError(err.message)
  //       }
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   loadData()

  //   return () => {
  //     // This will abort all in‑flight fetches using `signal`
  //     abortController.abort()
  //   }
  // }, [])

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
          handleChange={setDifficulty}
          cards={cards}
        />
      )}
    </>
  );
}

export default App;
