/** @format */

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { loading } from "redux/user/user-selectors";
import { loginUser } from "redux/user/user-operations";
import Buttton from "components/button/button";
import s from "./style.module.css";

export default function LoginForm() {
  const [email, getEmail] = useState("");
  const [password, getPassword] = useState("");
  const dispatch = useAppDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if ((email, password)) {
      dispatch(
        loginUser({
          email,
          password,
        })
      );

      getEmail("");
      getPassword("");
    }
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <label className={s.items}>
        email:
        <input
          name="email"
          onChange={(e) => getEmail(e.target.value)}
          value={email}
        ></input>
      </label>
      <label className={s.items}>
        password:
        <input
          type="password"
          name="password"
          onChange={(e) => getPassword(e.target.value)}
          value={password}
        ></input>
      </label>
      <Buttton
        text={useAppSelector(loading) ? <ClipLoader size={15} /> : "login"}
        disabled={email === "" || password === ""}
        type="submit"
      />
    </form>
  );
}
