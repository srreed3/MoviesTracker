
function Add() {
    return (
        <>
            <h2>ADD MOVIE</h2>
            <form id="formContainer1">

                <label for="title">Title*:</label>
                <input type="text" id="title" name="title" placeholder="Enter Movie Title" required />

                <label for="relDate">Year of Release:</label>
                <input type="number" id="relDate" name="relDate" min="1800" max="2100" />

                <label for="rating">Rating:</label>
                <select id="rating" name="rating">
                    <option value = ""></option>
                    <option value = "G">G</option>
                    <option value = "PG">PG</option>
                    <option value = "PG-13">PG-13</option>
                    <option value = "R">R</option>
                    <option value = "NC-17">NC-17</option>                    
                </select>

                <label for="length">Length:</label>
                <input type="number" id="hrs" name="hrs" min="0" max="10" placeholder="Hrs" />
                <input type="number" id="mins" name="mins" min="0" max="59" placeholder="Mins" /><br/>

                <label for="lastwatchedDate">Last Watched:</label>
                <input type="date" id="lastwatchedDate" name="lastwatchedDate" />
                
                <label for="file">Add Picture:</label>
                <input type="file" id="file" name="file" accept="/images" />

                <div class="subButton">
                    <button id="submit" type="submit">Submit</button>
                </div>
            </form>

            <div>
            <img class="movieRatings" src="images/ratings.jpg" alt="Movie Ratings" /> 
            </div>
        </>
    )
}

export default Add