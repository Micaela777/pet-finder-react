import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import * as css from "./layout.css";


function Layout(){
  return (
    <div className={css.root}>
      <header style={{border: "solid 2px"}}>
        Soy el header
      </header>
        <Outlet />
      <footer>Soy el footer</footer>
    </div>
    
  )
}

export { Layout };