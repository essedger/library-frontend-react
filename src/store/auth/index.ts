import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../../types/entities/auth";
import { RootState } from "../store";

export interface MeState {
  me: IUser | undefined;
}

const initialState: MeState = {
  me: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<IUser>) => {
      state.me = action?.payload;
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
    removeAuth: (state) => {
      state.me = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth, removeAuth } = authSlice.actions;
export const selectMe = (state: RootState) => state?.me;
export default authSlice.reducer;
