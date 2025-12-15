import React from "react";
import * as css from "./index.css";

function Copyright({children}){
    return(
        
        <h2 className={css.style}>{children}</h2>
    )
}

export { Copyright }