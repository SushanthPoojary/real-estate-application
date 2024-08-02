import Slider from "../../components/slider/Slider";
import "./singlePropertyPage.scss";
import { singlePostData, userData } from "../../lib/dummyData";
import Map from "../../components/map/Map";
import { useLoaderData } from "react-router-dom";
import domPurify from "dompurify";

function SingleProperty() {

    const post = useLoaderData();
    // console.log(post);

    return (
        <div className="single-property">
            <div className="property-details">
                <Slider images={post.images} />
                <div className="property-info">
                    <div className="property-top-info">
                        <div className="data">
                            <h2>{post.title}</h2>
                            <div className="address">
                                <img src="/pin.png" alt="" />
                                <span>{post.address}</span>
                            </div>
                            <div className="price">Rs {post.price}</div>
                        </div>
                        <div className="user">
                            <img src={post.user.img} alt="" />
                            <span>{post.user.username}</span>
                        </div>
                    </div>
                    <div className="property-bottom-info" dangerouslySetInnerHTML={{__html: domPurify.sanitize(post.singlePost.desc)}}>
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
                                <span>{post.singlePost.utilities}</span>
                            </div>
                        </div>
                        <div className="general-detail">
                            <img src="/pet.png" alt="" />
                            <div className="utilities">
                                <h3>Pet Policy</h3>
                                <span>{post.singlePost.pet}</span>
                            </div>
                        </div>
                        <div className="general-detail">
                            <img src="/fee.png" alt="" />
                            <div className="utilities">
                                <h3>Income Policy</h3>
                                <span>{post.singlePost.income}</span>
                            </div>
                        </div>
                    </div>
                    <h3 className="title">Room Sizes</h3>
                    <div className="sizes">
                        <div className="sizes-cont">
                            <img src="/size.png" alt="" />
                            <span>{post.singlePost.size}sqm</span>
                        </div>
                        <div className="sizes-cont">
                            <img src="/bed.png" alt="" />
                            <span>{post.singlePost.bed} bed</span>
                        </div>
                        <div className="sizes-cont">
                            <img src="/bath.png" alt="" />
                            <span>{post.singlePost.bathroom} bathroom</span>
                        </div>
                    </div>
                    <h3 className="title">Nearby Places</h3>
                    <div className="places">
                        <div className="general-detail">
                            <img src="/school.png" alt="" />
                            <div className="place">
                                <span>School</span>
                                <span>{post.singlePost.school}m away</span>
                            </div>
                        </div>
                        <div className="general-detail">
                            <img src="/pet.png" alt="" />
                            <div className="place">
                                <span>Bus Stop</span>
                                <span>{post.singlePost.bus}m away</span>
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
                        <Map mapItem={[post]} />
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