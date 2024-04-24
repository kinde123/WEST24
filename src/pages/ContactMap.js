import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const containerStyle = {
    width: "100%",
    height: "500px"
};

const center = {
    lat: 40.712776,
    lng: -74.005974
};

const ContactMap = () => {
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (map) {
            const bounds = new map.maps.LatLngBounds();
            bounds.extend(center);
            map.fitBounds(bounds);
        }
    }, [map]);

    return (
        <LoadScript
            googleMapsApiKey="YOUR_API_KEY"
            libraries={["places"]}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                onLoad={map => setMap(map)}
            >
                <Marker position={center} icon={<Icon icon={locationIcon} />} />
            </GoogleMap>
        </LoadScript>
    );
};

export default ContactMap;