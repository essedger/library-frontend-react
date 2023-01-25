import API from "../api";
import { ENDPOINTS } from "../constants";

export const onGetBooks = (): Promise<any> => API().get(ENDPOINTS.BOOKS);
export const onGetBook = (bookId: string): Promise<any> =>
  API().get(ENDPOINTS.BOOK(bookId));
