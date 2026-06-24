import React from "react";
import * as css from "./index.css"

function MainTitle(){

  return (
    <h1 className={css.style}>¡Encuentra tu <span className={css.underlined}>mascota perdida</span> hoy!</h1>
    
  )
}

export { MainTitle };