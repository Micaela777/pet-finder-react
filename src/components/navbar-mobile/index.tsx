import React, { useState } from "react";
import { NavbarButton } from "ui/buttons/navbar-button";
import { UserEmail } from "ui/text-fields/user-email";
import { LogoutButton } from "ui/buttons/logout-button";
import * as css from "./index.css"

function NavbarMobile(){

  const [isActive, setIsActive] = useState(false);

  function toggleMenu(){
    setIsActive(!isActive);
  }

  return (
    <div>
      <NavbarButton  onClick={toggleMenu} />
      <div className={`${css["nav-container"]} ${isActive ? css.active : ""}`}>
        <ul className={css.nav}>
          <a className={css["nav-item"]}>Reportar</a>
          <a className={css["nav-item"]}>Mascotas reportadas</a>
          <a className={css["nav-item"]}>Mis datos</a>
        </ul>
        <div className={css["user-info"]}>
          <UserEmail>mica@apx.school</UserEmail>
          <LogoutButton>CERRAR SESIÓN</LogoutButton>
        </div>
      </div>
    </div>
  )
}

export { NavbarMobile }
