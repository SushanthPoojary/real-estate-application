import Slider from "../../components/slider/Slider";
import "./singlePropertyPage.scss";
import { singlePostData, userData } from "../../lib/dummyData";
import Map from "../../components/map/Map";

function SingleProperty() {
    return (
        <div className="single-property">
            <div className="property-details">
                <Slider images={singlePostData.images} />
                <div className="property-info">
                    <div className="property-top-info">
                        <div className="data">
                            <h2>{singlePostData.title}</h2>
                            <div className="address">
                                <img src="/pin.png" alt="" />
                                <span>{singlePostData.address}</span>
                            </div>
                            <div className="price">Rs {singlePostData.price}</div>
                        </div>
                        <div className="user">
                            <img src={userData.img} alt="" />
                            <span>{userData.name}</span>
                        </div>
                    </div>
                    <div className="property-bottom-info">
                        {singlePostData.description}
                    </div>
                </div>
            </div>
            <div className="property-features">
                <div className="wrapper">
                    <h3 className="title">General</h3>
                    <div className="general-details">
                        <div className="general-detail">
                            <img src="/utility.png" alt="" />
                            <div className="utilities">
                                <h3>Utilities</h3>
                                <span>Renter is responsible</span>
                            </div>
                        </div>
                        <div className="general-detail">
                            <img src="/pet.png" alt="" />
                            <div className="utilities">
                                <h3>Pet Policy</h3>
                                <span>Pets Allowed</span>
                            </div>
                        </div>
                        <div className="general-detail">
                            <img src="/fee.png" alt="" />
                            <div className="utilities">
                                <h3>Property Fees</h3>
                                <span>Must have 3x the rent in total household income</span>
                            </div>
                        </div>
                    </div>
                    <h3 className="title">Room Sizes</h3>
                    <div className="sizes">
                        <div className="sizes-cont">
                            <img src="/size.png" alt="" />
                            <span>80sqm</span>
                        </div>
                        <div className="sizes-cont">
                            <img src="/bed.png" alt="" />
                            <span>2 bed</span>
                        </div>
                        <div className="sizes-cont">
                            <img src="/bath.png" alt="" />
                            <span>1 bathroom</span>
                        </div>
                    </div>
                    <h3 className="title">Nearby Places</h3>
                    <div className="places">
                        <div className="general-detail">
                            <img src="/school.png" alt="" />
                            <div className="place">
                                <span>School</span>
                                <span>250m away</span>
                            </div>
                        </div>
                        <div className="general-detail">
                            <img src="/pet.png" alt="" />
                            <div className="place">
                                <span>Bus Stop</span>
                                <span>100m away</span>
                            </div>
                        </div>
                        <div className="general-detail">
                            <img src="/fee.png" alt="" />
                            <div className="place">
                                <span>Restaurant</span>
                                <span>200m away</span>
                            </div>
                        </div>
                    </div>
                    <h3 className="title">Location</h3>
                    <div className="map-container">
                        <Map mapItem={[singlePostData]} />
                    </div>
                    <div className="buttons">
                        <button>
                            <img src="/chat.png" alt="" />
                            Send a Message
                        </button>
                        <button>
                            <img src="/save.png" alt="" />
                            Save the Place
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProperty;