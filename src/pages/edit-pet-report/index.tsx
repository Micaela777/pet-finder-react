import React from "react";
import { useEffect } from "react";
import { useAtomValue } from "jotai";
import { selectedPetAtom } from "atoms/selected-pet-atom";
import { CustomSubtitle } from "ui/text-fields/custom-subtitle";
import { EditPetInfoForm } from "components/edit-pet-info-form";
import { EditPetLocationForm } from "components/edit-pet-location-form";
import { SecondaryButton } from "ui/buttons/secondary-button";
import { FoundPetButton } from "ui/buttons/found-pet-button";
import { CancelButton } from "ui/buttons/cancel-button";;
import { useGetPetById, useUpdatePet, useDeletePetReport, useMarkPetAsFound } from "hooks";
import * as css from "./index.css";

function EditPetReport(){

    const { fetchPet, petId } = useGetPetById();
    const { handleUpdatePet } = useUpdatePet();
    const { handleDeletePetReport } = useDeletePetReport();
    const { handleMarkPetAsFound } = useMarkPetAsFound();
    const selectedPet = useAtomValue(selectedPetAtom);

    useEffect(() => {
        if(petId) {
            fetchPet();
        }
    }, [petId]);

    function handleSubmit(e) {
        e.preventDefault();
        const name = e.target.name.value;
        const location = e.target.location.value;
        handleUpdatePet(name, location);
    };

    return(
        <form className={css.style} onSubmit={handleSubmit}>
            <div className={css["text-container"]}>
                <CustomSubtitle>Editar reporte de mascota</CustomSubtitle>
            </div>
            <div className={css.container}>
                <EditPetInfoForm key={`info-${selectedPet.id}`}/>
                <EditPetLocationForm key={`location-${selectedPet.id}`} />
                <div className={css["buttons-container"]}>
                    <SecondaryButton>Guardar</SecondaryButton>
                    <FoundPetButton onClick={handleMarkPetAsFound}>Reportar como encontrada</FoundPetButton>
                    <CancelButton onClick={handleDeletePetReport}>Eliminar reporte</CancelButton>
                </div>
            </div>
        </form>
    );
};

export { EditPetReport };