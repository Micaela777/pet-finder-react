import React from "react";
import { PetCard } from "components/pet-card";
import * as css from "./my-reported-pets.css"

function MyReportedPets(){
    return(
        <div className={css.style}>
            <PetCard />
        </div>
    )
}

export { MyReportedPets }