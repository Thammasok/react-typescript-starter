// Interfaces
import xxroRouterProps from 'routers/types'

// Views
import Home from 'views/Home'

const xxroHomeRouter: xxroRouterProps.PropTypes[] = [
  { path: '/', exact: true, isAuth: true, layout: 'main', component: Home }
]

export default xxroHomeRouter
