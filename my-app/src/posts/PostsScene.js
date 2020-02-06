import React from 'react'
import { useDataApi, get_all_posts, get_post } from '../services'
import Posts from './Posts'

import { compose, withHandlers } from 'recompose'
import { withRouter } from 'react-router-dom'

function PostsScene() {
    const postId  = 10
    const [
        {
            data: posts = [],
            isLoading: isPostsLoading,
            isError: isPostsError,
            errorResponse,
        },
        doFetchPosts,
    ] = useDataApi(get_all_posts())
    console.log('posts', posts)
    return (
        <Posts posts={posts} />
    )
}
export default compose(withRouter(PostsScene))