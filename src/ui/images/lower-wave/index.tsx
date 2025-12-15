import React from "react";
import * as css from "./index.css";

function LowerWave() {
  return (
    <div className={css.size}>
      <svg className={css.svg} viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true" >
        <path className={css.path} d="M0,70 C240,140 480,0 720,60 C960,120 1200,40 1440,100 L1440,120 L0,120 Z" />
      </svg>
    </div>
  );
}

export { LowerWave };