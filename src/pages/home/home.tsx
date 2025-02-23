import React, { useState, useEffect } from "react";
import { MobileHomeImg } from "ui/images/mobile-home-img";
import { OrangeButton } from "ui/buttons/orange-button";
import { MainTitle } from "ui/text-fields/main-title";
import { HomeSubtitle } from "ui/text-fields/home-subtitle";
import { ArrowImg } from "ui/images/arrow-img";
import { DesktopHomeImg } from "ui/images/desktop-home-img";
import { HowItWorks } from "ui/text-fields/how-it-works";
import * as css from "./home.css"


function Home(){
  return (
    <div className={css["home-container"]}>
      <div className={css["home-style"]}>
        <div className={css["main-items"]}>
          <MobileHomeImg />
          <MainTitle>Pet Finder App</MainTitle>
        </div>
        <div className={css["container-style"]}>
          <HomeSubtitle>Encuentra y reporta mascotas perdidas cerca de tu ubicación.</HomeSubtitle>
          <ArrowImg />
          <div className={css["buttons-container"]}>
            <OrangeButton>Registrarse</OrangeButton>
            <OrangeButton>Iniciar Sesión</OrangeButton>
          </div>
          <HowItWorks>¿Cómo funciona<span className={css["edited-text"]}> Pet Finder App</span>?</HowItWorks>
        </div>
      </div>
      <div className={css["img-container"]}>
        <DesktopHomeImg className={css.img}/>
      </div>
    </div>
  )
}

export { Home };