import React from "react";
import { useState } from "react";
import { useAtomValue } from "jotai";
import { selectedPetAtom } from "atoms/selected-pet-atom";
import { MapComponent } from "components/mapbox";
import { MapFormSubtitle } from "ui/text-fields/map-form-subtitle";
import { TextField } from "components/input";
import { MapSearchButton } from "ui/buttons/map-search-button";
import { useMapSearch } from "hooks";

import * as css from "./index.css"

function EditPetLocationForm(){

    const selectedPet = useAtomValue(selectedPetAtom);
    const [location, setLocation] = useState("");

    const { handleMapSearch, pet } = useMapSearch();

    return(
        <div className={css.style}>
            <div id='map' className={css.mapbox}>
                <MapComponent center={pet.lng !== 0 ? [pet.lng, pet.lat] : [selectedPet.lng, selectedPet.lat]} 
                zoom={pet.lng !== 0 ? [15] : [selectedPet.lng !== 0 ? 15 : 4]} />
            </div>
            <MapFormSubtitle>Buscá un punto de referencia para reportar la mascota. Por ejemplo, la ubicación donde lo viste por última vez.</MapFormSubtitle>
            <TextField type="text" name="location" placeholder="Ubicación" defaultValue={selectedPet.location} onChange={(e) => setLocation(e.target.value)} />
            <MapSearchButton onClick={() => handleMapSearch(location)} >Buscar</MapSearchButton>
        </div>
    );
};

export { EditPetLocationForm }