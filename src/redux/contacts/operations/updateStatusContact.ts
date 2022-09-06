/** @format */
import axios from "axios";
import axiosError from "redux/error/errorAxios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import IContacts from "../../../types/contact";

interface IBody {
  id: string;
  favorite: boolean;
}

export const addStatusFavorite = createAsyncThunk<IContacts, IBody>(
  "addStatusFavorite",
  async ({ id, favorite }) => {
    try {
      const { data } = await axios.put(`/contacts/${id}/favorite`, {
        favorite,
      });
      return data;
    } catch (err: any) {
      axiosError(err);
    }
  }
);
