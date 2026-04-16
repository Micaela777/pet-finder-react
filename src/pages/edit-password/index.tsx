import React from "react";
import { CustomSubtitle } from "ui/text-fields/custom-subtitle";
import { Label } from "components/label";
import { TextField } from "components/input";
import { SecondaryButton } from "ui/buttons/secondary-button";
import * as css from "./index.css";

function EditPassword() {

  return (
    <div className={css["edit-password-section"]}>
        <CustomSubtitle>Contraseña</CustomSubtitle>
        <div className={css.container}>
            <div className={css["fieldsets-container"]}>
                <div className={css["password-fieldset"]}>
                    <Label>CONTRASEÑA</Label>
                    <TextField type="text" name="name" />
                </div>
                <div className={css["confirm-password-fieldset"]}>
                    <Label>CONFIRMAR CONTRASEÑA</Label>
                    <TextField type="text" name="location" />
                </div>
            </div>
            <SecondaryButton>Guardar</SecondaryButton>
        </div>
    </div>
  );
}

export { EditPassword };