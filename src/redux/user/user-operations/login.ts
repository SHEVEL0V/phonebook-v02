/** @format */
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { token } from "../../../service/axios";

type Body = { password: String; email: string };
type Res = {
  status: 200;
  token: String;
  user: {
    _id: {};
    name: String;
    password: String;
    email: String;
    subscription: String;
    avatarURL: String;
    verify: true;
    verificationToken: String;
  };
};

export const loginUser = createAsyncThunk<Res, Body>(
  "loginUser",
  async (credentitals) => {
    try {
      const { data } = await axios.post("/users/login", credentitals);
      token.set(data.token);
      return data;
    } catch (err: any) {
      const { message } = err.response.data;
      Notify.failure(message);
      throw new Error("Error login user");
    }
  }
);
