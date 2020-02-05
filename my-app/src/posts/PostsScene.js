import React from 'react'
import { useDataApi, get_all_posts, get_post } from '../services'
import Posts from './Posts'

import { compose, withHandlers } from 'recompose'

function PostsScene() {
    const { postId } = 2
    const [
        {
            data: posts = [],
            isLoading: isPostsLoading,
            isError: isPostsError,
            errorResponse,
        },
        doFetchPosts,
    ] = useDataApi(get_all_posts())
    const [
        {
            data: post = {},
            isLoading: isPostLoading,
            isError: isPostError,
            errorResponse: errorResponsePost,
        },
        doFetchPost
    ] = useDataApi(get_post({ postId }))
    console.log('post', post)
    return (
        <Posts posts={posts} />
    )
}
export default compose(
    withHandlers()
)(PostsScene)