/** @format */

import s from "./style.module.css";

interface IProps {
  disabled: boolean;
  name: string;
  value: string;
  setValue: React.ChangeEventHandler<HTMLInputElement> | undefined;
  type: string;
  style: React.CSSProperties | undefined;
}

const Input: React.FC<IProps> = ({
  disabled = false,
  name = "email",
  value = "text",
  setValue,
  type,
  style,
}) => {
  return (
    <div className={s.container}>
      <b className={s.text}>{name}:</b>
      <input
        type={type}
        name={name}
        value={value}
        style={style}
        disabled={disabled}
        onChange={setValue}
        className={s.input}
      ></input>
    </div>
  );
};

export default Input;
