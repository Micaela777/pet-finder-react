import React from "react";
import { useState } from "react";
import { useAtom } from "jotai";
import { userCoordinates } from "atoms/user-coordinates";
import { UserLocationButton } from "ui/buttons/user-location-button";
import { Check } from "ui/text-fields/check";
import { GenericText } from "ui/text-fields/generic-text";
import * as css from "./index.css";

function UserLocation() {

    const [coordinates, setCoordinates] = useAtom(userCoordinates)
    const [locationConfirmation, setLocationConfirmation] = useState("");

    const handleUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        //console.log(position)
        setLocationConfirmation("✓ ¡Ubicación guardada!");
        setCoordinates({lat, lng})
    }, (error) => {
        setLocationConfirmation("✗ Necesitamos tu ubicación para continuar");
       });
    }; 
  
  return (
    <div className={css.style}>
        <UserLocationButton type="button" onClick={handleUserLocation}>Dar acceso a mi ubicación</UserLocationButton>
        {locationConfirmation && <Check>{locationConfirmation}</Check>}
        <GenericText>IMPORTANTE: Se requiere el acceso a tu ubicación actual para saber si hay mascotas cerca de ti.</GenericText>
    </div>
  );
}

export { UserLocation };