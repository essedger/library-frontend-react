import * as React from 'react';

import { Routes, Route } from 'react-router-dom';

import Book from '../pages/book/Book';
import Login from '../pages/login/Login';
import Books from '../pages/books/Books';
import Layout from '../pages/layout/Layout';
import NoMatch from '../pages/noMatch/NoMatch';

import { PATH_NAMES } from './constants';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path={PATH_NAMES.book.base} element={<Book />} />
        <Route path={PATH_NAMES.books.base} element={<Books />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;