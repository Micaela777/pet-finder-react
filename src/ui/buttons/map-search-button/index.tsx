import React from "react";
import * as css from "./index.css";

function MapSearchButton({children, onClick}){

  return (
    <button type="button" className={css.style} onClick={onClick}>
        {children}
    </button>
    
  )
};

export { MapSearchButton};