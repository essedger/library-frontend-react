import "./index.scss";
import "./styles/global-styles.scss";

import React, { StrictMode, Suspense } from "react";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/Routes";
const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Suspense fallback="">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Suspense>
  </StrictMode>
);
