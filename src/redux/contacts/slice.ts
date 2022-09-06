/** @format */
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import IContacts from "types/contact";
import {
  getContact,
  addContact,
  updateContact,
  deleteContact,
  addStatusFavorite,
} from "./operations";

interface IState {
  data: IContacts;
  loadingGet: boolean;
  loadingAdd: boolean;
  loadingUpdate: boolean;
  loadingDelete: boolean;
  loadingStatus: boolean;
  errorUpdate: boolean;
  errorAdd: boolean;
  response: {};
  id: string | null;
}

const contactsInitialState: IState = {
  data: {},
  loadingGet: false,
  loadingAdd: false,
  loadingUpdate: false,
  loadingDelete: false,
  loadingStatus: false,
  errorUpdate: false,
  errorAdd: false,
  response: {},
  id: null,
};

const contacts = createSlice({
  name: "contactsSlice",
  initialState: contactsInitialState,
  reducers: {
    updateId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContact.pending, (state) => {
        state.loadingGet = true;
      })
      .addCase(getContact.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loadingGet = false;
      })
      .addCase(getContact.rejected, (state) => {
        state.loadingGet = true;
      })
      .addCase(addContact.pending, (state) => {
        state.loadingAdd = true;
        state.errorAdd = false;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.loadingAdd = false;
        state.errorAdd = false;
        state.response = payload;
      })
      .addCase(addContact.rejected, (state) => {
        state.loadingAdd = false;
        state.errorAdd = true;
      })
      .addCase(updateContact.pending, (state) => {
        state.errorUpdate = false;
        state.loadingUpdate = true;
      })
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        state.loadingUpdate = false;
        state.errorUpdate = false;
        state.response = payload;
      })
      .addCase(updateContact.rejected, (state) => {
        state.errorUpdate = true;
        state.loadingUpdate = false;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loadingDelete = true;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.loadingDelete = false;
        state.response = payload;
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loadingDelete = false;
      })
      .addCase(addStatusFavorite.pending, (state) => {
        state.loadingStatus = true;
      })
      .addCase(addStatusFavorite.fulfilled, (state, { payload }) => {
        state.loadingStatus = false;
        state.response = payload;
      });
  },
});

export const { updateId } = contacts.actions;

export default contacts.reducer;
