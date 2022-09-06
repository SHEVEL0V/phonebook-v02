/** @format */

import { useEffect } from "react";
import { BeatLoader } from "react-spinners";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { responseSel, dataSel, loadingGetSel } from "redux/contacts/selectors";
import { getContact } from "redux/contacts/operations";
import { authentication } from "redux/user/selectors";
import { limitSel, pageSel } from "redux/pagination/selectors";
import { favoriteFilter } from "redux/filter/selectors";
import ContactCard from "./card";
import Pagination from "components/pagination";

import s from "./style.module.css";

const ContactsList: React.FC = () => {
  const response = useAppSelector(responseSel);
  const loadingGet = useAppSelector(loadingGetSel);

  const { contacts } = useAppSelector(dataSel);
  const status = useAppSelector(authentication);
  const limit = useAppSelector(limitSel);
  const page = useAppSelector(pageSel);

  const favorite = useAppSelector(favoriteFilter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status) {
      dispatch(getContact({ limit, page, favorite }));
    }
  }, [dispatch, status, favorite, limit, page, response]);

  return (
    <div className={s.container}>
      <div className={s.spiner}>
        {loadingGet && <BeatLoader color={"rgb(41, 41, 204)"} />}
      </div>

      <ul>
        {contacts
          ? contacts.map((el) => <ContactCard key={el._id && ""} card={el} />)
          : []}
      </ul>
      {contacts && <Pagination />}
    </div>
  );
};

export default ContactsList;
