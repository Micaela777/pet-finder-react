import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetAtom } from "jotai";
import { selectedPetIdAtom } from "atoms/selected-pet-id-atom";
import { EditButton } from "ui/buttons/edit-button";
import { LostPetImg } from "ui/images/lost-pet-img";
import { LostPetName } from "ui/text-fields/lost-pet-name";
import { LostPetLocation } from "ui/text-fields/lost-pet-location";
import * as css from "./index.css"

function PetCard({ pet }){

    const navigate = useNavigate();
    const setSelectedPetId = useSetAtom(selectedPetIdAtom)

    function handleEdit(){
        navigate("/edit-pet-report");
        setSelectedPetId(pet.id);
    };

    return(
        <div className={css["pet-card-container"]}>
            <LostPetImg src={pet.pictureURL} />
            <div className={css.info}>
                <div className={css["text-container"]}>
                    <LostPetName>{pet.name}</LostPetName>
                    <LostPetLocation>{pet.location}</LostPetLocation>
                </div>
                <EditButton onClick={handleEdit}>Editar</EditButton>
            </div>
        </div>
    );
};

export { PetCard };