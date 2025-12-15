import React from "react";
import * as css from "./index.css";

function CustomerImg({src}) {
  return (
    <img className={css.size} src={src} />
  );
}

export { CustomerImg };