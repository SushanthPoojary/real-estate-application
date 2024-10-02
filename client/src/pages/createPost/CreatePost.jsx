import { useState } from "react";
import "./createPost.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../../lib/apiRequest";
import UploadImageWidget from "../../components/uploadImageWidget/UploadImageWidget";
import { useNavigate } from "react-router-dom";

function CreatePost() {

    const [descText, setDescText] = useState("");
    const [error, setError] = useState("");
    const [images, setImages] = useState([]);

    const navigate = useNavigate();

    // console.log(descText);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        // console.log(descText);

        // console.log(data);

        try {
            const res = await apiRequest.post("/posts", {
                postData: {
                    "title": data.title,
                    "price": parseInt(data.price),
                    "images": images,
                    "address": data.address,
                    "city": data.city,
                    "bedroom": parseInt(data.bedroom),
                    "bathroom": parseInt(data.bathroom),
                    "type": data.type,
                    "property": data.property,
                    "latitude": parseFloat(data.latitude),
                    "longitude": parseFloat(data.longitude)
                },
                singlePost: {
                    "desc": descText,
                    "utilities": data.utilities,
                    "pet": data.pet,
                    "income": data.income,
                    "size": parseInt(data.size),
                    "school": parseInt(data.school),
                    "bus": parseInt(data.bus),
                    "restaurant": parseInt(data.restaurant)
                }
            });

            // console.log(res);
            navigate("/profile");
        } catch (err) {
            console.log(err);
            setError(err);
        }
    }

    return (
        <div className="create-post">
            <div className="form-cont">
                <h1>Add New Post</h1>
                <div className="wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="item">
                            <label htmlFor="title">Title</label>
                            <input id="title" name="title" type="text" />
                        </div>
                        <div className="item">
                            <label htmlFor="price">Price</label>
                            <input min={1} id="price" name="price" type="number" />
                        </div>
                        <div className="item">
                            <label htmlFor="address">Address</label>
                            <input id="address" name="address" type="text" />
                        </div>
                        <div className="item description">
                            <label htmlFor="desc">Description</label>
                            <ReactQuill theme="snow" onChange={setDescText} value={descText} />
                        </div>
                        <div className="item">
                            <label htmlFor="city">City</label>
                            <input id="city" name="city" type="text" />
                        </div>
                        <div className="item">
                            <label htmlFor="bedroom">Bedroom Number</label>
                            <input min={1} id="bedroom" name="bedroom" type="number" />
                        </div>
                        <div className="item">
                            <label htmlFor="bathroom">Bathroom Number</label>
                            <input min={1} id="bathroom" name="bathroom" type="number" />
                        </div>
                        <div className="item">
                            <label htmlFor="latitude">Latitude</label>
                            <input id="latitude" name="latitude" type="text" />
                        </div>
                        <div className="item">
                            <label htmlFor="longitude">Longitude</label>
                            <input id="longitude" name="longitude" type="text" />
                        </div>
                        <div className="item">
                            <label htmlFor="type">Type</label>
                            <select name="type">
                                <option value="rent" defaultChecked>
                                    Rent
                                </option>
                                <option value="buy">Buy</option>
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="type">Property</label>
                            <select name="property">
                                <option value="apartment">Apartment</option>
                                <option value="house">House</option>
                                <option value="condo">Condo</option>
                                <option value="land">Land</option>
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="utilities">Utilities Policy</label>
                            <select name="utilities">
                                <option value="owner">Owner is responsible</option>
                                <option value="tenant">Tenant is responsible</option>
                                <option value="shared">Shared</option>
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="pet">Pet Policy</label>
                            <select name="pet">
                                <option value="allowed">Allowed</option>
                                <option value="not-allowed">Not Allowed</option>
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="income">Income Policy</label>
                            <input
                                id="income"
                                name="income"
                                type="text"
                                placeholder="Income Policy"
                            />
                        </div>
                        <div className="item">
                            <label htmlFor="size">Total Size (sqft)</label>
                            <input min={0} id="size" name="size" type="number" />
                        </div>
                        <div className="item">
                            <label htmlFor="school">School</label>
                            <input min={0} id="school" name="school" type="number" />
                        </div>
                        <div className="item">
                            <label htmlFor="bus">bus</label>
                            <input min={0} id="bus" name="bus" type="number" />
                        </div>
                        <div className="item">
                            <label htmlFor="restaurant">Restaurant</label>
                            <input min={0} id="restaurant" name="restaurant" type="number" />
                        </div>
                        <button className="sendButton">Add</button>
                        {error && <span>{error}</span>}
                    </form>
                </div>
            </div>
            <div className="sideContainer">
                <div className="wrapper">
                    {images.map((image, index) => (
                        <img src={image} alt="" />
                    ))}
                </div>
                <UploadImageWidget uwConfig={{
                    cloudName: "sushanthsp",
                    uploadPreset: "estate",
                    multiple: true,
                    folder: "posts"
                }}
                    setState={setImages}
                />
            </div>
        </div>
    );
}

export default CreatePost;