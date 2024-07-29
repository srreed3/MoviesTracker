import React from 'react';

function ListMovies({ movies }) {
  // Create list items for each movie in the movies array
  const movieItems = movies.map((movie) => (
    <li key={movie._id}>{movie.name}</li>
  ));

  return (
    <>
      <h1>List of Movies</h1>
      <ul>
        {movieItems} {/* Render the list of movies */}
      </ul>
    </>
  );
}

export default ListMovies;