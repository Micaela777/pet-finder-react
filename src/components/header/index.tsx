import React from "react";
import { OrangeLogoImg } from "ui/images/orange-logo-img";
import { Navbar } from "components/navbar";
import * as css from "./index.css"


function Header(){
  return (
    <div className={css["header-container"]}>
      <OrangeLogoImg />
      <Navbar />
    </div>
    
  )
}

export { Header };