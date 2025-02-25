import React from "react";
import { KittyCat } from "ui/images/kitty-cat";
import { SignInForm } from "components/sign-in-form";
import * as css from "./sign-in.css";

function SignIn(){
    return (
        <div className={css.style}>
            <KittyCat />
            <SignInForm />
        </div>
    )
}
export { SignIn }