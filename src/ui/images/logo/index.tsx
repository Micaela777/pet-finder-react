import React from "react";
import logo from "assets/logo.png";
import * as css from "./index.css";

function Logo(){
    return (
        <img className={css.size} src={logo} />
    )
}

export { Logo }