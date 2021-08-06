// Interfaces
import xxrRouterProps from '../model'

// Views
import Home from '../../views/home'

const xxrHomeRouter: xxrRouterProps.Router[] = [
  { path: '/', exact: true, isAuth: true, layout: 'main', component: Home }
]

export default xxrHomeRouter
