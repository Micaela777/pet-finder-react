import React from "react";
import arrow from "assets/arrow.png";
import * as css from "./index.css"

function ArrowImg(){
  return (
      <img className={css.size} src={arrow} />
    
  )
}

export { ArrowImg };