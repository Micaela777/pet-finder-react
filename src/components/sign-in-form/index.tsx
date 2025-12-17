import React from "react";
import { AuthTitle } from "ui/text-fields/auth-title";
import { AuthSubtitle } from "ui/text-fields/auth-subtitle";
import { TextField } from "components/input";
import { ForgotPass } from "ui/text-fields/forgot-pass";
import { SecondaryButton } from "ui/buttons/secondary-button";
import * as css from "./index.css"

function SignInForm(){
    return (
        <form className={css.form}>
            <div className={css["title-wrap"]}>
              <AuthTitle>Iniciar Sesión</AuthTitle>
              <AuthSubtitle>Ingresa los siguientes datos para iniciar sesión.</AuthSubtitle>
            </div>
            <div className={css["input-and-text-container"]}>
              <TextField type="text" name="email" placeholder="Email" />
              <TextField type="text" name="password" placeholder="Contraseña" />
              <ForgotPass />
            </div>
            <SecondaryButton>Siguiente</SecondaryButton>
        </form>
    )
}

export { SignInForm }