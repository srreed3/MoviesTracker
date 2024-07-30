import Menu from "./Menu"
import App from "./App"

function BaseLayout(props) {
    return (
        <>
        <Menu />

            {props.children}

        <h1>Content</h1>

        <footer>CopyRight 2024 M.O.M.</footer>
        </>
    )
}

export default BaseLayout