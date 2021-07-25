import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./user.js";
import { ratesReducer } from "./rates.js";

export const store = createStore(
  combineReducers({
    user: userReducer,
    rates: ratesReducer,
  }),
  applyMiddleware(thunk)
);
