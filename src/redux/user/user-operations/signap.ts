/** @format */
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";

type Body = { name: string; password: string; email: string };
type Res = {
  token: any;
  user: any;
  message: String;
};

export const singnupUser = createAsyncThunk<Res, Body>(
  "user/register",
  async (credentitals) => {
    try {
      const { data } = await axios.post("/users/register", credentitals);
      Notify.success(data.message);
      return data;
    } catch (err: any) {
      const { message } = err.response.data;
      Notify.failure(message);
      throw new Error("Error singnup user");
    }
  }
);
