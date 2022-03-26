import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";

import appReducer from "./appReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const myMiddleware = (store) => (next) => (action) => {
 
  return next(action);
};

const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(myMiddleware))
);

const persistor = persistStore(store);

export { store, persistor };
