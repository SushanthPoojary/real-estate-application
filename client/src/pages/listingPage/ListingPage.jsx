import "./listingPage.scss";
import { listData } from "../../lib/dummyData";
import SearchFilter from "../../components/searchFilter/SearchFilter";
import ListingCard from "../../components/listingCard/ListingCard";
import Map from "../../components/map/Map";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

function ListingPage() {

    // const data = listData;
    const posts = useLoaderData();
    // console.log(posts);

    return (
        <div className="listing">
            <div className="listing-container">
                <div className="listing-wrapper">
                    <SearchFilter />
                    <div className="listing-cont">
                        <Suspense fallback={<p>Loading Posts...</p>}>
                            <Await
                                resolve={posts.postResponse}
                                errorElement={
                                    <p>Error loading package location!</p>
                                }
                            >
                                {(postResponse) => (
                                    postResponse.data.map((item) => (
                                        <ListingCard key={item.id} item={item} />
                                    ))
                                )}
                            </Await>
                        </Suspense>
                    </div>
                </div>
            </div>
            <div className="map-container">
                <Suspense fallback={<p>Loading map location...</p>}>
                    <Await
                        resolve={posts.postResponse}
                        errorElement={
                            <p>Error loading package location!</p>
                        }
                    >
                        {(postResponse) => (

                            <Map mapItem={postResponse.data} />

                        )}
                    </Await>
                </Suspense>
            </div>
        </div>
    );
}

export default ListingPage;