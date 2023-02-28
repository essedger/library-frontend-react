import * as React from "react";

import { Routes, Route } from "react-router-dom";

import BookPage from "../pages/book/Book";
import Login from "../pages/login/Login";
import Books from "../pages/books/Books";
import LayoutAuthorized from "../components/layoutAuth/LayoutAuth";
import Layout from "../components/layout/Layout";
import NoMatch from "../pages/noMatch/NoMatch";
import AddBookPage from "../pages/addBook/AddBook";
import SignUp from "../pages/signUp/SignUp";
import UseInitApp from "../hooks/useInitApp";

import { PATH_NAMES } from "./constants";

function AppRoutes() {
  UseInitApp();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={PATH_NAMES.auth.login} index element={<Login />} />
        <Route path={PATH_NAMES.auth.signup} index element={<SignUp />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
      <Route element={<LayoutAuthorized />}>
        <Route path={PATH_NAMES.books.base} element={<Books />} />
        <Route path={PATH_NAMES.book.base} element={<BookPage />} />
        <Route path={PATH_NAMES.add.base} element={<AddBookPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
