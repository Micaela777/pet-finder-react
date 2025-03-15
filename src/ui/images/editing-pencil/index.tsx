import React from "react";
import pencil from "assets/editing-pencil.png";
import * as css from "./index.css";

function EditingPencil(){

  return (
    <img className={css.size} src={pencil}/>
  )
}

export { EditingPencil };