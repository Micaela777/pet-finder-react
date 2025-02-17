import React, { useState, useEffect } from "react";
import { HomeImg } from "ui/images/home-img";
import { OrangeButton } from "ui/buttons/orange-button";
import { MainTitle } from "ui/text-fields/main-title";
import { HomeSubtitle } from "ui/text-fields/home-subtitle";
import { HomeArrowImg } from "ui/images/home-arrow-img";
import { HowItWorks } from "ui/text-fields/how-it-works";


function Home(){

  return (
    <div>
      <HomeImg />
      <MainTitle>Pet Finder App</MainTitle>
      <HomeSubtitle>Encuentra y reporta mascotas perdidas cerca de tu ubicación.</HomeSubtitle>
      <HomeArrowImg />
      <OrangeButton>Registrarse</OrangeButton>
      <OrangeButton>Iniciar Sesión</OrangeButton>
      <HowItWorks>¿Cómo funciona Pet Finder App?</HowItWorks>
    </div>
    
  )
}

export { Home };