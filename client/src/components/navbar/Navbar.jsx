import { useContext, useState } from "react";
import "./navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const { currentUser } = useContext(AuthContext);

    const navigate = useNavigate();

    // const user = true;

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
                {
                    currentUser ? (
                        <div className="user">
                            <img src={currentUser.avatar || "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="" />
                            <span>{currentUser.username}</span>
                            <Link to="/profile" className="profile-noti">
                                <div className="noti">3</div>
                                <span>Profile</span>
                            </Link>
                        </div>
                    ) : (
                        <>
                            <a href="/login">Login</a>
                            <a href="/register" className="sign-up">Sign up</a>
                        </>
                    )
                }

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