/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { Book } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Book<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags book
   * @name PostBookAdd
   * @request POST:/book/
   */
  postBookAdd = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/book/`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @tags book
   * @name PutBook
   * @request PUT:/book/{book_id}/
   */
  putBook = (bookId: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/book/${bookId}/`,
      method: "PUT",
      ...params,
    });
  /**
   * No description
   *
   * @tags book
   * @name DeleteBook
   * @request DELETE:/book/{book_id}/
   */
  deleteBook = (bookId: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/book/${bookId}/`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags book
   * @name GetBook
   * @request GET:/book/{book_id}/
   */
  getBook = (bookId: number, params: RequestParams = {}) =>
    this.request<Book, any>({
      path: `/book/${bookId}/`,
      method: "GET",
      format: "json",
      ...params,
    });
}
