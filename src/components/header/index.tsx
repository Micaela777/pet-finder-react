import React from "react";
import { WhiteLogoImg } from "ui/images/white-logo-img";
import { NavbarMobile } from "components/navbar-mobile";
import { NavbarDesktop } from "components/navbar-desktop";
import * as css from "./index.css";


function Header(){
  return (
    <div className={css["header-container"]}>
      <WhiteLogoImg />
      <NavbarMobile />
      <NavbarDesktop />
    </div>
    
  )
}

export { Header };