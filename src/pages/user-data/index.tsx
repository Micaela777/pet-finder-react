import React from "react";
import { CustomSubtitle } from "ui/text-fields/custom-subtitle";
import { EditUserDataButton } from "ui/buttons/edit-user-data-button";
import { EditPasswordButton } from "ui/buttons/edit-password-button";
import { UserEmail } from "ui/text-fields/user-email";
import { LogoutButton } from "ui/buttons/logout-button";
import * as css from "./index.css";

function UserData() {

  return (
    <div className={css["user-data-section"]}>
      <CustomSubtitle>Mis datos</CustomSubtitle>
      <div className={css.container}>
        <div className={css["buttons-container"]}>
          <EditUserDataButton>Modificar datos personales</EditUserDataButton>
          <EditPasswordButton>Modificar contraseña</EditPasswordButton>
        </div>
        <div className={css["user-info"]}>
          <UserEmail>mica@apx.school</UserEmail>
          <LogoutButton>CERRAR SESIÓN</LogoutButton>
        </div>
      </div>
    </div>
  );
}

export { UserData };