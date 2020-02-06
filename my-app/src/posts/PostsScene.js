import React from 'react'
import { useDataApi, get_all_posts } from '../services'
import Posts from './Posts'

import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

function PostsScene() {
    const [
        {
            data: posts = [],
            isLoading: isPostsLoading,
            isError: isPostsError,
            errorResponse,
        },
        doFetchPosts,
    ] = useDataApi(get_all_posts())
    return isPostsLoading ? <p style={{ textAlign: 'center' }}>Loading</p> :
        <Posts posts={posts} />

}
export default compose(withRouter(PostsScene))