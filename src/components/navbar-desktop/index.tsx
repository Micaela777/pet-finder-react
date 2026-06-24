import React, { useState } from "react";
import { useAtomValue } from "jotai";
import { isLoggedInAtom } from "atoms/auth-atom";
import { useNavigate } from "react-router-dom";
import * as css from "./index.css"

function NavbarDesktop(){

  const navigate = useNavigate();
  const isLoggedIn = useAtomValue(isLoggedInAtom);

  function handleUserData(){
    if(isLoggedIn){
      navigate("/user-data");
    } else {
      navigate("/sign-in");
    };
  };

  function handleReportedPets(){
    if(isLoggedIn){
      navigate("/my-reported-pets");
    } else {
      navigate("/sign-in");
    };
  };

  function handleReport(){
    if(isLoggedIn){
      navigate("/report-pet");
    } else {
      navigate("/sign-in");
    };
  };


  return (
    <div className={css["nav-container"]}>
      <ul className={css.nav}>
        <a className={css["nav-item"]} onClick={handleUserData} >MIS DATOS</a>
        <a className={css["nav-item"]} onClick={handleReportedPets}>MASCOTAS REPORTADAS</a>
        <a className={css["nav-item"]} onClick={handleReport}>REPORTAR</a>
      </ul>
    </div>
  );
};

export { NavbarDesktop };
