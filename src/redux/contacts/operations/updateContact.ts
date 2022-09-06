/** @format */
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import IContacts from "../../../types/contact";
import axiosError from "redux/error/errorAxios";

interface IBody {
  id: string;
  contact: { name: string; email: string; phone: string };
}

export const updateContact = createAsyncThunk<IContacts, IBody>(
  "updateContact",
  async ({ id, contact }) => {
    try {
      const { data } = await axios.put(`/contacts/${id}`, contact);
      return data;
    } catch (err: any) {
      axiosError(err);
    }
  }
);
