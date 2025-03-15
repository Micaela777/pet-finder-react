import React from "react";
import { CustomTitle } from "ui/text-fields/custom-title";
import { PetCard } from "components/pet-card";
import * as css from "./my-reported-pets.css"

function MyReportedPets(){
    return(
        <div className={css.style}>
            <CustomTitle>Mascotas reportadas</CustomTitle>
            <PetCard />
        </div>
    )
}

export { MyReportedPets }