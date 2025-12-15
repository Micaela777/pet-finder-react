import React from "react";
import { OrangeBackArrowImg } from "ui/images/orange-back-arrow-img";
import { WhiteBackArrowImg } from "ui/images/white-back-arrow";
import { KittyCat } from "ui/images/kitty-cat";
import { SignInForm } from "components/sign-in-form";
import * as css from "./sign-in.css";

function SignIn(){

    return (
        <div className={css["sign-in-container"]}>
            <div className={css["sign-in-style"]}>
              <OrangeBackArrowImg />
              <WhiteBackArrowImg />
              <div className={css["form-container"]}>
                <KittyCat />
                <SignInForm />
              </div>
            </div>
            <div className={css["img-container"]}>
            </div>
        </div>
    )
}
export { SignIn }