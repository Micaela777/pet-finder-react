import React from "react";
import { AuthTitle } from "ui/text-fields/auth-title";
import { AuthSubtitle } from "ui/text-fields/auth-subtitle";
import { TextField } from "components/input";
import { AlreadyHaveAccount } from "ui/text-fields/already-have-account";
import { SecondaryButton } from "ui/buttons/secondary-button";
import * as css from "./index.css";

function SignUpForm(){
    return (
        <form className={css.form}>
            <div className={css["title-wrap"]}>
              <AuthTitle>Registrarse</AuthTitle>
              <AuthSubtitle>Ingresa los siguientes datos para realizar el registro.</AuthSubtitle>
            </div>
            <div className={css["input-and-text-container"]}>
              <TextField type="text" name="email" placeholder="Email" />
              <TextField type="text" name="password" placeholder="Contraseña" />
              <TextField type="text" name="confirm-password" placeholder="Confirmar contraseña" />
              <AlreadyHaveAccount />
            </div>
            <SecondaryButton>Siguiente</SecondaryButton>
        </form>
    )
}

export { SignUpForm }