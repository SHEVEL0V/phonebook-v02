/** @format */
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import axiosError from "redux/error/errorAxios";
import IUser from "types/user";

type Body = { name: string; password: string; email: string };

export const singnupUser = createAsyncThunk<IUser, Body>(
  "user/register",
  async (credentitals) => {
    try {
      const { data } = await axios.post("/users/register", credentitals);
      Notify.success(data.message);
      return data;
    } catch (err: any) {
      axiosError(err);
    }
  }
);
