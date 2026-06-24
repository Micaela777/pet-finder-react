import React from "react";
import * as css from "./index.css"

function SecondaryButton({children, onClick = () => {}, type = "submit" }){

  return (
    <button className={css.style} onClick={onClick} type={type as any}> 
        {children}
    </button> 
  );
};

export { SecondaryButton };