import React from "react";
import { TextField } from "components/input";
import { ImageDropzone } from "components/image-dropzone";
import { ErrorText } from "ui/text-fields/error-text";
import { SecondaryButton } from "ui/buttons/secondary-button";
import * as css from "./index.css"

function PetInfoForm(){

    return(
        <form className={css.style}>
            <TextField type="text" name="name" placeholder="Nombre"  />
            <div className={css["pet-info-container"]}>
                <ImageDropzone />
                <ErrorText>Por favor, para continuar agrega una foto.</ErrorText>
                <SecondaryButton>Agregar foto</SecondaryButton>
            </div>
        </form>
    )

}

export { PetInfoForm }