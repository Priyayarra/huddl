import React from 'react'
import { useDataApi, get_individual_user } from '../../../services'
import { compose } from 'recompose'

import { withRouter, Link } from 'react-router-dom'
import { postsRoute } from '../../../routes'

function UserView(match) {
    const userId = match.match.params.userId
    const [
        {
            data: user = [],
            isLoading: isuserLoading,
            isError: isUserError,
            errorResponse,
        },
        doFetchPost
    ] = useDataApi(get_individual_user({ userId }))
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '24px' }}>
            <div style={{ width: '300px', padding: '16px', border: '1px solid #eee' }}>
                <h4>{'User Name: ' + user.username}</h4>
                <p>{'Full Name: ' + user.name}</p>
                <p>{'Email: ' + user.email}</p>
                <p>{'Website: ' + user.website}</p>
                <p>{'Company Details:'}</p>
                <Link to={postsRoute}>Back to posts</Link>
            </div>
        </div>
    )
}
export default compose(UserView)