import Slider from "../../components/slider/Slider";
import "./singlePropertyPage.scss";
import { singlePostData, userData } from "../../lib/dummyData";

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

            </div>
        </div>
    );
}

export default SingleProperty;