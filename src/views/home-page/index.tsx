/** @format */

import { useAppSelector } from "../../redux/hooks";
import { useState, useEffect } from "react";

import { authentication } from "redux/user/selectors";

import Modal from "components/modal";
import SignupForm from "components/singnup-form";
import Buttton from "components/button/button";

import s from "./style.module.css";

const HomePge: React.FC = () => {
  const [modal, setModal] = useState(false);
  const status = useAppSelector(authentication);
  const onModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (status) {
      setModal(false);
    }
  }, [status]);
  return (
    <div className={s.container}>
      <h1 className={s.title}>Hello</h1>
      <div>
        {modal && (
          <Modal onClose={onModal}>
            <SignupForm onClose={onModal} />
          </Modal>
        )}
        <Buttton children={"Signup"} onClick={() => setModal(true)} />
      </div>
    </div>
  );
};
export default HomePge;
