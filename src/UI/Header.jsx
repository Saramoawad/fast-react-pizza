import { Link } from "react-router-dom"
import SearchOrder from "../Features/Order/SearchOrder"
import Username from "../Features/User/Username"

function Header() {
    return (
        <header className=" px-4 p-4 bg-yellow-500 uppercase border-b border-stone-200 
        flex items-center justify-between
        sm:px-6">
            <Link  to='/' className="tracking-widest">Fast React Pizza Co.</Link>
            <SearchOrder/>
            <Username/>
        </header>
    )
}

export default Header
