import { TableActionTypes } from "./tableActionTypes";

const INITIAL_STATE = {
  tableId: "",
  bookingTime: [],
  bookingDate: "",
  seat: 2,
  phoneNumber: "",
  customerName: "",
};

const tableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TableActionTypes.SELECT_TABLE:
      return {
        ...action.payload,
      };
    case TableActionTypes.REMOVE_TABLE:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};

export default tableReducer;
