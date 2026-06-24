import React, { useState, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useAtom } from "jotai";
import { useSetAtom } from "jotai";
import { petAtom } from "atoms/pet-atom";
import { petReportErrorsAtom } from "atoms/pet-report-errors-atom";
import * as css from "./index.css"

function ImageDropzone({ currentImage = null }){

    const [file, setFile] = useState(currentImage);
    const setPet = useSetAtom(petAtom);
    const [error, setError] = useAtom(petReportErrorsAtom);
    
    const onDrop = useCallback((acceptedFiles) => {

        const file = acceptedFiles[0];

        if(file){
            const imageURL = URL.createObjectURL(file);
            setFile(imageURL);

            const reader = new FileReader();
            reader.onload = () => {
                const pictureURL = reader.result as string;
                setPet((prev) => ({ ...prev, pictureURL }))
                setError((prev) => ({ ...prev, pictureError: "" }));
            };
            reader.readAsDataURL(file);
        };
        console.log(acceptedFiles);
    }, []);

    useEffect(() => {
        return () => {
          if (file) {
            URL.revokeObjectURL(file);
          };
        };
      }, [file]);

      useEffect(() => {
        if(currentImage) {
            setFile(currentImage);
    }
    }, [currentImage]);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: { "image/*": [] },
    })  ;

    return(
        <div className={css["pet-picture-container"]} {...getRootProps()}>
            <input {...getInputProps()} />
            {!file && <p className={css.text}>Arrastra tu imagen aquí</p>}
            {file && <img className={css.img} src={file} />}
        </div>
    );
};

export { ImageDropzone };