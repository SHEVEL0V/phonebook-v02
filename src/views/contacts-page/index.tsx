/** @format */

import Filter from "components/filter";
import Form from "components/contact-form";
import ContactsList from "components/contacts-list";
import s from "./style.module.css";

const ContactsPage: React.FC = () => {
  return (
    <div className={s.container}>
      <div>
        <Form />
        <Filter />
      </div>
      <ContactsList />
    </div>
  );
};
export default ContactsPage;
