import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

import { Book } from "../../types/data-contracts";
import { onGetBooks } from "../../api/requests/books";

export interface BooksState {
  books: Book[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: BooksState = {
  books: [],
  loading: "idle",
};

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async () => {
    const response = await onGetBooks();
    return response.data;
  }
);
export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    cleanBooks: (state) => {
      state.books = [];
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      // Add books to the state array
      state.books = action.payload.books;
    });
  },
});

// Action creators are generated for each case reducer function
export const { cleanBooks } = booksSlice.actions;

export default booksSlice.reducer;
