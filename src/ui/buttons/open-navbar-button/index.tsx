import React, { useState } from "react";
import * as css from "./index.css"


function OpenNavbarButton({onClick}){
  return (
    <div className={css.menu} onClick={onClick}>
      <span className={css.bar}></span>
      <span className={css.bar}></span>
      <span className={css.bar}></span>
    </div>  
  )
}

export { OpenNavbarButton }