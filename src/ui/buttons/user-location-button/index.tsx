import React from "react";
import * as css from "./index.css"

function UserLocationButton({type, onClick, children}){
    return(
        <button type={type} onClick={onClick} className={css.style}>
            {children}
        </button>
            
    )
}

export { UserLocationButton }