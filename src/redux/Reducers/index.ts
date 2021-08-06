import { combineReducers } from 'redux'

import todo from 'redux/Reducers/Todo'
import post from 'redux/Reducers/Post'

export default combineReducers({
  post,
  todo
})
