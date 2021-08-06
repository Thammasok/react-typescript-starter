// Interface
import xxrRouterProps from 'routers/types'

// Views
import Home from 'views/Home'

const xxrUserRouter: xxrRouterProps.PropTypes[] = [
  {
    path: '/user',
    exact: true,
    isAuth: true,
    layout: 'main',
    component: Home
  }
]

export default xxrUserRouter
