import { MapContainer, TileLayer } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import MapPin from "../mapPin/MapPin";

function Map({ mapItem }) {

    console.log(mapItem);

    const position = [19.076090, 72.877426];

    return (
        <MapContainer center={mapItem.length === 1 ? [mapItem[0].latitude, mapItem[0].longitude] : position} zoom={11} scrollWheelZoom={false} className="map">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {mapItem.map((item) => (
                <MapPin key={item.id} pinItem={item} />
            ))}
        </MapContainer>
    );
}

export default Map;