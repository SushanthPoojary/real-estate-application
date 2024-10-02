import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import SideImage from "../../components/sideImage/SideImage";
import "./homePage.scss";
// import { AuthContext } from "../../context/AuthContext";

function HomePage() {

    // const {currentUser} = useContext(AuthContext);

    // console.log(currentUser);

    return (
        <div className="homepage">
            <div className="text-container">
                <div className="text-wrapper">
                    <h1 className="text">BRING YOUR FAMILY'S HAPPINESS TO YOUR DREAM HOUSE</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <SearchBar />
                    <div className="counter-container">
                        <div className="counter">
                            <h2>200</h2>
                            <p>Awards Winning</p>
                        </div>
                        <div className="counter">
                            <h2>100+</h2>
                            <p>Property Ready</p>
                        </div>
                        <div className="counter">
                            <h2>300+</h2>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
            <SideImage />
        </div>
    )
}

export default HomePage;