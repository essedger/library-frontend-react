import "./index.scss";
import "./styles/global-styles.scss";

import React, { StrictMode, Suspense } from "react";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import AppRoutes from "./routes/Routes";
import { store } from "./store/store";
const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback="">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Suspense>
    </Provider>
  </StrictMode>
);
