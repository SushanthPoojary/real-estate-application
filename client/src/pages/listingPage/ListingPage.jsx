import "./listingPage.scss";
import { listData } from "../../lib/dummyData";
import SearchFilter from "../../components/searchFilter/SearchFilter";
import ListingCard from "../../components/listingCard/ListingCard";
import Map from "../../components/map/Map";

function ListingPage() {

    const data = listData;

    return (
        <div className="listing">
            <div className="listing-container">
                <div className="listing-wrapper">
                    <SearchFilter />
                    <div className="listing-cont">
                        {data.map((item) => (
                            <ListingCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="map-container">
                <Map mapItem={data} />
            </div>
        </div>
    );
}

export default ListingPage;