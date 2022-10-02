/** @format */
// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosError from "redux/error/errorAxios";
import { token } from "../../../service/axios";

export const fetchCurentUser = createAsyncThunk(
  "fetchCurentUser",
  async (_, thunkAPI: any) => {
    const state = thunkAPI.getState();
    const tokenCurentUser = state.auth.token;

    if (!tokenCurentUser) {
      throw new Error("authentication error!");
    }

    token.set(tokenCurentUser);

    try {
      await axios.get("/contacts?page=1&limit=1&favorite=false");
      console.log("authentication");
      return;
    } catch (err: any) {
      axiosError(err);
    }
  }
);
