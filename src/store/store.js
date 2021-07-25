import { createStore, combineReducers } from "redux";

import { userReducer } from "./user.js";
import { ratesReducer } from "./rates.js";

export const store = createStore(
  combineReducers({
    user: userReducer,
    rates: ratesReducer,
  })
);
