/** @format */

import { RootState } from "../store";

const pageSel = (state: RootState) => state.pagination.page;
const limitSel = (state: RootState) => state.pagination.limit;

export { pageSel, limitSel };
