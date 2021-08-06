// Interfaces
import xxrRouterProps from 'routers/types'

// Views
import Home from 'views/Home'

const xxrHomeRouter: xxrRouterProps.PropTypes[] = [
  { path: '/', exact: true, isAuth: true, layout: 'main', component: Home }
]

export default xxrHomeRouter
