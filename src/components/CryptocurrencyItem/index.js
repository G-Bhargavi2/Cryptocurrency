// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyData} = props

  const {currencyLogo, currencyName, euroValue, usdValue} = cryptocurrencyData
  console.log(currencyLogo)

  return (
    <li className="list-row-container">
      <div className="currency-container">
        <img className="currency-img" src={currencyLogo} alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="values-container">
        <p className="value">{usdValue}</p>
        <p className="value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
