import React from "react";
import { TextField } from "components/input";
import { ForgotPass } from "ui/text-fields/forgot-pass";
import { SecondaryButton } from "ui/buttons/secondary-button";
import * as css from "./index.css"

function SignInForm(){
    return (
        <form className={css.form}>
            <div className={css["title-wrap"]}>
              <h2 className={css.title}>Iniciar Sesión</h2>
              <h4 className={css.subtitle}>Ingresa los siguientes datos para iniciar sesión.</h4>
            </div>
            <div className={css["input-and-text-container"]}>
              <TextField type="text" name="email" placeholder="Email" />
              <TextField type="text" name="password" placeholder="Contraseña" />
              <ForgotPass />
            </div>
            <div className={css.button}>
              <SecondaryButton>Siguiente</SecondaryButton>
            </div>
        </form>
    )
}

export { SignInForm }