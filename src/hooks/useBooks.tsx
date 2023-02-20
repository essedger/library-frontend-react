import { useQuery } from "react-query";

import { onGetBooks } from "../api/requests/books";
import { BooksRequest, BooksResponse } from "../types/entities";

export const useBooks = ({
  page: page,
  per_page = 12,
  search,
}: BooksRequest) => {
  return useQuery<BooksResponse>(
    ["books", page, search],
    async () => {
      const response = await onGetBooks({ page: page, search, per_page });
      return response.data;
    },
    // This tells React-Query that this is Query is part of
    // a paginated component
    { keepPreviousData: true }
  );
};
