import React from "react";
import { useNavigate } from "react-router-dom";
import { useAtomValue } from "jotai";
import { userDataAtom } from "atoms/user-data-atom";
import { CustomSubtitle } from "ui/text-fields/custom-subtitle";
import { EditUserDataButton } from "ui/buttons/edit-user-data-button";
import { EditPasswordButton } from "ui/buttons/edit-password-button";
import { UserEmail } from "ui/text-fields/user-email";
import { LoadingText } from "ui/text-fields/loading-text";
import { useLogut } from "hooks";
import { LogoutButton } from "ui/buttons/logout-button";
import * as css from "./index.css";

function UserData() {

  const navigate = useNavigate();
  const userData = useAtomValue(userDataAtom);

  const { handleLogout, isLoading } = useLogut();

  function handleEditUserData(){
    navigate("/edit-user-data");
  };

  function handleEditPassword(){
    navigate("/edit-password");
  };

  return (
    <div className={css["user-data-section"]}>
      <CustomSubtitle>Mis datos</CustomSubtitle>
      <div className={css.container}>
        <div className={css["buttons-container"]}>
          <EditUserDataButton onClick={handleEditUserData}>Modificar datos personales</EditUserDataButton>
          <EditPasswordButton onClick={handleEditPassword}>Modificar contraseña</EditPasswordButton>
        </div>
        <div className={css["user-info"]}>
          <UserEmail>{userData.email}</UserEmail>
          <LogoutButton onClick={handleLogout}>CERRAR SESIÓN</LogoutButton>
          {isLoading && <LoadingText>Cerrando sesión...</LoadingText>}
        </div>
      </div>
    </div>
  );
}

export { UserData };