import "./profileListing.scss";
import { listData } from "../../lib/dummyData"
import ListingCard from "../listingCard/ListingCard";

function ProfileListing() {
    return (
        <div className="profile-listing">
            {
                listData.map(item => (
                    <ListingCard key={item.id} item={item} />
                ))
            }
        </div>
    )
}

export default ProfileListing;