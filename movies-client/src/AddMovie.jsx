import React, { useState } from 'react';

function AddMovie({ addMovie }) {
  // Local state for movie name and year input fields
  const [movieName, setMovieName] = useState('');
  const [movieYear, setMovieYear] = useState('');

  // Handler for form submission
  const handleAddMovie = async (e) => {
    e.preventDefault();
    await addMovie(movieName, movieYear); // Call the addMovie function passed as a prop
    setMovieName(''); // Clear the input fields
    setMovieYear('');
  };

  // Handler for movie name input field change
  const handleNameChange = (e) => {
    setMovieName(e.target.value);
  };

  // Handler for movie year input field change
  const handleYearChange = (e) => {
    setMovieYear(e.target.value);
  };

  return (
    <>
      <h1>Add Movie</h1>
      <form>
        <input type="text" value={movieName} onChange={handleNameChange} placeholder='Enter movie name' />
        <input type="text" value={movieYear} onChange={handleYearChange} placeholder='Enter movie year' />
        <button onClick={handleAddMovie}>Add Movie</button>
      </form>
    </>
  );
}

export default AddMovie;