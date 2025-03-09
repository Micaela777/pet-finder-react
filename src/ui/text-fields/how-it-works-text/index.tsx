import React from "react";
import { useNavigate } from "react-router-dom";
import * as css from "./index.css"

function HowItWorksText(){

  const navigate = useNavigate()

  function handleClick(e){
      e.preventDefault()

      navigate("/how-it-works")
  }

  return (
    <h1 className={css.style} onClick={handleClick}>
        ¿Cómo funciona<span className={css["edited-text"]}> Pet Finder App</span>?
    </h1>
    
  )
}

export { HowItWorksText };