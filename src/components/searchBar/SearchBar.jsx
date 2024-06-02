import { useState } from "react";
import "./searchBar.scss";

const types = ["buy", "rent"];

function SearchBar() {

    const [buyRent, setBuyRent] = useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxPrice: 0,
    });

    const handleTypeSwitch = (val) => {
        setBuyRent(prev => ({ ...prev, type: val }))
    }

    return (
        <div className="search-bar">
            <div className="search-type">
                {types.map((type) => (
                    <button key={type} onClick={() => handleTypeSwitch(type)} className={buyRent.type === type ? "active" : ""}>{type}</button>
                ))}
            </div>
            <form>
                <input type="text" name="location" placeholder="City Location" />
                <input type="text" name="minPrice" min={0} max={10000000} placeholder="Min Price" />
                <input type="text" name="maxPrice" min={0} max={10000000} placeholder="Max Price" />
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </form>
        </div>
    )
}

export default SearchBar;