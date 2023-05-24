// Write your JS code here

import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptocurrencyListHeader = () => (
    <div className="list-header">
      <p className="row-header">Coin Type</p>
      <div className="values-container">
        <p className="row-value-header">USD</p>
        <p className="row-value-header">EURO</p>
      </div>
    </div>
  )

  renderCryptocurrenciesList = () => {
    const {cryptocurrenciesData} = this.props
    return (
      <div className="crypto-currency-list">
        {this.renderCryptocurrencyListHeader()}
        <ul className="list-rows">
          {cryptocurrenciesData.map(eachCryptocurrency => (
            <CryptocurrencyItem
              cryptocurrencyData={eachCryptocurrency}
              key={eachCryptocurrency.id}
            />
          ))}
        </ul>
        {/* */}
      </div>
    )
  }

  render() {
    return (
      <div className="crypto-currency-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
          alt="cryptocurrency"
        />
        {this.renderCryptocurrenciesList()}
      </div>
    )
  }
}

export default CryptocurrenciesList
