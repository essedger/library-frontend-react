import API from "../api";
import { ENDPOINTS } from "../constants";
import { IBook } from "../../types/entities";

export const onGetBooks = (params: any): Promise<any> =>
  API().get(ENDPOINTS.BOOKS, {
    params,
  });
export const onGetBook = (bookId: string): Promise<any> =>
  API().get(ENDPOINTS.BOOK(bookId));
export const onPostItem = (payload: IBook): Promise<any> =>
  API().post(ENDPOINTS.ADD_ITEM, payload);
export const onAddBookToFavorites = (bookId: number): Promise<any> =>
  API().put(ENDPOINTS.ADD_FAVORITES(bookId));
export const onDeleteBookFromFavorites = (bookId: number): Promise<any> =>
  API().put(ENDPOINTS.DELETE_FAVORITES(bookId));
