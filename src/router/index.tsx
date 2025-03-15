import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/layout";
import { OrangeBackArrowImg } from "ui/images/orange-back-arrow-img";
import { WhiteLogoImg } from "ui/images/white-logo-img";
import { Home } from "pages/home/home";
import { SignUp } from "pages/sign-up/sign-up";
import { SignIn } from "pages/sign-in/sign-in";
import { HowItWorksPage } from "pages/how-it-works/how-it-works";
import { ReportPet } from "pages/report-pet/report-pet";
import { MyReportedPets } from "pages/my-reported-pets/my-reported-pets";

function AppRoutes(){
    return (
        <Routes>
           <Route path="/" element={<OrangeBackArrowImg />} />
          <Route index element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
         <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/" element={<Layout />} >
            <Route path="/" element={< WhiteLogoImg />} />
            <Route path="/report-pet" element={< ReportPet />} />
            <Route path="/my-reported-pets" element={< MyReportedPets />} />
          </Route>
        </Routes>
    )
}

export { AppRoutes }