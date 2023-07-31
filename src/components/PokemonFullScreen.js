import React from 'react';
import './PokemonFullScreen.css'; 

const PokemonFullScreen = ({ pokemonData, onClose }) => {
  return (
    <div className="pokemon-fullscreen">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      {pokemonData ? (
        <div className="pokemon-details">
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>Height: {pokemonData.height}</p>
          <p>Weight: {pokemonData.weight}</p>
          <p>Types: {pokemonData.types.map((type) => type.type.name).join(', ')}</p>
          <p>Base Experience: {pokemonData.base_experience}</p>
          <p>Abilities: {pokemonData.abilities.map((ability) => ability.ability.name).join(', ')}</p>
          <h3>Stats:</h3>
          <ul>
            {pokemonData.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
          <h3>Moves:</h3>
          <ul>
            {pokemonData.moves.slice(0, 10).map((move) => (
              <li key={move.move.name}>{move.move.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonFullScreen;
