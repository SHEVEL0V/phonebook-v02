/** @format */
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";

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
      const { message } = err.response.data;
      Notify.failure(message);
      throw new Error("Error is emait not found");
    }
  }
);
