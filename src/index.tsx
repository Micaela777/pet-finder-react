import React, { Suspense } from "react"
import { createRoot } from "react-dom/client"
import { AppRoutes } from "./router";
import { BrowserRouter } from "react-router-dom";


const root = createRoot(document.getElementById('app-root'));
root.render(
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Suspense>
);

  