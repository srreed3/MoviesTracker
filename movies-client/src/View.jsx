import { NavLink } from "react-router-dom"
import "./view.css"

function View() {
    return (
        <>
            <div className="view-container">
                <div className="movies-container">
                    <h2>FIND MOVIES</h2>
                    <ul className="viewContainer">
                        <li className="listItems"><NavLink to="/allMovies">All Movies</NavLink></li>        
                        <li className="listItems"><NavLink to="/ae">A-E</NavLink></li>        
                        <li className="listItems"><NavLink to="/fj">F-J</NavLink></li>        
                    </ul>

                    <ul className="viewContainer">
                        <li className="listItems"><NavLink to="/ko">K-O</NavLink></li>        
                        <li className="listItems"><NavLink to="/pt">P-T</NavLink></li>        
                        <li className="listItems"><NavLink to="/uz">U-Z</NavLink></li>        
                        <li className="listItems"><NavLink to="/other">Other</NavLink></li>        
                    </ul>
                </div>
                <div className="poster-container">
                    <img src="images/movie_posters.jpg" id="poster"/>
                </div>
            </div>
        </>
    )
}

export default View
