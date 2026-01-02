import React from "react";
import { EditButton } from "ui/buttons/edit-button";
import { LostPetImg } from "ui/images/lost-pet-img";
import { LostPetName } from "ui/text-fields/lost-pet-name";
import { LostPetLocation } from "ui/text-fields/lost-pet-location";
import tucan from "assets/tucan.png"
import * as css from "./index.css"

function PetCard(props){
    return(
        <div className={css["pet-card-container"]}>
            <LostPetImg src={tucan} />
            <div className={css.info}>
                <div className={css["text-container"]}>
                    <LostPetName>Bobby</LostPetName>
                    <LostPetLocation>Nuñez, Buenos Aires</LostPetLocation>
                </div>
                <EditButton>Editar</EditButton>
            </div>
        </div>
    )
}

export { PetCard }