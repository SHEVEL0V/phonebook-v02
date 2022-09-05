/** @format */

import axios from "axios";

const USERS_URL = "https://api-shevelov.herokuapp.com/api";

axios.defaults.baseURL = USERS_URL;

export const token = {
  set(token: String) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(st: String) {
    axios.defaults.headers.common.Authorization = `${st}`;
  },
};
