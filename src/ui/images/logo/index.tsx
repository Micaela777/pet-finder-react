import React from "react";
import { useNavigate } from "react-router-dom";
import { useAtomValue } from "jotai";
import { isLoggedInAtom } from "atoms/auth-atom";
import logo from "assets/logo.png";
import * as css from "./index.css";

function Logo(){

    const navigate = useNavigate();
    const isLoggedIn = useAtomValue(isLoggedInAtom);

    function handleClick(e){
        e.preventDefault();

        if(isLoggedIn){
            navigate("/lost-pets-nearby");
        } else {
            navigate("/");
        };
    };

    return (
        <img className={css.size} src={logo} onClick={handleClick}/>
    );
};

export { Logo };