import { NavLink } from "react-router-dom"

function Menu() {
    return (
        <>
            <ul>
                <li><NavLink to ="/">HOME</NavLink></li>
                <li><NavLink to ="/movies">MOVIES</NavLink></li>
            </ul>
        </>
    )
}

export default Menu