import React, { useState, useEffect } from "react";
import { MobileHomeImg } from "ui/images/mobile-home-img";
import { MainButton } from "ui/buttons/main-button";
import { MainTitle } from "ui/text-fields/main-title";
import { Subtitle } from "ui/text-fields/home-subtitle";
import { ArrowImg } from "ui/images/arrow-img";
import { DesktopHomeImg } from "ui/images/desktop-home-img";
import { HowItWorksText } from "ui/text-fields/how-it-works-text";
import * as css from "./home.css"


function Home(){

  return (
    <div className={css["home-container"]}>
      <div className={css["home-style"]}>
        <div className={css["main-items"]}>
          <MobileHomeImg className={css["mobile-main-logo-size"]}/>
          <MainTitle>Pet Finder App</MainTitle>
        </div>
        <div className={css["container-style"]}>
          <Subtitle>Encuentra y reporta mascotas perdidas cerca de tu ubicación.</Subtitle>
          <ArrowImg />
          <div className={css["buttons-container"]}>
            <MainButton>Registrarse</MainButton>
            <MainButton>Iniciar Sesión</MainButton>
          </div>
          <HowItWorksText />
        </div>
      </div>
      <div className={css["img-container"]}>
        <DesktopHomeImg />
      </div>
    </div>
  )
}

export { Home };