import { useSearchParams } from "react-router-dom";
import "./searchFilter.scss";
import { useState } from "react";

function SearchFilter() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState({
        type: searchParams.get("type") || "",
        city: searchParams.get("city") || "",
        property: searchParams.get("property") || "",
        minPrice: searchParams.get("minPrice") || 0,
        maxPrice: searchParams.get("maxPrice") || 10000000000,
        bedroom: searchParams.get("bedroom") || 1,
    })

    const handleChange = (e) => {
        setQuery({
            ...query,
            [e.target.name]: e.target.value,
        })
    }

    const handleClick = (e) => {
        setSearchParams(query);
    }

    return (
        <div className="search-filter">
            <h1>Available for buy in <strong>Mumbai</strong></h1>
            <div className="top-filter">
                {/* <label htmlFor="city">Location</label> */}
                <input type="text" id="city" name="city" placeholder="City Location" onChange={handleChange} defaultValue={query.city} />
            </div>
            <div className="bottom-filter">
                <div className="bot-filt-item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type" onChange={handleChange} defaultValue={query.type}>
                        <option value="">Any</option>
                        <option value="buy">Buy</option>
                        <option value="sell">Sell</option>
                    </select>
                </div>
                <div className="bot-filt-item">
                    <label htmlFor="property">Property</label>
                    <select name="property" id="property" onChange={handleChange} defaultValue={query.property}>
                        <option value="">Any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>
                <div className="bot-filt-item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input type="number" id="minPrice" name="minPrice" placeholder="Any" onChange={handleChange} defaultValue={query.minPrice} />
                </div>
                <div className="bot-filt-item">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input type="number" id="maxPrice" name="maxPrice" placeholder="Any" onChange={handleChange} defaultValue={query.maxPrice} />
                </div>
                <div className="bot-filt-item">
                    <label htmlFor="bedroom">Bedroom</label>
                    <input type="text" id="bedroom" name="bedroom" placeholder="Any" onChange={handleChange} defaultValue={query.bedroom} />
                </div>
                <button onClick={handleClick}>
                    <img src="/search.png" alt="" />
                </button>
            </div>
        </div>
    );
}

export default SearchFilter;