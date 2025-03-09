import React, { use } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "assets/white-back-arrow.png";
import * as css from "./index.css";

function HowItWorksArrowImg(){

  const navigate = useNavigate()

  function handleClick(e){
    e.preventDefault()

    navigate("/")
  }

  return (
      <img className={css.size} src={arrow} onClick={handleClick} />
    
  )
}

export { HowItWorksArrowImg };