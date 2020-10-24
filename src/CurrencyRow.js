import React from 'react'

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount
} = props

  return (
    <div>
      <input id='input' type='number' className="input" value={amount} onChange={onChangeAmount} />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.sort().map(option => (
          <option key={option} value={option}> {option} </option>
        ))}
      </select>
    </div>
  )
}