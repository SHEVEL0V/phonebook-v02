/** @format */
// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosError from "redux/error/errorAxios";
import { token } from "../../../service/axios";
import { RootState } from "../../store";

export const fetchCurentUser = createAsyncThunk(
  "fetchCurentUser",
  async (_, thunkAPI: any) => {
    const state: RootState = thunkAPI.getState();
    const tokenCurentUser = state.auth.token;

    if (!tokenCurentUser) {
      throw new Error("authentication error!");
    }

    token.set(tokenCurentUser);

    try {
      // await axios.get('/contacts');
      console.log("authentication");
    } catch (err: any) {
      axiosError(err);
    }
  }
);
