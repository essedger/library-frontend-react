export const ENDPOINTS = {
  //Auth
  LOGIN: "login/",
  SIGNUP: "register/",
  RESET_PASSWORD: "password-reset/",
  ME: "me/",
  //Books
  BOOK: (bookId: string) => `/book/${bookId}/`,
  ADD_ITEM: "book/",
  BOOKS: "book/",
};
