const initialState = {
  amount: "12:00",
  currencyCode: "USD",
};

export function ratesReducer(state = initialState, action) {
  switch (action.type) {
    case "amountChanged":
      return { ...state, amount: action.payload };
    case "currencyCodeChanged":
      return { ...state, currencyCode: action.payload };
    default:
      return state;
  }
}
