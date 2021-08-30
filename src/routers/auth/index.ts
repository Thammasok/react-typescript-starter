// Interface
import xxroRouterProps from 'routers/types'

// Views
import Home from 'views/HomePage'

const xxroAuthRouter: xxroRouterProps.PropTypes[] = [
  {
    path: '/login',
    exact: true,
    isAuth: false,
    layout: 'full',
    component: Home
  },
  {
    path: '/register',
    exact: true,
    isAuth: false,
    layout: 'full',
    component: Home
  }
]

export default xxroAuthRouter
