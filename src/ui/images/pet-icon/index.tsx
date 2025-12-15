import React from "react";
import pet from "assets/pet-icon.png";
import * as css from "./index.css";

function PetIcon() {

    return (
        <img className={css.size} src={pet} />
    )

}

export { PetIcon } 