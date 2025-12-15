import React from "react";
import * as css from "./index.css";

function CloseNavbarButton ({onClick}) {
    return (
        <div className={css.menu} onClick={onClick}>
            <span className={css.bar}></span>
            <span className={css.bar}></span>
        </div>
    )
}

export { CloseNavbarButton }