import React from "react";
import { TextField } from "components/input";
import { AlreadyHaveAccount } from "ui/text-fields/already-have-account";
import { SecondaryButton } from "ui/buttons/secondary-button";
import * as css from "./index.css"

function SignUpForm(){
    return (
        <form className={css.form}>
            <div className={css["title-wrap"]}>
              <h2 className={css.title}>Registrarse</h2>
              <h4 className={css.subtitle}>Ingresa los siguientes datos para realizar el registro.</h4>
            </div>
            <div className={css["input-and-text-container"]}>
              <TextField type="text" name="email" placeholder="Email" />
              <TextField type="text" name="password" placeholder="Contraseña" />
              <TextField type="text" name="confirm-password" placeholder="Confirmar contraseña" />
              <AlreadyHaveAccount />
            </div>
            <div className={css.button}>
              <SecondaryButton>Siguiente</SecondaryButton>
            </div>
        </form>
    )
}

export { SignUpForm }