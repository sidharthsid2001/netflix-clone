import React, { useState, useEffect } from 'react';
import './search.css';
import { search } from '../url';
import { baseUrl, imageUrl } from '../constants/constants';
import { Link } from 'react-router-dom';
import RowPost from '../Components/RowPost/RowPost';
import NavBar from '../Components/NavBar/NavBar';
const Search = () => {
  const [searchClicked, setSearchClicked] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // if (searchClicked && searchTerm.trim() !== '') {
    //   axios
    //     .get(search, {
    //       params: {
    //         query: searchTerm,
    //       },
    //     })
    //     .then((response) => {
    //       setSearchResults(response.data.results);
    //       console.log(response.data.results);
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching search results:', error);
    //     })
    //     .finally(() => {
    //       setSearchClicked(false);
    //     });
    // }
  }, [searchClicked, searchTerm]);

  const handleSearchClick = () => {
    setSearchClicked(true);
  };

  return (
    <>
    <div>
    <NavBar/>
    </div>
    <div className="search-page">
      <div className='search-container'>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies and tv series"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setSearchClicked(false); // Reset searchClicked to false on input change
          }}
        />
      </div>
      
      <Link className="search-button" onClick={handleSearchClick}>
        Search
      </Link>
      </div>
      <div className='blank-container'></div>
      <div className="search-results">
        {
          searchClicked && (<RowPost url ={search} title={''} type='tv' params= {
            {query: searchTerm,}
          }/>)
        }
      
        {/* {searchResults.map((result) => (
          <div className="search-result" key={result.id}>
            <img src={`${imageUrl + result.poster_path}`} alt={result.title} />
            <h3 className="title">{result.title}</h3>
            <RowPost url ={search} title={result.title} />
          </div>
          
        ))} */}
      </div>
    </div>
    </>
  );
};

export default Search;
