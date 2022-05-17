import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart/cartReducer";
import tableReducer from "./table/tableReducer";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
};

const persistConfig = {
  key: "quoality-guest",
  storage,
  whitelist: ["cart", "table"],
};

const rootReducer = combineReducers({
  table: persistReducer(persistConfig, tableReducer),
  cart: cartReducer,
});
const appReducer = combineReducers({
  cart: cartReducer,
  table: tableReducer,
});

export default persistReducer(persistConfig, appReducer);
