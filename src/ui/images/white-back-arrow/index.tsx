import React, { use } from "react";
import { useNavigate } from "react-router-dom";
import whiteBackArrow from "assets/white-back-arrow.png";
import * as css from "./index.css";

function WhiteBackArrowImg(){

  const navigate = useNavigate()

  function handleClick(e){
    e.preventDefault()

    navigate("/")
  }

  return (
      <img className={css.size} src={whiteBackArrow} onClick={handleClick} />
    
  )
}

export { WhiteBackArrowImg };