import React from "react";
import whiteLogo from "assets/white-logo.png"
import * as css from "./index.css";

function WhiteLogoImg(){
  return (
    <div>
        <img className={css.size} src={whiteLogo} />
    </div>
    
  )
}

export { WhiteLogoImg };