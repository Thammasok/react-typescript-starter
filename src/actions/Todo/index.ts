import { Dispatch } from 'redux'
import {
  POST_CLEAR_DATA,
  POST_GET_FAIL,
  POST_GET_SUCCESS
} from 'redux/Constants/Post'

// Redux Constants
import {
  TODO_TASK_ADD,
  TODO_TASK_COMPLETED,
  TODO_TASK_LISTS
} from 'redux/Constants/Todo'

// Service
import xxsPostService from 'services/Posts'

// Utils
import xxuResponse from 'utils/Response'

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
    },
  GetPostList: () => async (dispatch: Dispatch) => {
    // Clear data of example in Redux
    dispatch({
      type: POST_CLEAR_DATA
    })

    const response = await xxsPostService.GetPostLists()
    if (response.status === 200) {
      xxuResponse.Success({
        type: POST_GET_SUCCESS,
        dispatch,
        payload: response
      })
    } else {
      xxuResponse.Error({
        type: POST_GET_FAIL,
        errorPage: true,
        dispatch,
        error: response.error
      })
    }
  }
}

export default xxaTodo
