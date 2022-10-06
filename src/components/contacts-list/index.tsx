/** @format */

import { useEffect } from "react";
import { BeatLoader } from "react-spinners";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  responseSel,
  dataSel,
  loadingGetSel,
  loadingDeleteSel,
  loadingUpdateSel,
  loadingStatusSel,
} from "redux/contacts/selectors";
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
  const loadingDel = useAppSelector(loadingDeleteSel);
  const loadingUpdate = useAppSelector(loadingUpdateSel);
  const loadingSt = useAppSelector(loadingStatusSel);
  const { contacts } = useAppSelector(dataSel);
  const auth = useAppSelector(authentication);
  const limit = useAppSelector(limitSel);
  const page = useAppSelector(pageSel);
  const favorite = useAppSelector(favoriteFilter);
  const dispatch = useAppDispatch();

  const loading = loadingGet || loadingDel || loadingUpdate || loadingSt;

  useEffect(() => {
    if (auth) {
      dispatch(getContact({ limit, page, favorite }));
    }
  }, [dispatch, auth, favorite, limit, page, response]);

  return (
    <div className={s.container}>
      {loading && (
        <div className={s.loader}>
          <BeatLoader size={25} color={"rgb(41, 41, 204)"} />
        </div>
      )}

      <ul>
        {contacts
          ? contacts.map((el) => <ContactCard key={el._id} card={el} />)
          : []}
      </ul>
      {contacts && <Pagination />}
    </div>
  );
};

export default ContactsList;
