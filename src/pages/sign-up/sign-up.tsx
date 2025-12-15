import React from "react";
import { MobileHomeImg } from "ui/images/mobile-home-img";
import { SignUpForm } from "components/sign-up-form";
import * as css from "./sign-up.css";

function SignUp(){
    return (
        <div className={css["sign-up-container"]}>
            <div className={css["sign-up-style"]}>
              <div className={css["form-container"]}>
                <MobileHomeImg className={css["mobile-main-logo-size"]} />
                <SignUpForm />
              </div>
            </div>
            <div className={css["img-container"]}>
            </div>
        </div>
    )
}
export { SignUp }