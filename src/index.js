import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ExchangeRate } from "./components/ExchangeRate";
import { changeCurrencyCode, getCurrencyCode } from "./store/rate";
import "./style.css";

//Making the application low latency
store.dispatch(function getInitialRates(dispatch, getState) {
  const state = getState();
  const currencyCode = getCurrencyCode(state);
  dispatch(changeCurrencyCode(currencyCode));
});

ReactDOM.render(
  <Provider store={store}>
    <ExchangeRate />
  </Provider>,
  document.getElementById("root")
);
