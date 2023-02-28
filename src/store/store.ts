import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/index";
// import booksReducer from "./books/index";
// import bookReducer from "./book/index";

export const store = configureStore({
  reducer: {
    me: authReducer,
    // books: booksReducer,
    // book: bookReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
