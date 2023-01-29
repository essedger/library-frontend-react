import API from "../api";
import { ENDPOINTS } from "../constants";
import { Book } from "../../types/data-contracts";

export const onGetBooks = (): Promise<any> => API().get(ENDPOINTS.BOOKS);
export const onGetBook = (bookId: string): Promise<any> =>
  API().get(ENDPOINTS.BOOK(bookId));
export const onPostItem = (payload: Book): Promise<any> =>
  API().post(ENDPOINTS.ADD_ITEM, payload);
