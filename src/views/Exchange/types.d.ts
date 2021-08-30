declare namespace xxvExchangeProps {
  interface ExchangeRate {
    currency: String
    rate: String
    name: String
  }

  interface ExchangeVars {
    currencyType: string
  }

  interface ExchangePropTypes {
    rates: ExchangeRate[]
  }
}

export default xxvExchangeProps
