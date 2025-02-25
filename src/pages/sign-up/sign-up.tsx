import React from "react";
import { MobileHomeImg } from "ui/images/mobile-home-img";
import { SignUpForm } from "components/sign-up-form";
import * as css from "./sign-up.css";

function SignUp(){
    return (
        <div className={css.style}>
          <MobileHomeImg className={css["mobile-main-logo-size"]} />
          <SignUpForm />
        </div>
    )
}
export { SignUp }