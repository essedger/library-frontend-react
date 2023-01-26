export const ENDPOINTS = {
  //Auth
  LOGIN: "login/",
  SIGNUP: "signup/",
  RESET_PASSWORD: "password-reset/",
  //Books
  BOOK: (bookId: string) => `/book/${bookId}/`,
  BOOKS: "books/",
};
