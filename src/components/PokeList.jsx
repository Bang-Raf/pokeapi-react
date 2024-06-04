import React from "react";

const PokeList = ({ pokemonList, setSelectedPokemonName }) => {
  return (
    <div style={styles.gridContent}>
      {pokemonList.map((item, index) => (
        <div
          key={index}
          style={styles.card}
          onClick={() => setSelectedPokemonName(item.name)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

const styles = {
  gridContent: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: 16,
  },
  card: {
    backgroundColor: "aquamarine",
    borderRadius: "8px",
    cursor: "pointer",
    padding: "16px",
    color: "#000",
    textTransform: "capitalize",
  },
};

export default PokeList;
