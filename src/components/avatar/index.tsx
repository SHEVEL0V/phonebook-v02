/** @format */
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { userSel, avatarURL } from "redux/user/selectors";
import { logoutUser } from "redux/user/operations";
import s from "./style.module.css";
import img from "../../img/avatar-1-768x768.jpeg";

const Avatar: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { name } = useAppSelector(userSel);
  const avatar = useAppSelector(avatarURL);
  console.log(avatar);

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
        <img className={s.img} src={img} alt="avatar" />
      </div>
    </div>
  );
};

export default Avatar;
