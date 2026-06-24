import React from "react";
import { Label } from "components/label";
import { TextField } from "components/input";
import { SecondaryButton } from "ui/buttons/secondary-button";
import { ErrorText } from "ui/text-fields/error-text";
import { LoadingText } from "ui/text-fields/loading-text";
import { useUpdatePassword } from "hooks";
import * as css from "./index.css";

function EditPasswordForm() {

  const { handleUpdatePassword, isLoading, passwordError } = useUpdatePassword();

  const handleSubmit = (e) => {
    e.preventDefault();

    const password = e.target.password.value;
    const confirmPassword = e.target["confirm-password"].value;

    handleUpdatePassword({password, confirmPassword})
  }

  return (
        <form className={css.container} onSubmit={handleSubmit}>
            <div className={css["fieldsets-container"]}>
                <div className={css["password-fieldset"]}>
                    <TextField type="text" name="password" placeholder="Nueva contraseña"/>
                </div>
                <div className={css["confirm-password-fieldset"]}>
                    <TextField type="text" name="confirm-password" placeholder="Confirmar nueva contraseña"/>
                    {passwordError && <ErrorText>{passwordError}</ErrorText>}
                </div>
            </div>
            {isLoading && <LoadingText>{isLoading}</LoadingText>}
            <SecondaryButton>Guardar</SecondaryButton>
        </form>
  );
}

export { EditPasswordForm };