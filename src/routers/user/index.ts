// Interface
import xxrRouterProps from 'routers/model'

// Views
import Home from '../../views/home'

const xxrUserRouter: xxrRouterProps.Router[] = [
  {
    path: '/user',
    exact: true,
    isAuth: true,
    layout: 'main',
    component: Home
  }
]

export default xxrUserRouter
