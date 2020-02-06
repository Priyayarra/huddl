import React from 'react'
import { useDataApi, get_all_posts, get_post } from '../../../services'
import { compose } from 'recompose'

function PostScene(match) {
  const postId = match.match.params.postId
  const [
    {
      data: post = {},
      isLoading: isPostLoading,
      isError: isPostError,
      errorResponse,
    },
    doFetchPost
  ] = useDataApi(get_post({ postId }))
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '24px' }}>
      <div style={{ width: '300px', padding: '16px', border: '1px solid #eee' }}>
        <h4>{'Post Id: ' + post.id}</h4>
        <p>{'User Id: ' + post.userId}</p>
        <p>{'Title: ' + post.title}</p>
        <p>{'Body: ' + post.body}</p>
      </div>
    </div>
  )
}

export default compose(PostScene)