import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/layout";
import { Home } from "pages/home/home";
import { OrangeLogoImg } from "ui/images/orange-logo-img";
import { WhiteLogoImg } from "ui/images/white-logo-img";
import { SignUp } from "pages/sign-up/sign-up";
import { SignIn } from "pages/sign-in/sign-in";


function AppRoutes(){
    return (
        <Routes>
          <Route index element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<Layout />} >
            <Route path="/" element={< OrangeLogoImg />} />
            <Route path="/" element={< WhiteLogoImg />} />
          </Route>
        </Routes>
    )
}

export { AppRoutes }