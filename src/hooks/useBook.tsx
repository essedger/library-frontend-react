import { useQuery } from "react-query";

import { onGetBook } from "../api/requests/books";
import { Book } from "../types/data-contracts";

export const useBook = (bookId = "") => {
  return useQuery<Book>(
    ["book", bookId],
    async () => {
      const response = await onGetBook(bookId);
      return response.data;
    }
    // This tells React-Query that this is Query is part of
    // a paginated component
    // { keepPreviousData: true }
  );
};
