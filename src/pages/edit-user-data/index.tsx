import React from "react";
import { CustomSubtitle } from "ui/text-fields/custom-subtitle";
import { Label } from "components/label";
import { TextField } from "components/input";
import { SecondaryButton } from "ui/buttons/secondary-button";
import * as css from "./index.css";

function EditUserData() {

  return (
    <div className={css["edit-user-data-section"]}>
        <CustomSubtitle>Datos personales</CustomSubtitle>
        <div className={css.container}>
            <div className={css["fieldsets-container"]}>
                <div className={css["name-fieldset"]}>
                    <Label>NOMBRE</Label>
                    <TextField type="text" name="name" />
                </div>
                <div className={css["location-fieldset"]}>
                    <Label>LOCALIDAD</Label>
                    <TextField type="text" name="location" />
                </div>
            </div>
            <SecondaryButton>Guardar</SecondaryButton>
        </div>
    </div>
  );
}

export { EditUserData };