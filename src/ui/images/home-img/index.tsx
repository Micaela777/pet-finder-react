import React from "react";
import petUbicationLogo from "assets/pet-location-img.png"
import * as css from "./index.css"

function HomeImg(){
  return (
    <img className={css.size} src={petUbicationLogo} />
  )
}

export { HomeImg };