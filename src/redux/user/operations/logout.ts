/** @format */
import { token } from "../../../service/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const logoutUser = createAsyncThunk("logoutUser", () => {
  token.unset("none");
});
