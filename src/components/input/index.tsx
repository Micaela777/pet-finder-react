import React from "react";
import * as css from "./index.css"

function TextField(props){
    return (
        <input {...props} className={css.style} />
    )
}

export { TextField }
