import React from "react";
import cat from "assets/kitty-img.png";
import * as css from "./index.css"

function KittyCat(){
    return (
         <img className={css.size} src={cat} />
    )
}

export { KittyCat }