import React, {useContext} from 'react'
import {Link} from "react-router-dom"
import {ContextGlobal} from "../Components/utils/global.context";

const Navbar = () => {
    const {state, dispatch} = useContext(ContextGlobal);
    const handleThemeChange = () => {
        const newTheme = state.theme === "light" ? "dark" : "light";
        dispatch({type: "THEME", payload: newTheme});
    };
    return (
        <nav className={"right-part"}>

                <Link to="/" className={"left-part"}>
                    <img src={"/DH.ico"}/>
                </Link>
                <Link to="/">
                    Home
                </Link>
                <Link to="/favorites">
                    Favorites
                </Link>
                <Link to="/contact">
                    Contact
                </Link>
                <button className="toggle" onClick={handleThemeChange}>{state.theme === "light" ? "🌙" : "🌞"}</button>
        </nav>
    )
}

export default Navbar