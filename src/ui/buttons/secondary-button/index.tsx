import React from "react";
import * as css from "./index.css"

function SecondaryButton({children}){

  return (
    <button className={css.style}>
      <p className={css.text}>{children}</p>
    </button>
    
  )
}

export { SecondaryButton };