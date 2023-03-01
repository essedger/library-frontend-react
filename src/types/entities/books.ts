import { IUser } from "./auth";

export interface BooksResponse {
  books: IBook[];
  currentPage: number;
  totalPages: number;
  totalBooks: number;
}

export interface BooksRequest {
  page: number;
  per_page?: number;
  search?: string;
  fav?: string;
  period?: string;
}

export interface IBook {
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
  /** The book year */
  year?: number;
  /** Users who add to favorites */
  favoritedBy: IUser[];
  /** User who added book */
  owner: IUser;
}
