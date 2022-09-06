/** @format */
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import IUser from "types/user";
import { token } from "../../../service/axios";
import axiosError from "redux/error/errorAxios";

type Body = { password: String; email: string };

export const loginUser = createAsyncThunk<IUser, Body>(
  "loginUser",
  async (credentitals) => {
    try {
      const { data } = await axios.post("/users/login", credentitals);
      token.set(data.token);
      return data;
    } catch (err: any) {
      axiosError(err);
    }
  }
);
