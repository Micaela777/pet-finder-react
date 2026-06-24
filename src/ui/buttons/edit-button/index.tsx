import React from "react";
import { EditingPencil } from "ui/images/editing-pencil";
import * as css from "./index.css"

function EditButton({children, onClick}){
    return(
        <button type="button" className={css.style} onClick={onClick}>
            {children}
            <EditingPencil />
        </button>    
    );
};

export { EditButton };