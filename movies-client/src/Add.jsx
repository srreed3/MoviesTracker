import "./add_update.css"
import React, { useState } from 'react';

function Add( addMovie ) {
      // Local state for movie name and year input fields
      const [movieTitle, setMovieTitle] = useState('');
      const [movieRelDate, setMovieRelDate] = useState('');
      const [movieRating, setMovieRating] = useState('');
      const [movieHrs, setMovieHrs] = useState('');
      const [movieMins, setMovieMins] = useState('');
      const [movieLastWatched, setMovieLastWatched] = useState('');
      const [movieFile, setMovieFile] = useState('');

    
      // Handler for form submission
      const handleAddMovie = async (e) => {
        e.preventDefault();
        await addMovie(movieTitle, movieRelDate, movieRating, movieHrs, movieMins, movieLastWatched, movieFile); // Call the addMovie function passed as a prop
        setMovieTitle(''); // Clear the input fields
        setMovieRelDate('');
        setMovieRating('');
        setMovieHrs('');
        setMovieMins('');
        setMovieLastWatched('');
        setMovieFile('');
    };
    
      // Handler for movie title input field change
      const handleTitleChange = (e) => {
        setMovieTitle(e.target.value);
      };
    
      // Handler for movie year input field change
      const handleRelDateChange = (e) => {
        setMovieRelDate(e.target.value);
      };

      const handleRatingChange = (e) => {
        setMovieRating(e.target.value);
      };

      const handleHrsChange = (e) => {
        setMovieHrs(e.target.value);
      };

      const handleMinsChange = (e) => {
        setMovieMins(e.target.value);
      };

      const handleLastWatchedChange = (e) => {
        setMovieLastWatched(e.target.value);
      };

      const handleFileChange = (e) => {
        setMovieFile(e.target.value);
      };
 
    return (
        <>
            <h2>ADD MOVIE</h2>
            <form id="formContainer1">

                <label htmlFor="title">Title*:</label>
                <input type="text" id="title" name="title" value={movieTitle} onChange={handleTitleChange} placeholder="Enter Movie Title" required />

                <label htmlFor="relDate">Year of Release:</label>
                <input type="number" id="relDate" name="relDate" value={movieRelDate} onChange={handleRelDateChange} min="1800" max="2100" />

                <label htmlFor="rating">Rating:</label>
                <select id="rating" name="rating" value={movieRating} onChange={handleRatingChange}>
                    <option value = ""></option>
                    <option value = "G">G</option>
                    <option value = "PG">PG</option>
                    <option value = "PG-13">PG-13</option>
                    <option value = "R">R</option>
                    <option value = "NC-17">NC-17</option>                    
                </select>

                <label htmlFor="length">Length:</label>
                <input type="number" id="hrs" name="hrs" min="0" max="10" value={movieHrs} onChange={handleHrsChange} placeholder="Hrs" />
                <input type="number" id="mins" name="mins" min="0" max="59" value={movieMins} onChange={handleMinsChange} placeholder="Mins" /><br/>

                <label htmlFor="lastwatchedDate">Last Watched:</label>
                <input type="date" id="lastwatchedDate" name="lastwatchedDate" value={movieLastWatched} onChange={handleLastWatchedChange}/>
                
                <label htmlFor="file">Add Picture:</label>
                <input type="file" id="file" name="file" accept="/images" value={movieFile} onChange={handleFileChange}/>

                <div className="subButton">
                    <button id="submit" type="submit" onClick={handleAddMovie}>Submit</button>
                </div>
            </form>

            <div>
            <img className="movieRatings" src="images/ratings.jpg" alt="Movie Ratings" /> 
            </div>
        </>
    )
}

export default Add