/** @format */

import axios from "axios";
import axiosError from "redux/error/errorAxios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import IContacts from "../../../types/contact";

interface IParams {
  limit: number;
  page: number;
  favorite: boolean;
}

export const getContact = createAsyncThunk<IContacts, IParams>(
  "getContact",
  async (req) => {
    const { limit, page, favorite } = req;
    try {
      const { data } = await axios.get("/contacts", {
        params: {
          limit,
          page,
          favorite,
        },
      });
      return data;
    } catch (err: any) {
      axiosError(err);
    }
  }
);
