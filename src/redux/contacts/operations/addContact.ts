/** @format */
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import IContacts from "../../../types/contact";
import axiosError from "redux/error/errorAxios";

interface IBody {
  name: string;
  email: string;
  phone: string;
}

export const addContact = createAsyncThunk<IContacts, IBody>(
  "addContact",
  async (contact) => {
    try {
      const { data } = await axios.post("/contacts", contact);
      return data;
    } catch (err: any) {
      axiosError(err);
    }
  }
);
