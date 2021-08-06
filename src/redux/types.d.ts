import xxreTodoReducerTypes from 'redux/Reducers/Todo/types'
import xxrePostReducerTypes from './Reducers/Post/types'

declare namespace xxreStoreTypes {
  interface Props {
    post: xxrePostReducerTypes.Props
    todo: xxreTodoReducerTypes.Props
  }
}

export default xxreStoreTypes
