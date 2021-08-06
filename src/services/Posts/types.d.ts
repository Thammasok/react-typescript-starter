// use http://json2ts.com/ for generate interface

declare module xxsPostServiceTypes {
  // it's will be used to specify types of reducers again.
  export interface GetResponseSuccess {
    userId: number
    id: number
    title: string
    body: string
  }

  // ถ
  export interface GetPostListsResponse {
    status: number
    lists?: PostsLists
    error?: any
  }
}

export default xxsPostServiceTypes
