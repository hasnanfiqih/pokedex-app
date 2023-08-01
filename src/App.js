import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonList from './components/PokemonList';
import FilterPokemon from './components/FilterPokemon';
import './App.css';

function App() {
  const [filter, setFilter] = useState('');
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetchPokemonTypes();
  }, []);

  const fetchPokemonTypes = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/type');
      setTypes(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilterChange = (selectedType) => {
    setFilter(selectedType);
  };

  return (
    <div className="App">
      <div className="background-pokeball1" />
      <div className="background-pokeball2" />
      <FilterPokemon types={types} onFilterChange={handleFilterChange} />
      <PokemonList filter={filter} />
    </div>
  );
}

export default App;
