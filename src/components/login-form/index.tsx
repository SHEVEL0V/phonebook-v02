/** @format */

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { loading } from "redux/user/selectors";
import { loginUser } from "redux/user/operations";
import Buttton from "components/button/button";
import s from "./style.module.css";

const LoginForm: React.FC = () => {
  const [email, getEmail] = useState("");
  const [password, getPassword] = useState("");
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
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
        children={
          useAppSelector(loading) ? <ClipLoader size={15} /> : <b>login</b>
        }
        disabled={email === "" || password === ""}
        type="submit"
      />
    </form>
  );
};

export default LoginForm;
