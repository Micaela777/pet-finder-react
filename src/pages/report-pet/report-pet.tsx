import React from "react";
import { CustomSubtitle } from "ui/text-fields/custom-subtitle";
import { PetInfoForm } from "components/pet-info-form";
import { MapForm } from "components/map-form";
import { SecondaryButton } from "ui/buttons/secondary-button";
import { CancelButton } from "ui/buttons/cancel-button";
import * as css from "./report-pet.css"

function ReportPet(){

    return(
        <div className={css.style}>
            <div className={css["text-container"]}>
                <CustomSubtitle>Ingresá la siguiente información para realizar el reporte de la mascota:</CustomSubtitle>
            </div>
            <div className={css["report-pet-container"]}>
                <PetInfoForm />
                <MapForm />
                <div className={css["buttons-container"]}>
                    <SecondaryButton>Reportar</SecondaryButton>
                    <CancelButton>Cancelar</CancelButton>
                </div>
            </div>
        </div>
    )

}

export { ReportPet }