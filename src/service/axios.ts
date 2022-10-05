/** @format */

import axios from "axios";

const USERS_URL = "http://localhost:3030/api";

axios.defaults.baseURL = USERS_URL;

export const token = {
  set(token: String) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(st: String) {
    axios.defaults.headers.common.Authorization = `${st}`;
  },
};
