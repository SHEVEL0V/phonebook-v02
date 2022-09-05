/** @format */

import { RootState } from "../store";

const responseSel = (state: RootState) => state.contacts.response;
const loadingGetSel = (state: RootState) => state.contacts.loadingGet;
const loadingAddSel = (state: RootState) => state.contacts.loadingAdd;
const loadingUpdateSel = (state: RootState) => state.contacts.loadingUpdate;
const loadingDeleteSel = (state: RootState) => state.contacts.loadingDelete;
const loadingStatusSel = (state: RootState) => state.contacts.loadingStatus;
const errorUpdateSel = (state: RootState) => state.contacts.errorUpdate;
const errorAddSel = (state: RootState) => state.contacts.errorAdd;
const dataSel = (state: RootState) => state.contacts.data;
const totalSel = (state: RootState) => state.contacts.data.total;
const idSel = (state: RootState) => state.contacts.id;

export {
  dataSel,
  responseSel,
  loadingGetSel,
  loadingAddSel,
  loadingUpdateSel,
  loadingDeleteSel,
  loadingStatusSel,
  errorUpdateSel,
  totalSel,
  errorAddSel,
  idSel,
};
