import { NavLink } from "react-router-dom"

function Menu() {
    return (
        <>
            <header>
                <div className="header-container">
                <h1><img src="images/play.png" alt="Play button logo" id="play_logo"/> M.O.M.</h1>
                <p>Movie Organizational Magic</p>
                </div>

                <div className="navbar">
                <p><NavLink to ="/">HOME</NavLink></p>
                <div className="dropdown">
                    <button className="dropbtn">MOVIES<i className="fa fa-caret-down"></i></button>
                    <div className="dropdown-content">
                    <p><NavLink to ="/view">VIEW</NavLink></p>
                    <p><NavLink to ="/add">ADD</NavLink></p>
                    <p><NavLink to ="/movies">Movies</NavLink></p>
                    </div>
                </div>
                </div>
            </header>
        </>
    )
}

export default Menu