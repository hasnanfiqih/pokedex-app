import React from 'react';

const FilterPokemon = ({ types, onFilterChange }) => {
  const handleSelectChange = (event) => {
    const selectedType = event.target.value;
    onFilterChange(selectedType);
  };

  return (
    <div className="filter-pokemon">
      <label htmlFor="typeSelect">Filter by Type:</label>
      <select id="typeSelect" onChange={handleSelectChange}>
        <option value="">All</option>
        {types.map((type) => (
          <option key={type.name} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterPokemon;
