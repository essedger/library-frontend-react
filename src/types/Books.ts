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

import { Books } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Books<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags books
   * @name PostBooks
   * @request POST:/books/
   */
  postBooks = (
    query: {
      /** Page number is required */
      page: number;
      per_page?: number;
      search?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<Books, any>({
      path: `/books/`,
      method: "POST",
      query: query,
      format: "json",
      ...params,
    });
}
