import "./searchFilter.scss";

function SearchFilter() {
    return (
        <div className="search-filter">
            <h1>Available for buy in <strong>Mumbai</strong></h1>
            <div className="top-filter">
                {/* <label htmlFor="city">Location</label> */}
                <input type="text" id="city" name="city" placeholder="City Location" />
            </div>
            <div className="bottom-filter">
                <div className="bot-filt-item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="">Any</option>
                        <option value="buy">Buy</option>
                        <option value="sell">Sell</option>
                    </select>
                </div>
                <div className="bot-filt-item">
                    <label htmlFor="property">Property</label>
                    <select name="property" id="property">
                        <option value="">Any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>
                <div className="bot-filt-item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input type="number" id="minPrice" name="minPrice" placeholder="Any" />
                </div>
                <div className="bot-filt-item">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input type="number" id="maxPrice" name="maxPrice" placeholder="Any" />
                </div>
                <div className="bot-filt-item">
                    <label htmlFor="bedroom">Bedroom</label>
                    <input type="text" id="bedroom" name="bedroom" placeholder="Any" />
                </div>
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </div>
        </div>
    );
}

export default SearchFilter;