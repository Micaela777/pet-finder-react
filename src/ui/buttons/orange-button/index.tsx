import React from "react";
import * as css from "./index.css"

function OrangeButton({children}){
  return (
    <button className={css.style}>
        {children}
    </button>
    
  )
}

export { OrangeButton };