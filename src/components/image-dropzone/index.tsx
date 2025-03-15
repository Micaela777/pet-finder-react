import React, { useState, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import * as css from "./index.css"

function ImageDropzone(){

    const [file, setFile] = useState(null)
    

    const onDrop = useCallback((acceptedFiles) => {

        const file = acceptedFiles[0]

        if(file){
            const imageURL = URL.createObjectURL(file)
            setFile(imageURL)
        }
        console.log(acceptedFiles)
    }, [])

    useEffect(() => {
        return () => {
          if (file) {
            URL.revokeObjectURL(file);
          }
        };
      }, [file]);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: { "image/*": [] },
    })  

    return(
        <div className={css["pet-picture-container"]} {...getRootProps()}>
            <input {...getInputProps()} />
            {!file && <p className={css.text}>Arrastra tu imagen aquí</p>}
            {file && <img className={css.img} src={file} />}
        </div>
    )
}

export { ImageDropzone }