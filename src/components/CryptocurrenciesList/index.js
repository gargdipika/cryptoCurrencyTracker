// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptocurrencyList: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrencyList()
  }

  getCryptocurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
    }))
    console.log(updatedData)

    this.setState({cryptocurrencyList: updatedData, isLoading: false})
  }

  render() {
    const {cryptocurrencyList, isLoading} = this.state

    return (
      <div className="background-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="inner-container">
            <h1 className="crypto-topic">Cryptocurrency Tracker</h1>
            <img
              className="crypto-image"
              alt="cryptocurrency"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            />
            <ul>
              <li className="currency-item-container background-list">
                <p className="currency-name">Coin Type</p>
                <div className="row-container">
                  <p className="currency-name">USD</p>
                  <p className="currency-name">EURO</p>
                </div>
              </li>
              {cryptocurrencyList.map(eachCurrency => (
                <CryptocurrencyItem
                  key={eachCurrency.id}
                  currencyItem={eachCurrency}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
