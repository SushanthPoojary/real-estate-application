import { Marker, Popup } from "react-leaflet";
import "./mapPin.scss";
import { Link } from "react-router-dom";

function MapPin( {pinItem} ) {
    return (
        <Marker position={[pinItem.latitude, pinItem.longitude]}>
            <Popup>
                <div className="popup-container">
                    <img src={pinItem.img} alt="" />
                    <div className="text-container">
                        <Link to={`/${pinItem.id}`}>{pinItem.title}</Link>
                        <span>{pinItem.bedroom} bedroom</span>
                        <strong>{pinItem.price}</strong>
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}

export default MapPin;