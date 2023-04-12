export default function CurrencyInput(props) {
  const { currencySymbol, selectedCurrency } = props;
  return (
    <div>
      <input type="number" />
      <select value={selectedCurrency}>
        {currencySymbol.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
