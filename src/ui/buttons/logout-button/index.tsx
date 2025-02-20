import React from "react";
import * as css from "./index.css"

function LogoutButton({children}){
  return (
    <button className={css.style}>
        {children}
    </button>
    
  )
}

export { LogoutButton };