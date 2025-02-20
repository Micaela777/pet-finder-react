import React from "react";
import petUbicationLogo from "assets/pet-location-img.png"
import * as css from "./index.css"

function MobileHomeImg(){
  return (
    <img className={css.size} src={petUbicationLogo} />
  )
}

export { MobileHomeImg };