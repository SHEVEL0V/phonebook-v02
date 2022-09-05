/** @format */
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface IState {
  page: number;
  limit: number;
  favorite: boolean;
  id: number | null;
}

const initialPaginationState: IState = {
  page: 1,
  limit: 5,
  favorite: false,
  id: null,
};

const pagination = createSlice({
  name: "paginationSlice",
  initialState: initialPaginationState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },

    decrementPage: (state) => {
      if (state.page > 1) state.page -= 1;
    },
    updateLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },

    updatePage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { incrementPage, decrementPage, updateLimit, updatePage } =
  pagination.actions;

export default pagination.reducer;
