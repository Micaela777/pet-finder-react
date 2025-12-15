import React from "react";
import { useNavigate } from "react-router-dom";
import * as css from "./index.css"


function SignUpButton({children}){

  const navigate = useNavigate()

  function handleClick(e){
    e.preventDefault()

    navigate("/sign-up")
    
  }

  return (
    <button className={css.style} onClick={handleClick}>
        <p className={css.text}>{children}</p>
    </button>
    
  )
}

export { SignUpButton };