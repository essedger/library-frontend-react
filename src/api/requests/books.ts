import API from "../api";
import { ENDPOINTS } from "../constants";
import { Book } from "../../types/data-contracts";
import { BooksRequest } from "../../types/entities";

export const onGetBooks = (payload: BooksRequest): Promise<any> =>
  API().post(ENDPOINTS.BOOKS, payload);
export const onGetBook = (bookId: string): Promise<any> =>
  API().get(ENDPOINTS.BOOK(bookId));
export const onPostItem = (payload: Book): Promise<any> =>
  API().post(ENDPOINTS.ADD_ITEM, payload);
