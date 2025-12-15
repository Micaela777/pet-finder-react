import React from "react";
import github from "assets/github.png";
import * as css from "./index.css";

function GitHubImg() {

    return (
        <img className={css.size} src={github} />
    )

}

export { GitHubImg } 