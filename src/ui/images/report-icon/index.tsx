import React from "react";
import report from "assets/report-icon.png";
import * as css from "./index.css";

function ReportIcon(){

  return (
    <img className={css.size} src={report}/>
  )
}

export { ReportIcon };