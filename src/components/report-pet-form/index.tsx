import React from "react";
import { Label } from "components/label";
import { TextField } from "components/input";
import { SecondaryButton } from "ui/buttons/secondary-button";
import { useCreateReport } from "hooks";
import * as css from "./index.css";

function ReportForm({pet, onClose}){

    const { handleCreateReport } = useCreateReport();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const description = e.target.description.value;
        const pet_id = pet.objectID;
        console.log({ name, phone, description, pet_id });

        handleCreateReport(name, phone, description, pet_id);
    }

    return(
        <div className={css.style}>
            <div className={css.modal}>
                <button className={css.close} onClick={onClose}>⛌</button>
                <h2 className={css.title}>Reportar info. de {pet.name}</h2>
                <form className={css.form} onSubmit={handleSubmit}>
                    <div className={css.container}>
                        <div className={css.fieldset}>
                            <Label>TU NOMBRE</Label>
                            <TextField type="text" name="name" />
                        </div>
                        <div className={css.fieldset}>
                            <Label>TELÉFONO</Label>
                            <TextField type="text" name="phone"/>
                        </div>
                        <div className={css.fieldset}>
                            <Label>¿DÓNDE LO VISTE?</Label>
                            <TextField type="text" name="description"/>
                        </div>
                    </div>
                    <SecondaryButton>Enviar información</SecondaryButton>
                </form>
            </div>
        </div>
    );
};

export { ReportForm };