import React from "react";
import * as css from "./index.css";

function LostPetImg({src}) {
  return (
    <img className={css.size} src={src} />
  );
}

export { LostPetImg };