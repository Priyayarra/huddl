import React from 'react'
import { useDataApi, get_post, get_post_comment } from '../../../services'
import { compose } from 'recompose'

import { withRouter, Link } from 'react-router-dom'
import { postsRoute } from '../../../routes'

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
  const [
    {
      data: postComment = {},
      isLoading: isPostCommentLoading,
      isError: isPostCommentError,
      errorResponse: errorPostCommentResponse,
    },
    doFetchPostComment
  ] = useDataApi(get_post_comment({ postId }))
  console.log('hh', postComment);
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '24px' }}>
      <div style={{ padding: '16px', border: '1px solid #eee' }}>
        <h4>{'Post Id: ' + post.id}</h4>
        <p>{'User Id: ' + post.userId}</p>
        <p>{'Title: ' + post.title}</p>
        <p>{'Body: ' + post.body}</p>
        <h4>{'Comments:'}</h4>
        {
          postComment && postComment.length ?
          postComment.map((postComment, index) => (
            <div key={index} style={{borderBottom: '1px solid #777'}}>
              <p>{'Subject: ' + postComment.name}</p>
              <p>{'Comment: ' + postComment.body}</p>
              <p>{'Email: ' + postComment.email}</p>
            </div>
          )) :
          <p>No comments data exists for this post</p>
        }
        <Link to={postsRoute}>Back to posts</Link>
      </div>
    </div>
  )
}

export default compose(PostScene)