import React from "react";
import * as css from "./index.css"

function CustomSubtitle({children}){
    return(
        
        <h2 className={css.style}>{children}</h2>
    )
}

export { CustomSubtitle }