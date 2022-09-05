/** @format */

import { useAppSelector } from "../../redux/hooks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAvatar } from "redux/user/user-operations";
import { userSel } from "redux/user/user-selectors";
import s from "./style.module.css";

export default function UserPage() {
  const [file, setFile] = useState("");
  const { avatarURL, name, email } = useAppSelector(userSel);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    setFile(e.target.files);
  };

  return (
    <div className={s.container}>
      <img className={s.img} src={avatarURL} alt="avatar" />
      <form className={s.form} onChange={onSubmit}>
        <label>
          <input type="file" name="file" />
          <button
            className={s.button}
            type="button"
            onClick={() => {
              dispatch(updateAvatar(file));
            }}
          >
            add photo
          </button>
        </label>

        <b className={s.text}>Name: {name}</b>
        <b className={s.text}>
          Email:
          <a target="blank" href={email}>
            {email}
          </a>
        </b>
      </form>
    </div>
  );
}
