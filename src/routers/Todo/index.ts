// Interface
import xxroRouterProps from 'routers/types'

// Views
import Todo from 'views/Todo'

const xxroTodoRouter: xxroRouterProps.PropTypes[] = [
  {
    path: '/todo',
    exact: true,
    isAuth: false,
    layout: 'main',
    component: Todo
  }
]

export default xxroTodoRouter
