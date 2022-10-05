/** @format */

import { useState } from "react";
import { updateAvatar } from "redux/user/operations";
import { isloadedAdd, userSel } from "redux/user/selectors";
import ClipLoader from "react-spinners/ClipLoader";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import s from "./style.module.css";
import icon from "../../assets/svg/addPhoto.svg";

const UserPage = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const { avatarURL, name, email } = useAppSelector(userSel);
  const status = useAppSelector(isloadedAdd);
  const dispatch = useAppDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", selectedFile);
    dispatch(updateAvatar(formData));
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <div className={s.container}>
      <img className={s.img} src={avatarURL} alt="avatar" />
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.cnt}>
          <img src={icon} alt="Logo" />
          <input
            style={{ display: "none" }}
            type="file"
            onChange={handleFileSelect}
          />
          <button className={s.btn} type="submit" disabled={!selectedFile}>
            {status ? <ClipLoader size={15} /> : "add"}
          </button>
        </label>
        <div className={s.cnt}>
          <p className={s.text}>
            Name:<b> {name}</b>
          </p>
          <p className={s.text}>
            Email:
            <a target="blank" href={email}>
              {email}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default UserPage;
