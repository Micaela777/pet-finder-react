import React from "react";
import * as css from "./index.css"

function ErrorText({children}){
  return (
    <h1 className={css.style}>
        {children}
    </h1>
    
  )
}

export { ErrorText };