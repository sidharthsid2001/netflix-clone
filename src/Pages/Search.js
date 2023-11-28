import React, { useState, useEffect } from 'react';
import axios from '../axios';
import './search.css';
import { genres } from '../url';
//import { imageUrl } from '../constants/constants';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get(genres)
    .then((response) => {
     // setSearchResults(response.data.results);
      console.log(response.data.results);
    })
    .catch((error) => {
      console.error('Error fetching search results:', error);
    });
  }, []);

  return (
    { /*<<div className="search-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies..."
         // value={searchTerm}
         // onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
     div className="search-results">
        {searchResults.map((result) => (
          <div key={result.id} className="search-result">
            <img
              //src={`imageUrl+${result.backdrop-path}`}
              alt={result.title}
            />
            <h3>{result.title}</h3>
          </div>
      </div>
  );
};*/}
  )}
export default Search
