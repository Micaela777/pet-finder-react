import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomSubtitle } from "ui/text-fields/custom-subtitle";
import { PetInfoForm } from "components/pet-info-form";
import { MapForm } from "components/map-form";
import { SecondaryButton } from "ui/buttons/secondary-button";
import { CancelButton } from "ui/buttons/cancel-button";
import { LoadingText } from "ui/text-fields/loading-text";
import { useReportPet } from "hooks";
import * as css from "./index.css";

function ReportPet(){

    const navigate = useNavigate();

    const { handleReportPet, isLoading } = useReportPet();

    return(
        <form className={css.style}>
            <div className={css["text-container"]}>
                <CustomSubtitle>Ingresá la siguiente información para realizar el reporte de la mascota:</CustomSubtitle>
            </div>
            <div className={css["report-pet-container"]}>
                <PetInfoForm />
                <MapForm />
                <div className={css["buttons-container"]}>
                    <SecondaryButton type={"button" as any} onClick={handleReportPet}>Reportar</SecondaryButton>
                    <CancelButton onClick={() => navigate("/lost-pets-nearby")}>Cancelar</CancelButton>
                    {isLoading && <LoadingText>Creando reporte...</LoadingText>}
                </div>
            </div>
        </form>
    );
};

export { ReportPet };