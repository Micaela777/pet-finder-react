import React from "react";
import * as css from "./index.css"

function CancelButton({children}){

  return (
    <button className={css.style}>
        {children}
    </button>
    
  )
}

export { CancelButton };