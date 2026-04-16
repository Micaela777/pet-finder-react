import React from "react";
import * as css from "./index.css";

function Label ({children}){
    return (
        <label className={css.style}>{children}</label>
    )
}

export { Label }