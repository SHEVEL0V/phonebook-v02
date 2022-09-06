/** @format */

import s from "./style.module.css";

interface IProps {
  children: React.ReactNode;
}

const Conteiner: React.FC<IProps> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default Conteiner;
