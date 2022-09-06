/** @format */

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./style.module.css";

const modalRoot = document.querySelector("#root");

interface IProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<IProps> = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDoun = (e: { code: string }) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDoun);

    return () => {
      window.removeEventListener("keydown", handleKeyDoun);
    };
  }, [onClose]);

  // function handelBackdropClick(e) {
  //   if (e.currentTarget === e.target) {
  //     onClose();
  //   }}

  return createPortal(
    <div className={s.backdrop}>
      <div className={s.content}>{children}</div>
    </div>,
    modalRoot as HTMLElement
  );
};
export default Modal;
