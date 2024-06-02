import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
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
            <div className="img-container">
                <img className="build-one" src="/building-one.png" alt="" />
                <img className="build-two" src="/building-two.png" alt="" />
                <img className="farm-house" src="/farm-house.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage;