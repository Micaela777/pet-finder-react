import React from "react";
import * as css from "./index.css"

function EditUserDataButton({children, onClick}){
    return(
        <button className={css.style} onClick={onClick}>
            {children}
        </button>
            
    )
}

export { EditUserDataButton }