import { useState } from "react";
import "./navbar.scss";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <div className="left-cont">
                <a href="/" className="logo">
                    <img src="/logo-black.png" alt="logo" />
                    <span>SushEstate</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agent</a>
            </div>
            <div className="right-cont">
                <a href="/">Login</a>
                <a href="/" className="login">Sign up</a>
                <div className="menu-sm">
                    <img src="/menu.png" alt="hamburger" onClick={() => setMenuOpen((prev) => !prev)} />
                </div>
                <div className={menuOpen ? "menu-items active" : "menu-items"}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agent</a>
                    <a href="/">Login</a>
                    <a href="/">Sign in</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;