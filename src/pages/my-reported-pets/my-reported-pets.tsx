import React from "react";
import { useEffect } from "react";
import { CustomSubtitle } from "ui/text-fields/custom-subtitle";
import { PetCard } from "components/pet-card";
import { useGetMyPets } from "hooks";
import { GenericText } from "ui/text-fields/generic-text";
import * as css from "./my-reported-pets.css"

function MyReportedPets(){

    const { fetchMyPets, myPets, isLoading, token } = useGetMyPets();

    useEffect(() => {
    if(token) {
        fetchMyPets();
    }
}, [token]);

    return(
        <div className={css.container}>
            <CustomSubtitle>Mascotas reportadas:</CustomSubtitle>
            {myPets.length === 0 && !isLoading && <GenericText>Aún no reportaste mascotas perdidas.</GenericText>}
            <div className={css["reported-pets-list"]}>
                {myPets.map((pet) => (
                    <PetCard key={pet.id} pet={pet}/>
                ))}
            </div>
        </div>
    );
};

export { MyReportedPets };