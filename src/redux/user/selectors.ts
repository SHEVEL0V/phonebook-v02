/** @format */

import { RootState } from "../store";

const authentication = (state: RootState) => state.auth.authentication;
const userSel = (state: RootState) => state.auth.user;
const avatarURL = (state: RootState) => state.auth.user.avatarURL;
const isloadedReg = (state: RootState) => state.auth.isloadedReg;
const isloadedLog = (state: RootState) => state.auth.isloadedLog;
const isloadedAdd = (state: RootState) => state.auth.isloadedAdd;

export {
  userSel,
  isloadedReg,
  isloadedLog,
  isloadedAdd,
  authentication,
  avatarURL,
};
