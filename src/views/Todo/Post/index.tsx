import React from 'react'
import PostPropTypes from 'views/Todo/Post/types'

const Post: React.FunctionComponent<PostPropTypes> = ({ data }) => {
  return data ? (
    <li>
      <h3>{data.title}</h3>
      <p>{data.title}</p>
    </li>
  ) : null
}

export default Post
