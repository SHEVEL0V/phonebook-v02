/** @format */
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { userSel, avatarURL } from "redux/user/user-selectors";
import { logoutUser } from "redux/user/user-operations";
import s from "./style.module.css";

export default function Avatar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { name } = useAppSelector(userSel);
  const avatar = useAppSelector(avatarURL);
  const logOut = () => {
    dispatch(logoutUser());
    navigate("./");
  };
  return (
    <div className={s.avatar_container}>
      <div className={s.button_container}>
        <samp className={s.name}>{name ? name : "name"}</samp>
        <button className={s.button} onClick={logOut}>
          <b>Out</b>
        </button>
      </div>
      <div className={s.avatar}>
        <img className={s.img} src={avatar} alt="avatar" />
      </div>
    </div>
  );
}
