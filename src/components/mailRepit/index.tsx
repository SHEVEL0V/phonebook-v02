/** @format */

import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { repitSendMail } from "redux/user/operations";

import s from "./style.module.css";

const MailRepit: React.FC = () => {
  const [status, setStatus] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useAppDispatch();
  const sendMail = () => {
    if (email) {
      dispatch(repitSendMail(email));
    }
  };
  return (
    <div className={s.container}>
      Repite send mail auntefikations:
      <button
        className={s.button}
        type="button"
        onClick={() => (status ? sendMail() : setStatus(!status))}
      >
        {status ? "send" : "open"}
      </button>
      {status && (
        <input
          className={s.input}
          placeholder=" email"
          type="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        ></input>
      )}
    </div>
  );
};
export default MailRepit;
