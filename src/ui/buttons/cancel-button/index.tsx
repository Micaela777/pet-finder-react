import React from "react";
import * as css from "./index.css";

function CancelButton({children, onClick}){

  return (
    <button type="button" className={css.style} onClick={onClick}>
        {children}
    </button>
  );
};

export { CancelButton };