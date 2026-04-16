import React from "react";
import * as css from "./index.css"

function EditPasswordButton({children}){
    return(
        <button className={css.style}>
            {children}
        </button>
            
    )
}

export { EditPasswordButton }