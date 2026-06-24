import React from "react";
import { CustomSubtitle } from "ui/text-fields/custom-subtitle";
import { EditUserDataForm } from "components/edit-user-data-form";
import * as css from "./index.css";

function EditUserData() {

  return (
    <div className={css.style}>
        <CustomSubtitle>Datos personales</CustomSubtitle>
        <EditUserDataForm />
    </div>
  );
}

export { EditUserData };