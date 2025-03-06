import React from "react";
import { useNavigate } from "react-router-dom";
import mainPetLogo from "assets/main-home-img.png"
import * as css from "./index.css"

function DesktopHomeImg({ className }: { className?: string }){

    const navigate = useNavigate()

  function handleClick(e){
    e.preventDefault()

    navigate("/")

  }

  return (
    <img className={`${css.size} ${className}`} src={mainPetLogo} onClick={handleClick} />
  )
}

export { DesktopHomeImg };