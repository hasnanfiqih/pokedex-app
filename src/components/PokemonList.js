import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const PokemonList = ({ filter }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextUrl, setNextUrl] = useState('');

  useEffect(() => {
    fetchPokemon();
  }, [filter]);

  const fetchPokemon = async () => {
    let url = 'https://pokeapi.co/api/v2/pokemon';
    if (filter) {
      url = `https://pokeapi.co/api/v2/type/${filter}`;
    }

    try {
      const response = await axios.get(url);
      if (filter) {
        setPokemonList(response.data.pokemon.map((entry) => entry.pokemon));
      } else {
        setPokemonList(response.data.results);
      }
      setNextUrl(response.data.next);
    } catch (error) {
      console.error(error);
    }
  };

  const loadMorePokemon = async () => {
    try {
      if (nextUrl) {
        const response = await axios.get(nextUrl);
        setPokemonList((prevList) => [...prevList, ...response.data.results]);
        setNextUrl(response.data.next);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Pokédex</h1>
      <div className="pokemon-list">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <button onClick={loadMorePokemon}>Load More</button>
    </div>
  );
};

export default PokemonList;
