import axios from 'axios'
import xxsPostServiceTypes from 'services/Posts/types'

const xxsPostService = {
  GetPostLists: async (): Promise<xxsPostServiceTypes.GetPostListsResponse> => {
    let response: xxsPostServiceTypes.GetPostListsResponse

    try {
      const responseData =
        await axios.get<xxsPostServiceTypes.GetResponseSuccess>(
          'https://jsonplaceholder.typicode.com/posts'
        )

      response = {
        status: responseData.status,
        lists: responseData.data
      }
    } catch (error: any) {
      const err = error.toJSON()
      if (err.message === 'Network Error') {
        response = {
          status: 500,
          error: err
        }
      } else {
        response = {
          status: error.response.status,
          error: error.response.data
        }
      }
    }
    return response
  }
}

export default xxsPostService
