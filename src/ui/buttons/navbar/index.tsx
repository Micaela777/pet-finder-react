import React, { useState } from "react";
import * as css from "./index.css"

function Navbar(){

  const [isActive, setIsActive] = useState(false)

  function toggleMenu() {
    setIsActive(!isActive);
  };

  return (
    <div className={`${css.menu} ${isActive ? css.active : ""}`} onClick={toggleMenu}>
      <span className={css.bar}></span>
      <span className={css.bar}></span>
      <span className={css.bar}></span>
    </div>
  )
}


export { Navbar }
