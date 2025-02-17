import React from "react"
import { Routes, Route } from "react-router-dom"
import { Home } from "pages/home/home"
import { Layout } from "components/layout"

function AppRoutes(){
    return (
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
          </Route>
        </Routes>
    )
}

export { AppRoutes }