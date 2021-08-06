// Constants
import {
  POST_CLEAR_DATA,
  POST_GET_FAIL,
  POST_GET_SUCCESS
} from 'redux/Constants/Post'

// Props Types
import IAction from 'redux/Action/types'
import xxrePostReducerTypes from 'redux/Reducers/Post/types'

const post = (
  state: object = {},
  action: IAction<xxrePostReducerTypes.Props>
) => {
  switch (action.type) {
    case POST_GET_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case POST_GET_FAIL:
      return {
        ...state,
        ...action.payload
      }
    case POST_CLEAR_DATA:
      return {}
    default:
      return state
  }
}

export default post
