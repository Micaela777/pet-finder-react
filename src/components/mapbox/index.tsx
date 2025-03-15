import React from "react";
import MapboxGL from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = MapboxGL({
  accessToken: process.env.MAPBOX_TOKEN,
});

function MapComponent() {
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v11"
      containerStyle={{
        height: "400px",
        width: "100%",
      }} 
      center={[-63.6167, -38.4161]} 
      zoom={[4]} 
    />
  );
}

export { MapComponent };