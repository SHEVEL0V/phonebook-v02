/** @format */

import React, { useState, useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";

import ClipLoader from "react-spinners/ClipLoader";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

import { addContact } from "redux/contacts/operations";
import { loadingAddSel, errorAddSel } from "redux/contacts/selectors";

import s from "./style.module.css";

const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useAppDispatch();
  const loadingAdd = useAppSelector(loadingAddSel);
  const error = useAppSelector(errorAddSel);
  const selectRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    selectRef.current?.focus();

    if (!error && !loadingAdd) {
      setName("");
      setPhone("");
      setEmail("");
    }
  }, [error, loadingAdd]);

  return (
    <form
      className={s.form}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addContact({ name, phone, email }));
      }}
    >
      <label className={s.item}>
        <b className={s.text}>Name:</b>
        <input
          className={s.input}
          type="text"
          name="name"
          ref={selectRef}
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <label className={s.item}>
        <b className={s.text}>Phone:</b>
        <input
          className={s.input}
          type="tel"
          name="phone"
          required
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
      </label>
      <label className={s.item}>
        <b className={s.text}>Email:</b>
        <input
          className={s.input}
          type="email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <button className={s.button} type="submit">
        add contact
        <span>
          {loadingAdd ? (
            <ClipLoader size={15} />
          ) : (
            <BsFillArrowRightSquareFill />
          )}
        </span>
      </button>
    </form>
  );
};

export default Form;
