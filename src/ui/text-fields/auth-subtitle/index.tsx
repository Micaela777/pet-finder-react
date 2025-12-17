import React from "react";
import * as css from "./index.css";

function AuthSubtitle({children}){
  return (
    <h1 className={css.style}>
        {children}
    </h1>
    
  )
}

export { AuthSubtitle };