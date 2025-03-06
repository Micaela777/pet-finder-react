import React from "react";
import { KittyCat } from "ui/images/kitty-cat";
import { SignInForm } from "components/sign-in-form";
import { DesktopHomeImg } from "ui/images/desktop-home-img";
import * as css from "./sign-in.css";

function SignIn(){
    return (
        <div className={css["sign-in-container"]}>
            <div className={css["sign-in-style"]}>
              <div className={css["form-container"]}>
                <KittyCat />
                <SignInForm />
              </div>
            </div>
            <div className={css["img-container"]}>
              <DesktopHomeImg />
            </div>
        </div>
    )
}
export { SignIn }