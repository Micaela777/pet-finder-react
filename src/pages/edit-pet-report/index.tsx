import React from "react";
import { CustomSubtitle } from "ui/text-fields/custom-subtitle";
import { EditPetInfoForm } from "components/edit-pet-info-form";
import { EditPetLocationForm } from "components/edit-pet-location-form";
import { SecondaryButton } from "ui/buttons/secondary-button";
import { CancelButton } from "ui/buttons/cancel-button";
import * as css from "./index.css";

function EditPetReport(){

    return(
        <div className={css.style}>
            <div className={css["text-container"]}>
                <CustomSubtitle>Editar reporte de mascota</CustomSubtitle>
            </div>
            <div className={css.container}>
                <EditPetInfoForm />
                <EditPetLocationForm />
                <div className={css["buttons-container"]}>
                    <SecondaryButton>Reportar como encontrada</SecondaryButton>
                    <CancelButton>Eliminar reporte</CancelButton>
                </div>
            </div>
        </div>
    )

}

export { EditPetReport }