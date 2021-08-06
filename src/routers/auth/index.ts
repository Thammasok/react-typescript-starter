// Interface
import xxrRouterProps from 'routers/types'

// Views
import Home from 'views/Home'

const xxrAuthRouter: xxrRouterProps.PropTypes[] = [
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

export default xxrAuthRouter
