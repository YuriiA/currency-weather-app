import { useEffect, useState } from "react";

import CurrencyInput from "./CurrencyInput";

export default function Convertor() {
  const BASE_URL = "https://api.exchangerate.host/latest";

  const [currencySymbol, setCurrencySymbol] = useState([]);
  const [currencyToConvert, setCurrencyToConvert] = useState([]);
  const [convertedCurrency, setConvertedCurrency] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setCurrencySymbol([data.base, ...Object.keys(data.rates)]);
        setCurrencyToConvert(data.base);
        setConvertedCurrency(Object.keys(data.rates)[0]);
      });
  }, []);

  return (
    <div className="convertor">
      <h2>Convert</h2>
      <CurrencyInput
        currencySymbol={currencySymbol}
        selectedCurrency={currencyToConvert}
      />
      <h2>=</h2>
      <CurrencyInput
        currencySymbol={currencySymbol}
        selectedCurrency={convertedCurrency}
      />
    </div>
  );
}
