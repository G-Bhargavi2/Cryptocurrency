import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {cryptocurrenciesData: [], isLoading: true}

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  componentDidMount = () => {
    this.getCryptocurrencyData()
  }

  setCryptocurrencies = (data, loadingStatus) => {
    this.setState({
      cryptocurrenciesData: data.map(eachCryptocurrency => ({
        id: eachCryptocurrency.id,
        currencyLogo: eachCryptocurrency.currency_logo,
        currencyName: eachCryptocurrency.currency_name,
        euroValue: eachCryptocurrency.euro_value,
        usdValue: eachCryptocurrency.usd_value,
      })),
      isLoading: loadingStatus,
    })
  }

  getCryptocurrencyData = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()
    // console.log(data)
    this.setCryptocurrencies(data, false)
  }

  renderCryptocurrencyTracker = () => {
    const {cryptocurrenciesData} = this.state
    console.log(cryptocurrenciesData)
    return <CryptocurrenciesList cryptocurrenciesData={cryptocurrenciesData} />
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? this.renderLoader() : this.renderCryptocurrencyTracker()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
