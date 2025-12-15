import React from "react";
import { useNavigate } from "react-router-dom";
import * as css from "./index.css"


function SignInButton({children}){

  const navigate = useNavigate()

  function handleClick(e){
    e.preventDefault()

    navigate("/sign-in")
    
  }

  return (
    <h2 className={css.style} onClick={handleClick}>
        {children}
    </h2>
    
  )
}

export { SignInButton };