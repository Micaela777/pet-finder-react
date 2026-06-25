import React from "react";
import MapboxGL from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const mapT = "pk.eyJ1IjoibWljYWVsYTEyMyIsImEiOiJjbXBpdGkyaTQxZTM4MnFwdHNzNTRqdHVlIn0.-l32LrfmsEfM54hQJDC1QA";
const Map = MapboxGL({
  accessToken: mapT,
});

function MapComponent({center, zoom}) {
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v11"
      containerStyle={{
        height: "400px",
        width: "100%",
      }} 
      center={center} 
      zoom={zoom} 
    />
  );
}

export { MapComponent };