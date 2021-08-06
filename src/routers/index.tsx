// Interfaces
import xxrRouterProps from 'routers/types'

// Routes
import xxrTodoRouter from 'routers/Todo'
import xxrAuthRouter from 'routers/Auth'
import xxrHomeRouter from 'routers/Home'

const xxrMainRouter: xxrRouterProps.PropTypes[] = [
  ...xxrTodoRouter,
  ...xxrHomeRouter,
  ...xxrAuthRouter
]

export default xxrMainRouter
