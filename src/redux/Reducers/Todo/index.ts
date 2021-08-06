// Constants
import {
  TODO_TASK_LISTS,
  TODO_TASK_ADD,
  TODO_TASK_COMPLETED
} from 'redux/Constants/Todo'

// Props Types
import IAction from 'redux/Action/types'
import xxreTodoReducer from 'redux/Reducers/Todo/types'

const todo = (
  state: object = {},
  action: IAction<xxreTodoReducer.PropTypes>
) => {
  switch (action.type) {
    case TODO_TASK_LISTS:
      return {
        ...state,
        ...action.payload
      }
    case TODO_TASK_ADD:
      return {
        ...state,
        ...action.payload
      }
    case TODO_TASK_COMPLETED:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default todo
