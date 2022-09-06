/** @format */

import { NavLink } from "react-router-dom";
import Avatar from "components/avatar";
import LoginForm from "components/login-form";
import { isLoggedIn } from "redux/user/selectors";
import s from "./style.module.css";
import { useAppSelector } from "../../redux/hooks";

const Header: React.FC = () => {
  const statusLogged = useAppSelector(isLoggedIn);

  return (
    <div className={s.container}>
      {statusLogged ? (
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
      {statusLogged ? <Avatar /> : <LoginForm />}
    </div>
  );
};

export default Header;
