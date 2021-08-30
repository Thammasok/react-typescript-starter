import { gql } from '@apollo/client'

const xxgqlExchange = {
  GET_EXCHANGE_RATES: gql`
    query GetExchangeRates($currencyType: String!) {
      rates(currency: $currencyType) {
        currency
        rate
      }
    }
  `
}

export default xxgqlExchange
