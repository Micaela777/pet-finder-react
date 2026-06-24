import React from "react";
import * as css from "./index.css"

function EditPasswordButton({children, onClick}){
    return(
        <button className={css.style} onClick={onClick}>
            {children}
        </button>
            
    )
}

export { EditPasswordButton }