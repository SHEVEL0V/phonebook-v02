/** @format */

import { NavLink } from "react-router-dom";
import Avatar from "components/avatar";
import LoginForm from "components/login-form";
import { authentication } from "redux/user/selectors";
import s from "./style.module.css";
import { useAppSelector } from "../../redux/hooks";

const Header: React.FC = () => {
  const auth = useAppSelector(authentication);

  return (
    <div className={s.container}>
      {auth ? (
        <>
          <NavLink
            to="/contacts"
            className={s.nav}
            style={({ isActive }) =>
              isActive ? { color: "rgba(234, 221, 221, 0.85)" } : {}
            }
          >
            Contacts
          </NavLink>
          <NavLink
            to="/user"
            className={s.nav}
            style={({ isActive }) =>
              isActive ? { color: "rgba(234, 221, 221, 0.85)" } : {}
            }
          >
            User
          </NavLink>
        </>
      ) : (
        <NavLink to="/" className={s.nav}>
          Home
        </NavLink>
      )}
      {auth ? <Avatar /> : <LoginForm />}
    </div>
  );
};

export default Header;
