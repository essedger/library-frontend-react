export const ENDPOINTS = {
  //Auth
  LOGIN: "login/",
  SIGNUP: "register/",
  RESET_PASSWORD: "password-reset/",
  ME: "me/",
  //Books
  BOOK: (bookId: string) => `/book/${bookId}/`,
  ADD_ITEM: "book/",
  UPLOAD_IMAGE: "upload/",
  BOOKS: "book/",
  ADD_FAVORITES: (bookId: number) => `/book/${bookId}/favorites/add`,
  DELETE_FAVORITES: (bookId: number) => `/book/${bookId}/favorites/delete`,
};
