export const PATH_NAMES: Record<string, any> = {
  auth: {
    login: "/login",
    signup: "/signup",
    resetPassword: "/reset-password",
    linkSent: "/link-sent",
  },
  book: {
    base: "/book/:bookId",
    addBook: "/add",
  },
  add: {
    base: "/add",
  },
  books: {
    base: "/books",
  },
  favorites: {
    base: "/favorites",
  },
  progress: {
    base: "/progress",
  },
  finished: {
    base: "/finished",
  },
};
