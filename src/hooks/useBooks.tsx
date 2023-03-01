import { useQuery } from "react-query";

import { onGetBooks } from "../api/requests/books";
import { BooksRequest, BooksResponse } from "../types/entities";

export const useBooks = ({
  page: page,
  per_page = 12,
  search,
}: BooksRequest) => {
  return useQuery<BooksResponse>(
    ["books", page, search, per_page],
    async () => {
      const params = {
        page: page,
        per_page: per_page,
        search: search?.length ? search : undefined,
      };
      const response = await onGetBooks(params);
      return response.data;
    },
    // This tells React-Query that this is Query is part of
    // a paginated component
    { keepPreviousData: true }
  );
};
