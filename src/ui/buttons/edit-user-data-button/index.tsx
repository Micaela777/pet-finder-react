import React from "react";
import * as css from "./index.css"

function EditUserDataButton({children}){
    return(
        <button className={css.style}>
            {children}
        </button>
            
    )
}

export { EditUserDataButton }