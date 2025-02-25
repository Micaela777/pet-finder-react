import React from "react";
import * as css from "./index.css"

function TextField(props){
    return (
        <input {...props} className={css.lala} />
    )
}

export { TextField }
