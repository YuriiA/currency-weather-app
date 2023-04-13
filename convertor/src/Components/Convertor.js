import { useEffect, useState } from "react";

import CurrencyInput from "./CurrencyInput";

export default function Convertor() {
  const BASE_URL = "https://api.exchangerate.host/latest";

  const [currencySymbol, setCurrencySymbol] = useState([]);
  const [currencyToConvert, setCurrencyToConvert] = useState();
  const [convertedCurrency, setConvertedCurrency] = useState();
  const [rate, setRate] = useState();
  const [amount, setAmount] = useState(1);
  const [toInput, setToInput] = useState(true);

  let input1, input2;
  if (toInput) {
    input2 = amount;
    input1 = amount * rate;
  } else {
    input1 = amount;
    input2 = amount / rate;
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setCurrencySymbol([data.base, ...Object.keys(data.rates)]);
        setCurrencyToConvert(data.base);
        setConvertedCurrency(Object.keys(data.rates)[0]);
        setRate(data.rates[Object.keys(data.rates)[0]]);
      });
  }, []);

  function handleFromChangedAmount(e) {
    setAmount(e.target.value);
    setToInput(true);
  }

  function handleToChangedAmount(e) {
    setAmount(e.target.value);
    setToInput(false);
  }
  return (
    <div className="convertor">
      <h2>Convert</h2>
      <CurrencyInput
        currencySymbol={currencySymbol}
        selectedCurrency={currencyToConvert}
        changedCurrency={(e) => setCurrencyToConvert(e.target.value)}
        changedAmount={handleFromChangedAmount}
        amount={input2}
      />
      <h2>=</h2>
      <CurrencyInput
        currencySymbol={currencySymbol}
        selectedCurrency={convertedCurrency}
        changedCurrency={(e) => setConvertedCurrency(e.target.value)}
        changedAmount={handleToChangedAmount}
        amount={input1}
      />
    </div>
  );
}
