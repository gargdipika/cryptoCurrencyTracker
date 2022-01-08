// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItem} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = currencyItem

  return (
    <li className="currency-item-container">
      <div className="row-container">
        <img className="image-currency" alt={currencyName} src={currencyLogo} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="row-container">
        <p className="currency-name">{usdValue}</p>
        <p className="currency-name">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
