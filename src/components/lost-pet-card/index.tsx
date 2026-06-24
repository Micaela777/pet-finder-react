import React from "react";
import { useState } from "react";
import { ReportButton } from "ui/buttons/report-button";
import { LostPetImg } from "ui/images/lost-pet-img";
import { LostPetName } from "ui/text-fields/lost-pet-name";
import { LostPetLocation } from "ui/text-fields/lost-pet-location";
import { IsFoundText } from "ui/text-fields/is-found-text";
import { ReportForm } from "components/report-pet-form";
import * as css from "./index.css"

function LostPetCard({ pet }){

    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className={css["pet-card-container"]}>
            <LostPetImg src={pet.pictureURL} />
            <div className={css.info}>
                <div className={css["text-container"]}>
                    <LostPetName>{pet.name}</LostPetName>
                    <LostPetLocation>{pet.location}</LostPetLocation>
                    {pet.found && <IsFoundText>¡Mascota encontrada!</IsFoundText>}
                </div>
                <ReportButton onClick={() => setIsOpen(true)}>Reportar</ReportButton>
            </div>
            {isOpen && <ReportForm pet={pet} onClose={() => setIsOpen(false)} />}
        </div>
    )
}

export { LostPetCard }