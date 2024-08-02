import { useState } from "react";
import "./searchBar.scss";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

function SearchBar() {

    const [buyRent, setBuyRent] = useState({
        type: "buy",
        city: "",
        minPrice: 0,
        maxPrice: 0,
    });

    const handleTypeSwitch = (val) => {
        setBuyRent(prev => ({ ...prev, type: val }))
    }

    const handleChange = (e) => {
        setBuyRent(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    return (
        <div className="search-bar">
            <div className="search-type">
                {types.map((type) => (
                    <button key={type} onClick={() => handleTypeSwitch(type)} className={buyRent.type === type ? "active" : ""}>{type}</button>
                ))}
            </div>
            <form>
                <input type="text" name="city" placeholder="City Location" onChange={handleChange} />
                <input type="text" name="minPrice" min={0} max={10000000} placeholder="Min Price" onChange={handleChange} />
                <input type="text" name="maxPrice" min={0} max={10000000} placeholder="Max Price" onChange={handleChange} />
                <Link to={`/list?type=${buyRent.type}&city=${buyRent.city}&minPrice=${buyRent.minPrice}&maxPrice=${buyRent.maxPrice}`}>
                    <button>
                        <img src="/search.png" alt="" />
                    </button>
                </Link>
            </form>
        </div>
    )
}

export default SearchBar;