/** @format */
// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";
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
      const { message } = err.response.data;
      Notify.failure(message);
      throw new Error("authentication error!");
    }
  }
);
