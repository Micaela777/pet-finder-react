import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/layout";
import { Home } from "pages/home/home";
import { SignUp } from "pages/sign-up/sign-up";
import { SignIn } from "pages/sign-in/sign-in";
import { UserLocation } from "pages/user-location";
import { ReportPet } from "pages/report-pet";
import { MyReportedPets } from "pages/my-reported-pets/my-reported-pets";
import { UserData } from "pages/user-data";
import { EditUserData } from "pages/edit-user-data";
import { EditPassword } from "pages/edit-password";
import { EditPetReport } from "pages/edit-pet-report";

function AppRoutes(){
    return (
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/user-location" element={<UserLocation />} />
            <Route path="/report-pet" element={< ReportPet />} />
            <Route path="/my-reported-pets" element={< MyReportedPets />} />
            <Route path="/user-data" element={< UserData />} />
            <Route path="/edit-user-data" element={<EditUserData />} />
            <Route path="/edit-password" element={<EditPassword />} />
            <Route path="/edit-pet-report" element={<EditPetReport />} />
          </Route>
        </Routes>
    )
}

export { AppRoutes }