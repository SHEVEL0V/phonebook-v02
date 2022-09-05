/** @format */

import { createSlice } from "@reduxjs/toolkit";

import {
  singnupUser,
  loginUser,
  repitSendMail,
  logoutUser,
  // fetchCurentUser,
  // updateAvatar,
} from "./user-operations";

export interface IState {
  user: { name: String; email: String; avatarURL: String };
  token: String;
  isLoggedIn: Boolean;
  authentication: Boolean;
  loading: Boolean;
}

const initialState: IState = {
  user: { name: "", email: "", avatarURL: "" },
  token: "",
  isLoggedIn: false,
  authentication: false,
  loading: false,
};

const user = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(singnupUser.pending, (state) => {
        state.authentication = false;
        state.loading = true;
      })
      .addCase(singnupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.authentication = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(singnupUser.rejected, (state) => {
        state.authentication = false;
        state.loading = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.authentication = true;
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
      })
      .addCase(repitSendMail.pending, (state) => {
        state.loading = true;
      })
      .addCase(repitSendMail.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(repitSendMail.rejected, (state) => {
        state.loading = false;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoggedIn = false;
      });
  },
});

const userReduser = user.reducer;
export default userReduser;
