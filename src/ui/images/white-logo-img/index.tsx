import React from "react";
import { useNavigate } from "react-router-dom";
import whiteLogo from "assets/white-logo.png";
import * as css from "./index.css";

function WhiteLogoImg(){

    const navigate = useNavigate()

    function handleClick(e){
        e.preventDefault()

        navigate("/")
    }

  return (
    <div>
        <img className={css.size} src={whiteLogo} onClick={handleClick}/>
    </div>
    
  )
}

export { WhiteLogoImg };