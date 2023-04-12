import { useEffect } from "react";

import CurrencyInput from "./CurrencyInput";

export default function Convertor() {
  const BASE_URL = "https://api.exchangerate.host/latest";

  useEffect(() => {
    fetch(BASE_URL).then((res) => res.json().then((data) => console.log(data)));
  }, []);

  return (
    <div className="convertor">
      <h2>Convert</h2>
      <CurrencyInput />
      <h2>=</h2>
      <CurrencyInput />
    </div>
  );
}
