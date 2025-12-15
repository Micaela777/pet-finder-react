import React from "react";
import pointer from "assets/pointer-icon.png";
import * as css from "./index.css";

function PointerIcon() {

    return (
        <img className={css.size} src={pointer} />
    )

}

export { PointerIcon } 