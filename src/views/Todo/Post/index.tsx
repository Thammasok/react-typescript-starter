import React from 'react'
import xxsPostServiceTypes from 'services/Posts/types'

interface PostPropTypes {
  data?: xxsPostServiceTypes.GetResponseSuccess
}

const Post: React.FunctionComponent<PostPropTypes> = ({ data }) => {
  return data ? (
    <li>
      <h3>{data?.title}</h3>
      <p>{data?.title}</p>
    </li>
  ) : null
}

export default Post
