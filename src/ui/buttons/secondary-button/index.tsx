import React from "react";
import * as css from "./index.css"
import { useNavigate } from "react-router-dom";

function SecondaryButton({children}){

  return (
    <button className={css.style}>
        {children}
    </button>
    
  )
}

export { SecondaryButton };