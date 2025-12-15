import React from "react";
import homeImg from "assets/home-img.png";
import * as css from "./index.css";

function HomeImg(){
    return (
        <img className={css.size} src={homeImg} />
    )
}

export { HomeImg }