import { useDispatch } from "react-redux";
import { changeAmount } from "../store/rates.js";

export function AmountField({ amount }) {
  const dispatch = useDispatch();

  function onChange(e) {
    dispatch(changeAmount(e.targe.value));
  }

  return (
    <form className="ExchangeRate-form">
      <input
        aria-label="Amount in base currency"
        type="text"
        value={amount}
        onChange={onChange}
      />
    </form>
  );
}
