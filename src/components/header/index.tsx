import React from "react";
import { Logo } from "ui/images/logo";
import { NavbarMobile } from "components/navbar-mobile";
import { NavbarDesktop } from "components/navbar-desktop";
import * as css from "./index.css";


function Header(){
  return (
    <div className={css["header-container"]}>
      <Logo />
      <NavbarMobile />
      <NavbarDesktop />
    </div>
    
  )
}

export { Header };