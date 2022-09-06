/** @format */
export type Contact = {
  _id: string;
  owner: string;
  name: string;
  phone: string;
  email: string;
  favorite: true;
};

interface IContacts {
  status?: number;
  total?: number;
  contacts?: [Contact];
}

export default IContacts;
