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
        <Copyright>© 2026 PetFinderAR</Copyright>
      </div>  
      <div className={css["social-media"]}>
        <a href="https://www.linkedin.com/in/micaela-medina-79790321a/" target="_blank">
          <LinkedInImg />
        </a>
        <a href="https://github.com/Micaela777" target="_blank">
          <GitHubImg />
        </a>
      </div>
    </div>
  )
}

export { Footer };