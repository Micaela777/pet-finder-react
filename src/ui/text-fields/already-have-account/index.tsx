import React from "react";
import * as css from "./index.css"

function AlreadyHaveAccount(){
    return (
        <h4 className={css.style}>¿Ya tienes cuenta? <span className={css["span-text"]}>Iniciar Sesión</span></h4>
    )
}

export { AlreadyHaveAccount }