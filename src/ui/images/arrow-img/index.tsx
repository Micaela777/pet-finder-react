import React from "react";
import arrow from "assets/arrow.png";
import * as css from "./index.css"

function ArrowImg(){
  return (
    <h1>
        <img className={css.size} src={arrow} />
    </h1>
    
  )
}

export { ArrowImg };