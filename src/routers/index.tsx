// Interfaces
import xxrRouterProps from 'routers/types'

// Routes
import xxrAuthRouter from 'routers/Auth'
import xxrHomeRouter from 'routers/Home'
import xxrUserRouter from 'routers/User'

const xxrMainRouter: xxrRouterProps.PropTypes[] = [
  ...xxrHomeRouter,
  ...xxrAuthRouter,
  ...xxrUserRouter
]

export default xxrMainRouter
