import { Book } from "../data-contracts";

export interface BooksResponse {
  books: Book[];
  current_page: number;
  total_pages: number;
}

export interface BooksRequest {
  page: number;
  per_page?: number;
  search?: string;
}
