import React from "react";
import { useSetAtom } from "jotai";
import { useAtom } from "jotai";
import { petAtom } from "atoms/pet-atom";
import { petReportErrorsAtom } from "atoms/pet-report-errors-atom";
import { TextField } from "components/input";
import { ImageDropzone } from "components/image-dropzone";
import { ErrorText } from "ui/text-fields/error-text";
import { ClickText } from "ui/text-fields/click-text";
import * as css from "./index.css";

function PetInfoForm(){

    const setPet = useSetAtom(petAtom);
    const [error, setError] = useAtom(petReportErrorsAtom);

    function handleNameChange(e){

        const name = e.target.value;
        setPet((prev) => ({ ...prev, name }));
        setError((prev) => ({ ...prev, nameError: "" }));
    };

    return(
        <div className={css.style}>
            <TextField id="report-pet-name" type="text" name="name" placeholder="Nombre" onChange={handleNameChange} />
            {error.nameError && <ErrorText>{error.nameError}</ErrorText>}
            <div id="report-pet-picture" className={css["pet-info-container"]}>
                <ImageDropzone />
                {error.pictureError && <ErrorText>{error.pictureError}</ErrorText>}
                <ClickText>O haz click ⤴</ClickText>
            </div>
        </div>
    );
};

export { PetInfoForm };