import { useState, useEffect, createContext } from "react";
import PokeList from "./components/PokeList";
import PokeDetail from "./components/PokeDetail";

export const PokemonContext = createContext();

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const [selectedPokemonName, setSelectedPokemonName] = useState("");

  const [pokemonDetail, setPokemonDetail] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=15")
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (!selectedPokemonName) return;
    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemonName}`)
      .then((response) => response.json())
      .then((data) => setPokemonDetail(data))
      .catch((error) => console.log(error));
  }, [selectedPokemonName]);

  const clear = () => {
    setSelectedPokemonName("");
    setPokemonDetail("");
  };

  return (
    <>
      <div style={styles.container}>
        <h2>PokeAPI</h2>
        <PokeList
          pokemonList={pokemonList}
          setSelectedPokemonName={setSelectedPokemonName}
        />
        {pokemonDetail && (
          <div>
            <h2>Pokemon Detail</h2>
            <PokeDetail pokemonDetail={pokemonDetail} />
            <button style={styles.button} onClick={() => clear()}>
              Clear
            </button>
          </div>
        )}
      </div>
    </>
  );
}

const styles = {
  container: {
    width: "100%",
    margin: "0 auto",
    padding: "80px",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    borderRadius: "6px",
    padding: "12px 24px",
    fontSize: "1em",
    cursor: "pointer",
    marginTop: "32px",
  },
};

export default App;
