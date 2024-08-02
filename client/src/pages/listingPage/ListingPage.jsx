import "./listingPage.scss";
import { listData } from "../../lib/dummyData";
import SearchFilter from "../../components/searchFilter/SearchFilter";
import ListingCard from "../../components/listingCard/ListingCard";
import Map from "../../components/map/Map";
import { useLoaderData } from "react-router-dom";

function ListingPage() {

    const data = listData;
    const posts = useLoaderData();
    console.log(posts);

    return (
        <div className="listing">
            <div className="listing-container">
                <div className="listing-wrapper">
                    <SearchFilter />
                    <div className="listing-cont">
                        {posts.map((item) => (
                            <ListingCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="map-container">
                <Map mapItem={posts} />
            </div>
        </div>
    );
}

export default ListingPage;