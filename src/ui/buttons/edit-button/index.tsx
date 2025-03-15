import React from "react";
import { EditingPencil } from "ui/images/editing-pencil";
import * as css from "./index.css"

function EditButton({children}){
    return(
        <button className={css.style}>
            {children}
            <EditingPencil />
        </button>
            
    )
}

export { EditButton }