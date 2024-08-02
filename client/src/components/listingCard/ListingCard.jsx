import { Link } from "react-router-dom";
import "./listingCard.scss";

function ListingCard({ item }) {
    console.log(item);
    return (
        <div className="listing-card">
            <Link to={`/${item.id}`} className="listing-img-cont">
                <img src={item.images[0]} alt="" />
            </Link>
            <div className="listing-text-cont">
                <h2 className="title">
                    <Link to={`/${item.id}`}>{item.title}</Link>
                </h2>
                <p className="address">
                    <img src="/pin.png" alt="" />
                    <span>{item.address}</span>
                </p>
                <p className="price">
                    Rs {item.price}
                </p>
                <div className="bed-bath">
                    <div className="bed-bath-cont">
                        <div className="bed-bath-wrapper">
                            <img src="/bed.png" alt="" />
                            <span>{item.bedroom} bedroom</span>
                        </div>
                        <div className="bed-bath-wrapper">
                            <img src="/bath.png" alt="" />
                            <span>{item.bathroom} bathroom</span>
                        </div>
                    </div>
                    <div className="save-chat-cont">
                        <div className="save-chat-icon">
                            <img src="/save.png" alt="" />
                        </div>
                        <div className="save-chat-icon">
                            <img src="/chat.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListingCard;