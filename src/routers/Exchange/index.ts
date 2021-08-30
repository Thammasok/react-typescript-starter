// Interface
import xxroRouterProps from 'routers/types'

// Views
import Exchange from 'views/Exchange'

const xxroExchangeRouter: xxroRouterProps.PropTypes[] = [
  {
    path: '/exchange',
    exact: true,
    isAuth: false,
    layout: 'main',
    component: Exchange
  }
]

export default xxroExchangeRouter
