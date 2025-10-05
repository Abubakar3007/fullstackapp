import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Map = ({ location }) => {
    const [position, setPosition] = useState(null);

    // 🧠 Function to clean complex business addresses for better results
    const cleanAddress = (addr) => {
        if (!addr) return "";
        return addr
            .replace(/Autocenter|GmbH|DE-|and/gi, "") // remove company names, "DE-", etc.
            .replace(/\s+/g, " ") // normalize spaces
            .trim();
    };

    useEffect(() => {
        if (!location) return;

        const fetchCoordinates = async () => {
            try {
                const query = cleanAddress(location);

                // 1️⃣ Try full address first
                let res = await fetch(
                    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                        query
                    )}`
                );
                let data = await res.json();

                // 2️⃣ If no result, try fallback using only city/postal code
                if (!data || data.length === 0) {
                    const fallbackQuery = query
                        .split(" ")
                        .slice(-3)
                        .join(" "); // take last part (city + postal code)

                    res = await fetch(
                        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                            fallbackQuery + ", Germany"
                        )}`
                    );
                    data = await res.json();
                }

                // 3️⃣ Set position if found
                if (data && data[0]) {
                    const lat = parseFloat(data[0].lat);
                    const lon = parseFloat(data[0].lon);
                    setPosition([lat, lon]);
                } else {
                    console.error("No valid coordinates found even after fallback.");
                }
            } catch (err) {
                console.error("Error fetching location:", err);
            }
        };

        fetchCoordinates();
    }, [location]);

    // 📍 Custom marker icon
    const markerIcon = new L.Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        iconSize: [35, 35],
    });

    return (
        <div style={{ height: "400px", width: "100%" }}>
            {position ? (
                <MapContainer
                    center={position}
                    zoom={13}
                    style={{ height: "100%", width: "100%", borderRadius: "10px" }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position} icon={markerIcon}>
                        <Popup>{location}</Popup>
                    </Marker>
                </MapContainer>
            ) : (
                <p className="text-gray-500">Loading map...</p>
            )}
        </div>
    );
};

export default Map;
