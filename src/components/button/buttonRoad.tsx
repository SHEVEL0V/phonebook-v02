/** @format */

import s from "./style.module.css";

interface IProps {
  id?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  type?: "button";
  style?: React.CSSProperties | undefined;
}

const ButttonRoad: React.FC<IProps> = ({
  id,
  children,
  onClick,
  disabled = false,
  type = "button",
  style = {},
}) => {
  return (
    <button
      id={id}
      type={type}
      style={style}
      disabled={disabled}
      className={s.buttonRoad}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButttonRoad;
