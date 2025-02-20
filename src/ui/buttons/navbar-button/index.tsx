import React, { useState } from "react";
import * as css from "./index.css"


function NavbarButton({onClick}){

  const [isActive, setIsActive] = useState(false)

  function toggleButton() {
    setIsActive(!isActive);

    if (onClick) {
        onClick();
      }
  };

  return (
    <div className={`${css.menu} ${isActive ? css.active : ""}`} onClick={toggleButton}>
      <span className={css.bar}></span>
      <span className={css.bar}></span>
      <span className={css.bar}></span>
    </div>  
  )
}

export { NavbarButton }