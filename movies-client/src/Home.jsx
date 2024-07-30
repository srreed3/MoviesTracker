import "./home.css"

function Home() {
  return(
    <>
    <h2>Welcome to Home Page</h2>

    <div className="homeTextContainer">
      <div className="homeText1">
        <p>Use this application to organize your movie collection. You can view, add, update, and delete your movies with ease. Only the title is required; all other information is up to your discretion.</p>
      </div>

      <div className="homeText2">
        <p>Want to watch a movie but can't choose? Click the button below to select a random movie from your collection!</p>
        <button id="randomSelectBtn">Select Random</button>                                                                                     {/* not working yet */}
        <p id="randomMovieDisplay"></p>
      </div>
    </div>

    <div>
      <img className="img1" src="public/images/movie_background.jpg" alt="Collage of Movies" />
    </div>

    <div>
      <img className="img2" src="public/images/film.jpg" alt="Movie Film" />
      <img className="img3" src="public/images/popcorn.webp" alt="Popcorn" />
    </div>
    </>
  )
}

export default Home;