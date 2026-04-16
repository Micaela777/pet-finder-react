import React from "react";
import { useSignUp } from "hooks/useSignUp";
import { AuthTitle } from "ui/text-fields/auth-title";
import { AuthSubtitle } from "ui/text-fields/auth-subtitle";
import { TextField } from "components/input";
import { AlreadyHaveAccount } from "ui/text-fields/already-have-account";
import { SecondaryButton } from "ui/buttons/secondary-button";
import { ErrorText } from "ui/text-fields/error-text";
import * as css from "./index.css";

function SignUpForm(){

  const {getUserData, passwordError} = useSignUp();


  const handleSubmit = (e) => {
    e.preventDefault();

    const newUserName = e.target.fullname.value;
    const newUserEmail = e.target.email.value;
    const newUserLocation = e.target.location.value;
    const newUserPassword = e.target.password.value;
    const confirmPassword = e.target["confirm-password"].value;

    getUserData({newUserName, newUserEmail, newUserLocation, newUserPassword, confirmPassword});
  }; 
  
    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <div className={css["title-wrap"]}>
              <AuthTitle>Registrarse</AuthTitle>
              <AuthSubtitle>Ingresa los siguientes datos para realizar el registro.</AuthSubtitle>
            </div>
            <div className={css["inputs-container"]}>
              <TextField type="text" name="fullname" placeholder="Nombre" required/>
              <TextField type="text" name="email" placeholder="Email" required/>
              <TextField type="text" name="location" placeholder="Localidad" required/>
              <TextField type="text" name="password" placeholder="Contraseña" required/>
              <div className={css["password-container"]}>
                <TextField type="text" name="confirm-password" placeholder="Confirmar contraseña" required/>
                {passwordError && <ErrorText>{passwordError}</ErrorText>}
              </div>
              <AlreadyHaveAccount />
            </div>
            <SecondaryButton>Siguiente</SecondaryButton>
        </form>
    )
}

export { SignUpForm }