import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "components/header";
import * as css from "./index.css";


function Layout(){
  return (
    <div className={css.root}>
      <Header></Header>
      <Outlet />
    </div>
    
  )
}

export { Layout };