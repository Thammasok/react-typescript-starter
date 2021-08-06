// Interface
import xxrRouterProps from 'routers/types'

// Views
import Todo from 'views/Todo'

const xxrTodoRouter: xxrRouterProps.PropTypes[] = [
  {
    path: '/todo',
    exact: true,
    isAuth: false,
    layout: 'main',
    component: Todo
  }
]

export default xxrTodoRouter
