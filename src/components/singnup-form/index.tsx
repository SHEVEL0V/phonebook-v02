/** @format */

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import ClipLoader from "react-spinners/ClipLoader";
import MailRepit from "components/mailRepit";
import { isloadedReg } from "redux/user/selectors";
import { singnupUser } from "redux/user/operations";
import Buttton from "components/button/button";
import s from "./style.module.css";

interface IProps {
  onClose: () => void;
}

const SignupForm: React.FC<IProps> = ({ onClose }) => {
  const [name, getName] = useState("");
  const [email, getEmail] = useState("");
  const [password, getPassword] = useState("");

  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(singnupUser({ name, email, password }));
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <button className={s.buttonClose} type="button" onClick={onClose}>
        <IoClose />
      </button>
      <label className={s.item}>
        name:
        <input
          className={s.input}
          name="name"
          placeholder=" name"
          onChange={(e) => getName(e.target.value)}
          value={name}
        ></input>
      </label>
      <label className={s.item}>
        email:
        <input
          className={s.input}
          name="email"
          placeholder=" email"
          onChange={(e) => getEmail(e.target.value)}
          value={email}
        ></input>
      </label>
      <label className={s.item}>
        password:
        <input
          className={s.input}
          name="password"
          placeholder=" password"
          onChange={(e) => getPassword(e.target.value)}
          value={password}
        ></input>
      </label>

      <Buttton
        children={
          useAppSelector(isloadedReg) ? <ClipLoader size={15} /> : "signup"
        }
        type="submit"
        disabled={name === "" || email === "" || password === ""}
      />
      <MailRepit />
    </form>
  );
};

export default SignupForm;
