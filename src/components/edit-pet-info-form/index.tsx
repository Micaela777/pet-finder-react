import React from "react";
import { useAtomValue } from "jotai";
import { selectedPetAtom } from "atoms/selected-pet-atom";
import { TextField } from "components/input";
import { ImageDropzone } from "components/image-dropzone";
import { ErrorText } from "ui/text-fields/error-text";
import { SecondaryButton } from "ui/buttons/secondary-button";
import { ClickText } from "ui/text-fields/click-text";
import * as css from "./index.css"

function EditPetInfoForm(){

    const selectedPet = useAtomValue(selectedPetAtom);
    
    return(
        <div className={css.style}>
            <TextField type="text" name="name" placeholder="Nombre" defaultValue={selectedPet?.name} />
            <div className={css.container}>
                <ImageDropzone currentImage={selectedPet?.pictureURL} />
                <ClickText>Haz click sobre la imagen para modificarla ⤴</ClickText>
            </div>
        </div>
    )

}

export { EditPetInfoForm };