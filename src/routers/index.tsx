// Interfaces
import xxrRouterProps from './model'

// Routes
import xxrAuthRouter from './auth'
import xxrHomeRouter from './home'
import xxrUserRouter from './user'

const xxrMainRouter: xxrRouterProps.Router[] = [
  ...xxrHomeRouter,
  ...xxrAuthRouter,
  ...xxrUserRouter
]

export default xxrMainRouter
