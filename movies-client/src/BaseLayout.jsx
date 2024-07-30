import Menu from "./Menu"

function BaseLayout(props) {
    return (
        <>
        <Menu />

            {props.children}

        <footer>
            <p>&copy; 2024 M.O.M. LLC</p>
        </footer>
        </>
    )
}

export default BaseLayout