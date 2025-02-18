import React from "react";
import * as css from "./index.css"

function HowItWorks({children}){
  return (
    <h1 className={css.style}>
        {children}
    </h1>
    
  )
}

export { HowItWorks };