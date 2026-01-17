import { Link } from "react-router-dom"
import SearchOrder from "../Features/Order/SearchOrder"

function Header() {
    return (
        <header>
            <Link to='/'>Fast React Pizza Co.</Link>
            <SearchOrder/>
            <p>sara</p>
        </header>
    )
}

export default Header
