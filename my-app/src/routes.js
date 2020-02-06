import React, { Component } from "react"
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    useLocation,
    Link
} from 'react-router-dom'

import Posts from './posts/PostsScene'
import Post from './posts/components/PostView/PostView'
import User from './posts/components/UserView/UserView'

export const getRoute = (routePath, params) => {
  let basePath = routePath
  Object.keys(params).forEach(key => {
    basePath = basePath.replace(`:${key}`, params[key])
  })
  return basePath
}

export const postsRoute = '/'
export const postSceneView = `/post/:postId`
export const userSceneView = `/user/:userId`

export default function NestingExample() {
    return (
        <Router>
          <Switch>
            <Route exact path={postsRoute} component={Posts} />
            <Route exact path={postSceneView} component={Post} />
            <Route exact path={userSceneView} component={User} />
          </Switch>
        </Router>
    )
}