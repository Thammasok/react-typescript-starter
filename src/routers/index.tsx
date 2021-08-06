// Interfaces
import xxroRouterProps from 'routers/types'

// Routes
import xxrTodoRouter from 'routers/Todo'
import xxrAuthRouter from 'routers/Auth'
import xxrHomeRouter from 'routers/Home'

const xxroMainRouter: xxroRouterProps.PropTypes[] = [
  ...xxrTodoRouter,
  ...xxrHomeRouter,
  ...xxrAuthRouter
]

export default xxroMainRouter
