import React, { use } from "react";
import { useNavigate } from "react-router-dom";
import orangeBackArrow from "assets/orange-back-arrow.png";
import * as css from "./index.css";

function OrangeBackArrowImg(){

  const navigate = useNavigate()

  function handleClick(e){
    e.preventDefault()

    navigate("/")
  }

  return (
      <img className={css.size} src={orangeBackArrow} onClick={handleClick} />
    
  )
}

export { OrangeBackArrowImg };