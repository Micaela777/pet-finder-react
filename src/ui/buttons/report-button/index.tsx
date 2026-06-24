import React from "react";
import { ReportIcon } from "ui/images/report-icon";
import * as css from "./index.css";

function ReportButton({children, onClick}){
    return(
        <button className={css.style} onClick={onClick}>
            {children}
            <ReportIcon />
        </button>
            
    )
}

export { ReportButton }