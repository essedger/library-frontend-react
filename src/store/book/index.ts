import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Book } from "../../types/data-contracts";
import { onGetBook } from "../../api/requests/books";

export interface BooksState {
  book: Book | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: BooksState = {
  book: null,
  loading: "idle",
};

export const fetchBookById = createAsyncThunk(
  "book/fetchBook",
  async (bookId: string) => {
    const response = await onGetBook(bookId);
    return response.data;
  }
);
export const booksSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    cleanBook: (state) => {
      state.book = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBookById.fulfilled, (state, action) => {
      // Add books to the state array
      state.book = action.payload?.[0];
    });
  },
});

export const { cleanBook } = booksSlice.actions;

export default booksSlice.reducer;
