import "./index.scss";
import "./styles/global-styles.scss";

import React, { Suspense } from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ReactQueryDevtools } from "react-query/devtools";

import AppRoutes from "./routes/Routes";
import { store } from "./store/store";
const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <Suspense fallback="">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Suspense>
    </Provider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
