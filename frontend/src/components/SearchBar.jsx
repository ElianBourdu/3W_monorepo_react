import React, { useState } from 'react';
import Button from "./Button";

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('catégorie');

  const handleLocalisationChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearch = () => {
    //@todo request back
  };

  return (
    <div className="searchBar">
      <select value={searchInput} onChange={handleLocalisationChange}>
        <option value="" hidden>localisation</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="" hidden>Catégorie</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      <Button variant="primary" onClick={handleSearch}>Rechercher</Button>
    </div>
  );
}

export default SearchBar;
