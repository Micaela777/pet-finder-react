import React from "react";
import * as css from "./index.css"

function FoundPetButton({children, onClick}){

  return (
    <button type="button" className={css.style} onClick={onClick}>
        {children}
    </button>
    
  )
}

export { FoundPetButton };