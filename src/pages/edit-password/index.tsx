import React from "react";
import { CustomSubtitle } from "ui/text-fields/custom-subtitle";
import { EditPasswordForm } from "components/edit-password-form";
import * as css from "./index.css";

function EditPassword() {

  return (
    <div className={css.style}>
        <CustomSubtitle>Contraseña</CustomSubtitle>
        <EditPasswordForm />
    </div>
  );
};

export { EditPassword };