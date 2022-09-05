/** @format */

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialFilterState = {
  favorite: false,
};

const filter = createSlice({
  name: "filter",
  initialState: initialFilterState,
  reducers: {
    updateFavorite: (state, action: PayloadAction<boolean>) => {
      state.favorite = action.payload;
    },
  },
});

export const { updateFavorite } = filter.actions;

export default filter.reducer;
