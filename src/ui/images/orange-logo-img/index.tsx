import React from "react";
import orangeLogo from "assets/orange-logo.png"
import * as css from "./index.css";

function OrangeLogoImg(){
  return (
    <div className={css["img-container"]}>
        <img className={css.size} src={orangeLogo} />
    </div>
    
  )
}

export { OrangeLogoImg };