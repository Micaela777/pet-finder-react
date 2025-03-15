import React from "react";
import { EditButton } from "ui/buttons/edit-button";
import tucan from "assets/tucan.png"
import * as css from "./index.css"

function PetCard(props){
    return(
        <div className={css["pet-card-container"]}>
            <img className={css["pet-image"]} src={tucan} />
            <div className={css.info}>
                <div className={css["text-container"]}>
                    <h2 className={css["pet-name"]}>Bobby</h2>
                    <h2 className={css["pet-location"]}>Nuñez, Buenos Aires</h2>
                </div>
                <EditButton>Editar</EditButton>
            </div>
        </div>
    )
}

export { PetCard }