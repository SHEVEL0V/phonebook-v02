/** @format */
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import axiosError from "redux/error/errorAxios";

type Body = string;
type Res = { message: String };

export const repitSendMail = createAsyncThunk<Res, Body>(
  "repitSendMail",
  async (email) => {
    try {
      const { data } = await axios.post("/users/verify", { email: email });
      Notify.success(`Email send to email: ${email}`);
      return data;
    } catch (err: any) {
      axiosError(err);
    }
  }
);
