import { TableActionTypes } from "./tableActionTypes";

export const selectTable = (table) => ({
  type: TableActionTypes.SELECT_TABLE,
  payload: table,
});
export const removeTable = () => ({
  type: TableActionTypes.REMOVE_TABLE,
});
