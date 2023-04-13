export default function CurrencyInput(props) {
  const {
    currencySymbol,
    selectedCurrency,
    changedCurrency,
    amount,
    changedAmount,
  } = props;
  return (
    <div>
      <input type="number" value={amount} onChange={changedAmount} />
      <select value={selectedCurrency} onChange={changedCurrency}>
        {currencySymbol.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
