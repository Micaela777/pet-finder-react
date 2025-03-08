import React from "react";
import mainPetLogo from "assets/main-home-img.png"
import * as css from "./index.css"

function DesktopHomeImg({ className }: { className?: string }){

  return (
    <img className={`${css.size} ${className}`} src={mainPetLogo}/>
  )
}

export { DesktopHomeImg };