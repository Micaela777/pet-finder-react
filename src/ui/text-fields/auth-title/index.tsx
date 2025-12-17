import React from "react";
import * as css from "./index.css";

function AuthTitle({children}){
  return (
    <h1 className={css.style}>
        {children}
    </h1>
    
  )
}

export { AuthTitle };