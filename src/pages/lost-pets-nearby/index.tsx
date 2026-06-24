import React from "react";
import { useEffect } from "react";
import { useAtomValue } from "jotai";
import { userCoordinates } from "atoms/user-coordinates";
import { useGetLostPetsNearby } from "hooks";
import { CustomSubtitle } from "ui/text-fields/custom-subtitle";
import { LostPetCard } from "components/lost-pet-card";
import { GenericText } from "ui/text-fields/generic-text";
import * as css from "./index.css";

function LostPetsNearby() {

  const { fetchLostPets, lostPets, isLoading } = useGetLostPetsNearby();
  const coordinates = useAtomValue(userCoordinates);

  useEffect(() => {
    if(coordinates.lat !== 0){
      fetchLostPets();
    }
  }, [coordinates.lat]);

  return (
    <div className={css.container}>
        <CustomSubtitle>Mascotas perdidas cerca:</CustomSubtitle>
        {lostPets.length === 0 && !isLoading && <GenericText>No se han encontrado mascotas perdidas cerca de tu ubicación.</GenericText>}
        <div className={css["lost-pets-list"]}>
            {lostPets.map((pet) => (
                <LostPetCard key={pet.objectID} pet={pet} />
            ))}
        </div>
    </div>
  );
};

export { LostPetsNearby };