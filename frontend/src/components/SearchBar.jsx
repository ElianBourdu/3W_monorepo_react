import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_FRUITS } from '../actions/fruitsActions';
import Button from "./Button";

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('catégorie');
  const dispatch = useDispatch();
  const { fruits, error } = useSelector((state) => state.fruits);

  useEffect(() => {
    dispatch(GET_FRUITS());
  }, [dispatch]);

  if (error) {
    return <p>Une erreur s'est produite lors de la récupération des fruits: {error}</p>;
  }

  const handleLocalisationChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    fetch('http://localhost:8000/search?' + new URLSearchParams({
      localisation: searchInput,
      fruits: selectedCategory,
    }), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Requête en échec');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Erreur de requête :', error);
      });
  };

  return (
    <form className="searchBar">
      <input
        value={searchInput}
        onChange={handleLocalisationChange}
        type="text"
        placeholder="localisation"
      />

      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="" hidden>Catégorie</option>
        {fruits.map((fruit) => (
          <option value={fruit.name}>{fruit.name}</option>
        ))}
      </select>

      <Button variant="primary" onClick={handleSearch}>Rechercher</Button>
    </form>
  );
}

export default SearchBar;
