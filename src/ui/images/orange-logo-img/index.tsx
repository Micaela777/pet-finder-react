import React from "react";
import { useNavigate } from "react-router-dom";
import orangeLogo from "assets/orange-logo.png"
import * as css from "./index.css";

function OrangeLogoImg(){

  const navigate = useNavigate()

  function handleClick(e){
    e.preventDefault()

    navigate("/")
  }

  return (
    <div className={css["img-container"]}>
        <img className={css.size} src={orangeLogo} onClick={handleClick} />
    </div>
    
  )
}

export { OrangeLogoImg };