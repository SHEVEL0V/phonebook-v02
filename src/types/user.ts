/** @format */

interface IUser {
  status: 200;
  token: string;
  user: {
    _id: {};
    name: string;
    password: string;
    email: string;
    subscription: string;
    avatarURL: string;
    verify: boolean;
    verificationToken: string;
  };
}
export default IUser;
