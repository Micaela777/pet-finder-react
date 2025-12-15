import React, { useState } from "react";
import * as css from "./index.css"

function NavbarDesktop(){

  return (
    <div className={css["nav-container"]}>
      <ul className={css.nav}>
        <a className={css["nav-item"]}>MIS DATOS</a>
        <a className={css["nav-item"]}>MASCOTAS REPORTADAS</a>
        <a className={css["nav-item"]}>REPORTAR</a>
      </ul>
    </div>
  )
}

export { NavbarDesktop }
