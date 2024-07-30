import React, { useEffect, useState } from 'react';
import AddMovie from './AddMovie';
import ListMovies from './ListMovies';

function Movies() {
  // State to store the list of movies
  const [movies, setMovies] = useState([]);

  // Function to fetch movies from the server
  const fetchMovies = async () => {
    const moviesUrl = 'http://localhost:8080/movies';
    const response = await fetch(moviesUrl);
    const result = await response.json();
    setMovies(result); // Update the state with the fetched movies
  };

  // Function to add a new movie to the server
  const addMovie = async (name, year) => {
    const movieUrl = 'http://localhost:8080/movies';
    const response = await fetch(movieUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, year: parseInt(year) })
    });

    const movie = await response.json();
    setMovies([...movies, movie]); // Update the state with the new movie
  };

  // Fetch movies when the component mounts
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div>
        {/* Pass the addMovie function as a prop to AddMovie component */}
        <AddMovie addMovie={addMovie} />
        
        {/* Pass the movies array as a prop to ListMovies component */}
        <ListMovies movies={movies} />
      </div>
    </>
  );
}

export default Movies;