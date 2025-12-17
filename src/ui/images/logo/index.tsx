import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "assets/logo.png";
import * as css from "./index.css";

function Logo(){

    const navigate = useNavigate()

    function handleClick(e){
        e.preventDefault()

        navigate("/")
    }

    return (
        <img className={css.size} src={logo} onClick={handleClick}/>
    )
}

export { Logo }