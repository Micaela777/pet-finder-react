import React from "react";
import { AuthTitle } from "ui/text-fields/auth-title";
import { AuthSubtitle } from "ui/text-fields/auth-subtitle";
import { TextField } from "components/input";
import { ForgotPass } from "ui/text-fields/forgot-pass";
import { SecondaryButton } from "ui/buttons/secondary-button";
import { useSignIn } from "hooks/index";
import { LoadingText } from "ui/text-fields/loading-text";
import { ErrorText } from "ui/text-fields/error-text";
import * as css from "./index.css"

function SignInForm(){

    const { handleLogin, isLoading, loginError } = useSignIn();

    const handleSubmit = (e) => {
      e.preventDefault();
      
      const email = e.target.email.value;
      const password = e.target.password.value;

      handleLogin(email, password);
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <div className={css["title-wrap"]}>
              <AuthTitle>Iniciar Sesión</AuthTitle>
              <AuthSubtitle>Ingresa los siguientes datos para iniciar sesión.</AuthSubtitle>
            </div>
            <div className={css["input-and-text-container"]}>
              <TextField type="text" name="email" placeholder="Email" />
              <TextField type="text" name="password" placeholder="Contraseña" />
              {isLoading && <LoadingText>Iniciando sesión...</LoadingText>}
              {loginError && <ErrorText>{loginError}</ErrorText>}
              <ForgotPass />
            </div>
            <SecondaryButton>Siguiente</SecondaryButton>
        </form>
    )
}

export { SignInForm }