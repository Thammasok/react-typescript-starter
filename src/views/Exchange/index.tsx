import { useQuery } from '@apollo/client'
import xxgqlExchange from './Exchange.gql'
import xxvExchangeProps from './types'

const Exchange = () => {
  const { loading, error, data } = useQuery<
    xxvExchangeProps.ExchangePropTypes,
    xxvExchangeProps.ExchangeVars
  >(xxgqlExchange.GET_EXCHANGE_RATES, { variables: { currencyType: 'USD' } })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      {data &&
        data.rates.map(({ currency, rate }) => (
          <div key={`${currency}`}>
            <p>
              {currency}: {rate}
            </p>
          </div>
        ))}
    </div>
  )
}

export default Exchange
