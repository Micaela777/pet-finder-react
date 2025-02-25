import React from "react";
import petUbicationLogo from "assets/pet-location-img.png"
import * as css from "./index.css"

function MobileHomeImg({className}){
  return (
    <img className={`${css.style} ${className}`} src={petUbicationLogo} />
  )
}

export { MobileHomeImg };