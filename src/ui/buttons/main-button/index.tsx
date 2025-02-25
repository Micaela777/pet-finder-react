import React from "react";
import * as css from "./index.css"
import { useNavigate } from "react-router-dom";

function MainButton({children}){


  const navigate = useNavigate()
  function lala(e){
    e.preventDefault()

    if(children === "Registrarse"){
      navigate("/sign-up")
    } else if (children === "Iniciar Sesión"){
      navigate("/sign-in")
    }
  }

  return (
    <button className={css.style} onClick={lala}>
        {children}
    </button>
    
  )
}

export { MainButton };