/** @format */
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export const updateAvatar = createAsyncThunk(
  "updateAvatar",
  async (data: any) => {
    try {
      const response = await axios.patch("/users/avatars", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (err: any) {
      Notify.warning(err.message);
    }
  }
);
