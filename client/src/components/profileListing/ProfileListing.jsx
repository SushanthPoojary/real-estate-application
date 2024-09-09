import "./profileListing.scss";
import { listData } from "../../lib/dummyData"
import ListingCard from "../listingCard/ListingCard";

function ProfileListing({ posts }) {
    return (
        <div className="profile-listing">
            {
                posts.map(item => (
                    <ListingCard key={item.id} item={item} />
                ))
            }
        </div>
    )
}

export default ProfileListing;