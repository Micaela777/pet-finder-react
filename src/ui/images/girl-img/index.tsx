import React from "react";
import girl from "assets/girl.png"
import * as css from "./index.css";

function GirlImg(){
    return (
        <img className={css.size} src={girl} />
    )
}

export { GirlImg }