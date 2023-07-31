import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PokemonCard.css'; // Import the CSS file
import PokemonFullScreen from './PokemonFullScreen';

const PokemonCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const fetchPokemonData = async () => {
    try {
      const response = await axios.get(pokemon.url);
      setPokemonData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getMainAttributeColor = () => {
    if (pokemonData && pokemonData.types.length > 0) {
      // Assuming the main attribute is the first type in the types array
      const mainAttribute = pokemonData.types[0].type.name;
      switch (mainAttribute) {
        case 'normal':
          return '#A8A77A'; // Normal
        case 'fire':
          return '#EE8130'; // Fire
        case 'water':
          return '#6390F0'; // Water
        case 'electric':
          return '#F7D02C'; // Electric
        case 'grass':
          return '#7AC74C'; // Grass
        case 'ice':
          return '#96D9D6'; // Ice
        case 'fighting':
          return '#C22E28'; // Fighting
        case 'poison':
          return '#A33EA1'; // Poison
        case 'ground':
          return '#E2BF65'; // Ground
        case 'flying':
          return '#A98FF3'; // Flying
        case 'psychic':
          return '#F95587'; // Psychic
        case 'bug':
          return '#A6B91A'; // Bug
        case 'rock':
          return '#B6A136'; // Rock
        case 'ghost':
          return '#735797'; // Ghost
        case 'dragon':
          return '#6F35FC'; // Dragon
        case 'dark':
          return '#705746'; // Dark
        case 'steel':
          return '#B7B7CE'; // Steel
        case 'fairy':
          return '#D685AD'; // Fairy
        default:
          return '#f0f0f0'; // Default color if the attribute is not recognized
      }
    }
    return '#f0f0f0'; // Default color if data is not available
  };

  const handleCardClick = () => {
        setShowDetails((prevShowDetails) => !prevShowDetails);
      };
    
      const handleCloseDetails = () => {
        setShowDetails(false);
      };
    
      return (
        <>
          <div
            className={`pokemon-card ${showDetails ? 'active' : ''}`}
            style={{ backgroundColor: getMainAttributeColor() }}
            onClick={handleCardClick}
          >
            {pokemonData ? (
              <div>
                <h2>{pokemonData.name}</h2>
                <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                <p>Height: {pokemonData.height}</p>
                <p>Weight: {pokemonData.weight}</p>
                <p>Types: {pokemonData.types.map((type) => type.type.name).join(', ')}</p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
    
          {showDetails && <PokemonFullScreen pokemonData={pokemonData} onClose={handleCloseDetails} />}
        </>
      );
    };

export default PokemonCard;
