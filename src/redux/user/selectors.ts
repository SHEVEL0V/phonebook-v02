/** @format */

import { RootState } from "../store";

const isLoggedIn = (state: RootState) => state.auth.isLoggedIn;
const authentication = (state: RootState) => state.auth.authentication;
const loading = (state: RootState) => state.auth.loading;
const userSel = (state: RootState) => state.auth.user;
const avatarURL = (state: RootState) => state.auth.user.avatarURL;

export { isLoggedIn, userSel, loading, authentication, avatarURL };
