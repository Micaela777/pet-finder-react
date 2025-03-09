import React from "react";
import * as css from "./index.css"

function MapSearchButton({children}){

  return (
    <button className={css.style}>
        {children}
    </button>
    
  )
}

export { MapSearchButton};