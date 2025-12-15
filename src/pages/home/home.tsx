import React, { useState, useEffect } from "react";
import { HomeImg } from "ui/images/home-img";
import { MainTitle } from "ui/text-fields/main-title";
import { Subtitle } from "ui/text-fields/home-subtitle";
import { SignUpButton } from "ui/buttons/signup-button";
import { SignInButton } from "ui/buttons/signin-button";
import { UpperWave } from "ui/images/upper-wave";
import { CustomSubtitle } from "ui/text-fields/custom-subtitle";
import { HowItWorksSubtitle } from "ui/text-fields/how-it-works-subtitle";
import { HowItWorksText } from "ui/text-fields/how-it-works-text";
import { Line } from "ui/images/orange-line";
import { GirlImg } from "ui/images/girl-img";
import { LowerWave } from "ui/images/lower-wave";
import { MainCustomerCard } from "components/main-customer-card";
import { SecondaryCustomerCard } from "components/secondary-customer-card";
import { ContactCard } from "components/contact-card"; 
import maguiImg from "assets/magui.png";
import micaImg from "assets/mica.png";
import miqueasImg from "assets/miqueas.png";
import * as css from "./home.css";


function Home(){

  return (
    <div className={css["home-container"]}>
      <div className={css["welcome-section"]}>
        <div className={css["welcome-container"]}>
          <HomeImg />
          <div className={css["title-actions"]}>
            <div className={css["title-container"]}>
              <MainTitle />
              <Subtitle>Encuentra y reporta mascotas perdidas cerca de tu ubicación.</Subtitle>
            </div>
            <div className={css["buttons-container"]}>
              <SignUpButton>Registrarse</SignUpButton>
              <SignInButton>Iniciar Sesión</SignInButton>
            </div>
          </div>
        </div>
      </div>
      <UpperWave />
      <div className={css["how-it-works-section"]}>
          <CustomSubtitle>Somos PetFinderAR</CustomSubtitle>
          <div className={css["how-it-works-container"]}>
            <div className={css["how-it-works-text-and-line-container"]}>
              <div className={css["how-it-works-text-container"]}>
                <HowItWorksSubtitle>¿Cómo funciona?</HowItWorksSubtitle>
                <HowItWorksText>
                  PetFinderAR es una WebApp para mascotas perdidas que 
                  permite a los dueños reportar la desaparición de su mascota llenando 
                  un formulario con su nombre, foto y ubicación. Cuando alguien ve una 
                  mascota que coincide con la información, puede reportar el avistamiento 
                  indicando lugar y detalles. La webapp envía notificaciones automáticas 
                  al dueño cuando se registra un avistamiento cercano, permitiéndoles seguir 
                  la posible ubicación de su mascota.
                </HowItWorksText>
              </div>
              <Line />
            </div>
            <GirlImg />
          </div>
      </div>
      <LowerWave />
      <div className={css["customers-review-section"]}>
        <CustomSubtitle>Reseñas de clientes</CustomSubtitle>
        <div className={css["customer-card-container"]}>
          <SecondaryCustomerCard src={maguiImg} name="Magalí" review="Me encantó la experiencia. 
            Pude registrar a mi mascota perdida sin complicaciones, y todo el proceso se 
            sintió claro y humano. La app transmite calma, no te abruma, y eso vale mucho 
            cuando estás preocupado por tu compañero peludo. De verdad, me hizo sentir que 
            estaba haciendo algo importante por él."/>
          <MainCustomerCard src={micaImg} name="Micaela" review="Cuando mi perrita se perdió, estaba desesperada. 
            Abrí la app y fue tan fácil de entender que sentí un alivio inmediato. 
            Pude subir su foto, escribir su nombre y ver todo tan claro que me dio esperanza 
            otra vez. Es una aplicación hecha con empatía, se nota que pensaron en 
            quienes amamos a nuestras mascotas." />
          <SecondaryCustomerCard src={miqueasImg} name="Miqueas" review="Nunca pensé que una app me iba a ayudar 
          tanto en un momento tan feo. Estaba desesperado, pero apenas la abrí, todo se sintió más controlado. Me dio 
          la sensación de que realmente pensaron en lo que uno necesita cuando está pasando por algo así." />
        </div>
      </div>
      <div className={css["contact-section"]}>
        <CustomSubtitle>¿Tienes alguna duda? No dudes en contactarnos.</CustomSubtitle>
        <ContactCard />
      </div>
    </div>
  )
}

export { Home };