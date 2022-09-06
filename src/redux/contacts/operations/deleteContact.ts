/** @format */
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import IContacts from "../../../types/contact";
import axiosError from "redux/error/errorAxios";

interface IBody {
  id: string;
}

export const deleteContact = createAsyncThunk<IContacts, IBody>(
  "deleteContact",
  async (id) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (err: any) {
      axiosError(err);
    }
  }
);
