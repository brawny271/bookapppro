import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBooks, setBooksError, setBooksLoading } from '../redux/AllDataSlice';
import axios from 'axios';
import './serchbar.css'

const API_URL = "http://64.227.142.191:8080/application-test-v1.1/books";

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async () => {
    dispatch(setBooksLoading());
    try {
      const response = await axios.get(`${API_URL}?title=${query}`);
      if (response.data && Array.isArray(response.data.data)) {
        dispatch(setBooks(response.data.data));
      } else {
        dispatch(setBooks([])); 
      }
    } catch (error) {
      dispatch(setBooksError(error.toString()));
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books by title"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;