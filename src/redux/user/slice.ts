/** @format */

import { createSlice } from "@reduxjs/toolkit";

import {
  singnupUser,
  loginUser,
  repitSendMail,
  logoutUser,
  fetchCurentUser,
  updateAvatar,
} from "./operations";

export interface IState {
  user: { name: string; email: string; avatarURL: string };
  token: string;
  authentication: boolean;
  isloadedReg: boolean;
  isloadedLog: boolean;
  isloadedAdd: boolean;
}

const initialState: IState = {
  user: { name: "", email: "", avatarURL: "" },
  token: "",
  authentication: false,
  isloadedReg: false,
  isloadedLog: false,
  isloadedAdd: false,
};

const user = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(singnupUser.pending, (state) => {
        state.authentication = false;
        state.isloadedReg = true;
      })
      .addCase(singnupUser.fulfilled, (state, action) => {
        state.isloadedReg = false;
        state.authentication = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(singnupUser.rejected, (state) => {
        state.authentication = false;
        state.isloadedReg = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.isloadedLog = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.authentication = true;
        state.isloadedLog = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isloadedLog = false;
      })
      .addCase(repitSendMail.pending, (state) => {
        state.isloadedReg = true;
      })
      .addCase(repitSendMail.fulfilled, (state) => {
        state.isloadedReg = false;
      })
      .addCase(repitSendMail.rejected, (state) => {
        state.isloadedReg = false;
      })
      .addCase(fetchCurentUser.fulfilled, (state) => {
        state.authentication = true;
      })
      .addCase(updateAvatar.pending, (state) => {
        state.isloadedAdd = true;
      })
      .addCase(updateAvatar.fulfilled, (state, { payload }) => {
        state.isloadedAdd = false;
        state.user.avatarURL = payload.avatarURL;
      })
      .addCase(updateAvatar.rejected, (state) => {
        state.isloadedAdd = false;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.authentication = false;
      });
  },
});

const userReduser = user.reducer;
export default userReduser;
