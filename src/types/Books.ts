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

export class Books<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags books
   * @name GetBooks
   * @request GET:/books/
   */
  getBooks = (params: RequestParams = {}) =>
    this.request<Book, any>({
      path: `/books/`,
      method: "GET",
      format: "json",
      ...params,
    });
}
