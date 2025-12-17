import React from "react";
import { SignUpForm } from "components/sign-up-form";
import * as css from "./sign-up.css";

function SignUp(){
    return (
        <div className={css["sign-up-container"]}>
          <SignUpForm />
        </div>
    )
}
export { SignUp }