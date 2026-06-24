import React from "react";
import { useAtomValue } from "jotai";
import { userDataAtom } from "atoms/user-data-atom";
import { Label } from "components/label";
import { TextField } from "components/input";
import { SecondaryButton } from "ui/buttons/secondary-button";
import { useUpdateUser } from "hooks";
import { LoadingText } from "ui/text-fields/loading-text";
import * as css from "./index.css";

function EditUserDataForm() {

  const userData = useAtomValue(userDataAtom);

  const { handleUpdateUser, isLoading } = useUpdateUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullname = e.target.name.value;
    const location = e.target.location.value;

    handleUpdateUser({fullname, location});
  };

  return (
        <form className={css.container} onSubmit={handleSubmit}>
            <div className={css["fieldsets-container"]}>
                <div className={css["name-fieldset"]}>
                    <Label>NOMBRE</Label>
                    <TextField type="text" name="name" defaultValue={userData.fullname} />
                </div>
                <div className={css["location-fieldset"]}>
                    <Label>LOCALIDAD</Label>
                    <TextField type="text" name="location" defaultValue={userData.location} />
                </div>
            </div>
            {isLoading && <LoadingText>Actualizando datos...</LoadingText>}
            <SecondaryButton>Guardar</SecondaryButton>
        </form>
 );
}

export { EditUserDataForm };