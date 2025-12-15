import React from "react";
import data from "assets/data-icon.png";
import * as css from "./index.css";

function DataIcon() {

    return (
        <img className={css.size} src={data} />
    )

}

export { DataIcon } 