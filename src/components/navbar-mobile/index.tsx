import React, { useState, useEffect } from "react";
import { OpenNavbarButton } from "ui/buttons/open-navbar-button";
import { CloseNavbarButton } from "ui/buttons/close-navbar-button";
import { UserEmail } from "ui/text-fields/user-email";
import { LogoutButton } from "ui/buttons/logout-button";
import { PointerIcon } from "ui/images/pointer-icon";
import { PetIcon } from "ui/images/pet-icon";
import { DataIcon } from "ui/images/data-icon";
import * as css from "./index.css";

function NavbarMobile(){

  const [isActive, setIsActive] = useState(false);

  function toggleMenu(){
    setIsActive(!isActive);
  }

  return (
    <div>
      {!isActive && (
        <div className={css["open-navbar-button"]}>
          <OpenNavbarButton onClick={toggleMenu} />
        </div>
      )}

      {isActive && (
        <div className={css["close-navbar-button"]}>
          <CloseNavbarButton onClick={toggleMenu} />
        </div>
      )}

      {isActive && <div className={css.overlay} onClick={toggleMenu}></div>}

      <div className={`${css["nav-container"]} ${isActive ? css.active : ""}`}>
        <div className={css["items-container"]}>
          <div className={css.nav}>
            <div className={css.report}>
              <PointerIcon />
              <a className={css["nav-item"]}>Reportar</a>
            </div>
            <div className={css["pets-reported"]}>
              <PetIcon />
              <a className={css["nav-item"]}>Mascotas reportadas</a>
            </div>
            <div className={css.data}>
              <DataIcon />
              <a className={css["nav-item"]}>Mis datos</a>
            </div>
          </div>
        </div>
        <div className={css["user-info"]}>
          <UserEmail>mica@apx.school</UserEmail>
          <LogoutButton>CERRAR SESIÓN</LogoutButton>
        </div>
      </div>
    </div>
  )
}

export { NavbarMobile }
