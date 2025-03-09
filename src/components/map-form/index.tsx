import React from "react";
import { TextField } from "components/input";
import { MapSearchButton } from "ui/buttons/map-search-button";
import { MapFormSubtitle } from "ui/text-fields/map-form-subtitle";
import * as css from "./index.css"

function MapForm(){

    return(
        <form className={css.style}>
            <div id='map' className={css.mapbox}></div>
            <MapFormSubtitle>Buscá un punto de referencia para reportar la mascota. Por ejemplo, la ubicación donde lo viste por última vez.</MapFormSubtitle>
            <TextField type="text" name="location" placeholder="Ubicación" />
            <MapSearchButton>Buscar</MapSearchButton>
        </form>
    )

}

export { MapForm }