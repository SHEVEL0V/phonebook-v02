/** @format */
import { Notify } from "notiflix/build/notiflix-notify-aio";

const axiosError = (err: { response: { data: { message: string } } }) => {
  const { message } = err.response.data;
  Notify.failure(message);
  throw new Error(message);
};

export default axiosError;
