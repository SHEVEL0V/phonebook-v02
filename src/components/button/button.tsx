/** @format */
import s from "./style.module.css";
interface IProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  type?: "button" | "submit" | undefined;
}

const Buttton: React.FC<IProps> = ({
  children,
  onClick,
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={s.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Buttton;
