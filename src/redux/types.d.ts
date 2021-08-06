import xxreTodoReducer from 'redux/Reducers/Todo/types'

declare namespace xxreStore {
  interface TypeProps {
    todo: xxreTodoReducer.PropTypes
  }
}

export default xxreStore
