/** @format */
// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export const updateAvatar = createAsyncThunk(
  "updateAvatar",
  async (credentitals) => {
    console.log("add photo !!!  axios response Cors");
    try {
      Notify.success("add photo !!!  axios response Cors");
      // const { data } = await axios.patch('/users/avatars', {
      //   data: credentitals,
      //   headers: { 'Content-Type': 'multipart/form-data' },
      // });
      // return data;
    } catch (err: any) {
      const { message } = err.response.data;
      Notify.failure(message);
      throw new Error("Error update avatar");
    }
  }
);
