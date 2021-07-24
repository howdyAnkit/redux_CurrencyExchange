import { createStore } from "redux";

const initialState = {
  amount: "12:00",
  currencyCode: "USD",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "amountChanged":
      return { ...state, amount: action.payload };
      break;
    case "currencyCodeChanged":
      return { ...state, currencyCode: action.payload };
    default:
      return state;
  }
}

export const store = createStore(reducer);
