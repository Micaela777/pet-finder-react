import React, { useState } from "react";
import { useAtom } from "jotai";
import { petReportErrorsAtom } from "atoms/pet-report-errors-atom";
import { MapComponent } from "components/mapbox";
import { MapFormSubtitle } from "ui/text-fields/map-form-subtitle";
import { TextField } from "components/input";
import { MapSearchButton } from "ui/buttons/map-search-button";
import { ErrorText } from "ui/text-fields/error-text";
import { useMapSearch } from "hooks";

import * as css from "./index.css"

function MapForm(){

    const { handleMapSearch, pet } = useMapSearch();
    const [location, setLocation] = useState("");
    const [error, setError] = useAtom(petReportErrorsAtom);

    return(
        <div className={css.style}>
            <div id='map' className={css.mapbox}>
                <MapComponent 
                center={pet.lng !== 0 ? [pet.lng, pet.lat] : [-63.6167, -38.4161]} 
                zoom={pet.lng !== 0 ? [15] : [4]} />
            </div>
            <MapFormSubtitle>Buscá un punto de referencia para reportar la mascota. Por ejemplo, la ubicación donde lo viste por última vez.</MapFormSubtitle>
            <TextField id="report-pet-location" type="text" name="location" placeholder="Ubicación" onChange={(e) => setLocation(e.target.value)} />
            {error.locationError && <ErrorText>{error.locationError}</ErrorText>}    
            <MapSearchButton onClick={() => handleMapSearch(location)}>Buscar</MapSearchButton>
        </div>
    );
};

export { MapForm };