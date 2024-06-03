import "./listingPage.scss";
import { listData } from "../../lib/dummyData";
import SearchFilter from "../../components/searchFilter/SearchFilter";
import ListingCard from "../../components/listingCard/ListingCard";

function ListingPage() {

    const data = listData;

    return (
        <div className="listing">
            <div className="listing-container">
                <div className="listing-wrapper">
                    <SearchFilter />
                    {data.map((item) => (
                        <ListingCard key={item.id} item={item.item} />
                    ))}
                </div>
            </div>
            <div className="map-container">Map</div>
        </div>
    );
}

export default ListingPage;