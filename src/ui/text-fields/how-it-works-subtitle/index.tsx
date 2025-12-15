import React from "react";
import * as css from "./index.css"

function HowItWorksSubtitle({children}){

  return (
    <h3 className={css.style}>
        {children}
    </h3>
    
  )
}

export { HowItWorksSubtitle };