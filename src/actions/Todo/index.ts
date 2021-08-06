import { Dispatch } from 'redux'

// Redux Constants
import {
  TODO_TASK_ADD,
  TODO_TASK_COMPLETED,
  TODO_TASK_LISTS
} from 'redux/Constants/Todo'

const xxaTodo = {
  GetTaskLists: () => async (dispatch: Dispatch, getState: Function) => {
    const { todo } = getState()
    dispatch({
      type: TODO_TASK_LISTS,
      payload: {
        lists: todo.lists || []
      }
    })
  },
  SetNewTask:
    (task: string) => async (dispatch: Dispatch, getState: Function) => {
      const { todo } = getState()
      dispatch({
        type: TODO_TASK_ADD,
        payload: {
          lists: todo.lists ? todo.lists.concat(task) : [task]
        }
      })
    },
  SetTaskCompleted:
    (task: string) => async (dispatch: Dispatch, getState: Function) => {
      const { todo } = getState()
      const todoLists = todo.lists
      const index = todoLists.indexOf(task)
      if (index > -1) {
        todoLists.splice(index, 1)
      }

      dispatch({
        type: TODO_TASK_COMPLETED,
        payload: {
          lists: todoLists
        }
      })
    }
}

export default xxaTodo
