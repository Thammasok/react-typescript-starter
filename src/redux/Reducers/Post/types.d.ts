import xxsPostServiceTypes from 'services/Posts/types'
import xxuResponseTypes from 'utils/Response/types'

declare namespace xxrePostReducerTypes {
  interface Props {
    type: string
    lists?: xxsPostServiceTypes.GetResponseSuccess[]
    error?: xxuResponseTypes.Error.GetResponse
  }
}

export default xxrePostReducerTypes
