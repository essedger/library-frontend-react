export const ENDPOINTS = {
  //Auth
  LOGIN: "login/",
  SIGNUP: "register/",
  RESET_PASSWORD: "password-reset/",
  //Books
  BOOK: (bookId: string) => `/book/${bookId}/`,
  ADD_ITEM: "book/",
  BOOKS: "book/",
};
