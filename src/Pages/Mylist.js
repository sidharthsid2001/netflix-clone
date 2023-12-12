import React, { useState } from 'react';

function MyList({ likedMovies }) {
  return (
    <div>
      <h2>My List</h2>
      <ul>
        {likedMovies.map((movieId) => (
          <li key={movieId}>{/* Display details of the liked movie */}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyList;
