import React, { useState } from "react";
import * as css from "./index.css"

function NavbarDesktop(){

  return (
    <div className={css["nav-container"]}>
      <ul className={css.nav}>
        <a className={css["nav-item"]}>Reportar</a>
        <a className={css["nav-item"]}>Mascotas reportadas</a>
        <a className={css["nav-item"]}>Mis datos</a>
      </ul>
    </div>
  )
}

export { NavbarDesktop }
