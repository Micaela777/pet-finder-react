import React from "react";
import { Logo } from "ui/images/logo";
import { Copyright } from "ui/text-fields/copyright";
import { LinkedInImg } from "ui/images/linkedin-img";
import { GitHubImg } from "ui/images/github-img";
import * as css from "./index.css";


function Footer(){
  return (
    <div className={css["footer-container"]}>
      <div className={css["logo-and-copyright"]}>
        <Logo />
        <Copyright>© 2025 PetFinderAR</Copyright>
      </div>  
      <div className={css["social-media"]}>
        <LinkedInImg />
        <GitHubImg />
      </div>
    </div>
  )
}

export { Footer };