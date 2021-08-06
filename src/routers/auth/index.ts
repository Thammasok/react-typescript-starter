// Interface
import xxrRouterProps from 'routers/model'

// Views
import Home from '../../views/home'

const xxrAuthRouter: xxrRouterProps.Router[] = [
  {
    path: '/login',
    exact: true,
    isAuth: true,
    layout: 'full',
    component: Home
  },
  {
    path: '/register',
    exact: true,
    isAuth: true,
    layout: 'full',
    component: Home
  }
]

export default xxrAuthRouter
