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

export interface Books {
  books?: Book[];
  current_page?: number;
  total_pages?: number;
}

export interface Book {
  /** The book identifier */
  id: number;
  /** The book name */
  name: string;
  /** The author name */
  author?: string;
  /** The end reading date */
  date_end?: string;
  /** The start reading date */
  date_start?: string;
  /** The book description */
  description?: string;
  /** The book device */
  device?: string;
  /** The book image */
  image?: string;
  /** Is book deleted */
  is_deleted?: boolean;
  /** Is book read */
  is_read?: boolean;
  /** The book link */
  link?: string;
  /** The book notes */
  notes?: string;
  /** The book rating */
  rating?: number;
  /** The book schedule date */
  schedule?: string;
  /** The book source */
  source?: string;
  /** The book type */
  type?: string;
  /** The book genre */
  genre?: string;
}
